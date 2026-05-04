# Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 🎨 Quick Customization Checklist

### 1. Personal Information

**File: `src/components/Hero.jsx`**

Update these sections:

```javascript
// Line ~85-90: Main title
<h1>
  <span className="gradient-text">Your Name</span>
</h1>

// Line ~95-100: Subtitle
<h2>
  Your Job Title
</h2>

// Line ~105-110: Description
<p>
  Your personal tagline and expertise description
</p>

// Line ~140-165: Social links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
<a href="mailto:YOUR_EMAIL">
```

### 2. About Section

**File: `src/components/About.jsx`**

Update your story (Lines ~70-100):

```javascript
<p>
  I'm a [your education level] at [your institution]...
</p>
<p>
  Every day, I [your practice/routine]...
</p>
<p>
  As an [your personality trait], I [your approach]...
</p>
```

Update education (Lines ~110-130):

```javascript
<p className="text-dark-textSecondary text-sm">
  B.E. Your Major
</p>
<p className="text-dark-textSecondary text-sm">
  Your University • Year-Year
</p>
<p className="text-accent-primary text-sm font-medium mt-1">
  CGPA: X.XX/10
</p>
```

Update certification (Lines ~165-185):

```javascript
<h4>Your Recent Achievement</h4>
<p>Certification Name</p>
<p>Organization • Date</p>
<p>Credential ID: XXXXXX</p>
```

### 3. Skills Section

**File: `src/components/Skills.jsx`**

Modify skill categories and levels (Lines ~10-50):

```javascript
const skillCategories = [
  {
    title: 'Your Category Name',
    color: 'from-blue-500 to-cyan-500', // Change gradient colors
    skills: [
      { name: 'Skill Name', level: 85 }, // Adjust skill levels (0-100)
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

**Available gradient colors:**
- `from-blue-500 to-cyan-500` - Blue gradient
- `from-green-500 to-emerald-500` - Green gradient
- `from-purple-500 to-pink-500` - Purple gradient
- `from-orange-500 to-red-500` - Orange/Red gradient
- `from-yellow-500 to-amber-500` - Yellow gradient

### 4. Projects Section

**File: `src/components/Projects.jsx`**

Update project details (Lines ~10-80):

```javascript
const projects = [
  {
    title: 'PROJECT NAME',
    subtitle: 'Project Type/Category',
    description: 'Detailed project description...',
    features: [
      'Key feature 1',
      'Key feature 2',
      // Add more features...
    ],
    techStack: [
      { name: 'Technology', icon: Code2 },
      // Add more technologies...
    ],
    github: 'https://github.com/username/repo',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more projects...
];
```

**Available icons:**
- `Code2` - For frontend/general code
- `Server` - For backend technologies
- `Database` - For databases
- `Layout` - For HTML/CSS/design

### 5. Contact Information

**File: `src/components/Contact.jsx`**

Update contact details (Lines ~35-50):

```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+XX XXXXXXXXXX',
    href: 'tel:+XXXXXXXXXXXX',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Country',
    href: null,
  },
];
```

Update social links (Lines ~55-75):

```javascript
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_PROFILE',
  },
  // Add more social links...
];
```

### 6. Navigation

**File: `src/components/Navigation.jsx`**

The navigation automatically links to sections. If you add/remove sections, update (Lines ~10-16):

```javascript
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add/remove items...
];
```

## 🎨 Color Theme Customization

**File: `tailwind.config.js`**

### Primary Colors

```javascript
accent: {
  primary: '#3b82f6',    // Main accent color (blue)
  secondary: '#8b5cf6',  // Secondary accent (purple)
}
```

**Popular color schemes:**
- **Blue/Purple:** `#3b82f6` / `#8b5cf6` (current)
- **Green/Teal:** `#10b981` / `#14b8a6`
- **Orange/Red:** `#f97316` / `#ef4444`
- **Pink/Rose:** `#ec4899` / `#f43f5e`
- **Indigo/Violet:** `#6366f1` / `#8b5cf6`

### Background Colors

```javascript
dark: {
  bg: '#0a0a0a',           // Main background
  card: '#111111',         // Card backgrounds
  border: '#1f1f1f',       // Border color
  text: '#e4e4e7',         // Primary text
  textSecondary: '#a1a1aa', // Secondary text
}
```

## ✨ Animation Customization

**File: `tailwind.config.js`**

Adjust animation speeds (Lines ~35-45):

```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',  // Change 8s to adjust speed
  'float': 'float 6s ease-in-out infinite',   // Change 6s to adjust speed
  'glow': 'glow 2s ease-in-out infinite alternate', // Change 2s
}
```

## 🖼️ Adding Your Profile Picture

**Option 1: Using a real image**

1. Add your image to `src/assets/profile.jpg`
2. Update `Hero.jsx` (around line 70):

```javascript
<img
  src="/src/assets/profile.jpg"
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

**Option 2: Keep the initials**

The current design uses initials (`MN`). Change line ~73 in `Hero.jsx`:

```javascript
<div className="...">
  YI  {/* Your Initials */}
</div>
```

## 📱 Responsive Design

The portfolio is fully responsive. Test on different screen sizes:

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔤 Font Customization

**File: `index.html`**

Change fonts (Line ~12):

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

**File: `tailwind.config.js`**

Update font family (Lines ~20-23):

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

**Popular font combinations:**
- **Modern:** Inter + JetBrains Mono (current)
- **Classic:** Poppins + Fira Code
- **Elegant:** Montserrat + Source Code Pro
- **Minimal:** IBM Plex Sans + IBM Plex Mono

## 🎯 Advanced Customization

### Adding New Sections

1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to the layout between other sections
4. Update navigation in `Navigation.jsx`

### Changing Animations

**File: `src/components/[Component].jsx`**

Framer Motion variants can be customized:

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 20 },      // Initial state
  visible: {
    opacity: 1,                        // Final state
    y: 0,
    transition: { duration: 0.5 },     // Animation duration
  },
};
```

### Adding More Projects

In `Projects.jsx`, copy the project object structure and add to the array. The layout automatically adjusts.

### Customizing Contact Form

The current form is a demo. To make it functional:

1. Use a service like Formspree, EmailJS, or Netlify Forms
2. Update the `handleSubmit` function in `Contact.jsx`
3. Add your API endpoint

## 🚀 Performance Tips

- **Images:** Optimize images before adding (use WebP format)
- **Fonts:** Limit to 2-3 font weights
- **Animations:** Don't overuse - keep it subtle
- **Code:** Remove unused imports and components

## 📝 Content Writing Tips

### Hero Section
- Keep it concise and impactful
- Focus on your unique value proposition
- Use action-oriented language

### About Section
- Tell a story, not just facts
- Show personality
- Balance technical skills with soft skills

### Projects
- Lead with the impact/result
- Explain the problem you solved
- Highlight your specific contributions

---

Need more help? Check README.md or reach out on GitHub!
