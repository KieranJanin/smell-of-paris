# Development Guide

This guide will walk you through setting up a local development environment for Smell of Paris.

## Prerequisites

*   Node.js (v18 or later)
*   npm

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/parfum-elegance.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd parfum-elegance
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Genkit Configuration
GENKIT_API_KEY=
```

## Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
