# Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### 1. Create Project & Install Dependencies

```bash
# Navigate to the project directory
cd manikandan-portfolio

# Install all dependencies
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open your browser to [http://localhost:5173](http://localhost:5173)

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy to GitHub Pages

```bash
# First time setup - configure your repository
# Update package.json with your GitHub username and repository name:
# "homepage": "https://[your-username].github.io/[repository-name]"

# Deploy
npm run deploy
```

## 📝 What's Included

All files are production-ready and require no modifications to run:

- ✅ **Full React application** with all components
- ✅ **Tailwind CSS** configured with custom theme
- ✅ **Framer Motion** animations set up
- ✅ **Responsive design** for all screen sizes
- ✅ **GitHub Pages deployment** ready

## 🎨 Customization Checklist

Before deploying, update these files with your information:

1. **src/components/Hero.jsx**
   - [ ] Update social media links
   - [ ] Modify hero description

2. **src/components/About.jsx**
   - [ ] Personalize biography
   - [ ] Update education details
   - [ ] Modify achievements

3. **src/components/Projects.jsx**
   - [ ] Add your project details
   - [ ] Update GitHub/demo links

4. **src/components/Contact.jsx**
   - [ ] Update contact information
   - [ ] Configure form handling (optional)

5. **package.json**
   - [ ] Update homepage URL for GitHub Pages

## 🆘 Troubleshooting

### Development server not starting?

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors?

```bash
# Check Node.js version (should be v16+)
node --version

# Clean build
npm run build
```

### Deployment issues?

1. Make sure you have a GitHub repository created
2. Update the `homepage` field in package.json
3. Run `npm run deploy` again
4. Check GitHub Pages settings in your repository

## 📦 Project Structure

```
manikandan-portfolio/
├── src/
│   ├── components/      # React components
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies
```

## 💡 Tips

- **Development**: Changes auto-reload in dev mode
- **Icons**: Using Lucide React - browse icons at [lucide.dev](https://lucide.dev)
- **Colors**: Modify in `tailwind.config.js` under `theme.extend.colors`
- **Animations**: All animation configs in `tailwind.config.js`

## 🎯 Next Steps

1. ✅ Run the development server
2. ✅ Customize content with your information
3. ✅ Test responsiveness on different devices
4. ✅ Build for production
5. ✅ Deploy to GitHub Pages
6. ✅ Share your portfolio!

---

Need help? Check the main README.md for detailed documentation.
