'use client';

import type { Perfume } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FragranceCarouselProps {
  fragrances: Perfume[];
}

export default function FragranceCarousel({
  fragrances,
}: FragranceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const numItems = fragrances.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + numItems) % numItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % numItems);
  };

  return (
    <div className="relative flex h-[550px] w-full items-center justify-center">
      <div
        className="relative"
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '500px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {fragrances.map((fragrance, i) => {
          const offset = (i - activeIndex + numItems) % numItems;
          const isCenter = offset === 0;
          const isLeft = offset === numItems - 1;
          const isRight = offset === 1;
          const isFarLeft = offset === numItems - 2;
          const isFarRight = offset === 2;

          let transform = 'translateX(0) translateZ(-800px) scale(0.4) rotateY(0)';
          let opacity = 0;
          let zIndex = 1;

          if (isCenter) {
            transform = 'translateX(0) translateZ(0) scale(1)';
            opacity = 1;
            zIndex = 10;
          } else if (isLeft) {
            transform =
              'translateX(-55%) translateZ(-150px) rotateY(35deg) scale(0.8)';
            opacity = 1;
            zIndex = 5;
          } else if (isRight) {
            transform =
              'translateX(55%) translateZ(-150px) rotateY(-35deg) scale(0.8)';
            opacity = 1;
            zIndex = 5;
          } else if (isFarLeft) {
            transform =
              'translateX(-90%) translateZ(-350px) rotateY(45deg) scale(0.6)';
            opacity = 0.5;
            zIndex = 2;
          } else if (isFarRight) {
            transform =
              'translateX(90%) translateZ(-350px) rotateY(-45deg) scale(0.6)';
            opacity = 0.5;
            zIndex = 2;
          }
          
          return (
            <div
              key={fragrance.id}
              className="absolute left-1/2 top-0 -ml-[150px] transition-all duration-500 ease-in-out"
              style={{
                width: '300px',
                transform,
                opacity,
                zIndex,
              }}
            >
              <Card className="h-[480px] w-[300px] overflow-hidden bg-card shadow-2xl">
                <CardHeader className="p-0">
                  <Image
                    src={fragrance.imageUrl}
                    alt={fragrance.name}
                    width={300}
                    height={300}
                    className="h-[300px] w-full object-cover"
                    data-ai-hint="perfume bottle"
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
    </div>
  );
}
