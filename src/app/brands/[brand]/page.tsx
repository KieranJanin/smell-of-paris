
'use client';

import { perfumes, Perfume } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FragranceCarousel from '@/components/fragrance-carousel';
import { Separator } from '@/components/ui/separator';
import { useMemo } from 'react';

// This function can still be used for static generation if needed, but the page is now dynamic client-side.
// export async function generateStaticParams() {
//   const brands = [...new Set(perfumes.map((p) => p.brand))];
//   return brands.map((brand) => ({
//     brand: brand.toLowerCase().replace(/ /g, '-'),
//   }));
// }

export default function BrandPage({ params }: { params: { brand: string } }) {
  const brandName = params.brand.replace(/-/g, ' ');

  const { brandPerfumes, perfumesByCollection } = useMemo(() => {
    const filtered = perfumes.filter(
      (p) => p.brand.toLowerCase() === brandName
    );

    const grouped = filtered.reduce((acc, perfume) => {
      const collection = perfume.collection;
      if (!acc[collection]) {
        acc[collection] = [];
      }
      acc[collection].push(perfume);
      return acc;
    }, {} as Record<string, Perfume[]>);

    return { brandPerfumes: filtered, perfumesByCollection: grouped };
  }, [brandName]);


  const formattedBrandName = brandName
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  if (brandPerfumes.length === 0) {
    // Optional: Handle case where brand has no perfumes or brand is not found.
    return (
       <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
           <section className="py-12 text-center md:py-20">
            <div className="container mx-auto px-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {formattedBrandName}
              </h1>
              <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
                No perfumes found for this brand.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 text-center md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              {formattedBrandName}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Explore the unique collections from {formattedBrandName}.
            </p>
          </div>
        </section>

        {Object.entries(perfumesByCollection).map(([collectionName, collectionPerfumes], index) => (
          <div key={collectionName}>
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
                  {collectionName}
                </h2>
                {collectionPerfumes.length > 0 ? (
                  <FragranceCarousel fragrances={collectionPerfumes} size="sm" />
                ) : (
                  <p className="text-center text-foreground">No perfumes in this collection.</p>
                )}
              </div>
            </section>
            {index < Object.keys(perfumesByCollection).length - 1 && (
              <div className="container mx-auto px-4">
                <Separator className="my-8 md:my-12" />
              </div>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
