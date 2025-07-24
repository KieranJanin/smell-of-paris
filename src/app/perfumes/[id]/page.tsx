
'use client';

import { perfumes } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ShoppingCart, Heart } from 'lucide-react';

export default function PerfumePage({ params }: { params: { id: string } }) {
  const perfume = perfumes.find((p) => p.id.toString() === params.id);

  if (!perfume) {
    notFound();
  }
  
  if (typeof document !== 'undefined') {
    document.title = `${perfume.name} by ${perfume.brand} | Smell of Paris`;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div className="flex items-center justify-center">
              <Image
                src={perfume.imageUrl}
                alt={`Perfume bottle for ${perfume.name} by ${perfume.brand}`}
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="perfume bottle"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-2xl text-accent">{perfume.brand}</h2>
              <h1 className="font-headline text-4xl font-bold text-primary md:text-5xl">
                {perfume.name}
              </h1>
              <p className="mt-4 font-body text-2xl font-semibold text-foreground">
                {perfume.price}
              </p>
              <Separator className="my-6" />
              <p className="font-body text-lg text-foreground/80">
                {perfume.description}
              </p>
              <div className="mt-6">
                <Badge variant="secondary" className="text-sm">{perfume.category}</Badge>
              </div>

              <div className="mt-8 flex space-x-4">
                <Button size="lg" className="w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-12 md:my-16" />

          <div className="text-center">
            <h3 className="font-headline text-3xl font-bold text-primary">
              Fragrance Notes
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="font-headline text-xl font-semibold text-accent">Top Notes</h4>
                <p className="mt-2 text-foreground/80">{perfume.notes.top.join(', ')}</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="font-headline text-xl font-semibold text-accent">Middle Notes</h4>
                <p className="mt-2 text-foreground/80">{perfume.notes.middle.join(', ')}</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="font-headline text-xl font-semibold text-accent">Base Notes</h4>
                <p className="mt-2 text-foreground/80">{perfume.notes.base.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
