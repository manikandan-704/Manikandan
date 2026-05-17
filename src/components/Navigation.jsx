import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import resumePdf from '../assets/ManiKandan_SDE_Resume.pdf';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="font-mono text-xl font-bold gradient-text cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {'< MANIKANDAN/ >'}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-dark-textSecondary hover:text-accent-primary transition-colors duration-300 cursor-pointer text-sm font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            {/* Resume button in nav */}
            <motion.a
              href="src/assets/Manikandan_SDE_Resume.pdf"
              download="Manikandan_N_Resume"
              className="btn-resume flex items-center gap-1.5 !py-2 !px-4 text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-dark-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block text-dark-textSecondary hover:text-accent-primary transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
