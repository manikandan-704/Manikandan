import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xl font-bold gradient-text"
          >
            {'< MANIKANDAN/ >'}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-dark-textSecondary"
          >
            <span>© {currentYear} Manikandan N. Crafted with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>and</span>
            <Code2 size={16} className="text-accent-primary" />
          </motion.div>

          {/* Tech Stack Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-dark-textSecondary"
          >
            
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
