#!/bin/bash

# Deploy for Render
# Replace <YOUR_RENDER_SERVICE> with your actual Render service name
echo "Deploying to Render..."
render deploy <YOUR_RENDER_SERVICE>

# Deploy for Railway
# Replace <YOUR_RAILWAY_PROJECT> with your actual Railway project name
echo "Deploying to Railway..."
railway up <YOUR_RAILWAY_PROJECT>

# Deploy for Heroku
# Replace <YOUR_HEROKU_APP_NAME> with your actual Heroku app name
echo "Deploying to Heroku..."
git push heroku main

# Example: Setting Environment Variables
echo "Setting up environment variables..."
export DATABASE_URL="your-database-url"
export SECRET_KEY="your-secret-key"
