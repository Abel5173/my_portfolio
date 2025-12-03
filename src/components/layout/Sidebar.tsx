import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import {
    Home,
    Briefcase,
    Code2,
    FileText,
    User,
    Mail,
    Sun,
    Moon,
    ChevronLeft,
    ChevronRight,
    Menu,
    X
} from 'lucide-react';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Experience', icon: FileText, href: '#experience' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function GlassSidebar() {
    const [isDark, setIsDark] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Parallax / floating motion
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);
    const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
    const floatY = useTransform(mouseY, [-300, 300], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientX < 400) {
                mouseX.set(e.clientX - 100);
                mouseY.set(e.clientY - window.innerHeight / 2);
            } else {
                mouseX.set(0);
                mouseY.set(0);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
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
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setIsDark(!isDark);
    };

    const scrollToSection = (href: string, index: number) => {
        setActiveIndex(index);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const iconVariants = {
        initial: { scale: 1, rotate: 0 },
        hover: { scale: 1.2, rotate: 5 },
        active: { scale: 1.1, rotate: 0 },
        collapsedHover: { scale: 1.3, rotate: 10 }
    };

    const textVariants = {
        expanded: { opacity: 1, x: 0 },
        collapsed: { opacity: 0, x: -20 }
    };

    return (
        <motion.aside
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:flex flex-col fixed left-6 top-60 -translate-y-1/2 z-[9999] perspective-1000"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    y: floatY,
                    transformStyle: "preserve-3d",
                }}
                className="relative"
            >
                {/* Glassmorphic Panel */}
                <div className={`relative bg-white/10 dark:bg-black/20 backdrop-filter backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/20 transition-all duration-500 ${isCollapsed ? 'p-4' : 'p-4 pb-6'}`}>

                    {/* Collapse Toggle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -right-3 top-8 z-20"
                    >
                        <motion.button
                            onClick={toggleCollapse}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-7 h-7 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 flex items-center justify-center shadow-lg"
                        >
                            <motion.div
                                animate={{ rotate: isCollapsed ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isCollapsed ? (
                                    <ChevronRight size={14} className="text-black dark:text-white" />
                                ) : (
                                    <ChevronLeft size={14} className="text-black dark:text-white" />
                                )}
                            </motion.div>
                        </motion.button>
                    </motion.div>

                    {/* Logo / Identity - Animated Collapse */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 mb-8 text-center"
                    >
                        <motion.div
                            className={`relative ${isCollapsed ? 'w-12 h-12' : 'w-14 h-14'} mx-auto mb-3 rounded-xl ${isDark ? 'bg-gradient-to-br from-white/5 to-black/20' : 'bg-white/40 backdrop-blur-xl border-white/60'} shadow-inner flex items-center justify-center border border-black/10 dark:border-white/10 overflow-hidden`}
                            animate={{
                                width: isCollapsed ? 48 : 56,
                                height: isCollapsed ? 48 : 56
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                key={isDark ? 'dark' : 'light'}
                                src={isDark ? "../../public/dark-theme-f-logo.png" : "../../public/light-theme-f-logo.png"}
                                alt="Logo"
                                className="w-full h-full"
                                animate={{
                                    scale: isCollapsed ? 0.85 : 1
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                        <AnimatePresence>
                            {!isCollapsed && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-xs text-neutral-medium dark:text-neutral-light font-medium">
                                        Portfolio
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Navigation */}
                    <nav className="relative space-y-2">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + index * 0.05 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                onClick={() => scrollToSection(item.href, index)}
                                className="group relative cursor-pointer"
                            >
                                <div className={`relative flex items-center transition-all duration-300 overflow-hidden ${isCollapsed ? 'justify-center p-3' : 'gap-4 p-3'}`}>

                                    {/* Hover Glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index || activeIndex === index ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    />

                                    {/* Indicator Bar - Only show when expanded */}
                                    <AnimatePresence>
                                        {!isCollapsed && (
                                            <motion.div
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white dark:bg-white rounded-r-full"
                                                initial={{ scaleY: 0, opacity: 0 }}
                                                animate={{
                                                    scaleY: hoveredIndex === index || activeIndex === index ? 1 : 0,
                                                    opacity: hoveredIndex === index || activeIndex === index ? 1 : 0
                                                }}
                                                transition={{ duration: 0.25 }}
                                                exit={{ scaleY: 0, opacity: 0 }}
                                            />
                                        )}
                                    </AnimatePresence>

                                    <div className={`relative z-10 flex items-center ${isCollapsed ? '' : 'pl-2'}`}>
                                        <motion.div
                                            variants={iconVariants}
                                            initial="initial"
                                            animate={activeIndex === index ? "active" : "initial"}
                                            whileHover={isCollapsed ? "collapsedHover" : "hover"}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        >
                                            <item.icon
                                                size={18}
                                                className={`transition-colors duration-300 ${hoveredIndex === index || activeIndex === index
                                                    ? 'text-black dark:text-white'
                                                    : 'text-neutral-medium dark:text-neutral-light'
                                                    }`}
                                            />
                                        </motion.div>

                                        {/* Text - Animated collapse */}
                                        <AnimatePresence>
                                            {!isCollapsed && (
                                                <motion.span
                                                    variants={textVariants}
                                                    initial="collapsed"
                                                    animate="expanded"
                                                    exit="collapsed"
                                                    transition={{ duration: 0.2 }}
                                                    className={`ml-3 text-sm font-medium transition-colors duration-300 ${hoveredIndex === index || activeIndex === index
                                                        ? 'text-black dark:text-white'
                                                        : 'text-neutral-medium dark:text-neutral-light'
                                                        }`}
                                                >
                                                    {item.name}
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Theme Toggle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className={`relative border-t border-white/20 dark:border-white/10 ${isCollapsed ? 'pt-2' : 'pt-4 mt-6'}`}
                    >
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group ${isCollapsed ? 'w-full' : 'w-full'}`}
                            aria-label="Toggle Theme"
                        >
                            <motion.div
                                key={isDark ? 'dark' : 'light'}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            >
                                {isDark ? (
                                    <Sun size={16} className="text-white transition-colors group-hover:text-yellow-300" />
                                ) : (
                                    <Moon size={16} className="text-neutral-medium transition-colors group-hover:text-purple-500" />
                                )}
                            </motion.div>

                            {/* Theme text - Animated collapse */}
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="text-xs text-neutral-medium dark:text-neutral-light group-hover:text-black dark:group-hover:text-white"
                                    >
                                        {isDark ? 'Light Mode' : 'Dark Mode'}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.aside>
    );
}
