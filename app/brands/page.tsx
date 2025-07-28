

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { designerBrands, nicheBrands } from '@/lib/data';
import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfume Brands - Designer & Niche',
  description: 'Explore our curated selection of the world\'s finest designer and niche fragrance brands. Shop from Chanel, Dior, Creed, and more.',
};

export default function AllBrandsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 text-center md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Our Brands
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Explore our curated selection of the world's finest fragrances.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Designer Brands
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {designerBrands.map((brand) => (
                <Link
                  href={`/brands/${brand.toLowerCase().replace(/ /g, '-')}`}
                  key={brand}
                  aria-label={`View perfumes from ${brand}`}
                >
                  <Card className="h-full transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="text-center">
                      <CardTitle className="font-headline text-2xl text-accent">
                        {brand}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        <div className="container mx-auto px-4">
            <Separator className="my-8 md:my-12" />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Niche Brands
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {nicheBrands.map((brand) => (
                <Link
                  href={`/brands/${brand.toLowerCase().replace(/ /g, '-')}`}
                  key={brand}
                  aria-label={`View perfumes from ${brand}`}
                >
                   <Card className="h-full transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <CardHeader className="text-center">
                      <CardTitle className="font-headline text-2xl text-accent">
                        {brand}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
