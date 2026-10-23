import React, { useState, useEffect, useRef } from 'react';
import { getBlurPlaceholderUrl } from '../utils/imageOptimization';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  placeholderSrc?: string;
  containerClassName?: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  children?: React.ReactNode;
  onImageLoaded?: () => void;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  srcSet,
  sizes,
  placeholderSrc,
  containerClassName = '',
  className = '',
  priority = false,
  aspectRatio,
  children,
  onImageLoaded,
  itemProp,
  loading,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLowResLoaded, setIsLowResLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const blurUrl = placeholderSrc || getBlurPlaceholderUrl(src);

  // Check if image is already cached / completed
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);

    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
      if (onImageLoaded) onImageLoaded();
    }
  }, [src, onImageLoaded]);

  const handleFullImageLoad = () => {
    setIsLoaded(true);
    if (onImageLoaded) onImageLoaded();
  };

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#141414] ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* 1. Base Shimmer Skeleton Pulse (Active until full image or low-res is loaded) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#151515] animate-pulse pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#242424]/40 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
      )}

      {/* 2. Micro Low-Res Blur Placeholder (LQIP) */}
      {!isLoaded && blurUrl && !hasError && (
        <img
          src={blurUrl}
          alt=""
          aria-hidden="true"
          loading="eager"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLowResLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover filter blur-lg scale-110 transition-opacity duration-500 z-[1] ${
            isLowResLoaded ? 'opacity-90' : 'opacity-0'
          }`}
        />
      )}

      {/* 3. High-Resolution Full Image */}
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : (loading || 'lazy')}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        itemProp={itemProp}
        onLoad={handleFullImageLoad}
        onError={handleImageError}
        className={`relative z-[2] w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded
            ? 'opacity-100 filter-none scale-100'
            : 'opacity-0 filter blur-md scale-105'
        } ${className}`}
        {...rest}
      />

      {/* 4. Error Fallback state */}
      {hasError && (
        <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center bg-[#1c1c1c] text-neutral-400 p-4 text-center">
          <span className="text-xs font-medium">Image unavailable</span>
        </div>
      )}

      {/* 5. Optional Children / Overlays (e.g. Badges, Gradients, Labels) */}
      {children && <div className="z-[4] relative">{children}</div>}
    </div>
  );
};
