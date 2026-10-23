import React, { useState, useRef } from 'react';
import { 
  Star, 
  CheckCircle, 
  MessageSquare, 
  Pause, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';

interface ReviewsSectionProps {
  currentLanguage: LanguageCode;
}

const PLAY_TEXTS: Record<LanguageCode, string> = {
  en: 'Play Auto-scroll',
  de: 'Autoplay starten',
  ru: 'Включить автопрокрутку',
  pl: 'Włącz przewijanie',
  fr: 'Lecture auto',
  it: 'Avvia scorrimento',
  cs: 'Přehrát posun',
  ar: 'تشغيل التحرك التلقائي'
};

const PAUSE_TEXTS: Record<LanguageCode, string> = {
  en: 'Pause',
  de: 'Anhalten',
  ru: 'Пауза',
  pl: 'Wstrzymaj',
  fr: 'Pause',
  it: 'Pausa',
  cs: 'Pozastavit',
  ar: 'إيقاف مؤقت'
};

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLanguage }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'tripadvisor' | 'google'>('all');
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const marqueeRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;
  const isRtl = currentLanguage === 'ar';

  const filteredReviews = REVIEWS.filter(
    r => activeFilter === 'all' || r.source === activeFilter
  );

  // Quadruple items to ensure seamless infinite looping without gaps on ultra-wide screens
  const displayReviews = [
    ...filteredReviews,
    ...filteredReviews,
    ...filteredReviews,
    ...filteredReviews
  ];

  const durationSeconds = speed === 'fast' ? 24 : 45;

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
    <section id="reviews" className="py-20 px-0 bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{s.reviewsBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.reviewsTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.reviewsSubtitle}
          </p>
        </div>

        {/* Aggregate Ratings Scorecard Header */}
        <div className="bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl mb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left rtl:md:text-right">
          <div className="flex items-center gap-4">
            <div className="font-serif text-5xl font-bold text-[#D4AF37]">
              4.98
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start rtl:md:justify-start gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 block font-medium">
                {s.reviewsBasedOn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <div className="bg-[#181818] border border-[#2e2e2e] px-4 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00aa6c]" />
              <span>{s.reviewsTripadvisor}</span>
            </div>
            <div className="bg-[#181818] border border-[#2e2e2e] px-4 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
              <span>{s.reviewsGoogle}</span>
            </div>
          </div>
        </div>

        {/* Filters and Animation Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Reviews Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white'
              }`}
            >
              {s.reviewsAllFilter} ({REVIEWS.length})
            </button>
            <button
              onClick={() => setActiveFilter('tripadvisor')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'tripadvisor'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white'
              }`}
            >
              TripAdvisor
            </button>
            <button
              onClick={() => setActiveFilter('google')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'google'
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-[#141414] border border-[#262626] text-neutral-400 hover:text-white'
              }`}
            >
              Google Reviews
            </button>
          </div>

          {/* Autoplay & Speed Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="px-3 py-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title={isPaused ? "Resume auto-moving animation" : "Pause auto-moving animation"}
              aria-label={isPaused ? "Play auto-scrolling" : "Pause auto-scrolling"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                  <span>{PLAY_TEXTS[currentLanguage] || PLAY_TEXTS.en}</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#D4AF37]" />
                  <span>{PAUSE_TEXTS[currentLanguage] || PAUSE_TEXTS.en}</span>
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
                className="p-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#D4AF37]/50 active:scale-95 transition-all rtl:rotate-180"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleManualScroll('next')}
                className="p-1.5 rounded-full bg-[#161616] border border-[#2a2a2a] text-neutral-300 hover:text-white hover:border-[#D4AF37]/50 active:scale-95 transition-all rtl:rotate-180"
                aria-label="Next review"
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
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

        {/* Animated Moving Ribbon */}
        <div
          className={`flex gap-6 ${isRtl ? 'animate-marquee-rtl' : 'animate-marquee-ltr'} ${isPaused ? 'is-paused' : ''}`}
          style={{
            '--marquee-duration': `${durationSeconds}s`
          } as React.CSSProperties}
        >
          {displayReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[300px] sm:w-[360px] md:w-[380px] shrink-0 select-none"
            >
              <div className="h-full aquaway-card rounded-2xl p-6 flex flex-col justify-between border border-[#262626] hover:border-[#D4AF37]/60 hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] transition-all duration-300 bg-[#121212] text-left rtl:text-right group/card">
                <div>
                  {/* Rating Stars & Source */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 bg-[#1a1a1a] px-2.5 py-0.5 rounded-full border border-[#2b2b2b]">
                      {rev.source === 'tripadvisor' ? 'TripAdvisor' : 'Google'}
                    </span>
                  </div>

                  {/* Review Title */}
                  <h4 className="font-serif text-base font-bold text-white mb-2.5 line-clamp-2 leading-snug group-hover/card:text-[#FFF6D0] transition-colors">
                    "{rev.title}"
                  </h4>

                  {/* Review Content */}
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-4">
                    {rev.content}
                  </p>
                </div>

                {/* Author Info & Verified Tour Tag */}
                <div className="pt-4 border-t border-[#1f1f1f] flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    {rev.avatar ? (
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-8 h-8 rounded-full object-cover border border-[#D4AF37]/40"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                        {rev.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-white">{rev.author}</span>
                        {rev.verified && (
                          <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" title="Verified Traveler" />
                        )}
                      </div>
                      <span className="text-[11px] text-neutral-400 block truncate max-w-[160px]">
                        {rev.country} • {rev.tourName}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500 whitespace-nowrap">{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
