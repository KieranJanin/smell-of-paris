# Deployment Guide

This guide provides instructions for deploying the Smell of Paris application.

## Prerequisites

*   Google Cloud SDK
*   Firebase CLI

## Deployment Steps

1.  **Configure Google Cloud:**
    - Authenticate with the gcloud CLI: `gcloud auth login`
    - Set your project: `gcloud config set project YOUR_PROJECT_ID`

2.  **Deploy to App Hosting:**
    - Run the following command to deploy the application:
      ```bash
      gcloud app deploy apphosting.yaml
      ```

For more detailed information on deploying to App Hosting, refer to the [official documentation](https://firebase.google.com/docs/hosting/app-hosting).
