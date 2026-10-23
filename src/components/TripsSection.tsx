import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Trip, TripCategory, CurrencyCode, LanguageCode } from '../types';
import { CATEGORIES, TRIPS } from '../data/trips';
import { TRANSLATIONS } from '../data/translations';
import { TripCard } from './TripCard';
import { getLocalizedCategoryName, getLocalizedTrip } from '../utils/localizedTrips';

interface TripsSectionProps {
  selectedCategory: TripCategory;
  onSelectCategory: (category: TripCategory) => void;
  searchQuery: string;
  onSearchChange: (search: string) => void;
  currentCurrency: CurrencyCode;
  currentLanguage: LanguageCode;
  onSelectTrip: (trip: Trip) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 28,
    scale: 0.985
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: (i % 3) * 0.08
    }
  })
};

export const TripsSection: React.FC<TripsSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  currentCurrency,
  currentLanguage,
  onSelectTrip
}) => {
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc' | 'rating'>('popular');
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const filteredTrips = useMemo(() => {
    return TRIPS.filter((trip) => {
      const localized = getLocalizedTrip(trip, currentLanguage);
      const matchesCat = selectedCategory === 'all' || trip.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      
      const matchesSearch = !q || 
        trip.title.toLowerCase().includes(q) ||
        localized.title.toLowerCase().includes(q) ||
        trip.subtitle.toLowerCase().includes(q) ||
        localized.subtitle.toLowerCase().includes(q) ||
        trip.categoryLabel.toLowerCase().includes(q) ||
        localized.categoryLabel.toLowerCase().includes(q) ||
        trip.highlights.some(h => h.toLowerCase().includes(q)) ||
        localized.highlights.some(h => h.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceUSD - b.priceUSD;
      if (sortBy === 'price-desc') return b.priceUSD - a.priceUSD;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: popular
      return b.reviewsCount - a.reviewsCount;
    });
  }, [selectedCategory, searchQuery, sortBy, currentLanguage]);

  return (
    <section id="excursions" className="py-20 px-4 sm:px-8 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLanguage === 'ar' ? 'رحلات البحر الأحمر المختارة' : 'Our Red Sea Trips'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {currentLanguage === 'ar' ? (
              <>رحلاتنا المميزة <span className="gold-text-gradient italic">ومغامرات البحر الأحمر</span></>
            ) : (
              <>Popular Trips & <span className="gold-text-gradient italic">Adventures</span></>
            )}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {currentLanguage === 'ar'
              ? 'تشمل جميع رحلاتنا التوصيل الفندقي المكيف، مرشدين معتمدين متعددي اللغات، أحدث معدات السلامة وضمان الإلغاء المجاني حتى 24 ساعة قبل الانطلاق.'
              : 'All trips include free hotel pickup and drop-off in a clean AC vehicle, friendly certified guides, sanitized gear, and free cancellation up to 24 hours before.'}
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.slug;
            const categoryDisplayName = getLocalizedCategoryName(cat.slug, cat.name, currentLanguage);
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug as TripCategory)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)] font-bold'
                    : 'bg-[#141414] border border-[#262626] text-neutral-300 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
                id={`category-pill-${cat.slug}`}
              >
                <span>{categoryDisplayName}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/20 text-black' : 'bg-[#222222] text-neutral-400'
                }`}>
                  {cat.slug === 'all' 
                    ? TRIPS.length 
                    : TRIPS.filter(t => t.category === cat.slug).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111111] border border-[#222222] rounded-xl p-3.5 sm:p-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.filterSearchPlaceholder}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#181818] border border-[#2a2a2a] rounded-lg pl-10 pr-4 rtl:pl-4 rtl:pr-10 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
              id="trips-search-input"
            />
          </div>

          {/* Results count & Sort */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs text-neutral-400 font-medium">
              {currentLanguage === 'ar' ? (
                <>عرض <strong className="text-white">{filteredTrips.length}</strong> رحلة وتجربة</>
              ) : (
                <>Showing <strong className="text-white">{filteredTrips.length}</strong> experiences</>
              )}
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#181818] border border-[#2a2a2a] rounded-lg px-3 py-1.5 text-xs text-neutral-200 focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                id="trips-sort-select"
              >
                <option value="popular">{t.filterSortPopular}</option>
                <option value="rating">{t.filterSortRating}</option>
                <option value="price-asc">{t.filterSortPriceAsc}</option>
                <option value="price-desc">{t.filterSortPriceDesc}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Trips Grid with Staggered Entrance Animation */}
        {filteredTrips.length > 0 ? (
          <div
            key={`${selectedCategory}-${sortBy}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredTrips.map((trip, idx) => (
              <motion.div
                key={trip.id}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
                className="h-full flex flex-col"
              >
                <TripCard
                  trip={trip}
                  currentCurrency={currentCurrency}
                  currentLanguage={currentLanguage}
                  onSelectTrip={onSelectTrip}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#111111] border border-[#222222] rounded-xl p-8">
            <p className="text-neutral-400 text-sm mb-4">
              {currentLanguage === 'ar' 
                ? `لم يتم العثور على رحلات مطابقة لبحثك "${searchQuery}".` 
                : `No excursions found matching your filter "${searchQuery}".`}
            </p>
            <button
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
              className="px-5 py-2.5 rounded-lg bg-[#D4AF37] text-black font-bold text-xs"
            >
              {currentLanguage === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset All Filters'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
