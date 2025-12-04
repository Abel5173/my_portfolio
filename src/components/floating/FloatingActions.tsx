import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Bot,
  Moon,
  Sun,
  LifeBuoy,
  MessageSquareMore,
  Share2,
  Zap,
} from "lucide-react";
import { ContactModal } from "./ContactModal";
import { FeedbackModal } from "./FeedbackModal";
import { ShareModal } from "./ShareModal";

export default function FloatingActions3D() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Modal states
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // 1. Theme Detection & Management
  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  // 2. Actions Array
  const actions = [
    { icon: <Bot className="w-6 h-6" />, label: "AI Assistant", onClick: () => alert("AI coming soon") },
    {
      icon: isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />,
      label: "Toggle Theme",
      onClick: toggleTheme,
    },
    { icon: <LifeBuoy className="w-6 h-6" />, label: "Support", onClick: () => setIsContactOpen(true) },
    { icon: <MessageSquareMore className="w-6 h-6" />, label: "Feedback", onClick: () => setIsFeedbackOpen(true) },
    { icon: <Share2 className="w-6 h-6" />, label: "Share", onClick: () => setIsShareOpen(true) },
  ];

  // 3. Enhanced colors with better contrast for light mode
  const glow = isDark
    ? "rgba(255, 255, 255, 0.9)" // Strong white glow for dark mode
    : "rgba(0, 0, 0, 0.9)"; // Strong black glow for light mode

  // Enhanced border colors for better visibility in light mode
  const borderColor = isDark
    ? "#ffffff" // White for dark mode
    : "#000000"; // Black for light mode - increased contrast

  // Panel Background Style
  const panelStyle = isDark
    ? "bg-black/85 border-white/20 backdrop-blur-xl shadow-2xl shadow-white/15"
    : "relative bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl hadow-[0_2px_4px_rgba(255,255,255,0.04)] shadow-[inset_0_0_12px_rgba(255,255,255,0.06)] shadow-[0_8px_20px_-4px_rgba(0,0,0,0.35)] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),transparent_70%)] before:opacity-60 before:rounded-3xl before:pointer-events-none after:absolute after:inset-0 after:bg-[url('/noise.png')] after:opacity-[0.025] after:mix-blend-soft-light after:rounded-3xl after:pointer-events-none";

  // Text & Icon Colors
  const textColor = "text-white";
  const iconColor = "text-white";

  // Core Orb Background - always dark for contrast
  const coreBg = isDark
    ? "bg-gradient-to-br from-gray-900 via-black to-gray-900"
    : "bg-gradient-to-br from-gray-900 via-black to-gray-900";

  const coreIconColor = "text-white";

  return (
    <>
      <div
        className="fixed bottom-8 right-8 z-[9999] select-none"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Floating Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <div className="absolute bottom-28 right-0 flex flex-col items-end gap-4 mb-4">
              {actions.map((action, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.6, x: 50 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      action.onClick();
                    }}
                    className={`
                      w-56 h-14 rounded-2xl px-6
                      flex items-center gap-4
                      font-medium text-sm tracking-wide
                      border border-white/30
                      transition-all duration-300
                      hover:scale-105 active:scale-95
                      hover:shadow-lg ${isDark ? 'hover:shadow-white/20' : 'hover:shadow-black/30'}
                      relative overflow-hidden
                      ${panelStyle}
                      ${textColor}
                    `}
                  >
                    <span className={`${iconColor} z-10`}>{action.icon}</span>
                    <span className="z-10">{action.label}</span>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-white/10 to-transparent' : 'from-white/20 to-transparent'}`} />
                    </div>

                    {/* Hover shine effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden -z-10">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r from-transparent ${isDark ? 'via-white/25' : 'via-white/40'} to-transparent`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    {/* Inner border highlight */}
                    <div className={`absolute inset-[1px] rounded-2xl border ${isDark ? 'border-white/15' : 'border-white/25'}`} />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Floating Orb */}
        <motion.button
          className="relative w-24 h-24 rounded-full overflow-visible"
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.94 }}
        >
          {/* Outer Glow - Much stronger for visibility */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                `0 0 80px ${glow}`,
                `0 0 120px ${glow}`,
                `0 0 80px ${glow}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Pulsing Ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                `inset 0 0 30px ${glow}`,
                `inset 0 0 50px ${glow}`,
                `inset 0 0 30px ${glow}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Rotating Dashed Ring - Enhanced for light mode */}
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-dashed"
            style={{
              borderColor: borderColor,
              opacity: isDark ? 0.4 : 0.6 // Higher opacity in light mode
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Inner solid ring for contrast */}
          <motion.div
            className="absolute inset-4 rounded-full border-2"
            style={{
              borderColor: borderColor,
              opacity: 0.2
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Core */}
          <div
            className={`${coreBg} absolute inset-6 rounded-full shadow-2xl flex items-center justify-center border-2 ${isDark ? 'border-white/30' : 'border-white/40'}`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 135 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Core Icons with slight glow */}
              <div className="relative">
                {isOpen ? (
                  <Zap className={`w-12 h-12 ${coreIconColor} drop-shadow-lg`} />
                ) : (
                  <Plus className={`w-12 h-12 ${coreIconColor} drop-shadow-lg`} />
                )}
                {/* Icon glow */}
                <div className="absolute inset-0 blur-sm bg-white/30 rounded-full" />
              </div>
            </motion.div>

            {/* Subtle core pulse */}
            <motion.div
              className="absolute inset-2 rounded-full border"
              style={{ borderColor: borderColor }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Enhanced floating particles effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/60' : 'bg-black/60'}`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Additional outer sparkles */}
          <div className="absolute -inset-2 rounded-full overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className={`absolute w-0.5 h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.button>
      </div>

      {/* Modals */}
      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
      <FeedbackModal open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen} />
      <ShareModal open={isShareOpen} onOpenChange={setIsShareOpen} />
    </>
  );
}