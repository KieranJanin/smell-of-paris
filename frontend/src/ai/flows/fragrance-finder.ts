'use server';

/**
 * @fileOverview This file defines a Genkit flow for the Fragrance Finder feature.
 *
 * - fragranceFinder - A function that takes user preferences as input and returns fragrance suggestions.
 * - FragranceFinderInput - The input type for the fragranceFinder function.
 * - FragranceFinderOutput - The return type for the fragranceFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FragranceFinderInputSchema = z.object({
  scentPreferences: z
    .string()
    .describe(
      'A description of the users preferred scents. For example, include words such as floral, woody, oriental, sweet, musky. Also include any specific notes that the user likes, such as rose, jasmine, sandalwood, vanilla.'
    ),
});
export type FragranceFinderInput = z.infer<typeof FragranceFinderInputSchema>;

const FragranceFinderOutputSchema = z.object({
  fragranceSuggestions: z
    .string()
    .describe(
      'A list of fragrance suggestions based on the user provided scent preferences.'
    ),
});
export type FragranceFinderOutput = z.infer<typeof FragranceFinderOutputSchema>;

export async function fragranceFinder(input: FragranceFinderInput): Promise<FragranceFinderOutput> {
  return fragranceFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'fragranceFinderPrompt',
  input: {schema: FragranceFinderInputSchema},
  output: {schema: FragranceFinderOutputSchema},
  prompt: `You are an AI fragrance expert. A user will describe their scent preferences, and you will return a list of fragrance suggestions that match those preferences.

Scent Preferences: {{{scentPreferences}}}

Fragrance Suggestions:`,
});

const fragranceFinderFlow = ai.defineFlow(
  {
    name: 'fragranceFinderFlow',
    inputSchema: FragranceFinderInputSchema,
    outputSchema: FragranceFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
