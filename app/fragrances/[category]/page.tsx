'use client';

import { perfumes, Perfume } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FragranceCarousel from '@/components/fragrance-carousel';
import { Separator } from '@/components/ui/separator';
import { useMemo } from 'react';
import { use } from 'react';

// This is a client component, so we can't export metadata directly.
// We'll manage the title dynamically in the component.

// export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
//   const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);
//   return {
//     title: `${categoryName} Fragrances`,
//     description: `Discover the best ${categoryName.toLowerCase()} fragrances. Browse our collection of perfumes from top designer and niche brands.`,
//   };
// }

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(use(params).category);

  const { categoryPerfumes, perfumesByBrand } = useMemo(() => {
    const filtered = perfumes.filter(
      (p) => p.category.toLowerCase() === categoryName
    );

    const grouped = filtered.reduce((acc, perfume) => {
      const brand = perfume.brand;
      if (!acc[brand]) {
        acc[brand] = [];
      }
      acc[brand].push(perfume);
      return acc;
    }, {} as Record<string, Perfume[]>);
    
    return { categoryPerfumes: filtered, perfumesByBrand: grouped };
  }, [categoryName]);


  const formattedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  if (typeof document !== 'undefined') {
    document.title = `${formattedCategoryName} Fragrances | Smell of Paris`;
  }

  if (categoryPerfumes.length === 0) {
     return (
       <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-grow">
           <section className="py-12 text-center md:py-20">
            <div className="container mx-auto px-4">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {formattedCategoryName} Fragrances
              </h1>
              <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
                No perfumes found in this category.
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
              {formattedCategoryName} Fragrances
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Discover scents from the {formattedCategoryName.toLowerCase()} family, organized by brand.
            </p>
          </div>
        </section>

        {Object.entries(perfumesByBrand).map(([brandName, brandPerfumes], index) => (
          <div key={brandName}>
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
                  {brandName}
                </h2>
                {brandPerfumes.length > 0 ? (
                  <FragranceCarousel fragrances={brandPerfumes} size="sm" />
                ) : (
                   <p className="text-center text-foreground">No {formattedCategoryName.toLowerCase()} perfumes from {brandName} in this collection.</p>
                )}
              </div>
            </section>
            {index < Object.keys(perfumesByBrand).length - 1 && (
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
