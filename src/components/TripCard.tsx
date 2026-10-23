import React, { useRef } from 'react';
import { 
  Star, 
  Clock, 
  Car, 
  Check, 
  ArrowUpRight, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Trip, CurrencyCode, LanguageCode } from '../types';
import { CURRENCIES } from '../data/trips';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice, generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { ProgressiveImage } from './ProgressiveImage';
import { getLocalizedTrip } from '../utils/localizedTrips';

interface TripCardProps {
  trip: Trip;
  currentCurrency: CurrencyCode;
  currentLanguage: LanguageCode;
  onSelectTrip: (trip: Trip) => void;
}

export const TripCard: React.FC<TripCardProps> = ({
  trip,
  currentCurrency,
  currentLanguage,
  onSelectTrip
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const currencyObj = CURRENCIES[currentCurrency] || CURRENCIES.EUR;
  const localizedTrip = getLocalizedTrip(trip, currentLanguage);

  // Motion values for subtle 3D cinematic tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Silky smooth spring physics
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);
  const glowOpacity = useSpring(useTransform(x, [-0.5, 0.5], [0.15, 0.35]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const currentPriceFormatted = formatPrice(
    trip.priceUSD, 
    currencyObj.code, 
    currencyObj.rateToUSD, 
    currencyObj.symbol
  );

  const originalPriceFormatted = trip.originalPriceUSD 
    ? formatPrice(trip.originalPriceUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol)
    : null;

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.018,
          transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] }
        }}
        className="aquaway-card group rounded-xl overflow-hidden flex flex-col justify-between h-full relative transition-shadow duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(212,175,55,0.12)] border border-[#222222] hover:border-[#D4AF37]/50"
        id={`trip-card-${trip.id}`}
        data-trip-id={trip.id}
        itemScope
        itemType="https://schema.org/TouristTrip"
      >
        {/* Subtle dynamic ambient light sheen */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-tr from-transparent via-[#D4AF37]/[0.04] to-white/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" 
        />

        <meta itemProp="name" content={localizedTrip.title} />
        <meta itemProp="description" content={localizedTrip.subtitle} />
        <meta itemProp="touristType" content={localizedTrip.categoryLabel} />
        <meta itemProp="image" content={trip.images[0]} />

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="price" content={String(trip.priceUSD)} />
          <meta itemProp="priceCurrency" content="USD" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
        </div>

        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <meta itemProp="ratingValue" content={String(trip.rating)} />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="ratingCount" content={String(trip.reviewsCount)} />
        </div>

        <div>
          {/* Card Image Container with Progressive Blur-Up */}
          <div className="relative h-56 sm:h-60 overflow-hidden bg-[#1a1a1a]">
            <ProgressiveImage
              src={trip.images[0]}
              alt={localizedTrip.title}
              itemProp="image"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 z-[5] bg-gradient-to-t from-[#111111] via-transparent to-black/30 pointer-events-none" />

            {/* Top Badges */}
            <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 flex flex-wrap gap-1.5 z-10">
              {localizedTrip.badge && (
                <span className="px-2.5 py-1 rounded bg-[#D4AF37] text-black text-[11px] font-bold tracking-wide uppercase shadow-md flex items-center gap-1 transition-transform group-hover:scale-105 duration-300">
                  <Sparkles className="w-3 h-3 fill-black text-transparent" />
                  {localizedTrip.badge}
                </span>
              )}
              {trip.isVIP && (
                <span className="px-2 py-1 rounded bg-[#1f1a10] border border-[#D4AF37]/50 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
                  VIP
                </span>
              )}
            </div>

            {/* Duration & Rating Overlay at Bottom of Image */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-neutral-200 border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{localizedTrip.duration}</span>
              </div>

              <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-white font-semibold border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors duration-300">
                <Star className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
                <span>{trip.rating}</span>
                <span className="text-neutral-400 text-[10px]">({trip.reviewsCount})</span>
              </div>
            </div>
          </div>

          {/* Card Content Area */}
          <div className="p-4 sm:p-5 text-left rtl:text-right">
            {/* Category & Pickup info */}
            <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
              <span className="text-[#D4AF37] font-semibold uppercase tracking-wider">
                {localizedTrip.categoryLabel}
              </span>
              <span className="flex items-center gap-1 text-neutral-400">
                <Car className="w-3 h-3 text-[#D4AF37]" />
                {t.cardPickup}
              </span>
            </div>

            {/* Title in Playfair Display */}
            <h3 
              onClick={() => onSelectTrip(trip)}
              className="font-serif text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer line-clamp-2 mb-2"
            >
              {localizedTrip.title}
            </h3>

            {/* Subtitle / Teaser */}
            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
              {localizedTrip.subtitle}
            </p>

            {/* Key highlights (first 3) */}
            <ul className="space-y-1.5 mb-4 text-xs text-neutral-300">
              {localizedTrip.highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer / Pricing & Actions */}
        <div className="p-4 sm:p-5 pt-0 border-t border-[#1f1f1f] mt-auto">
          <div className="flex items-baseline justify-between pt-3 mb-3.5">
            <div>
              <span className="text-[11px] text-neutral-400 block">{t.cardFrom}</span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#F3E5AB] transition-colors duration-300">
                  {currentPriceFormatted}
                </span>
                {originalPriceFormatted && (
                  <span className="text-xs text-neutral-500 line-through">
                    {originalPriceFormatted}
                  </span>
                )}
                <span className="text-[11px] text-neutral-400">{t.cardPerPerson}</span>
              </div>
            </div>

            {/* Discount Pill if applicable */}
            {trip.originalPriceUSD && (
              <span className="text-[10px] font-bold text-[#FFD700] bg-[#221c0b] border border-[#D4AF37]/30 px-2 py-0.5 rounded">
                SAVE {Math.round(((trip.originalPriceUSD - trip.priceUSD) / trip.originalPriceUSD) * 100)}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectTrip(trip)}
              className="w-full py-2.5 px-3 rounded-lg bg-[#1a1a1a] border border-[#333333] hover:border-[#D4AF37] hover:bg-[#222222] text-white text-xs font-semibold flex items-center justify-center gap-1 group/btn transition-all duration-200 cursor-pointer"
              id={`view-details-btn-${trip.id}`}
            >
              <span>{t.cardViewDetails}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-[#D4AF37] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </button>

            <a
              href={generateWhatsAppBookingUrl({
                tripTitle: localizedTrip.title,
                currency: currencyObj.symbol,
                totalPrice: formatPrice(trip.priceUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol),
                language: currentLanguage
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-[#D4AF37] hover:bg-[#FFD700] hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] text-black text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer"
              id={`quick-whatsapp-btn-${trip.id}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black text-transparent" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

