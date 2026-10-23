import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check, Sparkles } from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGES } from '../data/trips';

interface LanguageSwitcherProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  variant?: 'compact' | 'toggle' | 'dropdown' | 'segmented';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  variant = 'dropdown',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = LANGUAGES.find((l) => l.code === currentLanguage) || LANGUAGES[0];
  const isArabic = currentLanguage === 'ar';

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 1. Direct Quick Toggle between English and Arabic (One-click direct toggle)
  if (variant === 'toggle') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <button
          onClick={() => onLanguageChange(isArabic ? 'en' : 'ar')}
          className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818] hover:bg-[#222222] border border-[#2f2f2f] hover:border-[#D4AF37]/60 text-xs text-neutral-200 transition-all cursor-pointer shadow-sm"
          title={isArabic ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          id="quick-lang-toggle-btn"
          aria-label="Toggle between English and Arabic"
        >
          <Globe className="w-3.5 h-3.5 text-[#D4AF37] group-hover:rotate-45 transition-transform duration-300" />
          <span className="font-semibold text-white">
            {isArabic ? 'English (EN)' : 'العربية (AR)'}
          </span>
          <span className="text-sm leading-none">
            {isArabic ? '🇬🇧' : '🇪🇬'}
          </span>
        </button>
      </div>
    );
  }

  // 2. Segmented Pill Control (English vs Arabic instant tabs)
  if (variant === 'segmented') {
    return (
      <div 
        className={`inline-flex p-1 rounded-xl bg-[#141414] border border-[#262626] ${className}`}
        id="segmented-lang-switcher"
      >
        <button
          onClick={() => onLanguageChange('en')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            currentLanguage === 'en'
              ? 'bg-[#D4AF37] text-black shadow-md'
              : 'text-neutral-400 hover:text-white hover:bg-[#1f1f1f]'
          }`}
          aria-label="Switch to English"
        >
          <span>🇬🇧</span>
          <span>English</span>
        </button>

        <button
          onClick={() => onLanguageChange('ar')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer font-sans ${
            currentLanguage === 'ar'
              ? 'bg-[#D4AF37] text-black shadow-md'
              : 'text-neutral-400 hover:text-white hover:bg-[#1f1f1f]'
          }`}
          aria-label="التبديل إلى العربية"
        >
          <span>🇪🇬</span>
          <span>العربية</span>
        </button>
      </div>
    );
  }

  // 3. Dropdown Menu (With direct EN / AR fast highlights and other languages)
  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:border-[#D4AF37]/50 hover:text-white transition-all cursor-pointer shadow-sm"
        id="language-switcher-dropdown-btn"
        aria-expanded={isOpen}
        aria-label="Select Language"
      >
        <span className="text-sm leading-none">{currentLangObj.flag}</span>
        <span className="font-medium text-white">{currentLangObj.nativeName}</span>
        <span className="text-[10px] text-neutral-500 uppercase">({currentLangObj.code})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-56 bg-[#121212] border border-[#2e2e2e] rounded-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
          id="language-switcher-menu"
        >
          {/* Quick English / Arabic Featured Toggle Header */}
          <div className="px-3 py-1.5 mb-1 border-b border-[#222222]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              {isArabic ? 'اللغات الشائعة' : 'Primary Languages'}
            </span>
            <div className="grid grid-cols-2 gap-1.5 mt-1.5">
              <button
                onClick={() => {
                  onLanguageChange('en');
                  setIsOpen(false);
                }}
                className={`px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                  currentLanguage === 'en'
                    ? 'bg-[#D4AF37] text-black border-[#FFD700]'
                    : 'bg-[#1a1a1a] text-neutral-300 border-[#2a2a2a] hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                <span>🇬🇧</span>
                <span>English</span>
              </button>

              <button
                onClick={() => {
                  onLanguageChange('ar');
                  setIsOpen(false);
                }}
                className={`px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                  currentLanguage === 'ar'
                    ? 'bg-[#D4AF37] text-black border-[#FFD700]'
                    : 'bg-[#1a1a1a] text-neutral-300 border-[#2a2a2a] hover:border-[#D4AF37]/50 hover:text-white'
                }`}
              >
                <span>🇪🇬</span>
                <span>العربية</span>
              </button>
            </div>
          </div>

          {/* All Supported Languages List */}
          <div className="max-h-60 overflow-y-auto px-1 py-1">
            <span className="px-2 py-1 text-[9px] uppercase font-bold tracking-wider text-neutral-500 block">
              {isArabic ? 'جميع اللغات المتاحة' : 'All Available Languages'}
            </span>
            {LANGUAGES.map((lang) => {
              const isSelected = currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang.code as LanguageCode);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left rtl:text-right px-2.5 py-1.5 text-xs rounded-lg flex items-center gap-2.5 hover:bg-[#1e1e1e] transition-colors cursor-pointer ${
                    isSelected ? 'text-[#D4AF37] font-semibold bg-[#1a1a1a]' : 'text-neutral-300'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <div className="flex-1 min-w-0">
                    <span className="block truncate">{lang.nativeName}</span>
                    <span className="text-[10px] text-neutral-500">{lang.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
