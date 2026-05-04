#!/bin/bash

# Manikandan Portfolio - Automated Setup Script
# This script will set up the entire project with all dependencies

echo "🚀 Setting up Manikandan's Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run 'npm run dev' to start the development server"
echo "  2. Open http://localhost:5173 in your browser"
echo "  3. Customize the content in src/components/"
echo "  4. Run 'npm run build' to build for production"
echo "  5. Run 'npm run deploy' to deploy to GitHub Pages"
echo ""
echo "📖 Check SETUP_GUIDE.md for detailed instructions"
echo ""
