import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plus,
  Bot,
  Moon,
  Sun,
  LifeBuoy,
  MessageSquareMore,
  Share2,
  Zap
} from 'lucide-react';

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(media.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const actions = [
    { icon: <Bot className="w-6 h-6" />, label: "AI Assistant", onClick: () => alert("AI coming soon") },
    { icon: isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />, label: "Toggle Theme", onClick: () => setIsDark(!isDark) },
    { icon: <LifeBuoy className="w-6 h-6" />, label: "Support", onClick: () => window.open("mailto:abelzeleke5173@gmail.com") },
    { icon: <MessageSquareMore className="w-6 h-6" />, label: "Feedback", onClick: () => alert("Feedback") },
    { icon: <Share2 className="w-6 h-6" />, label: "Share", onClick: () => navigator.share?.({ url: window.location.href }) },
  ];

  // Core colors based on theme
  const coreBg = isDark ? 'bg-black' : 'bg-white';
  const coreText = isDark ? 'text-white' : 'text-black';
  const glowColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)';
  const ringColor = isDark ? 'white' : 'black';
  const buttonGlass = isDark
    ? 'bg-white/10 border-white/30 shadow-white/20'
    : 'bg-black/10 border-black/20 shadow-black/10';

  return (
    <div
      className="fixed bottom-8 right-8 z-50 select-none"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      

      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-24 right-0 flex flex-col items-end gap-4">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 30 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                className="group relative"
              >
                {/* Tooltip */}
                <span className={`absolute right-full mr-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium backdrop-blur-xl border
                  ${isDark
                    ? 'bg-black/90 text-white border-white/20'
                    : 'bg-white/90 text-black border-black/10'
                  }`}
                >
                  {action.label}
                </span>

                {/* Glass Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    action.onClick();
                  }}
                  className={`w-16 h-16 rounded-full ${buttonGlass} backdrop-blur-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 hover:border-opacity-60 shadow-2xl`}
                >
                  <div className={isDark ? 'text-white' : 'text-black'}>
                    {action.icon}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Orb */}
      <motion.button
        className="relative w-20 h-20 rounded-full overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: `0 0 ${isOpen ? 80 : 100}px ${glowColor}` }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Outer Pulse */}
        <div className={`absolute inset-0 rounded-full ${isDark ? 'bg-white/20' : 'bg-black/20'} blur-3xl animate-pulse`} />

        {/* Rotating Ring */}
        <motion.div
          className={`absolute inset-2 rounded-full border-4 border-dashed border-${ringColor}/40`}
          animate={{ rotate: isOpen ? 0 : 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Glow Ring */}
        <div className={`absolute inset-4 rounded-full border border-${ringColor}/30 bg-gradient-to-br from-${ringColor}/10 to-transparent`} />

        {/* Core */}
        <div className={`absolute inset-6 ${coreBg} rounded-full shadow-inner flex items-center justify-center`}>
          <motion.div
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {isOpen ? (
              <Zap className={`w-9 h-9 ${coreText}`} />
            ) : (
              <Plus className={`w-9 h-9 ${coreText}`} />
            )}
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}
