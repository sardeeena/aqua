import React, { useState, useEffect, useRef, useMemo } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Trip, CurrencyCode, LanguageCode } from '../types';
import { TRIPS } from '../data/trips';
import { getLocalizedTrip } from '../utils/localizedTrips';
import { generateFloatingWhatsAppUrl } from '../utils/whatsapp';
import { ProgressiveImage } from './ProgressiveImage';

interface ContextAwareWhatsAppButtonProps {
  selectedTrip?: Trip | null;
  currentCurrency: CurrencyCode;
  currentLanguage: LanguageCode;
}

export const ContextAwareWhatsAppButton: React.FC<ContextAwareWhatsAppButtonProps> = ({
  selectedTrip,
  currentCurrency,
  currentLanguage
}) => {
  const [tripInView, setTripInView] = useState<Trip | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hasNewContextPulse, setHasNewContextPulse] = useState(false);
  const prevContextKeyRef = useRef<string>('');

  const isAr = currentLanguage === 'ar';

  // 1. Observe Trip Cards in viewport to detect which tour is currently visible
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const tripCardEntries = new Map<string, number>();

    const tripObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const tripId = entry.target.getAttribute('data-trip-id');
          if (!tripId) return;

          if (entry.isIntersecting) {
            tripCardEntries.set(tripId, entry.intersectionRatio);
          } else {
            tripCardEntries.delete(tripId);
          }
        });

        if (tripCardEntries.size > 0) {
          // Find the trip card with the highest visibility ratio
          let maxRatio = 0;
          let bestTripId = '';
          tripCardEntries.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              bestTripId = id;
            }
          });

          if (bestTripId) {
            const matched = TRIPS.find((t) => t.id === bestTripId);
            if (matched) {
              setTripInView(matched);
            }
          }
        } else {
          setTripInView(null);
        }
      },
      {
        root: null,
        rootMargin: '-10% 0px -20% 0px',
        threshold: [0.15, 0.4, 0.7]
      }
    );

    // Observe all trip cards
    const cardElements = document.querySelectorAll('[data-trip-id]');
    cardElements.forEach((el) => tripObserver.observe(el));

    return () => {
      tripObserver.disconnect();
    };
  }, []);

  // 2. Observe Major Sections for contextual awareness when no specific trip card is centered
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const sectionIds = [
      'hero',
      'excursions',
      'weather-sea',
      'why-aquaway',
      'red-sea-guide',
      'gallery',
      'reviews',
      'faq',
      'about',
      'contact'
    ];

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.2, 0.5]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // 3. Determine active context: Priority: selectedTrip > tripInView > activeSection
  const activeTrip = selectedTrip || tripInView;

  // Compute context labels and details
  const contextData = useMemo(() => {
    if (activeTrip) {
      const locTrip = getLocalizedTrip(activeTrip, currentLanguage);
      
      // Short friendly title
      const shortTitle = locTrip.title.replace(/ — .*$/, '').replace(/ \(.*$/, '');

      let primaryText = '';
      let secondaryText = '';

      switch (currentLanguage) {
        case 'ar':
          primaryText = `استفسر عن ${shortTitle}!`;
          secondaryText = 'رد فوري • أفضل سعر محلي';
          break;
        case 'de':
          primaryText = `Fragen zu ${shortTitle}!`;
          secondaryText = 'Sofortige WhatsApp-Auskunft';
          break;
        case 'ru':
          primaryText = `Спросить о ${shortTitle}!`;
          secondaryText = 'Мгновенный ответ в WhatsApp';
          break;
        case 'pl':
          primaryText = `Zapytaj o ${shortTitle}!`;
          secondaryText = 'Szybka odpowiedź • Bez zaliczki';
          break;
        case 'fr':
          primaryText = `Infos sur ${shortTitle}!`;
          secondaryText = 'Réponse directe en direct';
          break;
        case 'it':
          primaryText = `Chiedi di ${shortTitle}!`;
          secondaryText = 'Risposta rapida su WhatsApp';
          break;
        case 'cs':
          primaryText = `Dotaz na ${shortTitle}!`;
          secondaryText = 'Okamžitá odpověď na WhatsApp';
          break;
        default:
          primaryText = `Ask about ${shortTitle}!`;
          secondaryText = 'Instant Reply • Best Local Price';
      }

      return {
        key: `trip-${activeTrip.id}`,
        title: primaryText,
        subtitle: secondaryText,
        icon: 'trip',
        trip: activeTrip,
        badge: activeTrip.badge || (isAr ? 'رحلة مميزة' : 'Popular Tour')
      };
    }

    // Section based contexts
    switch (activeSection) {
      case 'weather-sea':
        return {
          key: 'weather',
          title: isAr ? 'استفسر عن حالة البحر اليوم!' : 'Ask about Sea Conditions!',
          subtitle: isAr ? 'تقارير الرياح والأمواج والغطس' : 'Wind, waves & best sailing days',
          icon: 'weather',
          trip: null,
          badge: isAr ? 'رصد حي' : 'Live Station'
        };

      case 'red-sea-guide':
        return {
          key: 'map',
          title: isAr ? 'تحقق من مواعيد توصيل فندقك!' : 'Check Hotel Pickup Timing!',
          subtitle: isAr ? 'توصيل مجاني مكيف لكافة المنتجعات' : 'Free AC transfer across Hurghada',
          icon: 'map',
          trip: null,
          badge: isAr ? 'توصيل مجاني' : 'Free Transfers'
        };

      case 'faq':
      case 'about':
        return {
          key: 'faq',
          title: isAr ? 'لديك سؤال؟ تواصل معنا عبر واتساب!' : 'Have a Question? Chat on WhatsApp!',
          subtitle: isAr ? 'حجز بدون مقدم وإلغاء مجاني' : 'Zero deposit & instant assistance',
          icon: 'faq',
          trip: null,
          badge: isAr ? 'مساعدة 24/7' : '24/7 Care'
        };

      case 'reviews':
      case 'gallery':
        return {
          key: 'reviews',
          title: isAr ? 'تحدث مع فريقنا المحلي مباشرة!' : 'Chat with Local Team!',
          subtitle: isAr ? 'نصائح وترشيحات مخصصة لرحلتك' : 'Tailored Hurghada recommendations',
          icon: 'reviews',
          trip: null,
          badge: isAr ? 'تقييم 4.9★' : '4.9★ Rated'
        };

      case 'excursions':
        return {
          key: 'excursions',
          title: isAr ? 'استفسر عن رحلاتنا المميزة!' : 'Ask about Our Tours!',
          subtitle: isAr ? 'أفضل العروض البحرية والصحراوية' : 'Best boat & safari packages',
          icon: 'excursions',
          trip: null,
          badge: isAr ? 'عروض حصرية' : 'Best Deals'
        };

      default:
        return {
          key: 'default',
          title: isAr ? 'واتساب' : 'WhatsApp',
          subtitle: isAr ? 'مكتب حجز رحلات البحر الأحمر المباشر' : 'Direct Red Sea Excursions Desk',
          icon: 'default',
          trip: null,
          badge: isAr ? 'متاح الآن' : 'Online'
        };
    }
  }, [activeTrip, activeSection, currentLanguage, isAr]);

  // Trigger brief highlight pulse whenever the context key changes
  useEffect(() => {
    if (contextData.key !== prevContextKeyRef.current) {
      prevContextKeyRef.current = contextData.key;
      setHasNewContextPulse(true);
      const timer = setTimeout(() => setHasNewContextPulse(false), 2400);
      return () => clearTimeout(timer);
    }
  }, [contextData.key]);

  // Generate target WhatsApp URL
  const whatsAppUrl = useMemo(() => {
    return generateFloatingWhatsAppUrl({
      selectedTrip,
      tripInView: !selectedTrip ? tripInView : null,
      sectionContext: !selectedTrip && !tripInView ? activeSection : undefined,
      currencyCode: currentCurrency,
      language: currentLanguage
    });
  }, [selectedTrip, tripInView, activeSection, currentCurrency, currentLanguage]);

  return (
    <aside
      className={`fixed bottom-3 sm:bottom-6 ${
        isAr ? 'left-3 sm:left-6' : 'right-3 sm:right-6'
      } z-40 pointer-events-none max-w-[calc(100vw-1.5rem)] sm:max-w-md`}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        paddingRight: isAr ? '0px' : 'env(safe-area-inset-right, 0px)',
        paddingLeft: isAr ? 'env(safe-area-inset-left, 0px)' : '0px'
      }}
      aria-label="WhatsApp"
    >
      {/* Single Unified Context-Aware WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto flex items-center justify-end rtl:justify-start"
      >
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 sm:gap-2.5 px-3 py-2.5 sm:px-4.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-black font-bold text-xs sm:text-sm shadow-[0_6px_25px_rgba(0,0,0,0.5),0_3px_15px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all duration-300 group cursor-pointer border border-[#5cf091] select-none max-w-full min-h-[44px] sm:min-h-[48px] ${
            hasNewContextPulse
              ? 'ring-4 ring-[#25D366]/40 shadow-[0_0_30px_rgba(37,211,102,0.7)] scale-[1.02]'
              : ''
          }`}
          aria-label={contextData.title}
          id="floating-whatsapp-btn"
        >
          {/* Tour Thumbnail (if viewing specific tour) or WhatsApp Icon */}
          {contextData.trip ? (
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden shrink-0 border-2 border-black/80 shadow-sm bg-neutral-900">
              <ProgressiveImage
                src={contextData.trip.images[0]}
                alt={contextData.trip.title}
                containerClassName="w-full h-full"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 bg-black/10" />
            </div>
          ) : (
            <div className="relative shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-black text-transparent" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping opacity-75" />
            </div>
          )}

          {/* Dynamic Animated Context Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={contextData.key}
              initial={{ opacity: 0, x: isAr ? -4 : 4 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isAr ? 4 : -4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center min-w-0 flex-1 max-w-[180px] xs:max-w-[230px] sm:max-w-[280px] md:max-w-none"
            >
              <span className="font-bold tracking-tight truncate">
                {contextData.title}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Online Live Status Indicator */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-black/90" />
          </span>
        </a>
      </motion.div>
    </aside>
  );
};
