// AquaWay Red Sea Tours — Progressive Web App Service Worker
const CACHE_NAME = 'aquaway-cache-v1';
const DATA_CACHE_NAME = 'aquaway-data-v1';
const IMAGE_CACHE_NAME = 'aquaway-images-v1';

// Essential App Shell & Static Assets for Offline Readiness
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/icon.svg',
  '/llms.txt',
  '/llms-full.txt'
];

// Install Event: Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn('[AquaWay SW] Pre-cache partial fail (non-fatal):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up legacy caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, DATA_CACHE_NAME, IMAGE_CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            console.log('[AquaWay SW] Deleting obsolete cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Strategy
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET requests or chrome-extension URLs
  if (request.method !== 'GET' || !request.url.startsWith('http')) {
    return;
  }

  // 1. Navigation / HTML Requests (Network First, Cache Fallback for full offline experience)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(async () => {
          // Offline fallback: serve cached index.html
          const cachedDoc = await caches.match(request);
          if (cachedDoc) return cachedDoc;
          const fallback = await caches.match('/index.html') || await caches.match('/');
          if (fallback) return fallback;
          return new Response('Offline — AquaWay excursion details & contact (+20 104 029 6016) available once reconnected.', {
            headers: { 'Content-Type': 'text/plain' }
          });
        })
    );
    return;
  }

  // 2. Images (Cache First with Network Fallback)
  if (request.destination === 'image' || url.hostname.includes('images.unsplash.com')) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then(async (cache) => {
        const cachedImage = await cache.match(request);
        if (cachedImage) return cachedImage;

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch (err) {
          // Return cached fallback icon if available
          const fallbackIcon = await caches.match('/icon.svg');
          if (fallbackIcon) return fallbackIcon;
          throw err;
        }
      })
    );
    return;
  }

  // 3. Scripts, Styles, Fonts, and Manifest (Stale-While-Revalidate)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Listen for custom messages from client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
