/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Trip, TripCategory, CurrencyCode, LanguageCode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TripsSection } from './components/TripsSection';
import { WeatherSeaStation } from './components/WeatherSeaStation';
import { WhyAquaWay } from './components/WhyAquaWay';
import { RedSeaMapSection } from './components/RedSeaMapSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TripDetailModal } from './components/TripDetailModal';
import { CustomTripPlannerModal } from './components/CustomTripPlannerModal';
import { LegalModals } from './components/LegalModals';
import { StructuredData } from './components/StructuredData';
import { ChatAssistant } from './components/ChatAssistant';
import { OfflineStatusBanner } from './components/OfflineStatusBanner';
import { ContextAwareWhatsAppButton } from './components/ContextAwareWhatsAppButton';
import { useOnlineStatus } from './utils/pwa';
import { 
  detectUserLanguage, 
  detectUserCurrency, 
  persistUserLanguage, 
  persistUserCurrency 
} from './utils/localeDetection';

export default function App() {
  const isOnline = useOnlineStatus();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => detectUserLanguage());
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyCode>(() => {
    const initialLang = detectUserLanguage();
    return detectUserCurrency(initialLang);
  });
  const [selectedCategory, setSelectedCategory] = useState<TripCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [isCustomPlanOpen, setIsCustomPlanOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'terms' | 'privacy' | 'refund' | null>(null);

  const handleLanguageChange = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    persistUserLanguage(lang);
  };

  const handleCurrencyChange = (curr: CurrencyCode) => {
    setCurrentCurrency(curr);
    persistUserCurrency(curr);
  };

  // Update HTML document direction and dynamic SEO titles for multi-language search visibility
  useEffect(() => {
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = currentLanguage;
    }

    const titles: Record<LanguageCode, string> = {
      en: "AQUAWAY — Hurghada's #1 Red Sea Excursions, Diving & Luxury Yacht Charters",
      ar: "أكوا واي — رحلات الغردقة البحرية، جزر البحر الأحمر، الغوص وسفاري الصحراء",
      de: "AQUAWAY — Hurghadas führende Ausflüge, Tauchen & Luxus-Yachtcharter",
      ru: "AQUAWAY — Лучшие экскурсии в Хургаде, дайвинг и аренда яхт",
      pl: "AQUAWAY — Najlepsze wycieczki w Hurghadzie, nurkowanie i rejsy jachtem",
      fr: "AQUAWAY — Excursions à Hurghada, plongée et yachts de luxe",
      it: "AQUAWAY — Le migliori escursioni a Hurghada, immersioni e charter",
      cs: "AQUAWAY — Nejlepší výlety v Hurghadě, potápění a luxusní jachty"
    };

    if (selectedTrip) {
      document.title = `${selectedTrip.title} — AquaWay Tours Hurghada`;
    } else {
      document.title = titles[currentLanguage] || titles.en;
    }
  }, [currentLanguage, selectedTrip]);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    handleNavigateSection('excursions');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 selection:bg-[#D4AF37] selection:text-black font-sans antialiased">
      {/* Schema.org Structured Data (JSON-LD) for Search Engines */}
      <StructuredData
        activeTrip={selectedTrip}
        activeCategory={selectedCategory}
        currentCurrency={currentCurrency}
      />

      {/* PWA Offline Mode Notification */}
      <OfflineStatusBanner
        isOnline={isOnline}
        currentLanguage={currentLanguage}
      />

      {/* Top Fixed Navigation */}
      <Navbar
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        currentCurrency={currentCurrency}
        onCurrencyChange={handleCurrencyChange}
        onOpenCustomPlan={() => setIsCustomPlanOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          currentLanguage={currentLanguage}
          onSelectCategory={setSelectedCategory}
          onSearchChange={setSearchQuery}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Core Excursions & Signature Tours Grid */}
        <TripsSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          currentCurrency={currentCurrency}
          currentLanguage={currentLanguage}
          onSelectTrip={setSelectedTrip}
        />

        {/* 3. Live Red Sea Marine Station & Reef Guide */}
        <WeatherSeaStation
          currentLanguage={currentLanguage}
        />

        {/* 4. Why Choose AquaWay Trust Pillars */}
        <WhyAquaWay
          currentLanguage={currentLanguage}
        />

        {/* 5. Red Sea Geographical Guide & Hotel Pickup Coverage */}
        <RedSeaMapSection
          currentLanguage={currentLanguage}
        />

        {/* 6. Visual Photo Expedition Journal & Lightbox */}
        <GallerySection
          currentLanguage={currentLanguage}
        />

        {/* 7. Verified Reviews & Traveler Feedback */}
        <ReviewsSection
          currentLanguage={currentLanguage}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQSection
          currentLanguage={currentLanguage}
        />

        {/* 9. About AquaWay & Official Licensing */}
        <AboutSection
          currentLanguage={currentLanguage}
        />

        {/* 10. Contact & Direct Concierge */}
        <ContactSection
          currentLanguage={currentLanguage}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onNavigateSection={handleNavigateSection}
        onOpenLegal={setActiveLegalModal}
      />

      {/* Floating Interactive Local AI Chat Assistant */}
      <ChatAssistant
        currentLanguage={currentLanguage}
        currentCurrency={currentCurrency}
        onSelectTrip={setSelectedTrip}
        selectedTrip={selectedTrip}
      />

      {/* Context-Aware Floating WhatsApp Concierge Button */}
      <ContextAwareWhatsAppButton
        selectedTrip={selectedTrip}
        currentCurrency={currentCurrency}
        currentLanguage={currentLanguage}
      />

      {/* Interactive Trip Detail & Booking Modal */}
      <TripDetailModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
        currentCurrency={currentCurrency}
        currentLanguage={currentLanguage}
        onSelectTrip={setSelectedTrip}
      />

      {/* VIP Custom Itinerary Planner Modal */}
      <CustomTripPlannerModal
        isOpen={isCustomPlanOpen}
        onClose={() => setIsCustomPlanOpen(false)}
        currentLanguage={currentLanguage}
      />

      {/* Legal & Policy Modals */}
      <LegalModals
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}

