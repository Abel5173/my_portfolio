import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Icon } from './icons';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-pressed={resolvedTheme === 'dark'}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: resolvedTheme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Icon name={resolvedTheme === 'dark' ? 'sun' : 'moon'} size={20} />
      </motion.div>
    </button>
  );
}
