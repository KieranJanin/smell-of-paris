import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">
              Smell of Paris
            </h3>
            <p className="mt-2 font-body text-sm">
              Exquisite fragrances for the discerning nose.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Shop</h4>
            <nav className="mt-4 flex flex-col space-y-2 font-body text-sm">
              <Link href="#" className="hover:text-accent">
                New Arrivals
              </Link>
              <Link href="#" className="hover:text-accent">
                Best Sellers
              </Link>
              <Link href="#" className="hover:text-accent">
                Brands
              </Link>
              <Link href="#" className="hover:text-accent">
                Sale
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Support</h4>
            <nav className="mt-4 flex flex-col space-y-2 font-body text-sm">
              <Link href="#" className="hover:text-accent">
                Contact Us
              </Link>
              <Link href="#" className="hover:text-accent">
                Shipping & Returns
              </Link>
              <Link href="#" className="hover:text-accent">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Follow Us</h4>
            <div className="mt-4 flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-accent"
              >
                FB
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-accent"
              >
                IG
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-accent"
              >
                TW
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center font-body text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Smell of Paris. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
