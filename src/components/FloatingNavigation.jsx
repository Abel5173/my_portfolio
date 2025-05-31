import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaHome, FaUser, FaCode, FaEnvelope, FaProjectDiagram, FaAward } from 'react-icons/fa';

const sections = [
  { id: 'home', icon: FaHome, label: 'Home', color: 'from-accent-blue to-accent-purple' },
  { id: 'about', icon: FaUser, label: 'About', color: 'from-accent-purple to-accent-green' },
  { id: 'projects', icon: FaProjectDiagram, label: 'Projects', color: 'from-accent-green to-accent-blue' },
  { id: 'certifications', icon: FaAward, label: 'Certifications', color: 'from-accent-blue to-accent-purple' },
  { id: 'contact', icon: FaEnvelope, label: 'Contact', color: 'from-accent-blue to-accent-purple' },
];

const FloatingNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const { isDarkMode } = useTheme();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsExpanded(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed right-8 top-1/3 -translate-y-1/2 z-50"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Main Navigation Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setTimeout(() => {
              if (!menuRef.current?.matches(':hover')) {
                setIsHovered(false);
              }
            }, 150);
          }}
          className={`w-16 h-16 rounded-full glass-card flex items-center justify-center ${
            isExpanded || isHovered ? 'bg-accent-blue/20' : ''
          }`}
          whileHover={{ 
            scale: 1.1,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 25
            }
          }}
        >
          <motion.div
            animate={{ 
              rotate: isExpanded || isHovered ? 180 : 0,
              scale: isExpanded || isHovered ? 1.2 : 1
            }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3
            }}
          >
            <FaCode className="text-2xl text-accent-blue" />
          </motion.div>
        </motion.button>

        {/* Floating Islands */}
        <AnimatePresence>
          {(isExpanded || isHovered) && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: 0
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8,
                x: 20,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8
              }}
              className="fixed right-28 top-1/4 -translate-y-1/2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                if (!isExpanded) {
                  setTimeout(() => {
                    setIsHovered(false);
                  }, 150);
                }
              }}
            >
              <motion.div className="flex flex-col gap-4">
                {sections.map((section, index) => {
                  const isActive = activeSection === section.id;
                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: isActive ? 1.2 : 1
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: 20,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut"
                        }
                      }}
                      transition={{ 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.8
                      }}
                    >
                      <motion.button
                        onClick={() => handleSectionClick(section.id)}
                        className={`group relative flex items-center ${
                          isActive ? 'z-10' : ''
                        }`}
                        whileHover={{ 
                          scale: 1.2,
                          transition: { 
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                            mass: 0.8
                          }
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 25
                          }
                        }}
                      >
                        {/* Island Background */}
                        <motion.div
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${section.color} opacity-20 blur-md`}
                          animate={{
                            scale: isActive ? 1.2 : 1,
                            opacity: isActive ? 0.3 : 0.2,
                          }}
                          transition={{ 
                            type: "spring",
                            stiffness: 200,
                            damping: 20,
                            mass: 0.8
                          }}
                        />

                        {/* Island Content */}
                        <div className={`relative w-12 h-12 rounded-full glass-card flex items-center justify-center transition-all duration-300 ${
                          isActive ? 'ring-2 ring-accent-blue shadow-lg shadow-accent-blue/20' : ''
                        }`}>
                          <section.icon className={`text-xl transition-colors duration-300 ${
                            isActive ? 'text-accent-blue' : 'text-text-secondary'
                          }`} />
                        </div>

                        {/* Label */}
                        <motion.span
                          className="absolute right-16 whitespace-nowrap text-text-secondary"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            scale: isActive ? 1.1 : 1
                          }}
                          transition={{ 
                            delay: 0.1,
                            type: "spring",
                            stiffness: 200,
                            damping: 20
                          }}
                        >
                          {section.label}
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Background */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

export default FloatingNavigation; 