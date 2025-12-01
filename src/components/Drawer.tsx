import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useFocusTrap } from '../hooks/useFocusTrap';
import { Icon, IconName } from './icons';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    name: string;
    href: string;
    icon: IconName;
  }>;
}

export function Drawer({ isOpen, onClose, items }: DrawerProps) {
  const containerRef = useFocusTrap(isOpen, onClose);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleItemClick = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }, 300); // Wait for drawer close animation
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            ref={containerRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background border-l border-border shadow-xl z-50 md:hidden"
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  aria-label="Close navigation menu"
                >
                  <Icon name="close" size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-4">
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleItemClick(item.href)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                      >
                        <Icon name={item.icon} size={20} />
                        <span className="text-base font-medium">{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-border">
                <button
                  onClick={() => handleItemClick('#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <Icon name="download" size={16} />
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
