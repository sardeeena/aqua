import React, { useState, useRef } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Car, 
  BadgePercent, 
  Sparkles,
  Headphones,
  Award,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';

interface WhyAquaWayProps {
  currentLanguage: LanguageCode;
}

export const WhyAquaWay: React.FC<WhyAquaWayProps> = ({ currentLanguage }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const marqueeRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;
  const isRtl = currentLanguage === 'ar';

  const pillars = [
    {
      icon: Users,
      title: t.trustPillar1Title,
      desc: t.trustPillar1Desc,
      tag: s.whyTagSmallGroups
    },
    {
      icon: Award,
      title: t.trustPillar2Title,
      desc: t.trustPillar2Desc,
      tag: s.whyTagCertifiedGuides
    },
    {
      icon: Car,
      title: t.trustPillar3Title,
      desc: t.trustPillar3Desc,
      tag: s.whyTagFreeTransfers
    },
    {
      icon: ShieldCheck,
      title: t.trustPillar4Title,
      desc: t.trustPillar4Desc,
      tag: s.whyTagZeroRisk
    },
    {
      icon: Headphones,
      title: s.whySupportTitle,
      desc: s.whySupportDesc,
      tag: s.whyTagFastReplies
    },
    {
      icon: BadgePercent,
      title: s.whyPricesTitle,
      desc: s.whyPricesDesc,
      tag: s.whyTagBestValue
    }
  ];

  // Quadruple items to ensure seamless infinite looping without gaps on all screen sizes
  const displayPillars = [
    ...pillars,
    ...pillars,
    ...pillars,
    ...pillars
  ];

  const durationSeconds = speed === 'fast' ? 20 : 38;

  const handleManualScroll = (direction: 'prev' | 'next') => {
    if (marqueeRef.current) {
      const scrollAmount = direction === 'next' ? 360 : -360;
      marqueeRef.current.scrollBy({
        left: isRtl ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="why-aquaway" className="py-20 px-0 bg-[#0d0d0d] border-t border-[#1a1a1a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{s.whyDifferenceBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {s.whyTitleMain} <br />
            <span className="gold-text-gradient italic">{s.whyTitleHighlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {s.whySubtitle}
          </p>
        </div>

        {/* Animation & Speed Controls Bar */}
        <div className="flex items-center justify-between mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-neutral-300">
              {isRtl ? 'ضمانات ومعايير الجودة' : 'Verified Quality Standards'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3 py-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isPaused ? (isRtl ? 'تشغيل الحركة التلقائية' : 'Resume auto-moving animation') : (isRtl ? 'إيقاف الحركة مؤقتاً' : 'Pause auto-moving animation')}
              aria-label={isPaused ? "Play auto-scrolling" : "Pause auto-scrolling"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  <span>{isRtl ? 'تشغيل' : 'Play'}</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#D4AF37]" />
                  <span>{isRtl ? 'إيقاف مؤقت' : 'Pause'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setSpeed(speed === 'normal' ? 'fast' : 'normal')}
              className="px-2.5 py-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-400 hover:text-white text-[11px] font-medium transition-colors cursor-pointer"
              title="Toggle speed"
            >
              {speed === 'normal' ? '1x' : '2x'}
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handleManualScroll('prev')}
                className="p-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#D4AF37]/50 active:scale-95 transition-all rtl:rotate-180 cursor-pointer"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleManualScroll('next')}
                className="p-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#D4AF37]/50 active:scale-95 transition-all rtl:rotate-180 cursor-pointer"
                aria-label="Next card"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Moving Marquee Track Container */}
      <div 
        ref={marqueeRef}
        className="relative w-full overflow-hidden py-4 marquee-container group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Side Gradient Masks for Luxury Fading Effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

        {/* Animated Moving Ribbon */}
        <div
          className={`flex gap-6 ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee-ltr'} ${isPaused ? 'is-paused' : ''}`}
          style={{
            '--marquee-duration': `${durationSeconds}s`
          } as React.CSSProperties}
        >
          {displayPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={`${p.title}-${idx}`}
                className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 select-none"
              >
                <div className="h-full aquaway-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left rtl:text-right border border-[#222222] hover:border-[#D4AF37]/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] transition-all duration-300 bg-[#111111] group/card">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a170e] border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shadow-md group-hover/card:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#1a1a1a] px-2.5 py-1 rounded border border-[#2e2e2e]">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover/card:text-[#FFF6D0] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center gap-2 text-xs text-neutral-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{s.whyGuarantee}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

