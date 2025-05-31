import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { hoverScale, tapScale } from '../utils/animations';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 p-4 rounded-full glass-card z-50"
      whileHover={hoverScale}
      whileTap={tapScale}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? (
          <FaSun className="text-2xl text-accent-blue" />
        ) : (
          <FaMoon className="text-2xl text-accent-purple" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 