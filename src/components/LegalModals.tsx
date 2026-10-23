import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LanguageCode } from '../types';
import { LEGAL_TRANSLATIONS } from '../data/extendedTranslations';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'refund' | null;
  onClose: () => void;
  currentLanguage?: LanguageCode;
}

export const LegalModals: React.FC<LegalModalProps> = ({ 
  type, 
  onClose,
  currentLanguage = 'en' as LanguageCode
}) => {
  if (!type) return null;

  const t = LEGAL_TRANSLATIONS[currentLanguage] || LEGAL_TRANSLATIONS.en;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#282828] rounded-2xl p-6 sm:p-8 shadow-2xl text-left rtl:text-right">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-neutral-400 hover:text-white p-1 rounded-full bg-[#1e1e1e] cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' && (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
            <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>{t.terms.title}</span>
            </h3>
            <p>
              {t.terms.intro}
            </p>
            <h4 className="font-bold text-white">{t.terms.sec1Title}</h4>
            <p>
              {t.terms.sec1Text}
            </p>
            <h4 className="font-bold text-white">{t.terms.sec2Title}</h4>
            <p>
              {t.terms.sec2Text}
            </p>
            <h4 className="font-bold text-white">{t.terms.sec3Title}</h4>
            <p>
              {t.terms.sec3Text}
            </p>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
            <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>{t.privacy.title}</span>
            </h3>
            <p>
              {t.privacy.intro}
            </p>
            <h4 className="font-bold text-white">{t.privacy.sec1Title}</h4>
            <p>
              {t.privacy.sec1Text}
            </p>
            <p>
              {t.privacy.sec2Text}
            </p>
          </div>
        )}

        {type === 'refund' && (
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
            <h3 className="font-serif text-xl font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <span>{t.refund.title}</span>
            </h3>
            <div className="bg-[#1a170e] border border-[#D4AF37]/40 p-3.5 rounded-xl text-xs text-neutral-200">
              {t.refund.guarantee}
            </div>
            <h4 className="font-bold text-white">{t.refund.sec1Title}</h4>
            <p>
              {t.refund.sec1Text}
            </p>
            <h4 className="font-bold text-white">{t.refund.sec2Title}</h4>
            <p>
              {t.refund.sec2Text}
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#222222] text-right rtl:text-left">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#FFD700] text-black font-bold text-xs cursor-pointer transition-colors"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
