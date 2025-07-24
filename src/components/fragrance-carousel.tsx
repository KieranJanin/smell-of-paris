
'use client';

import type { Perfume } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FragranceCarouselProps {
  fragrances: Perfume[];
  size?: 'sm' | 'md';
}

export default function FragranceCarousel({
  fragrances,
  size = 'md',
}: FragranceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragRef = useRef({
    startX: 0,
    isDragging: false,
  });

  // Prevent crash if fragrances is empty or not an array
  if (!fragrances || fragrances.length === 0) {
    return null;
  }

  const numItems = fragrances.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % numItems);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragRef.current.isDragging = true;
    dragRef.current.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    (e.currentTarget as HTMLElement).style.cursor = 'grab';

    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragRef.current.startX - endX;
    const threshold = 50; // Min drag distance

    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrev();
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragRef.current.isDragging) return;
    e.preventDefault(); // Prevent text selection/page scroll
  };

  const dimensions = {
    sm: {
      containerHeight: 'h-[450px]',
      cardHeight: 'h-[380px]',
      cardWidth: 'w-[250px]',
      imageHeight: 'h-[220px]',
      perspective: '1000px',
      mainScale: 0.9,
      sideScale: 0.7,
      farScale: 0.5,
      zMain: '0',
      zSide: '-120px',
      zFar: '-300px',
      xSide: '50%',
      xFar: '80%',
      yRotateSide: '35deg',
      yRotateFar: '45deg',
      cardMl: '-ml-[125px]',
    },
    md: {
      containerHeight: 'h-[550px]',
      cardHeight: 'h-[480px]',
      cardWidth: 'w-[300px]',
      imageHeight: 'h-[300px]',
      perspective: '1200px',
      mainScale: 1,
      sideScale: 0.8,
      farScale: 0.6,
      zMain: '0',
      zSide: '-150px',
      zFar: '-350px',
      xSide: '55%',
      xFar: '90%',
      yRotateSide: '35deg',
      yRotateFar: '45deg',
      cardMl: '-ml-[150px]',
    },
  };

  const d = dimensions[size];

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center',
        d.containerHeight
      )}
    >
      <div
        className="relative"
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '100%',
          perspective: d.perspective,
          transformStyle: 'preserve-3d',
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onMouseMove={handleDragMove}
        onTouchMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {fragrances.map((fragrance, i) => {
          if (!fragrance) return null;
          const offset = (i - activeIndex + numItems) % numItems;
          const isCenter = offset === 0;

          // Only render a few cards for performance
          const maxVisible = 5;
          if (
            numItems > maxVisible &&
            offset > Math.floor(maxVisible / 2) &&
            offset < numItems - Math.floor(maxVisible / 2)
          ) {
            return null;
          }

          const isLeft = offset === numItems - 1;
          const isRight = offset === 1;
          const isFarLeft = offset === numItems - 2;
          const isFarRight = offset === 2;

          let transform =
            'translateX(0) translateZ(-800px) scale(0.4) rotateY(0)';
          let opacity = 0;
          let zIndex = 1;

          if (isCenter) {
            transform = `translateX(0) translateZ(${d.zMain}) scale(${d.mainScale})`;
            opacity = 1;
            zIndex = 10;
          } else if (isLeft) {
            transform = `translateX(-${d.xSide}) translateZ(${d.zSide}) rotateY(${d.yRotateSide}) scale(${d.sideScale})`;
            opacity = 1;
            zIndex = 5;
          } else if (isRight) {
            transform = `translateX(${d.xSide}) translateZ(${d.zSide}) rotateY(-${d.yRotateSide}) scale(${d.sideScale})`;
            opacity = 1;
            zIndex = 5;
          } else if (isFarLeft) {
            transform = `translateX(-${d.xFar}) translateZ(${d.zFar}) rotateY(${d.yRotateFar}) scale(${d.farScale})`;
            opacity = 0.5;
            zIndex = 2;
          } else if (isFarRight) {
            transform = `translateX(${d.xFar}) translateZ(${d.zFar}) rotateY(-${d.yRotateFar}) scale(${d.farScale})`;
            opacity = 0.5;
            zIndex = 2;
          }

          return (
            <div
              key={fragrance.id}
              className={cn(
                'absolute left-1/2 top-0 transition-all duration-500 ease-in-out',
                d.cardMl,
                d.cardWidth,
                { 'cursor-grab': !dragRef.current.isDragging, 'cursor-grabbing': dragRef.current.isDragging }
              )}
              style={{
                transform,
                opacity,
                zIndex,
              }}
            >
              <Card
                className={cn(
                  'pointer-events-none w-full select-none overflow-hidden bg-card shadow-2xl',
                  d.cardHeight
                )}
              >
                <CardHeader className="p-0">
                  <Image
                    src={fragrance.imageUrl}
                    alt={`Perfume bottle for ${fragrance.name} by ${fragrance.brand}`}
                    width={300}
                    height={300}
                    className={cn('w-full object-cover', d.imageHeight)}
                    data-ai-hint="perfume bottle"
                    draggable="false"
                  />
                </CardHeader>
                <CardContent className="p-4 text-center">
                  <p className="font-headline text-sm font-bold text-accent">
                    {fragrance.brand}
                  </p>
                  <CardTitle className="mt-1 font-headline text-xl text-primary">
                    {fragrance.name}
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-2 font-body text-sm">
                    {fragrance.description}
                  </CardDescription>
                  <p className="mt-4 font-bold text-lg">{fragrance.price}</p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      {numItems > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full"
            onClick={handlePrev}
            aria-label="Previous fragrance"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full"
            onClick={handleNext}
            aria-label="Next fragrance"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );
}
