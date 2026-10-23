import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Globe, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { CURRENCIES, LANGUAGES } from '../data/trips';
import { CurrencyCode, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  currentCurrency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenCustomPlan: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  onLanguageChange,
  currentCurrency,
  onCurrencyChange,
  onOpenCustomPlan,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isCurrDropdownOpen, setIsCurrDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const currentLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];
  const currentCurrObj = CURRENCIES[currentCurrency] || CURRENCIES.EUR;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl' 
            : 'bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all">
              <Compass className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white flex items-center gap-1">
                AQUA<span className="text-[#D4AF37]">WAY</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-neutral-400 font-medium uppercase -mt-1">
                Red Sea Trips & Tours
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <button 
              onClick={() => handleNavClick('excursions')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navExcursions}
            </button>
            <button 
              onClick={() => handleNavClick('red-sea-guide')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navRedSeaGuide}
            </button>
            <button 
              onClick={() => handleNavClick('weather-sea')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navLiveWeather}
            </button>
            <button 
              onClick={() => handleNavClick('reviews')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navReviews}
            </button>
            <button 
              onClick={() => handleNavClick('faq')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navFaq}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navAbout}
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
            >
              {t.navContact}
            </button>
          </div>

          {/* Right Action Controls: Currency, Language Switcher, CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsCurrDropdownOpen(!isCurrDropdownOpen);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:border-[#D4AF37]/50 hover:text-white transition-all cursor-pointer"
                id="currency-selector-btn"
              >
                <span>{currentCurrObj.code}</span>
                <span className="text-[#D4AF37]">{currentCurrObj.symbol}</span>
                <ChevronDown className="w-3 h-3 text-neutral-400" />
              </button>

              {isCurrDropdownOpen && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-44 bg-[#141414] border border-[#333333] rounded-lg shadow-2xl py-1 z-50">
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        onCurrencyChange(curr.code as CurrencyCode);
                        setIsCurrDropdownOpen(false);
                      }}
                      className={`w-full text-left rtl:text-right px-3 py-2 text-xs flex items-center justify-between hover:bg-[#222222] transition-colors cursor-pointer ${
                        currentCurrency === curr.code ? 'text-[#D4AF37] font-semibold bg-[#1a1a1a]' : 'text-neutral-300'
                      }`}
                    >
                      <span>{curr.label}</span>
                      <span className="text-[#D4AF37] font-mono">{curr.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Full Multi-Language Dropdown Switcher */}
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              variant="dropdown"
            />

            {/* Custom VIP Plan CTA */}
            <button
              onClick={onOpenCustomPlan}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded bg-[#1f1a10] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
              id="vip-custom-plan-btn"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.navCustomPlan}</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={generateWhatsAppBookingUrl({ language: currentLanguage })}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded bg-[#D4AF37] text-black hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
              id="navbar-whatsapp-cta"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black text-transparent" />
              <span>{t.bookOnWhatsApp}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick WhatsApp button for mobile */}
            <a
              href={generateWhatsAppBookingUrl({ language: currentLanguage })}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#25D366] text-black hover:opacity-90"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0c0c0c]/98 border-b border-[#262626] backdrop-blur-xl px-5 py-6 max-h-[85vh] overflow-y-auto shadow-2xl z-40">
          <div className="space-y-4">
            {/* Quick English / Arabic Switcher Pill for Mobile */}
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <span className="text-[11px] font-semibold text-neutral-400">
                {currentLanguage === 'ar' ? 'لغة الموقع:' : 'Language:'}
              </span>
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                variant="segmented"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#222222]">
              {/* Mobile Language All Options */}
              <div>
                <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">
                  {currentLanguage === 'ar' ? 'جميع اللغات' : 'All Languages'}
                </label>
                <select
                  value={currentLanguage}
                  onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
                  className="w-full bg-[#161616] border border-[#333333] text-neutral-200 rounded px-2.5 py-1.5 text-xs focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.flag} {l.nativeName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Currency */}
              <div>
                <label className="text-[10px] uppercase font-semibold text-neutral-400 block mb-1">
                  {currentLanguage === 'ar' ? 'العملة' : 'Currency'}
                </label>
                <select
                  value={currentCurrency}
                  onChange={(e) => onCurrencyChange(e.target.value as CurrencyCode)}
                  className="w-full bg-[#161616] border border-[#333333] text-neutral-200 rounded px-2.5 py-1.5 text-xs focus:border-[#D4AF37] focus:outline-none cursor-pointer"
                >
                  {Object.values(CURRENCIES).map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code} ({c.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-3 pt-2 text-base font-medium text-neutral-200">
              <button 
                onClick={() => handleNavClick('excursions')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navExcursions}
              </button>
              <button 
                onClick={() => handleNavClick('red-sea-guide')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navRedSeaGuide}
              </button>
              <button 
                onClick={() => handleNavClick('weather-sea')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navLiveWeather}
              </button>
              <button 
                onClick={() => handleNavClick('reviews')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navReviews}
              </button>
              <button 
                onClick={() => handleNavClick('faq')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navFaq}
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navAbout}
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left rtl:text-right py-2 hover:text-[#D4AF37] transition-colors border-b border-[#1a1a1a]"
              >
                {t.navContact}
              </button>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCustomPlan();
                }}
                className="w-full py-3 rounded bg-[#1a160d] border border-[#D4AF37]/50 text-[#D4AF37] text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.navCustomPlan}</span>
              </button>

              <a
                href={generateWhatsAppBookingUrl({ language: currentLanguage })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded bg-[#D4AF37] text-black text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                <span>{t.bookOnWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
