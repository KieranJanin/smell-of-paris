

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about fragrance notes, perfume types, shipping, returns, and more at Smell of Paris.',
};


const faqs = [
  {
    question: 'What are fragrance notes?',
    answer:
      'Fragrance notes are the different scent layers that make up the final fragrance. They are categorized as top notes (the initial scent), middle or heart notes (the main body of the scent), and base notes (the final, lingering scent).',
  },
  {
    question: 'What is the difference between Eau de Parfum and Eau de Toilette?',
    answer:
      'The main difference is the concentration of perfume oil. Eau de Parfum (EDP) has a higher concentration (typically 15-20%) and lasts longer, while Eau de Toilette (EDT) has a lower concentration (5-15%) and is lighter.',
  },
  {
    question: 'How should I store my perfume?',
    answer:
      'To preserve your fragrance, store it in a cool, dark place away from direct sunlight and extreme temperature changes. A drawer or a closet is ideal. Avoid storing perfumes in the bathroom due to humidity and temperature fluctuations.',
  },
    {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping typically takes 3-5 business days within the country. International shipping times may vary depending on the destination and customs processing. You will receive a tracking number once your order has shipped.',
  },
  {
    question: 'What is your return policy?',
    answer:
      "We accept returns on unopened products within 30 days of purchase. Please visit our 'Shipping & Returns' page for detailed instructions on how to process a return. Due to hygiene reasons, we cannot accept returns on opened or used products.",
  },
  {
    question: 'Do you offer samples?',
    answer:
      'Yes, we offer sample sets for many of our popular fragrances. You can find them in the "Samples" section of our website. Additionally, we often include complimentary samples with qualifying orders.',
  },
];

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-12 text-center md:py-20">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-foreground md:text-xl">
              Find answers to common questions about our products and services.
            </p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-3xl px-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left font-headline text-lg text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-base text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
