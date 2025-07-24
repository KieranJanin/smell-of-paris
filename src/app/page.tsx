import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FragranceCarousel from '@/components/fragrance-carousel';
import FragranceFinder from '@/components/fragrance-finder';
import { perfumes } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 text-center md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl">
              Smell of Paris
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Discover your signature scent with our exclusive collection of fine
              fragrances.
            </p>
          </div>
        </section>

        <section id="browse" className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary md:text-4xl">
              Explore Our Collections
            </h2>
            <FragranceCarousel fragrances={perfumes} />
          </div>
        </section>

        <div className="container mx-auto px-4">
          <Separator className="my-12 md:my-20" />
        </div>

        <section id="ai-finder" className="bg-card/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <FragranceFinder />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
