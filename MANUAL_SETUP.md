# Manual Installation Commands

## If you prefer to set up manually, run these commands in order:

### 1. Navigate to project directory
```bash
cd manikandan-portfolio
```

### 2. Install all dependencies
```bash
npm install
```

This will install:
- react@^18.2.0
- react-dom@^18.2.0
- react-router-dom@^6.20.1
- framer-motion@^10.16.16
- lucide-react@^0.294.0
- @vitejs/plugin-react@^4.2.1
- tailwindcss@^3.3.6
- autoprefixer@^10.4.16
- postcss@^8.4.32
- vite@^5.0.8
- gh-pages@^6.1.0

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

### 6. Deploy to GitHub Pages
```bash
npm run deploy
```

## Individual Package Installation (if needed)

If you want to install packages individually:

```bash
# Core dependencies
npm install react react-dom react-router-dom

# Animations
npm install framer-motion

# Icons
npm install lucide-react

# Dev dependencies
npm install -D vite @vitejs/plugin-react

# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# GitHub Pages deployment
npm install -D gh-pages
```

## Troubleshooting

### Clear cache and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Update all packages
```bash
npm update
```

### Check for outdated packages
```bash
npm outdated
```

### Fix vulnerabilities
```bash
npm audit fix
```
