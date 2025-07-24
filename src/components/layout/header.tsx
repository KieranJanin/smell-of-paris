
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Menu, Search, ShoppingCart, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { perfumes } from '@/lib/data';
import { useRouter } from 'next/navigation';

const fragranceCategories = [
  'Floral',
  'Woody',
  'Oriental',
  'Fresh',
  'Spicy',
  'Fruity',
];
const brands = [...new Set(perfumes.map((p) => p.brand))];

export default function Header() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
  };

  const navLinks = [
    { href: '/#ai-finder', label: 'AI Finder' },
    { href: '#', label: 'Sale' },
  ];

  const renderUserAuth = () => {
    if (loading) {
      return null;
    }

    if (user) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                <AvatarFallback>
                  {user.displayName?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.displayName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push('/profile')}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/cart')}>
                Cart
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/settings')}>
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.push('/auth/login')}
        >
          Login
        </Button>
        <Button size="sm" onClick={() => router.push('/auth/signup')}>
          Sign Up
        </Button>
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-headline text-lg font-bold text-primary">
              Smell of Paris
            </span>
          </Link>
          <nav className="flex items-center space-x-6 font-body text-sm font-medium">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-accent">
                Fragrances <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {fragranceCategories.map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link href={`/fragrances/${category.toLowerCase()}`}>
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-accent">
                Brands <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {brands.map((brand) => (
                  <DropdownMenuItem key={brand} asChild>
                    <Link href={`/brands/${brand.toLowerCase().replace(/ /g, '-')}`}>
                      {brand}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                    Smell of Paris
                  </span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {/* Mobile nav needs to be updated as well if we want dropdowns */}
                  <Link href="/fragrances" className="text-lg transition-colors hover:text-accent">
                    Fragrances
                  </Link>
                  <Link href="/brands" className="text-lg transition-colors hover:text-accent">
                    Brands
                  </Link>
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
                Smell of Paris
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
          {renderUserAuth()}
        </div>
      </div>
    </header>
  );
}
