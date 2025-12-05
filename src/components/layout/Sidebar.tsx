import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import {
    Home,
    Briefcase,
    Code2,
    FileText,
    User,
    Mail,
    Award
} from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'Projects', icon: Briefcase, href: '#projects' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Experience', icon: FileText, href: '#experience' },
    { name: 'Certificates', icon: Award, href: '#certificates' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export default function GlassSidebar() {
    const { resolvedTheme } = useTheme();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const isDark = resolvedTheme === 'dark';

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

                    {/* Improved Collapse Toggle Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -right-3 top-8 z-20"
                    >
                        <motion.button
                            onClick={toggleCollapse}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative w-8 h-8 rounded-full backdrop-blur-md shadow-lg overflow-hidden ${isDark
                                ? 'bg-white/10 border-white/20'
                                : 'bg-black/10 border-black/20'}`}
                            style={{
                                border: '1px solid',
                                borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
                            }}
                        >
                            {/* Animated Background */}
                            <motion.div
                                className="absolute inset-0"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)'
                                        : 'linear-gradient(45deg, rgba(0,0,0,0.1), transparent)'
                                }}
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Animated Hamburger/Arrow Icon */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                animate={{
                                    rotate: isCollapsed ? 0 : 180,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }}
                            >
                                {/* Hamburger Icon that transforms to arrow */}
                                <div className="relative w-4 h-4">
                                    {/* Top line transforms to arrow */}
                                    <motion.div
                                        className={`absolute top-0 left-0 w-full h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                                        animate={{
                                            rotate: isCollapsed ? 0 : 45,
                                            y: isCollapsed ? 0 : 6,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Middle line disappears */}
                                    <motion.div
                                        className={`absolute top-1/2 left-0 w-full h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                                        animate={{
                                            opacity: isCollapsed ? 1 : 0,
                                            scaleX: isCollapsed ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.2 }}
                                    />

                                    {/* Bottom line transforms to arrow */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${isDark ? 'bg-white' : 'bg-black'}`}
                                        animate={{
                                            rotate: isCollapsed ? 0 : -45,
                                            y: isCollapsed ? 0 : -6,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </motion.div>

                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 rounded-full ${isDark ? 'shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'shadow-[0_0_10px_rgba(0,0,0,0.2)]'}`}
                                animate={{
                                    boxShadow: isDark
                                        ? [
                                            '0 0 10px rgba(255,255,255,0.3)',
                                            '0 0 20px rgba(255,255,255,0.5)',
                                            '0 0 10px rgba(255,255,255,0.3)'
                                        ]
                                        : [
                                            '0 0 10px rgba(0,0,0,0.2)',
                                            '0 0 20px rgba(0,0,0,0.3)',
                                            '0 0 10px rgba(0,0,0,0.2)'
                                        ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity
                                }}
                            />
                        </motion.button>
                    </motion.div>

                    {/* Logo / Identity - Animated Collapse */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 mb-8 text-center"
                    >
                        {/* Animated Border Container */}
                        <motion.div
                            className={`relative mx-auto mb-3 ${isCollapsed ? 'w-12 h-12' : 'w-14 h-14'} rounded-xl overflow-hidden`}
                            animate={{
                                width: isCollapsed ? 48 : 56,
                                height: isCollapsed ? 48 : 56
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Animated Border Effect */}
                            <motion.div
                                className="absolute inset-0 rounded-xl"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                                        : 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,0,0,0.05))'
                                }}
                                animate={{
                                    border: isDark
                                        ? '1px solid rgba(255,255,255,0.15)'
                                        : '1px solid rgba(0,0,0,0.15)'
                                }}
                            />

                            {/* Moving Gradient Border */}
                            <motion.div
                                className="absolute -inset-[1px] rounded-xl"
                                style={{
                                    background: isDark
                                        ? 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)'
                                        : 'linear-gradient(45deg, transparent, rgba(0,0,0,0.3), transparent)'
                                }}
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Logo Container with Glass Effect */}
                            <div className={`absolute inset-0.5 rounded-xl ${isDark ? 'bg-black/20 backdrop-blur-sm' : 'bg-white/20 backdrop-blur-sm'} flex items-center justify-center overflow-hidden`}>
                                <motion.div
                                    className="relative w-full h-full flex items-center justify-center"
                                    animate={{
                                        scale: isCollapsed ? 0.85 : 1,
                                    }}
                                >
                                    {/* Conditional Logo Image Rendering with Animation */}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={isDark ? 'dark-logo' : 'light-logo'}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative w-full h-full flex items-center justify-center"
                                        >
                                            {/* Logo Image */}
                                            <div className="relative w-full h-full flex items-center justify-center p-2">
                                                {/* Background Glow */}
                                                <motion.div
                                                    className={`absolute inset-0 rounded-xl ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
                                                    animate={{
                                                        opacity: [0.5, 1, 0.5],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                />

                                                {/* Logo Image */}
                                                <img
                                                    src={isDark ? "/dark-theme-f-logo.png" : "/light-theme-f-logo.png"}
                                                    alt="Logo"
                                                    className="w-full h-full object-contain relative z-10"
                                                    onError={(e) => {
                                                        // Fallback if image doesn't load
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        // Create fallback F letter
                                                        const fallback = document.createElement('div');
                                                        fallback.className = `text-xl font-bold ${isDark ? 'text-white' : 'text-black'} flex items-center justify-center w-full h-full`;
                                                        fallback.textContent = 'F';
                                                        target.parentNode?.appendChild(fallback);
                                                    }}
                                                />

                                                {/* Floating Particle Effects */}
                                                {[...Array(3)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-white/40' : 'bg-black/40'}`}
                                                        initial={{
                                                            x: 0,
                                                            y: 0,
                                                            opacity: 0
                                                        }}
                                                        animate={{
                                                            x: [
                                                                Math.sin(i * 120 * Math.PI / 180) * 18,
                                                                Math.sin((i * 120 + 180) * Math.PI / 180) * 18,
                                                                Math.sin(i * 120 * Math.PI / 180) * 18
                                                            ],
                                                            y: [
                                                                Math.cos(i * 120 * Math.PI / 180) * 18,
                                                                Math.cos((i * 120 + 180) * Math.PI / 180) * 18,
                                                                Math.cos(i * 120 * Math.PI / 180) * 18
                                                            ],
                                                            opacity: [0, 1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 2 + i * 0.5,
                                                            repeat: Infinity,
                                                            delay: i * 0.3,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Shine Effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '100%' }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2.5,
                                            ease: "easeInOut",
                                            delay: 0.5
                                        }}
                                    />

                                    {/* Pulse Effect */}
                                    <motion.div
                                        className="absolute inset-0 rounded-xl"
                                        animate={{
                                            boxShadow: isDark
                                                ? [
                                                    'inset 0 0 10px rgba(255,255,255,0.1)',
                                                    'inset 0 0 20px rgba(255,255,255,0.2)',
                                                    'inset 0 0 10px rgba(255,255,255,0.1)'
                                                ]
                                                : [
                                                    'inset 0 0 10px rgba(0,0,0,0.1)',
                                                    'inset 0 0 20px rgba(0,0,0,0.2)',
                                                    'inset 0 0 10px rgba(0,0,0,0.1)'
                                                ]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Portfolio Text with Better Animation */}
                        <AnimatePresence>
                            {!isCollapsed && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, height: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                                    exit={{ opacity: 0, y: -10, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="relative">
                                        {/* Text with gradient effect */}
                                        <span className={`text-xs font-semibold bg-clip-text text-transparent ${isDark
                                            ? 'bg-gradient-to-r from-gray-300 to-white'
                                            : 'bg-gradient-to-r from-gray-700 to-black'}`}>
                                            Portfolio
                                        </span>

                                        {/* Subtle underline effect */}
                                        <motion.div
                                            className={`h-px mt-1 ${isDark ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-gradient-to-r from-transparent via-black/30 to-transparent'}`}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: 0.1, duration: 0.3 }}
                                        />
                                    </div>
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
                </div>
            </motion.div>
        </motion.aside>
    );
}
