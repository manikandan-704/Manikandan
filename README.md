# Manikandan N - Portfolio Website

A modern, interactive portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and a sleek dark theme.

## 🚀 Features

- **Interactive Hero Section** with typing animation and floating particles
- **Smooth Scroll Animations** powered by Framer Motion
- **Responsive Design** that works perfectly on all devices
- **Dark Theme** with gradient accents
- **Performance Optimized** with code splitting and lazy loading
- **GitHub Pages Ready** with proper routing configuration

## 🛠️ Tech Stack

- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** GitHub Pages

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Step 1: Create Vite Project

```bash
npm create vite@latest manikandan-portfolio -- --template react
cd manikandan-portfolio
```

### Step 2: Install Dependencies

```bash
# Install core dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Framer Motion
npm install framer-motion

# Install Lucide React (for icons)
npm install lucide-react

# Install React Router (for routing)
npm install react-router-dom

# Install gh-pages for deployment
npm install -D gh-pages
```

### Step 3: Configure Tailwind CSS

The `tailwind.config.js` file is already configured with custom theme, colors, and animations.

### Step 4: Set Up Project Structure

Copy all the files from this repository into your project:

```
manikandan-portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🏃 Running the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deploying to GitHub Pages

### Step 1: Update package.json

Add your GitHub repository URL and deploy script:

```json
{
  "name": "manikandan-portfolio",
  "homepage": "https://[your-username].github.io/[repository-name]",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 2: Deploy

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Push the built files to GitHub Pages

### Step 3: Configure GitHub Repository

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select the `gh-pages` branch
4. Click Save

Your site will be live at `https://[your-username].github.io/[repository-name]`

## 🎨 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#111111',
    border: '#1f1f1f',
    text: '#e4e4e7',
    textSecondary: '#a1a1aa',
  },
  accent: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
  }
}
```

### Content

Update your personal information in the component files:

- **Hero.jsx** - Name, title, social links
- **About.jsx** - Biography, education, achievements
- **Skills.jsx** - Technical skills and proficiencies
- **Projects.jsx** - Project details, links, descriptions
- **Contact.jsx** - Contact information

### Fonts

The project uses Google Fonts (Inter and JetBrains Mono). To change fonts, update the import in `index.html` and modify `tailwind.config.js`.

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Performance Optimization

- Code splitting with dynamic imports
- Image lazy loading
- Optimized animations with `will-change`
- Minimal bundle size with tree shaking

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Manikandan N**

- GitHub: [@nagarajpriyan2004](https://github.com/nagarajpriyan2004)
- LinkedIn: [Manikandan N](https://linkedin.com/in/manikandan-n-024073250)
- Email: nagarajpriyan2004@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Lucide React
- Animations powered by Framer Motion
- Built with React and Tailwind CSS

---

Made with ❤️ and ☕ by Manikandan N
