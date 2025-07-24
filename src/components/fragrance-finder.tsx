'use client';

import { fragranceFinder } from '@/ai/flows/fragrance-finder';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  scentPreferences: z.string().min(10, {
    message: 'Please describe your preferred scents in a bit more detail.',
  }),
});

export default function FragranceFinder() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scentPreferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await fragranceFinder(values);
      setResult(response.fragranceSuggestions);
    } catch (e) {
      setError(
        "Sorry, we couldn't find any fragrances at this time. Please try again."
      );
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const formatResult = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return null;
      // Make brand/perfume names bold
      const boldedLine = line.replace(
        /(\b[A-Z][\w\s-]+\b by \b[A-Z][\w\s-]+\b|\b[A-Z][\w'-]+\b:)/g,
        '<strong>$1</strong>'
      );
      return (
        <p
          key={index}
          className="mb-2"
          dangerouslySetInnerHTML={{ __html: boldedLine }}
        />
      );
    });
  };

  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className="text-center md:text-left">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">
          Can't Decide?
        </h2>
        <p className="mt-2 font-headline text-xl text-accent">
          Let our AI expert find your perfect match.
        </p>
        <p className="mx-auto mt-4 max-w-lg font-body text-lg text-foreground md:mx-0">
          Describe the scents, notes, or moods you love. Are you looking for
          something for a special occasion, or daily wear? The more detail you
          provide, the better our suggestions will be. For example: "I love
          warm, spicy scents like vanilla and sandalwood, but with a hint of
          citrus. Something elegant for evening wear."
        </p>
      </div>
      <div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline">AI Fragrance Finder</CardTitle>
            <CardDescription>
              Tell us what you like, and we'll do the rest.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="scentPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Scent Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I like floral scents like rose and jasmine, with a woody base...'"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Finding your scent...
                    </>
                  ) : (
                    'Find My Fragrance'
                  )}
                </Button>
              </form>
            </Form>

            {result && (
              <div className="mt-6 rounded-md border border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-2 font-headline text-lg font-semibold text-primary">
                  Our Suggestions For You
                </h3>
                <div className="font-body text-foreground prose-sm max-w-none">
                  {formatResult(result)}
                </div>
              </div>
            )}
            {error && (
              <div className="mt-6 rounded-md border border-destructive/20 bg-destructive/10 p-4 font-semibold text-destructive">
                {error}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
