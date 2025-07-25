# Architecture Overview

This document provides a high-level overview of the project's architecture.

## Folder Structure

*   `src/app`: Contains the Next.js pages and routes.
*   `src/components`: Reusable React components.
*   `src/lib`: Utility functions and Firebase configuration.
*   `src/ai`: Genkit AI flows and configuration.
*   `public`: Static assets, such as images and fonts.

## Frontend

The frontend is built with Next.js and utilizes server-side rendering (SSR) for optimal performance. Tailwind CSS is used for styling.

## Backend

Firebase is used for the backend, including:
*   **Authentication:** Manages user sign-up and login.
*   **Firestore:** Stores product data, user information, and other application data.
*   **Storage:** Hosts product images and other static assets.

## AI Integration

The "fragrance finder" feature is powered by Genkit. The AI flow is defined in `src/ai/flows/fragrance-finder.ts` and is responsible for providing personalized fragrance recommendations based on user input.
