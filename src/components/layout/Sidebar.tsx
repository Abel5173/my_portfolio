import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import {
    Home,
    Briefcase,
    Code2,
    FileText,
    User,
    Mail,
    Sun,
    Moon
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

    // Parallax / floating motion
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);
    const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
    const floatY = useTransform(mouseY, [-300, 300], [-5, 5]); // subtle vertical float

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

    const scrollToSection = (href: string) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
                <div className="relative p-4 pb-6 bg-gray-500bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10backdrop-saturate-100 backdrop-contrast-100 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/20 transition-colors duration-500">
                    
                    {/* Logo / Identity */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 mb-8 text-center"
                    >
                        <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-black from-neutral-100/30 to-neutral-300/30 dark:from-neutral-800/30 dark:to-neutral-900/30 shadow-inner flex items-center justify-center border-black/10 flex flex-col justify-center">
                            <img src="../../public/dark-theme-f-logo.png" alt="Logo" className="w-14 h-14" />
                        </div>
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
                                onClick={() => scrollToSection(item.href)}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative flex items-center gap-4 p-3 rounded-xl transition-all duration-300 overflow-hidden">

                                    {/* Hover Glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    />

                                    {/* Indicator Bar */}
                                    <motion.div
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white dark:bg-white rounded-r-full"
                                        initial={{ scaleY: 0, opacity: 0 }}
                                        animate={{ scaleY: hoveredIndex === index ? 1 : 0, opacity: hoveredIndex === index ? 1 : 0 }}
                                        transition={{ duration: 0.25 }}
                                    />

                                    <div className="relative z-10 flex items-center gap-3 pl-2">
                                        <item.icon
                                            size={18}
                                            className={`transition-colors duration-300 ${hoveredIndex === index
                                                ? 'text-slate-700'
                                                : 'text-black dark:text-neutral-300'
                                                }`}
                                        />
                                        <span className={`text-sm font-medium transition-colors duration-300 ${hoveredIndex === index
                                            ? 'text-slate-700'
                                            : 'text-black dark:text-neutral-300'
                                            }`}>
                                            {item.name}
                                        </span>
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
                        className="relative mt-8 pt-4 border-t border-white/20 dark:border-white/10"
                    >
                        <button
                            onClick={toggleTheme}
                            className="w-full p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <Sun size={16} className="text-white transition-colors group-hover:text-neutral-300" />
                            ) : (
                                <Moon size={16} className="text-neutral-300 transition-colors group-hover:text-white" />
                            )}
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.aside>
    );
}
