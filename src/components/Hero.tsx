import React, { useState } from 'react';
import { 
  ArrowRight, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  Calendar, 
  Users, 
  Search, 
  Anchor, 
  Shield 
} from 'lucide-react';
import { motion } from 'motion/react';
import { TripCategory, LanguageCode } from '../types';
import { CATEGORIES } from '../data/trips';
import { TRANSLATIONS } from '../data/translations';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { ProgressiveImage } from './ProgressiveImage';
import { getLocalizedCategoryName } from '../utils/localizedTrips';

interface HeroProps {
  currentLanguage: LanguageCode;
  onSelectCategory: (category: TripCategory) => void;
  onSearchChange: (search: string) => void;
  onExploreClick: () => void;
}

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22, filter: 'blur(3px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const statCardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  onSelectCategory,
  onSearchChange,
  onExploreClick
}) => {
  const [selectedCat, setSelectedCat] = useState<TripCategory>('all');
  const [guestCount, setGuestCount] = useState('2 Guests');
  const [searchDate, setSearchDate] = useState('');
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectCategory(selectedCat);
    onExploreClick();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden bg-[#0a0a0a]">
      {/* Background Cinematic Backdrop with subtle darkened gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ProgressiveImage
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=80"
          alt="AquaWay Red Sea Luxury Excursion"
          priority={true}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center brightness-[0.22] contrast-[1.1] scale-105"
        />
        <div className="absolute inset-0 z-[5] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/50" />
        <div className="absolute inset-0 z-[6] bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_80%)]" />
      </div>

      <motion.div 
        key={currentLanguage}
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Cinematic Headline in Playfair Display */}
        <motion.h1 
          variants={heroItemVariants}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-6"
        >
          {t.heroTitle} <br className="hidden sm:inline" />
          <span className="gold-text-gradient font-serif italic">{t.heroTitleHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={heroItemVariants}
          className="max-w-2xl mx-auto text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          variants={heroItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#D4AF37] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 hover:bg-[#FFD700] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            id="hero-explore-btn"
          >
            <span>{t.heroBtnExplore}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          <a
            href={generateWhatsAppBookingUrl({ language: currentLanguage })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#141414] border border-[#333333] hover:border-[#25D366]/60 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#1a1a1a] transition-all cursor-pointer"
            id="hero-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>{t.heroBtnWhatsApp}</span>
          </a>
        </motion.div>

        {/* Quick Trip Finder Bar */}
        <motion.div 
          variants={heroItemVariants}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#262626] rounded-xl p-3 sm:p-4 max-w-4xl mx-auto shadow-2xl mb-12"
        >
          <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-left rtl:text-right">
            {/* Category Select */}
            <div className="relative">
              <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                {currentLanguage === 'ar' ? 'تصنيف التجربة' : 'Trip Type'}
              </label>
              <div className="flex items-center gap-2 bg-[#181818] border border-[#2c2c2c] rounded-lg px-3 py-2 text-xs text-neutral-200">
                <Anchor className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <select
                  value={selectedCat}
                  onChange={(e) => setSelectedCat(e.target.value as TripCategory)}
                  className="w-full bg-transparent focus:outline-none text-white text-xs cursor-pointer"
                  id="hero-category-select"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.slug} className="bg-[#141414] text-white">
                      {getLocalizedCategoryName(c.slug, c.name, currentLanguage)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                {currentLanguage === 'ar' ? 'التاريخ المفضل' : 'Trip Date'}
              </label>
              <div className="flex items-center gap-2 bg-[#181818] border border-[#2c2c2c] rounded-lg px-3 py-2 text-xs text-neutral-200">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <input
                  type="date"
                  value={searchDate}
                  onChange={(e) => setSearchDate(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-white text-xs cursor-pointer"
                  id="hero-date-input"
                />
              </div>
            </div>

            {/* Guests Selection */}
            <div>
              <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                {currentLanguage === 'ar' ? 'عدد الضيوف' : 'Guests'}
              </label>
              <div className="flex items-center gap-2 bg-[#181818] border border-[#2c2c2c] rounded-lg px-3 py-2 text-xs text-neutral-200">
                <Users className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-white text-xs cursor-pointer"
                  id="hero-guests-select"
                >
                  <option value="1 Guest" className="bg-[#141414]">{currentLanguage === 'ar' ? 'ضيف واحد' : '1 Guest'}</option>
                  <option value="2 Guests" className="bg-[#141414]">{currentLanguage === 'ar' ? 'ضيفان (شخصين/كابل)' : '2 Guests (Couple)'}</option>
                  <option value="3-4 Guests" className="bg-[#141414]">{currentLanguage === 'ar' ? '3-4 ضيوف (مجموعة صغيرة)' : '3-4 Guests (Small Group)'}</option>
                  <option value="5+ Guests" className="bg-[#141414]">{currentLanguage === 'ar' ? '5+ ضيوف (عائلة / VIP)' : '5+ Guests (Family / Group)'}</option>
                </select>
              </div>
            </div>

            {/* Find Trips Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[38px] rounded-lg bg-[#D4AF37] text-black font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#FFD700] transition-colors cursor-pointer"
                id="hero-search-submit-btn"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'ar' ? 'بحث عن رحلات' : 'Find Trips'}</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* 4 Core Statistics Grid - Compact & Fade-in/Fade-out Animated */}
        <motion.div 
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto"
        >
          <motion.div 
            variants={statCardVariants} 
            className="bg-[#111111]/70 backdrop-blur-sm border border-[#222222]/80 hover:border-[#D4AF37]/30 rounded-lg p-2.5 sm:p-3 text-center transition-all"
          >
            <div className="font-serif text-base sm:text-lg font-bold text-[#D4AF37]">{t.statGuests}</div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">{t.statGuestsSub}</div>
          </motion.div>
          <motion.div 
            variants={statCardVariants} 
            className="bg-[#111111]/70 backdrop-blur-sm border border-[#222222]/80 hover:border-[#D4AF37]/30 rounded-lg p-2.5 sm:p-3 text-center transition-all"
          >
            <div className="font-serif text-base sm:text-lg font-bold text-[#D4AF37] flex items-center justify-center gap-1">
              <span>{t.statRating}</span>
              <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">{t.statRatingSub}</div>
          </motion.div>
          <motion.div 
            variants={statCardVariants} 
            className="bg-[#111111]/70 backdrop-blur-sm border border-[#222222]/80 hover:border-[#D4AF37]/30 rounded-lg p-2.5 sm:p-3 text-center transition-all"
          >
            <div className="font-serif text-base sm:text-lg font-bold text-[#D4AF37]">{t.statExperience}</div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">{t.statExperienceSub}</div>
          </motion.div>
          <motion.div 
            variants={statCardVariants} 
            className="bg-[#111111]/70 backdrop-blur-sm border border-[#222222]/80 hover:border-[#D4AF37]/30 rounded-lg p-2.5 sm:p-3 text-center transition-all"
          >
            <div className="font-serif text-base sm:text-lg font-bold text-[#D4AF37] flex items-center justify-center gap-1">
              <span>100%</span>
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>
            <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5">{t.statGuaranteedSub}</div>
          </motion.div>
        </motion.div>

        {/* Subtle trust pills */}
        <motion.div 
          variants={heroItemVariants}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-neutral-400"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            {t.freeCancellationBadge}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            {t.hotelPickupBadge}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
            {t.noHiddenFeesBadge}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};
