import React, { useState } from 'react';
import { 
  X, 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  ShieldCheck, 
  Check, 
  XCircle, 
  Calendar, 
  Car, 
  MessageCircle, 
  Sparkles,
  ChevronRight,
  Info,
  BadgeCheck
} from 'lucide-react';
import { Trip, CurrencyCode, LanguageCode } from '../types';
import { CURRENCIES, TRIPS } from '../data/trips';
import { TRANSLATIONS } from '../data/translations';
import { formatPrice, generateWhatsAppBookingUrl } from '../utils/whatsapp';
import { ProgressiveImage } from './ProgressiveImage';
import { getLocalizedTrip } from '../utils/localizedTrips';

interface TripDetailModalProps {
  trip: Trip | null;
  onClose: () => void;
  currentCurrency: CurrencyCode;
  currentLanguage: LanguageCode;
  onSelectTrip: (trip: Trip) => void;
}

export const TripDetailModal: React.FC<TripDetailModalProps> = ({
  trip,
  onClose,
  currentCurrency,
  currentLanguage,
  onSelectTrip
}) => {
  if (!trip) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'included' | 'bring'>('overview');
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Booking Form State
  const [bookingDate, setBookingDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const currencyObj = CURRENCIES[currentCurrency] || CURRENCIES.EUR;
  const localizedTrip = getLocalizedTrip(trip, currentLanguage);

  // Child price is 50% of adult price
  const childPriceUSD = Math.round(trip.priceUSD * 0.5);
  const totalUSD = (adults * trip.priceUSD) + (children * childPriceUSD);
  const formattedTotal = formatPrice(totalUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingDate || !guestName || !guestPhone || !hotelName) {
      alert(currentLanguage === 'ar' ? 'يرجى إكمال جميع بيانات الحجز المطلوبة.' : 'Please fill in all required booking details.');
      return;
    }
    setBookingSuccess(true);
  };

  const whatsappBookingUrl = generateWhatsAppBookingUrl({
    tripTitle: localizedTrip.title,
    date: bookingDate || 'To be confirmed',
    adults: adults,
    children: children,
    hotel: hotelName || 'To be provided',
    room: roomNumber,
    name: guestName,
    currency: currencyObj.symbol,
    totalPrice: formattedTotal,
    notes: specialNotes,
    language: currentLanguage
  });

  const relatedTrips = TRIPS.filter(t => t.id !== trip.id && (t.category === trip.category || t.isBestseller)).slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl my-auto text-left rtl:text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all cursor-pointer"
          aria-label="Close modal"
          id="close-trip-modal-btn"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Gallery Area */}
        <div className="relative h-72 sm:h-96 w-full bg-[#181818] overflow-hidden">
          <ProgressiveImage
            src={trip.images[activeImageIdx] || trip.images[0]}
            alt={localizedTrip.title}
            priority={true}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 z-[5] bg-gradient-to-t from-[#111111] via-transparent to-black/40 pointer-events-none" />

          {/* Badges & Rating */}
          <div className="absolute top-5 left-5 rtl:left-auto rtl:right-5 flex flex-wrap gap-2 z-10">
            {localizedTrip.badge && (
              <span className="px-3 py-1 rounded bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider shadow-md">
                {localizedTrip.badge}
              </span>
            )}
            <span className="px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-medium">
              {localizedTrip.categoryLabel}
            </span>
          </div>

          {/* Gallery Thumbnail Selector */}
          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between z-10">
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {trip.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImageIdx === idx ? 'border-[#D4AF37] scale-105' : 'border-black/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <ProgressiveImage
                    src={img}
                    alt="thumbnail"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white font-bold text-sm">
              <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span>{trip.rating}</span>
              <span className="text-neutral-400 text-xs font-normal">({trip.reviewsCount} {currentLanguage === 'ar' ? 'تقييم' : 'reviews'})</span>
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="p-5 sm:p-8">
          {/* Header Title & Pricing */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#222222]">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                {localizedTrip.title}
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {localizedTrip.subtitle}
              </p>
            </div>

            <div className="text-left rtl:text-right md:text-right rtl:md:text-left bg-[#161616] p-3.5 rounded-xl border border-[#282828] shrink-0">
              <span className="text-[11px] text-neutral-400 block">{t.cardFrom}</span>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                {formatPrice(trip.priceUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol)}
                <span className="text-xs text-neutral-400 font-sans font-normal ml-1 rtl:ml-0 rtl:mr-1">{t.cardPerPerson}</span>
              </div>
              <span className="text-[11px] text-emerald-400 flex items-center md:justify-end rtl:md:justify-start gap-1 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.freeCancellationBadge}
              </span>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-5 border-b border-[#222222] text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">{currentLanguage === 'ar' ? 'المدة' : 'Duration'}</span>
                <span>{localizedTrip.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">{currentLanguage === 'ar' ? 'نوع المجموعة' : 'Group Size'}</span>
                <span>{localizedTrip.groupSize}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Car className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">{currentLanguage === 'ar' ? 'التوصيل' : 'Hotel Pickup'}</span>
                <span className="text-emerald-400 font-medium">{currentLanguage === 'ar' ? 'مجاني من وإلى الفندق' : 'Free from your hotel'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">{currentLanguage === 'ar' ? 'نقطة الانطلاق' : 'Meeting Point'}</span>
                <span>{currentLanguage === 'ar' ? 'لوبي الفندق الخاص بك' : trip.meetingPoint}</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Content Tabs on Left, Booking Engine on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            {/* Left Content Area (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Tab Selector */}
              <div className="flex border-b border-[#262626] gap-2 sm:gap-6 text-xs sm:text-sm font-semibold">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-3 transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'overview'
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {currentLanguage === 'ar' ? 'تفاصيل الرحلة' : 'About This Trip'}
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`pb-3 transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'itinerary'
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.itineraryTitle}
                </button>
                <button
                  onClick={() => setActiveTab('included')}
                  className={`pb-3 transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'included'
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.includedTitle}
                </button>
                <button
                  onClick={() => setActiveTab('bring')}
                  className={`pb-3 transition-colors border-b-2 cursor-pointer ${
                    activeTab === 'bring'
                      ? 'border-[#D4AF37] text-[#D4AF37]'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.whatToBringTitle}
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === 'overview' && (
                <div className="space-y-5 text-sm text-neutral-300 leading-relaxed">
                  <div className="whitespace-pre-line text-neutral-300">
                    {localizedTrip.fullDescription}
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-base text-white mb-3">
                      {currentLanguage === 'ar' ? 'أبرز مميزات التجربة:' : 'Trip Highlights:'}
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {localizedTrip.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5 bg-[#161616] p-3 rounded-lg border border-[#222222]">
                          <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="text-xs text-neutral-200">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Itinerary */}
              {activeTab === 'itinerary' && (
                <div className="space-y-4">
                  <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l rtl:border-l-0 rtl:border-r border-[#D4AF37]/30 space-y-6">
                    {localizedTrip.itinerary.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-0 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-[#111111]" />
                        <div className="text-xs font-bold text-[#D4AF37] tracking-wider mb-1 uppercase">
                          {step.time}
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Included & Excluded */}
              {activeTab === 'included' && (
                <div className="space-y-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{t.includedTitle}</span>
                    </h4>
                    <ul className="space-y-2">
                      {localizedTrip.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#222222]">
                    <h4 className="font-serif font-bold text-white mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 text-amber-400" />
                      <span>{t.excludedTitle}</span>
                    </h4>
                    <ul className="space-y-2">
                      {localizedTrip.excluded.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-400">
                          <XCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Tab 4: What to bring */}
              {activeTab === 'bring' && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-white text-sm mb-3">
                    {currentLanguage === 'ar' ? 'أغراض يُنصح بإحضارها معاً:' : 'What to Bring with You:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {localizedTrip.whatToBring.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 bg-[#161616] p-3 rounded-lg border border-[#262626] text-xs text-neutral-200">
                        <Check className="w-4 h-4 text-[#D4AF37]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#1a160d] border border-[#D4AF37]/30 rounded-xl p-4 text-xs text-neutral-300 flex items-start gap-3 mt-4">
                    <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">
                        {currentLanguage === 'ar' ? 'جميع معدات السلامة مشمولة ومجانية' : 'All Safety Gear Included'}
                      </strong>
                      {currentLanguage === 'ar'
                        ? 'سترات النجاة، معدات الطفو، حقائب الإسعافات الأولية وأسطوانات الأكسجين الطبي متوفرة دائماً على متن مراكبنا.'
                        : 'Clean life jackets in all sizes (including kids), buoyancy vests, first aid kits, and emergency oxygen are always on board.'}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Booking Engine Area (5 Cols) */}
            <div className="lg:col-span-5 bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 sm:p-6 shadow-xl text-left rtl:text-right">
              <h3 className="font-serif text-lg font-bold text-white mb-1 flex items-center justify-between">
                <span>{t.modalBookTitle}</span>
                <span className="text-xs text-emerald-400 font-sans font-medium flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4" /> {currentLanguage === 'ar' ? 'حجز فوري' : 'Instant Confirmation'}
                </span>
              </h3>
              <p className="text-xs text-neutral-400 mb-5">
                {currentLanguage === 'ar' 
                  ? 'بدون دفع مسبق بالبطاقة. ادفع نقداً أو بالبطاقة عند الاستقبال.' 
                  : 'No upfront payment needed. Simply pay cash (or card) on the day of your trip.'}
              </p>

              {bookingSuccess ? (
                <div className="bg-[#122416] border border-emerald-500/40 rounded-xl p-5 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <BadgeCheck className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {currentLanguage === 'ar' ? 'تم استلام طلب الحجز بنجاح!' : 'Booking Received!'}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {currentLanguage === 'ar' ? (
                      <>شكراً لك، <strong className="text-white">{guestName}</strong>! يقوم فريق خدمة العملاء بتأكيد حجزك لـ <strong className="text-[#D4AF37]">{localizedTrip.title}</strong> بتاريخ <strong className="text-white">{bookingDate}</strong>.</>
                    ) : (
                      <>Thank you, <strong className="text-white">{guestName}</strong>! We're reserving your spots for <strong className="text-[#D4AF37]">{localizedTrip.title}</strong> on <strong className="text-white">{bookingDate}</strong>.</>
                    )}
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    {currentLanguage === 'ar'
                      ? <>سنتواصل معك عبر الواتساب (<span className="text-white">{guestPhone}</span>) لتأكيد موعد اصطحابك الدقيق من الفندق.</>
                      : <>We'll message you on WhatsApp (<span className="text-white">{guestPhone}</span>) the evening before with your exact hotel pickup time.</>}
                  </p>
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs"
                  >
                    {currentLanguage === 'ar' ? 'افتح الواتساب للتأكيد الآن' : 'Confirm Instantly on WhatsApp'}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-3.5 text-left rtl:text-right text-xs">
                  {/* Preferred Date */}
                  <div>
                    <label className="text-neutral-400 font-semibold block mb-1">
                      {t.modalDate} *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Guests: Adults and Children */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-neutral-400 font-semibold block mb-1">
                        {t.modalAdults}
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(Number(e.target.value))}
                        className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>
                            {num} {currentLanguage === 'ar' ? (num === 1 ? 'بالغ' : 'بالغين') : (num === 1 ? 'Adult' : 'Adults')}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-neutral-400 font-semibold block mb-1">
                        {t.modalChildren}
                      </label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(Number(e.target.value))}
                        className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      >
                        {[0, 1, 2, 3, 4, 5].map(num => (
                          <option key={num} value={num}>
                            {num} {currentLanguage === 'ar' ? (num === 0 ? 'أطفال' : (num === 1 ? 'طفل (خصم 50%)' : 'أطفال (خصم 50%)')) : (num === 1 ? 'Child (50% off)' : 'Children (50% off)')}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Hotel & Room */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="text-neutral-400 font-semibold block mb-1">
                        {t.modalHotel} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={currentLanguage === 'ar' ? 'مثال: فندق شتيجنبرجر الداو' : 'e.g. Steigenberger ALDAU'}
                        value={hotelName}
                        onChange={(e) => setHotelName(e.target.value)}
                        className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-400 font-semibold block mb-1">
                        {t.modalRoom}
                      </label>
                      <input
                        type="text"
                        placeholder={currentLanguage === 'ar' ? '302' : 'e.g. 302'}
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Guest Name & Phone */}
                  <div>
                    <label className="text-neutral-400 font-semibold block mb-1">
                      {t.modalFullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={currentLanguage === 'ar' ? 'الاسم الكامل' : 'e.g. John Doe'}
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-400 font-semibold block mb-1">
                      {t.modalPhone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={currentLanguage === 'ar' ? '+966 50 123 4567' : 'e.g. +44 7123 456789'}
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#1e1e1e] border border-[#333333] rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Pricing Total Summary Box */}
                  <div className="bg-[#1c1c1c] border border-[#333333] rounded-lg p-3.5 flex items-center justify-between my-2">
                    <div>
                      <span className="text-[11px] text-neutral-400 block">{t.modalTotalPrice}</span>
                      <span className="text-xs text-neutral-400">
                        {adults} {currentLanguage === 'ar' ? 'بالغين' : 'Adults'} {children > 0 ? `+ ${children} ${currentLanguage === 'ar' ? 'أطفال' : 'Child'}` : ''}
                      </span>
                    </div>
                    <div className="text-right rtl:text-left">
                      <span className="font-serif text-xl font-bold text-[#D4AF37]">
                        {formattedTotal}
                      </span>
                    </div>
                  </div>

                  {/* Direct WhatsApp Instant Booking */}
                  <a
                    href={whatsappBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-black text-transparent" />
                    <span>{t.modalWhatsAppInstant}</span>
                  </a>

                  {/* Or Submit Website Booking */}
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#1e1e1e] hover:bg-[#282828] border border-[#444444] text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    {t.modalSubmitBooking}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Related Excursions Section at bottom */}
          <div className="mt-12 pt-8 border-t border-[#222222]">
            <h4 className="font-serif text-lg font-bold text-white mb-4">
              {currentLanguage === 'ar' ? 'قد يعجبك أيضاً في الغردقة:' : 'You May Also Enjoy in Hurghada:'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedTrips.map((rel) => {
                const localizedRel = getLocalizedTrip(rel, currentLanguage);
                return (
                  <div
                    key={rel.id}
                    onClick={() => {
                      setActiveImageIdx(0);
                      onSelectTrip(rel);
                    }}
                    className="bg-[#161616] hover:bg-[#1c1c1c] border border-[#262626] hover:border-[#D4AF37]/50 rounded-xl p-3 flex items-center gap-3 cursor-pointer transition-all"
                  >
                    <ProgressiveImage
                      src={rel.images[0]}
                      alt={localizedRel.title}
                      containerClassName="w-16 h-14 rounded-lg overflow-hidden shrink-0"
                      className="w-full h-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-semibold text-white line-clamp-1">
                        {localizedRel.title}
                      </h5>
                      <span className="text-[11px] text-[#D4AF37] font-bold">
                        {formatPrice(rel.priceUSD, currencyObj.code, currencyObj.rateToUSD, currencyObj.symbol)}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-500 rtl:rotate-180" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
