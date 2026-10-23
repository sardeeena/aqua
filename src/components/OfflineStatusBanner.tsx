import React from 'react';
import { WifiOff, Phone, CheckCircle2 } from 'lucide-react';
import { LanguageCode } from '../types';
import { AQUAWAY_DISPLAY_PHONE } from '../utils/whatsapp';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';

interface OfflineStatusBannerProps {
  isOnline: boolean;
  currentLanguage: LanguageCode;
}

export const OfflineStatusBanner: React.FC<OfflineStatusBannerProps> = ({
  isOnline,
  currentLanguage
}) => {
  if (isOnline) return null;

  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;

  return (
    <div
      id="pwa-offline-banner"
      className="fixed top-16 inset-x-0 z-50 px-4 py-2.5 bg-gradient-to-r from-[#1c1404] via-[#241a06] to-[#1c1404] border-b border-[#D4AF37]/40 shadow-2xl backdrop-blur-md animate-in slide-in-from-top duration-300"
      role="status"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-neutral-200">
          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
            <WifiOff className="w-3.5 h-3.5 text-[#FFD700]" />
          </div>
          <div>
            <span className="font-bold text-[#FFD700]">
              {s.offlineBannerTitle}
            </span>{' '}
            <span className="text-neutral-300">
              {s.offlineBannerDesc}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${AQUAWAY_DISPLAY_PHONE.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#ffe066] transition-colors shadow-sm"
          >
            <Phone className="w-3 h-3" />
            <span>{AQUAWAY_DISPLAY_PHONE}</span>
          </a>
          <div className="hidden md:flex items-center gap-1 text-[11px] text-neutral-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{s.offlineSavedLocally}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
