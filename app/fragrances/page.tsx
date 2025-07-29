import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { perfumes, Perfume } from '@/lib/data';
import FragranceCarousel from '@/components/fragrance-carousel';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Fragrances by Category',
  description: 'Explore our complete collection of fine fragrances, organized by scent family. Find your perfect floral, woody, fresh, or spicy perfume.',
};

export default function AllFragrancesPage() {
  const perfumesByCategory = perfumes.reduce((acc, perfume) => {
    const category = perfume.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(perfume);
    return acc;
  }, {} as Record<string, Perfume[]>);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 text-center md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              All Fragrances
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Discover your perfect scent, organized by fragrance family.
            </p>
          </div>
        </section>

        {Object.entries(perfumesByCategory).map(
          ([categoryName, categoryPerfumes], index) => (
            <div key={categoryName}>
              <section className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                  <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
                    {categoryName}
                  </h2>
                  {categoryPerfumes.length > 0 ? (
                    <FragranceCarousel
                      fragrances={categoryPerfumes}
                      size="sm"
                    />
                  ) : (
                    <p className="text-center text-foreground">
                      No perfumes found in this category.
                    </p>
                  )}
                </div>
              </section>
              {index < Object.keys(perfumesByCategory).length - 1 && (
                <div className="container mx-auto px-4">
                  <Separator className="my-8 md:my-12" />
                </div>
              )}
            </div>
          )
        )}
      </main>
      <Footer />
    </div>
  );
}
