import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description:
    'Information about our shipping policies and how to return an item to Smell of Paris.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="mb-8 text-center font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Shipping & Returns
          </h1>

          <div className="space-y-8 font-body text-foreground/90">
            <section>
              <h2 className="mb-4 font-headline text-2xl font-bold text-accent">
                Shipping Policy
              </h2>
              <div className="space-y-4">
                <p>
                  We are pleased to offer complimentary standard shipping on all
                  orders within the United States. Orders are typically processed
                  within 1-2 business days.
                </p>
                <p>
                  <strong>Standard Shipping:</strong> 3-5 business days.
                </p>
                <p>
                  <strong>Expedited Shipping:</strong> 1-2 business days.
                  (Calculated at checkout)
                </p>
                <p>
                  Once your order has shipped, you will receive a confirmation
                  email with a tracking number. Please note that international
                  shipping times may vary depending on the destination and
                  customs processing.
                </p>
              </div>
            </section>

            <Separator className="my-8" />

            <section>
              <h2 className="mb-4 font-headline text-2xl font-bold text-accent">
                Return Policy
              </h2>
              <div className="space-y-4">
                <p>
                  Your satisfaction is our priority. We accept returns on
                  unopened and unused products within 30 days of purchase for a
                  full refund. Due to hygiene reasons, we cannot accept returns
                  on items that have been opened or used.
                </p>
                <p>To initiate a return, please follow these steps:</p>
                <ol className="list-inside list-decimal space-y-2">
                  <li>
                    Contact our support team at{' '}
                    <a
                      href="mailto:support@smellofparis.com"
                      className="text-primary hover:underline"
                    >
                      support@smellofparis.com
                    </a>{' '}
                    with your order number and the reason for your return.
                  </li>
                  <li>
                    Our team will provide you with a Return Merchandise
                    Authorization (RMA) number and a prepaid shipping label.
                  </li>
                  <li>
                    Pack the item securely and attach the shipping label.
                  </li>
                  <li>
                    Drop off the package at your nearest shipping carrier location.
                  </li>
                </ol>
                <p>
                  Refunds will be processed to the original form of payment
                  within 5-7 business days after we receive and inspect the
                  returned item.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
