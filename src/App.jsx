import React, { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

// Lazy-load below-fold components for code-splitting
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

/** Minimal loading skeleton — matches the dark theme */
const SectionFallback = () => (
  <div className="flex items-center justify-center py-24" role="status">
    <div className="w-8 h-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
    <span className="sr-only">Loading section…</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
