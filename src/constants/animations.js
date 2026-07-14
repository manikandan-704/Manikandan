/**
 * Shared framer-motion animation variants.
 * Eliminates copy-paste across About, Skills, Projects, Contact components.
 */

/** Staggered container — each child animates 0.2s after the previous */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/** Standard item slide-up reveal */
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/** Project card variant with larger slide distance */
export const projectItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
