import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#browse', label: 'Fragrances' },
  { href: '#ai-finder', label: 'AI Finder' },
  { href: '#', label: 'Brands' },
  { href: '#', label: 'Sale' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-lg font-bold text-primary">
              Parfum Élégance
            </span>
          </Link>
          <nav className="flex items-center space-x-6 font-body text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center space-x-2">
                  <span className="font-headline text-lg font-bold text-primary">
                    Parfum Élégance
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-lg transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-center md:hidden">
          <Link href="/" className="flex items-center space-x-2">
              <span className="font-headline text-lg font-bold text-primary">
                Parfum Élégance
              </span>
            </Link>
        </div>


        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="relative hidden flex-1 sm:block sm:max-w-xs">
            <Input
              type="search"
              placeholder="Search fragrances..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
