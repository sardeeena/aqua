import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize2, 
  Minimize2, 
  Hand, 
  ArrowLeftRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { ProgressiveImage } from './ProgressiveImage';
import { useSwipe } from '../hooks/useSwipe';
import { LanguageCode } from '../types';
import { SECTION_TRANSLATIONS } from '../data/extendedTranslations';
import { getResponsiveImageSrcSet, getOptimizedImageUrl } from '../utils/imageOptimization';

interface GalleryImage {
  url: string;
  title: string;
  titleAr?: string;
  category: 'islands' | 'marine' | 'diving' | 'safari' | 'yachts';
  categoryLabel: string;
  categoryLabelAr?: string;
  location: string;
  locationAr?: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    title: 'Crystal Clear Snorkeling at Abu Ramada Reef',
    titleAr: 'سنوركلينج بمياه نقية في شعاب أبو رمادة',
    category: 'diving',
    categoryLabel: 'Scuba & Snorkel',
    categoryLabelAr: 'غوص وسنوركلينج',
    location: 'Abu Ramada Island',
    locationAr: 'جزيرة أبو رمادة'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    title: 'Turquoise Waters of Orange Bay Island',
    titleAr: 'المياه الفيروزية الساحرة بجزيرة أورانج باي',
    category: 'islands',
    categoryLabel: 'Islands',
    categoryLabelAr: 'الجزر البحرية',
    location: 'Giftun Island',
    locationAr: 'جزيرة جفتون'
  },
  {
    url: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&w=1200&q=80',
    title: 'Wild Spinner Dolphins Encounter',
    titleAr: 'مشاهدة الدلافين الدوارة البرية في بيئتها',
    category: 'marine',
    categoryLabel: 'Marine Life',
    categoryLabelAr: 'الحياة البحرية',
    location: 'Shaab El Erg Dolphin House',
    locationAr: 'بيت الدلافين - شعب العرق'
  },
  {
    url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    title: 'Golden Sunset ATV Quad Biking in Sahara',
    titleAr: 'مغامرة بيتش باجي وقت الغروب الذهبي في الصحراء',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    categoryLabelAr: 'سفاري صحراوي',
    location: 'Eastern Desert Mountains',
    locationAr: 'جبال الصحراء الشرقية'
  },
  {
    url: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&w=1200&q=80',
    title: 'VIP Private Speedboat Charter',
    titleAr: 'تأجير لانش سريع خاص VIP في الغردقة',
    category: 'yachts',
    categoryLabel: 'Luxury Yachts',
    categoryLabelAr: 'يخوت فاخرة',
    location: 'Hurghada Private Pier',
    locationAr: 'مارينا الغردقة الخاصة'
  },
  {
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
    title: 'Coral Pinnacles & Sea Turtle Encounter',
    titleAr: 'أبراج المرجان والسلاحف البحرية النادرة',
    category: 'marine',
    categoryLabel: 'Marine Life',
    categoryLabelAr: 'الحياة البحرية',
    location: 'Careless Reef',
    locationAr: 'كارلس ريف'
  },
  {
    url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    title: 'Candlelight Bedouin Camp Under the Stars',
    titleAr: 'مخيم بدوي بأضواء الشموع تحت سماء النجوم',
    category: 'safari',
    categoryLabel: 'Desert Safari',
    categoryLabelAr: 'سفاري صحراوي',
    location: 'Stargazing Basecamp',
    locationAr: 'مخيم رصد النجوم'
  },
  {
    url: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&w=1200&q=80',
    title: 'Paradise Island Sandy Lagoons',
    titleAr: 'بحيرات شاطئ جزيرة باراديس الخلابة',
    category: 'islands',
    categoryLabel: 'Islands',
    categoryLabelAr: 'الجزر البحرية',
    location: 'Paradise Island',
    locationAr: 'جزيرة باراديس'
  }
];

interface GallerySectionProps {
  currentLanguage?: LanguageCode;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLanguage = 'en' }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'islands' | 'marine' | 'diving' | 'safari' | 'yachts'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Full-screen lightbox zoom & pan states
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const lightboxContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  const s = SECTION_TRANSLATIONS[currentLanguage] || SECTION_TRANSLATIONS.en;
  const isAr = currentLanguage === 'ar';

  const filterCategories = [
    { id: 'all', label: s.galleryFilterAll },
    { id: 'islands', label: s.galleryFilterIslands },
    { id: 'marine', label: s.galleryFilterMarine },
    { id: 'diving', label: s.galleryFilterDiving },
    { id: 'safari', label: s.galleryFilterSafari },
    { id: 'yachts', label: s.galleryFilterYachts }
  ];

  const filtered = GALLERY_IMAGES.filter(
    img => activeFilter === 'all' || img.category === activeFilter
  );

  // Reset zoom & pan whenever active photo changes
  const resetZoomAndPan = useCallback(() => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      resetZoomAndPan();
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  }, [lightboxIndex, filtered.length, resetZoomAndPan]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      resetZoomAndPan();
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  }, [lightboxIndex, filtered.length, resetZoomAndPan]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleToggleZoom = () => {
    if (zoomLevel > 1) {
      resetZoomAndPan();
    } else {
      setZoomLevel(2);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      lightboxContainerRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Touch swipe hook (active when zoom is 1x)
  const lightboxSwipe = useSwipe({
    onSwipedLeft: isAr ? handlePrev : handleNext,
    onSwipedRight: isAr ? handleNext : handlePrev,
    minSwipeDistance: 45
  });

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      resetZoomAndPan();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, resetZoomAndPan]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[lightboxIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [lightboxIndex]);

  // Keyboard navigation & Shortcuts for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'ArrowRight') {
        isAr ? handlePrev() : handleNext();
      } else if (e.key === 'ArrowLeft') {
        isAr ? handleNext() : handlePrev();
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
        resetZoomAndPan();
      } else if (e.key === 'f' || e.key === 'F') {
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, isAr, handleNext, handlePrev, resetZoomAndPan]);

  // Mouse wheel zoom in Lightbox
  const handleWheel = (e: React.WheelEvent) => {
    if (lightboxIndex === null) return;
    if (e.deltaY < 0) {
      setZoomLevel(prev => Math.min(prev + 0.25, 3));
    } else {
      setZoomLevel(prev => {
        const next = Math.max(prev - 0.25, 1);
        if (next === 1) setPanOffset({ x: 0, y: 0 });
        return next;
      });
    }
  };

  // Pan dragging handlers when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    e.preventDefault();
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="gallery" className="py-20 px-4 sm:px-8 bg-[#0d0d0d] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>{s.galleryBadge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {s.galleryTitleMain} <span className="gold-text-gradient italic">{s.galleryTitleHighlight}</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {s.gallerySubtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveFilter(cat.id as any);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                  : 'bg-[#141414] border border-[#262626] text-neutral-300 hover:text-white hover:border-[#D4AF37]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((img, idx) => {
            const title = isAr && img.titleAr ? img.titleAr : img.title;
            const categoryLabel = isAr && img.categoryLabelAr ? img.categoryLabelAr : img.categoryLabel;
            const location = isAr && img.locationAr ? img.locationAr : img.location;

            return (
              <div
                key={idx}
                onClick={() => {
                  resetZoomAndPan();
                  setLightboxIndex(idx);
                }}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer bg-[#161616] border border-[#262626] hover:border-[#D4AF37]/60 transition-all shadow-md"
              >
                <ProgressiveImage
                  src={getOptimizedImageUrl(img.url, 600, 75)}
                  srcSet={getResponsiveImageSrcSet(img.url, [360, 480, 640, 960, 1200])}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  alt={title}
                  loading="lazy"
                  priority={false}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />

                {/* Hover Action Badge */}
                <div className="absolute top-3 right-3 rtl:right-auto rtl:left-3 z-10 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
                  <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-3 inset-x-3 z-10 text-left rtl:text-right pointer-events-none">
                  <span className="text-[10px] uppercase font-bold text-[#D4AF37] block mb-0.5">
                    {categoryLabel} • {location}
                  </span>
                  <h4 className="text-xs font-semibold text-white line-clamp-1 group-hover:text-[#FFF6D0] transition-colors">
                    {title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-Screen Interactive Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            ref={lightboxContainerRef}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between select-none overflow-hidden animate-in fade-in duration-200"
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onClick={(e) => {
              // Close if clicked directly on background backdrop
              if (e.target === e.currentTarget && zoomLevel === 1) {
                setLightboxIndex(null);
              }
            }}
          >
            {/* 1. Lightbox Top Header Toolbar */}
            <div className="relative z-40 w-full px-4 sm:px-8 py-3.5 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent border-b border-white/5">
              {/* Left: Counter & Category Tag */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-[#1a1a1a] border border-[#333333] px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-200 shadow-md">
                  <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>
                    <strong className="text-[#D4AF37]">{lightboxIndex + 1}</strong> / {filtered.length}
                  </span>
                </div>

                <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#221c0e] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  {isAr && filtered[lightboxIndex].categoryLabelAr ? filtered[lightboxIndex].categoryLabelAr : filtered[lightboxIndex].categoryLabel}
                </span>
              </div>

              {/* Center: Zoom Level Badge & Shortcuts hint */}
              <div className="flex items-center gap-2">
                {zoomLevel > 1 && (
                  <span className="bg-[#D4AF37] text-black text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-in zoom-in-90">
                    {Math.round(zoomLevel * 100)}% {isAr ? 'تكبير' : 'Zoom'}
                  </span>
                )}
              </div>

              {/* Right Controls: Zoom, Fullscreen, Close */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Zoom Out Button */}
                <button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 1}
                  className={`p-2 rounded-full bg-[#181818] border border-[#2a2a2a] transition-all cursor-pointer ${
                    zoomLevel <= 1 ? 'text-neutral-600 opacity-50 cursor-not-allowed' : 'text-neutral-200 hover:text-white hover:border-[#D4AF37]/60'
                  }`}
                  title={isAr ? 'تصغير (-)' : 'Zoom Out (-)'}
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                {/* Zoom In Button */}
                <button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  className={`p-2 rounded-full bg-[#181818] border border-[#2a2a2a] transition-all cursor-pointer ${
                    zoomLevel >= 3 ? 'text-neutral-600 opacity-50 cursor-not-allowed' : 'text-neutral-200 hover:text-white hover:border-[#D4AF37]/60'
                  }`}
                  title={isAr ? 'تكبير (+)' : 'Zoom In (+)'}
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                {/* Reset Zoom Button (when zoomed) */}
                {zoomLevel > 1 && (
                  <button
                    onClick={resetZoomAndPan}
                    className="p-2 rounded-full bg-[#181818] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#222222] transition-all cursor-pointer"
                    title={isAr ? 'إعادة ضبط الحجم (0)' : 'Reset Zoom (0)'}
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}

                {/* Fullscreen Toggle */}
                <button
                  onClick={handleToggleFullscreen}
                  className="hidden sm:flex p-2 rounded-full bg-[#181818] border border-[#2a2a2a] text-neutral-200 hover:text-white hover:border-[#D4AF37]/60 transition-all cursor-pointer"
                  title={isFullscreen ? (isAr ? 'إنهاء وضع ملء الشاشة' : 'Exit Fullscreen') : (isAr ? 'وضع ملء الشاشة' : 'Toggle Fullscreen')}
                  aria-label="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                <div className="w-px h-5 bg-white/10 mx-1" />

                {/* Close Button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full bg-[#181818] hover:bg-[#252525] border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer shadow-lg"
                  aria-label="Close Lightbox (Esc)"
                  title={isAr ? 'إغلاق (Esc)' : 'Close (Esc)'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Main Center Stage with Navigation Buttons */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden px-4 sm:px-16 my-auto">
              {/* Previous Image Chevron */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-white bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#D4AF37] rounded-full cursor-pointer z-30 transition-all active:scale-95 rtl:rotate-180 shadow-2xl hover:scale-105"
                aria-label="Previous image"
                title={isAr ? 'الصورة السابقة (سهم يسار)' : 'Previous Image (Left Arrow)'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Interactive Zoomable Image Stage */}
              <div
                className={`relative max-w-5xl w-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center select-none ${
                  zoomLevel > 1 
                    ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') 
                    : 'cursor-zoom-in'
                }`}
                onMouseDown={handleMouseDown}
                onDoubleClick={handleToggleZoom}
                onTouchStart={zoomLevel === 1 ? lightboxSwipe.onTouchStart : undefined}
                onTouchMove={zoomLevel === 1 ? lightboxSwipe.onTouchMove : undefined}
                onTouchEnd={zoomLevel === 1 ? lightboxSwipe.onTouchEnd : undefined}
                style={{
                  transform: zoomLevel === 1 && lightboxSwipe.isSwiping 
                    ? `translateX(${lightboxSwipe.swipeOffset * 0.4}px)` 
                    : 'none',
                  transition: lightboxSwipe.isSwiping ? 'none' : 'transform 0.2s ease-out'
                }}
              >
                <div
                  className="relative transition-transform duration-200 ease-out will-change-transform"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                    transformOrigin: 'center center'
                  }}
                >
                  <ProgressiveImage
                    src={getOptimizedImageUrl(filtered[lightboxIndex].url, 1400, 88)}
                    srcSet={getResponsiveImageSrcSet(filtered[lightboxIndex].url, [640, 960, 1200, 1600, 2000])}
                    sizes="(max-width: 768px) 95vw, 85vw"
                    alt={isAr && filtered[lightboxIndex].titleAr ? filtered[lightboxIndex].titleAr! : filtered[lightboxIndex].title}
                    priority={true}
                    loading="eager"
                    containerClassName="max-h-[65vh] sm:max-h-[70vh] w-auto rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden border border-white/10"
                    className="max-h-[65vh] sm:max-h-[70vh] w-auto object-contain pointer-events-none"
                  />
                </div>
              </div>

              {/* Next Image Chevron */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-white bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#D4AF37] rounded-full cursor-pointer z-30 transition-all active:scale-95 rtl:rotate-180 shadow-2xl hover:scale-105"
                aria-label="Next image"
                title={isAr ? 'الصورة التالية (سهم يمين)' : 'Next Image (Right Arrow)'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* 3. Bottom Caption & Thumbnail Strip Drawer */}
            <div className="relative z-40 w-full px-4 sm:px-8 py-3.5 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/5 flex flex-col items-center gap-3">
              {/* Photo Title & Location Info */}
              <div className="text-center max-w-xl">
                <h3 className="text-white font-serif text-base sm:text-lg font-bold">
                  {isAr && filtered[lightboxIndex].titleAr ? filtered[lightboxIndex].titleAr : filtered[lightboxIndex].title}
                </h3>
                <div className="flex items-center justify-center gap-2 mt-0.5 text-xs text-neutral-400">
                  <span className="text-[#D4AF37] font-medium">
                    {isAr && filtered[lightboxIndex].categoryLabelAr ? filtered[lightboxIndex].categoryLabelAr : filtered[lightboxIndex].categoryLabel}
                  </span>
                  <span>•</span>
                  <span>
                    {isAr && filtered[lightboxIndex].locationAr ? filtered[lightboxIndex].locationAr : filtered[lightboxIndex].location}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip Carousel */}
              <div 
                ref={thumbnailStripRef}
                className="flex items-center gap-2 overflow-x-auto max-w-3xl py-1 px-2 no-scrollbar"
              >
                {filtered.map((thumb, tIdx) => {
                  const isCurrent = tIdx === lightboxIndex;
                  return (
                    <button
                      key={tIdx}
                      onClick={() => {
                        resetZoomAndPan();
                        setLightboxIndex(tIdx);
                      }}
                      className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        isCurrent 
                          ? 'border-[#D4AF37] scale-105 shadow-[0_0_12px_rgba(212,175,55,0.4)] opacity-100' 
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                      aria-label={`Jump to photo ${tIdx + 1}`}
                    >
                      <ProgressiveImage
                        src={getOptimizedImageUrl(thumb.url, 160, 60)}
                        alt="thumb"
                        containerClassName="w-full h-full"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>

              {/* Zoom & Gestures Instruction Pill */}
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-neutral-400">
                <span className="flex items-center gap-1">
                  <Hand className="w-3 h-3 text-[#D4AF37]" />
                  {isAr ? 'انقر مرتين للتكبير • اسحب للتحريك عند التكبير' : 'Double-click to zoom • Drag to pan when zoomed'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ArrowLeftRight className="w-3 h-3 text-[#D4AF37]" />
                  {isAr ? 'الأسهم للتنقل' : 'Arrow keys to navigate'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
