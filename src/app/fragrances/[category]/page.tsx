
import { perfumes, Perfume } from '@/lib/data';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export async function generateStaticParams() {
  const categories = [...new Set(perfumes.map((p) => p.category))];
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category;
  const categoryPerfumes = perfumes.filter(
    (p) => p.category.toLowerCase() === categoryName
  );

  const formattedCategoryName =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

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
              Discover scents from the {formattedCategoryName.toLowerCase()} family.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categoryPerfumes.map((perfume) => (
                <Card key={perfume.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                   <CardHeader className="p-0">
                    <Image
                      src={perfume.imageUrl}
                      alt={perfume.name}
                      width={400}
                      height={400}
                      className="h-[300px] w-full object-cover"
                      data-ai-hint="perfume bottle"
                    />
                  </CardHeader>
                  <CardContent className="p-4 text-center">
                    <p className="font-headline text-sm font-bold text-accent">
                      {perfume.brand}
                    </p>
                    <CardTitle className="mt-1 font-headline text-xl text-primary">
                      {perfume.name}
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2 font-body text-sm">
                      {perfume.description}
                    </CardDescription>
                    <p className="mt-4 font-bold text-lg">{perfume.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
