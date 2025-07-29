

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Have a question or feedback? Contact the Smell of Paris team. We are here to help you with your fragrance journey.',
// };
// Cannot be used in a client component. We will set it dynamically.

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  if (typeof document !== 'undefined') {
    document.title = 'Contact Us | Smell of Paris';
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    toast({
      title: 'Message Sent!',
      description: "We've received your message and will get back to you shortly.",
    });

    // Here you would typically handle the form submission, e.g., send an email or save to a database.
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 text-center md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-2xl px-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={6} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
