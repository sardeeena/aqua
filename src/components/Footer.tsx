import React from 'react';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowUp
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';
import { TRIPS } from '../data/trips';
import { getLocalizedTrip } from '../utils/localizedTrips';
import { AQUAWAY_DISPLAY_PHONE, AQUAWAY_EMAIL, generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { LanguageSwitcher } from './LanguageSwitcher';

interface FooterProps {
  currentLanguage: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onLanguageChange,
  onNavigateSection,
  onOpenLegal
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const topTrips = TRIPS.slice(0, 5);

  const pickupAreas: Record<LanguageCode, string[]> = {
    en: [
      '• Hurghada Marina & Central (Free)',
      '• Al Mamsha & El Kawther (Free)',
      '• Sahl Hasheesh Bay (Free)',
      '• Makadi Bay Resorts (Free)',
      '• El Gouna Luxury Hotels',
      '• Soma Bay & Safaga Coast'
    ],
    de: [
      '• Hurghada Marina & Zentrum (Kostenlos)',
      '• Al Mamsha & El Kawther (Kostenlos)',
      '• Sahl Hasheesh Bucht (Kostenlos)',
      '• Makadi Bay Resorts (Kostenlos)',
      '• El Gouna Hotels',
      '• Soma Bay & Safaga Küste'
    ],
    ru: [
      '• Марина Хургады и центр (Бесплатно)',
      '• Променад Эль-Мамша и Каусер (Бесплатно)',
      '• Сахл Хашиш (Бесплатно)',
      '• Отели Макади Бэй (Бесплатно)',
      '• Отели Эль-Гуны',
      '• Сома Бэй и Сафага'
    ],
    pl: [
      '• Nowa Marina i centrum (Gratis)',
      '• Promenada El Mamsha (Gratis)',
      '• Zatoka Sahl Hasheesh (Gratis)',
      '• Hotele Makadi Bay (Gratis)',
      '• Hotele w El Gouna',
      '• Soma Bay i wybrzeże Safagi'
    ],
    fr: [
      '• Marina d’Hurghada & Centre (Gratuit)',
      '• Al Mamsha & El Kawther (Gratuit)',
      '• Baie de Sahl Hasheesh (Gratuit)',
      '• Hôtels de Makadi Bay (Gratuit)',
      '• Hôtels de luxe d’El Gouna',
      '• Soma Bay & Côte de Safaga'
    ],
    it: [
      '• Hurghada Marina e centro (Gratuito)',
      '• Al Mamsha ed El Kawther (Gratuito)',
      '• Baia di Sahl Hasheesh (Gratuito)',
      '• Resort di Makadi Bay (Gratuito)',
      '• Hotel di lusso a El Gouna',
      '• Soma Bay e costa di Safaga'
    ],
    cs: [
      '• Přístav Hurghada a centrum (Zdarma)',
      '• Al Mamsha a El Kawther (Zdarma)',
      '• Zátoka Sahl Hasheesh (Zdarma)',
      '• Hotely Makadi Bay (Zdarma)',
      '• Hotely v El Gouně',
      '• Soma Bay a pobřeží Safagy'
    ],
    ar: [
      '• مارينا الغردقة ووسط البلد (مجاناً)',
      '• الممشى السياحي والكوثر (مجاناً)',
      '• خليج سهل حشيش (مجاناً)',
      '• منتجعات خليج مكادي (مجاناً)',
      '• فنادق الجونة الفاخرة',
      '• ساحل سوما باي وسفاجا'
    ]
  };

  return (
    <footer className="bg-[#050505] text-neutral-400 border-t border-[#1f1f1f] text-xs">
      {/* Top Footer Banner */}
      <div className="border-b border-[#1a1a1a] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#141414] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                AQUA<span className="text-[#D4AF37]">WAY</span> TOURS
              </span>
              <span className="block text-[10px] text-neutral-400 uppercase tracking-widest">
                {s.footerTagline}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={generateWhatsAppBookingUrl({ language: currentLanguage })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25D366] text-black font-bold text-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>{s.footerWhatsAppBtn}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#141414] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#D4AF37] cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left rtl:text-right">
        {/* Col 1: About & Licensing */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            {s.footerAboutTitle}
          </h4>
          <p className="text-[11px] leading-relaxed text-neutral-400">
            {s.footerAboutDesc}
          </p>
          <div className="pt-2 text-[10px] text-neutral-500">
            {s.footerLicenseText}
          </div>
        </div>

        {/* Col 2: Excursions Quick Links */}
        <div className="space-y-2">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
            {s.footerTopTrips}
          </h4>
          <ul className="space-y-2 text-[11px]">
            {topTrips.map((trip) => {
              const localized = getLocalizedTrip(trip, currentLanguage);
              return (
                <li key={trip.id}>
                  <button 
                    onClick={() => onNavigateSection('excursions')}
                    className="hover:text-[#D4AF37] transition-colors text-left rtl:text-right cursor-pointer"
                  >
                    {localized.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Col 3: Destination Hubs */}
        <div className="space-y-2">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-3">
            {s.footerPickupAreas}
          </h4>
          <ul className="space-y-1.5 text-[11px] text-neutral-400">
            {(pickupAreas[currentLanguage] || pickupAreas.en).map((area, idx) => (
              <li key={idx}>{area}</li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Concierge */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
            {s.footerContactUs}
          </h4>
          <div className="space-y-2 text-[11px]">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{AQUAWAY_DISPLAY_PHONE}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{AQUAWAY_EMAIL}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{s.footerAddress}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-neutral-400">
            <span className="bg-[#141414] px-2 py-1 rounded border border-[#222222]">{s.footerCashPayment}</span>
            <span className="bg-[#141414] px-2 py-1 rounded border border-[#222222]">Visa / Mastercard</span>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="border-t border-[#181818] py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} AquaWay Tours Red Sea. {s.footerAllRights} aquaway.tours / aquaway.io
          </div>

          {/* Language Switcher in Footer */}
          {onLanguageChange && (
            <div className="flex items-center gap-2">
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onLanguageChange={onLanguageChange}
                variant="toggle"
              />
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {t.footerTerms}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {t.footerPrivacy}
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              {s.footerRefundPolicy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
