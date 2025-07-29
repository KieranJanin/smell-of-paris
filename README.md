# Smell of Paris

Welcome to Smell of Paris, a sophisticated web application for discovering and purchasing fine fragrances. This project combines a modern frontend with a powerful AI-driven recommendation engine to provide a unique and personalized shopping experience.

## Tech Stack

*   **Frontend:** [Next.js](https://nextjs.org/)
*   **Backend & Database:** [Firebase](https://firebase.google.com/) (Authentication, Firestore, Storage)
*   **AI:** [Genkit](https://firebase.google.com/docs/genkit)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get a local copy up and running, please refer to the [Development Guide](./docs/DEVELOPMENT.md).

## Python Virtual Environment Setup

To ensure a consistent and isolated development environment for Python-related tasks, it's recommended to use a virtual environment.

### 1. Create the Virtual Environment

Navigate to the root of your project and run the following command to create a virtual environment named `venv`:

```bash
python3 -m venv venv
```

### 2. Activate the Virtual Environment

Before using the virtual environment, you need to activate it.

*   **On macOS and Linux:**

    ```bash
    source venv/bin/activate
    ```

*   **On Windows:**

    ```bash
    .venv\Scripts\activate
    ```

Once activated, your terminal prompt will be prefixed with `(venv)`, indicating that you are now working within the virtual environment.

### 3. Install Dependencies

With the virtual environment active, you can install any necessary Python packages using `pip`. For example, to install the libraries required for the image processing script, you would run:

```bash
pip install Pillow pillow-avif-plugin
```

### 4. Deactivate the Virtual Environment

When you're finished working, you can deactivate the virtual environment by simply running:

```bash
deactivate
```

This will return you to your normal shell environment.

## Architecture

For a detailed explanation of the project structure, see the [Architecture Overview](./docs/ARCHITECTURE.md).

## Deployment

Instructions for deploying the application can be found in the [Deployment Guide](./docs/DEPLOYMENT.md).
