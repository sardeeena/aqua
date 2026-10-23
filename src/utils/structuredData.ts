import { Trip, CurrencyCode, TripCategory } from '../types';
import { CURRENCIES, TRIPS, CATEGORIES } from '../data/trips';
import { FAQ_ITEMS } from '../data/faq';
import { AQUAWAY_EMAIL, AQUAWAY_DISPLAY_PHONE } from './whatsapp';

export interface JsonLdObject {
  [key: string]: any;
}

export const CANONICAL_URL = 'https://aquaway.tours';
const BASE_URL = CANONICAL_URL;

/**
 * 1. Generates Schema.org LocalBusiness & TravelAgency Structured Data for AquaWay Red Sea Tours
 * Optimized for local SEO in Hurghada and the Red Sea Governorate.
 */
export function generateLocalBusinessJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency', 'TouristInformationCenter'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'AquaWay Red Sea Tours & Excursions',
    alternateName: [
      'AquaWay Hurghada Tours',
      'AquaWay Marine & Desert Adventures',
      'AquaWay Red Sea VIP Charters',
      'رحلات أكوا واي الغردقة'
    ],
    legalName: 'AquaWay Tours & Marine Services SAE',
    url: BASE_URL,
    logo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80',
    image: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Premier licensed tourist operator in Hurghada, Egypt. Specializing in VIP yacht charters, Orange Bay and Giftun Island excursions, Shaab El Erg dolphin swims, PADI diving safaris, and Sahara desert quad tours.',
    telephone: '+201040296016',
    email: AQUAWAY_EMAIL,
    priceRange: '$$',
    currenciesAccepted: 'EUR, USD, GBP, EGP, PLN, CHF',
    paymentAccepted: 'Cash, Credit Card, Visa, MasterCard, Bank Transfer, PayPal, Revolut',
    hasMap: 'https://maps.google.com/?q=Hurghada+Marina+Boulevard+Egypt',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hurghada New Marina Promenade, Pier 4, Building 14',
      addressLocality: 'Hurghada',
      addressRegion: 'Red Sea Governorate',
      postalCode: '84511',
      addressCountry: 'EG'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.2274,
      longitude: 33.8431
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '06:00',
        closes: '23:00'
      }
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+201040296016',
        contactType: 'customer service',
        availableLanguage: ['English', 'German', 'Russian', 'Polish', 'French', 'Italian', 'Czech', 'Arabic'],
        contactOption: 'TollFree',
        areaServed: 'EG'
      },
      {
        '@type': 'ContactPoint',
        telephone: '+201040296016',
        contactType: 'reservations',
        availableLanguage: ['English', 'German', 'Russian', 'Polish', 'French', 'Italian', 'Czech', 'Arabic']
      }
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hurghada' },
      { '@type': 'AdministrativeArea', name: 'El Gouna' },
      { '@type': 'AdministrativeArea', name: 'Sahl Hasheesh' },
      { '@type': 'AdministrativeArea', name: 'Makadi Bay' },
      { '@type': 'AdministrativeArea', name: 'Soma Bay' },
      { '@type': 'AdministrativeArea', name: 'Safaga' }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '1240',
      reviewCount: '1240'
    },
    knowsAbout: [
      'Red Sea Marine Excursions',
      'Orange Bay Island Hurghada',
      'Dolphin House Shaab El Erg',
      'PADI Scuba Diving',
      'Hurghada Desert Quad Safaris',
      'VIP Luxury Speedboat Charters',
      'Giftun Island National Park'
    ],
    sameAs: [
      'https://www.facebook.com/AquaWayRedSea',
      'https://www.instagram.com/aquaway_redsea',
      'https://www.tripadvisor.com/Attraction_Review-Hurghada_Red_Sea'
    ]
  };
}

/**
 * 2. Generates Schema.org BreadcrumbList for hierarchical navigation & search engine rich snippets
 * Supports multi-level deep trip page paths:
 * Home > Red Sea Tours & Excursions > [Category] Tours > [Deep Trip Name]
 */
export function generateBreadcrumbJsonLd(
  category?: string | TripCategory,
  activeTrip?: Trip | null
): JsonLdObject {
  const items: any[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AquaWay Home',
      item: `${BASE_URL}/`
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Red Sea Tours & Excursions',
      item: `${BASE_URL}/#excursions`
    }
  ];

  // Determine effective category for deep hierarchy
  const targetCategory = activeTrip ? activeTrip.category : (category !== 'all' ? category : null);

  if (targetCategory) {
    const categoryInfo = CATEGORIES.find(c => c.id === targetCategory);
    const categoryName = categoryInfo ? categoryInfo.name : String(targetCategory).toUpperCase();
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: `${categoryName} Tours`,
      item: `${BASE_URL}/#category-${targetCategory}`
    });
  }

  // Deep Trip page hierarchy leaf
  if (activeTrip) {
    const tripPosition = items.length + 1;
    items.push({
      '@type': 'ListItem',
      position: tripPosition,
      name: activeTrip.title,
      item: `${BASE_URL}/#trip-${activeTrip.slug || activeTrip.id}`
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${BASE_URL}/#breadcrumbs`,
    itemListElement: items
  };
}

/**
 * 3. Generates FAQPage Schema for Hurghada excursions & booking questions
 */
export function generateFAQJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * 4. Generates Schema.org TouristTrip and Product structured data for an individual excursion.
 */
export function generateTripJsonLd(trip: Trip, currencyCode: CurrencyCode = 'USD'): JsonLdObject {
  const currencyObj = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const convertedPrice = Math.round(trip.priceUSD * (currencyObj.rateToUSD || 1));
  const tripUrl = `${BASE_URL}/#trip-${trip.slug || trip.id}`;

  const offers = [
    {
      '@type': 'Offer',
      '@id': `${tripUrl}#offer-standard`,
      name: `${trip.title} - Standard Booking`,
      price: convertedPrice,
      priceCurrency: currencyCode,
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
      priceValidUntil: '2027-12-31',
      url: tripUrl,
      category: trip.categoryLabel,
      description: 'Includes complimentary hotel door-to-door transfer, professional guide, full equipment, buffet and drinks.',
      businessFunction: 'https://schema.org/ProvideService',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: convertedPrice,
        priceCurrency: currencyCode,
        unitCode: 'C62',
        unitText: 'per person'
      },
      hasMeasurement: {
        '@type': 'QuantitativeValue',
        value: trip.duration,
        unitText: 'duration'
      },
      seller: {
        '@type': ['TravelAgency', 'LocalBusiness'],
        '@id': `${BASE_URL}/#localbusiness`,
        name: 'AquaWay Red Sea Tours & Excursions',
        url: BASE_URL,
        telephone: '+201040296016',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hurghada New Marina Boulevard, Pier 4',
          addressLocality: 'Hurghada',
          addressRegion: 'Red Sea Governorate',
          postalCode: '84511',
          addressCountry: 'EG'
        }
      }
    }
  ];

  if (trip.originalPriceUSD) {
    const origConverted = Math.round(trip.originalPriceUSD * (currencyObj.rateToUSD || 1));
    offers.push({
      '@type': 'Offer',
      '@id': `${tripUrl}#offer-regular`,
      name: `${trip.title} - Regular Gate Price`,
      price: origConverted,
      priceCurrency: currencyCode,
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
      priceValidUntil: '2027-12-31',
      url: tripUrl,
      category: trip.categoryLabel,
      description: 'Standard retail gate price prior to online booking discount.',
      businessFunction: 'https://schema.org/ProvideService',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: origConverted,
        priceCurrency: currencyCode,
        unitCode: 'C62',
        unitText: 'per person'
      },
      hasMeasurement: {
        '@type': 'QuantitativeValue',
        value: trip.duration,
        unitText: 'duration'
      },
      seller: {
        '@type': ['TravelAgency', 'LocalBusiness'],
        '@id': `${BASE_URL}/#localbusiness`,
        name: 'AquaWay Red Sea Tours & Excursions',
        url: BASE_URL,
        telephone: '+201040296016',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Hurghada New Marina Boulevard, Pier 4',
          addressLocality: 'Hurghada',
          addressRegion: 'Red Sea Governorate',
          postalCode: '84511',
          addressCountry: 'EG'
        }
      }
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TouristTrip',
        '@id': tripUrl,
        name: trip.title,
        alternateName: trip.subtitle,
        description: trip.fullDescription || trip.description,
        image: trip.images,
        touristType: [
          'Marine tourism',
          'Eco tourism',
          'Family tourism',
          'Adventure tourism',
          'Snorkeling and Diving'
        ],
        subTrip: trip.itinerary.map((item, index) => ({
          '@type': 'TouristTrip',
          name: item.title,
          description: `${item.time}: ${item.description}`,
          position: index + 1
        })),
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: trip.itinerary.length,
          itemListElement: trip.itinerary.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'TouristAttraction',
              name: item.title,
              description: `${item.time} — ${item.description}`
            }
          }))
        },
        offers: offers,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: trip.rating,
          bestRating: '5',
          worstRating: '1',
          ratingCount: trip.reviewsCount,
          reviewCount: trip.reviewsCount
        },
        provider: {
          '@type': ['TravelAgency', 'LocalBusiness'],
          '@id': `${BASE_URL}/#localbusiness`,
          name: 'AquaWay Red Sea Tours',
          telephone: '+201040296016',
          url: BASE_URL,
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Hurghada New Marina, Pier 4',
            addressLocality: 'Hurghada',
            addressRegion: 'Red Sea Governorate',
            addressCountry: 'EG'
          }
        },
        location: {
          '@type': 'Place',
          name: trip.meetingPoint || 'Hurghada New Marina, Red Sea, Egypt',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hurghada',
            addressRegion: 'Red Sea',
            addressCountry: 'EG'
          }
        }
      },
      {
        '@type': 'Product',
        '@id': `${tripUrl}#product`,
        name: trip.title,
        description: trip.description,
        image: trip.images,
        sku: `AQW-${trip.id.toUpperCase()}`,
        brand: {
          '@type': 'Brand',
          name: 'AquaWay Red Sea Tours'
        },
        category: trip.categoryLabel,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: trip.rating,
          bestRating: '5',
          worstRating: '1',
          ratingCount: trip.reviewsCount,
          reviewCount: trip.reviewsCount
        },
        offers: offers[0]
      }
    ]
  };
}

/**
 * 5. Generates an ItemList Schema of all excursions for catalog indexation
 */
export function generateTripCatalogJsonLd(trips: Trip[] = TRIPS): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BASE_URL}/#catalog`,
    name: 'AquaWay Red Sea Tours & Excursions Catalog',
    description: 'Complete collection of licensed Red Sea sea cruises, island day trips, diving safaris, and desert adventures in Hurghada.',
    numberOfItems: trips.length,
    itemListElement: trips.map((trip, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      item: {
        '@type': 'TouristTrip',
        '@id': `${BASE_URL}/#trip-${trip.slug || trip.id}`,
        name: trip.title,
        description: trip.description,
        image: trip.images[0],
        touristType: trip.categoryLabel,
        offers: {
          '@type': 'Offer',
          price: trip.priceUSD,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/#trip-${trip.slug || trip.id}`
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: trip.rating,
          bestRating: '5',
          worstRating: '1',
          ratingCount: trip.reviewsCount
        },
        provider: {
          '@type': ['TravelAgency', 'LocalBusiness'],
          '@id': `${BASE_URL}/#localbusiness`,
          name: 'AquaWay Red Sea Tours',
          url: BASE_URL
        }
      }
    }))
  };
}

/**
 * 6. Generates WebSite Schema with SearchAction and Semantic AI metadata
 */
export function generateWebSiteJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: `${BASE_URL}/`,
    name: 'AquaWay Tours Red Sea',
    alternateName: ['AquaWay', 'AquaWay Hurghada', 'أكوا واي للرحلات البحرية'],
    description: "Hurghada's top-rated luxury excursions, private yacht charters, Orange Bay, Dolphin House snorkeling, scuba diving, and desert safari adventures.",
    inLanguage: ['en', 'ar', 'de', 'ru', 'pl', 'fr', 'it', 'cs'],
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'AquaWay Red Sea Tours & Excursions',
      url: BASE_URL,
      logo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/#excursions?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

