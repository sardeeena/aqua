import { useState, useRef, TouchEvent, MouseEvent } from 'react';

interface SwipeInput {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
  minSwipeDistance?: number;
  preventScrollOnSwipe?: boolean;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent<HTMLElement>) => void;
  onTouchMove: (e: TouchEvent<HTMLElement>) => void;
  onTouchEnd: (e: TouchEvent<HTMLElement>) => void;
  onMouseDown: (e: MouseEvent<HTMLElement>) => void;
  onMouseMove: (e: MouseEvent<HTMLElement>) => void;
  onMouseUp: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
  isSwiping: boolean;
  swipeOffset: number;
}

export function useSwipe({
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwipedDown,
  minSwipeDistance = 45,
  preventScrollOnSwipe = false
}: SwipeInput): SwipeOutput {
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const isMouseDown = useRef(false);

  // Touch Handlers
  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    if (e.touches.length !== 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const onTouchMove = (e: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;

    const diffX = touchEndX.current - touchStartX.current;
    const diffY = touchEndY.current - touchStartY.current;

    // Only set horizontal offset if movement is more horizontal than vertical
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setSwipeOffset(diffX);
      if (preventScrollOnSwipe && e.cancelable) {
        e.preventDefault();
      }
    }
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      setIsSwiping(false);
      setSwipeOffset(0);
      return;
    }

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = (touchStartY.current || 0) - (touchEndY.current || 0);

    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      if (distanceX > minSwipeDistance) {
        // Swiped Left (Next)
        if (onSwipedLeft) onSwipedLeft();
      } else if (distanceX < -minSwipeDistance) {
        // Swiped Right (Prev)
        if (onSwipedRight) onSwipedRight();
      }
    } else {
      if (distanceY > minSwipeDistance) {
        if (onSwipedUp) onSwipedUp();
      } else if (distanceY < -minSwipeDistance) {
        if (onSwipedDown) onSwipedDown();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
    setIsSwiping(false);
    setSwipeOffset(0);
  };

  // Mouse Handlers (for desktop click-drag)
  const onMouseDown = (e: MouseEvent<HTMLElement>) => {
    isMouseDown.current = true;
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;
    setIsSwiping(true);
    setSwipeOffset(0);
  };

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!isMouseDown.current || touchStartX.current === null || touchStartY.current === null) return;
    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;

    const diffX = touchEndX.current - touchStartX.current;
    const diffY = touchEndY.current - touchStartY.current;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      setSwipeOffset(diffX);
    }
  };

  const onMouseUp = () => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    onTouchEnd();
  };

  const onMouseLeave = () => {
    if (isMouseDown.current) {
      isMouseDown.current = false;
      onTouchEnd();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    isSwiping,
    swipeOffset
  };
}
