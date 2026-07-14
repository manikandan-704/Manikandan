import { useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook that combines useRef + useInView for scroll-triggered animations.
 * Used by every below-fold section component.
 *
 * @param {Object} options - framer-motion useInView options
 * @returns {{ ref: React.RefObject, isInView: boolean }}
 */
export const useScrollInView = (options = { once: true, margin: '-100px' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  return { ref, isInView };
};

/**
 * Smoothly scrolls to a DOM element matching the given CSS selector.
 * Shared across Navigation, Hero, and any component with anchor links.
 *
 * @param {string} selector - CSS selector (e.g. '#about')
 */
export const scrollToSection = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
