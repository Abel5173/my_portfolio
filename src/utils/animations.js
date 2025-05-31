export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export const rotateIn = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1 }
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2 }
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const glowEffect = {
  initial: { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' },
  hover: { boxShadow: '0 0 20px 10px rgba(59, 130, 246, 0.3)' }
}; 