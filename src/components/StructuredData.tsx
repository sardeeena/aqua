import React, { useEffect } from 'react';
import { Trip, CurrencyCode, TripCategory } from '../types';
import { TRIPS } from '../data/trips';
import { 
  generateLocalBusinessJsonLd,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
  generateTripJsonLd, 
  generateTripCatalogJsonLd,
  generateWebSiteJsonLd
} from '../utils/structuredData';

interface StructuredDataProps {
  activeTrip?: Trip | null;
  activeCategory?: TripCategory | 'all';
  currentCurrency: CurrencyCode;
}

export const StructuredData: React.FC<StructuredDataProps> = ({
  activeTrip,
  activeCategory = 'all',
  currentCurrency
}) => {
  useEffect(() => {
    // 0. Inject / Update WebSite Schema with SearchAction
    const webSiteId = 'json-ld-website';
    let webSiteScript = document.getElementById(webSiteId) as HTMLScriptElement | null;
    if (!webSiteScript) {
      webSiteScript = document.createElement('script');
      webSiteScript.id = webSiteId;
      webSiteScript.type = 'application/ld+json';
      document.head.appendChild(webSiteScript);
    }
    webSiteScript.textContent = JSON.stringify(generateWebSiteJsonLd());

    // 1. Inject / Update LocalBusiness & TravelAgency Schema (Hurghada Local SEO)
    const businessId = 'json-ld-localbusiness';
    let businessScript = document.getElementById(businessId) as HTMLScriptElement | null;
    if (!businessScript) {
      businessScript = document.createElement('script');
      businessScript.id = businessId;
      businessScript.type = 'application/ld+json';
      document.head.appendChild(businessScript);
    }
    businessScript.textContent = JSON.stringify(generateLocalBusinessJsonLd());

    // 2. Inject / Update BreadcrumbList Schema (Hierarchy & Navigation)
    const breadcrumbId = 'json-ld-breadcrumbs';
    let breadcrumbScript = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = breadcrumbId;
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(generateBreadcrumbJsonLd(activeCategory, activeTrip));

    // 3. Inject / Update FAQPage Schema
    const faqId = 'json-ld-faq';
    let faqScript = document.getElementById(faqId) as HTMLScriptElement | null;
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = faqId;
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(generateFAQJsonLd());

    // 4. Inject / Update Catalog Schema (ItemList of TouristTrips)
    const catalogId = 'json-ld-trips-catalog';
    let catalogScript = document.getElementById(catalogId) as HTMLScriptElement | null;
    if (!catalogScript) {
      catalogScript = document.createElement('script');
      catalogScript.id = catalogId;
      catalogScript.type = 'application/ld+json';
      document.head.appendChild(catalogScript);
    }
    catalogScript.textContent = JSON.stringify(generateTripCatalogJsonLd(TRIPS));

    // 5. Inject / Update Active Trip Schema (Detailed TouristTrip + Product + Offer)
    const activeTripId = 'json-ld-active-trip';
    let activeTripScript = document.getElementById(activeTripId) as HTMLScriptElement | null;

    if (activeTrip) {
      if (!activeTripScript) {
        activeTripScript = document.createElement('script');
        activeTripScript.id = activeTripId;
        activeTripScript.type = 'application/ld+json';
        document.head.appendChild(activeTripScript);
      }
      activeTripScript.textContent = JSON.stringify(generateTripJsonLd(activeTrip, currentCurrency));
    } else if (activeTripScript) {
      activeTripScript.remove();
    }
  }, [activeTrip, activeCategory, currentCurrency]);

  return (
    <>
      {/* 0. WebSite Schema */}
      <script
        type="application/ld+json"
        id="static-website-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteJsonLd())
        }}
      />
      {/* 1. LocalBusiness / TravelAgency Schema */}
      <script
        type="application/ld+json"
        id="static-localbusiness-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessJsonLd())
        }}
      />
      {/* 2. BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        id="static-breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbJsonLd(activeCategory, activeTrip))
        }}
      />
      {/* 3. FAQPage Schema */}
      <script
        type="application/ld+json"
        id="static-faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQJsonLd())
        }}
      />
      {/* 4. Trips Catalog Schema */}
      <script
        type="application/ld+json"
        id="static-trips-catalog-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateTripCatalogJsonLd(TRIPS))
        }}
      />
      {/* 5. Active Selected Trip Schema */}
      {activeTrip && (
        <script
          type="application/ld+json"
          id={`static-trip-${activeTrip.id}-schema`}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateTripJsonLd(activeTrip, currentCurrency))
          }}
        />
      )}
    </>
  );
};
