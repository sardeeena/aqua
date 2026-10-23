/**
 * Utilities for progressive image loading, LQIP generation, and blur-up rendering.
 */

/**
 * Derives a micro low-resolution blurred placeholder URL from an image source.
 * Specifically optimizes Unsplash image CDN URLs for instant loading (<1KB).
 */
export function getBlurPlaceholderUrl(src: string): string {
  if (!src) return '';

  // 1. Unsplash CDN URL Optimization
  if (src.includes('images.unsplash.com')) {
    try {
      const url = new URL(src);
      url.searchParams.set('w', '32');
      url.searchParams.set('q', '20');
      url.searchParams.set('blur', '20');
      url.searchParams.set('auto', 'format');
      return url.toString();
    } catch {
      // Fallback regex if URL parsing fails
      return src.replace(/w=\d+/, 'w=32').replace(/q=\d+/, 'q=20') + '&blur=20';
    }
  }

  // 2. Generic fallback / SVG shimmer data URI
  return generateShimmerDataUri(16, 9);
}

/**
 * Creates a lightweight SVG shimmer placeholder data URI for progressive layout preservation.
 */
export function generateShimmerDataUri(w: number = 16, h: number = 9): string {
  const shimmerSvg = `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#141414" offset="20%" />
          <stop stop-color="#262626" offset="50%" />
          <stop stop-color="#141414" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#141414" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />
    </svg>
  `;
  return `data:image/svg+xml;base64,${typeof window !== 'undefined' ? window.btoa(shimmerSvg) : Buffer.from(shimmerSvg).toString('base64')}`;
}

/**
 * Generates a responsive srcset string with multiple widths for CDN-hosted images.
 * Defaults to mobile, tablet, and desktop breakpoints.
 */
export function getResponsiveImageSrcSet(src: string, widths: number[] = [360, 480, 640, 960, 1200]): string {
  if (!src) return '';
  if (!src.includes('images.unsplash.com')) return '';

  try {
    return widths
      .map((w) => {
        const url = new URL(src);
        url.searchParams.set('w', w.toString());
        url.searchParams.set('q', '75');
        url.searchParams.set('auto', 'format');
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  } catch {
    return '';
  }
}

/**
 * Derives a specific width optimized URL from an image CDN source.
 */
export function getOptimizedImageUrl(src: string, width: number = 600, quality: number = 75): string {
  if (!src) return '';
  if (!src.includes('images.unsplash.com')) return src;

  try {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('auto', 'format');
    return url.toString();
  } catch {
    return src;
  }
}

