# GitHub Pages Deployment Guide

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your portfolio project ready

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `manikandan-portfolio`)
4. Choose "Public" (required for free GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 2. Configure Your Project

Update `package.json` with your GitHub information:

```json
{
  "name": "manikandan-portfolio",
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME",
  ...
}
```

**Example:**
If your GitHub username is `manikandan` and repository is `portfolio`:
```json
"homepage": "https://manikandan.github.io/portfolio"
```

### 3. Initialize Git and Push to GitHub

Open terminal in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to that branch

### 5. Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click "Save"

### 6. Wait for Deployment

- GitHub will take 1-2 minutes to deploy
- You'll see a green checkmark when ready
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

## Updating Your Portfolio

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy the updated version
npm run deploy
```

## Custom Domain (Optional)

### Using a Custom Domain

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your repository, go to Settings > Pages
3. Under "Custom domain", enter your domain
4. Update your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records pointing to GitHub's IP addresses

5. Create a file named `CNAME` in the `public` folder:
```
yourdomain.com
```

## Troubleshooting

### Site not loading?

1. Check GitHub Pages settings are correct
2. Make sure `homepage` in package.json is correct
3. Wait a few minutes - deployment takes time
4. Clear browser cache

### 404 errors on refresh?

This is normal for single-page apps. The project is configured with HashRouter to handle this.

### Build failed?

```bash
# Check for errors
npm run build

# If there are errors, fix them and try again
npm run deploy
```

### Wrong base URL?

Make sure `vite.config.js` has:
```javascript
export default defineConfig({
  base: './',
  // ...
})
```

## GitHub Pages Limits

- **Repository size:** Max 1GB
- **Published site size:** Max 1GB
- **Bandwidth:** 100GB/month soft limit
- **Builds:** 10 per hour

## Alternative: Deploy to Netlify or Vercel

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect to GitHub and select your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

## Security Notes

- Never commit sensitive data (API keys, passwords)
- Use environment variables for sensitive configuration
- Keep dependencies updated

## Maintenance

### Update dependencies
```bash
npm update
npm audit fix
```

### Check site performance
Use [Google PageSpeed Insights](https://pagespeed.web.dev/)

---

Need help? Check the main README.md or SETUP_GUIDE.md
