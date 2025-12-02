import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
    Home,
    Briefcase,
    Code2,
    FileText,
    User,
    Mail,
    Sun,
    Moon,
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

export default function FloatingSidebar() {
    const [isDark, setIsDark] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState < number | null > (null);

    // Parallax tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);
    const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = document.body.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
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
        <>
            {/* Floating Sidebar */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
            >
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative"
                    onMouseMove={(e) => {
                        const card = e.currentTarget.getBoundingClientRect();
                        mouseX.set(e.clientX - card.left - card.width / 2);
                        mouseY.set(e.clientY - card.top - card.height / 2);
                    }}
                >
                    {/* Glass Panel */}
                    <div className="relative p-6 pb-8 bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/30">
                        {/* Floating Orb Background */}
                        <div className="absolute inset-0 overflow-hidden rounded-3xl">
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-radial from-white/20 to-transparent dark:from-white/10 opacity-40" />
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-radial from-white/10 to-transparent dark:from-white/5 opacity-30" />
                        </div>

                        {/* Logo / Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="relative z-10 mb-12 text-center"
                        >
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-800 dark:to-neutral-900 shadow-inner flex items-center justify-center border border-white/30">
                                <span className="text-2xl font-bold text-black dark:text-white">AZ</span>
                            </div>
                            <h3 className="text-sm font-light tracking-widest text-black/80 dark:text-white/90 uppercase">
                                Abel Zeleke
                            </h3>
                        </motion.div>

                        {/* Navigation Items */}
                        <nav className="relative space-y-3">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    onClick={() => scrollToSection(item.href)}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="relative flex items-center gap-4 p-3 rounded-2xl transition-all duration-300">
                                        {/* Hover Background Glow */}
                                        <motion.div
                                            layoutId="sidebarHover"
                                            className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-2xl shadow-lg"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Floating Particles on Hover */}
                                        {hoveredIndex === index && (
                                            <>
                                                <motion.div
                                                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                                                    initial={{ x: -20, y: -20, scale: 0 }}
                                                    animate={{ x: [0, 30, -20], y: [-20, 20, -10], scale: [0, 1.5, 0] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                />
                                                <motion.div
                                                    className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
                                                    initial={{ x: 20, y: 10, scale: 0 }}
                                                    animate={{ x: [-10, 40, 10], y: [10, -30, 15], scale: [0, 1.8, 0] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                                />
                                            </>
                                        )}

                                        <div className="relative z-10 flex items-center gap-4">
                                            <item.icon
                                                size={20}
                                                className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300"
                                            />
                                            <span className="text-sm font-medium text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                                {item.name}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Theme Toggle & CTA */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="relative mt-10 pt-6 border-t border-white/10"
                        >
                            <button
                                onClick={toggleTheme}
                                className="w-full p-3 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-3 group"
                            >
                                {isDark ? (
                                    <Sun size={18} className="text-white/60 group-hover:text-white transition-colors" />
                                ) : (
                                    <Moon size={18} className="text-black/60 group-hover:text-black transition-colors" />
                                )}
                                <span className="text-xs font-medium text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white">
                                    {isDark ? 'Light' : 'Dark'}
                                </span>
                            </button>

                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="mt-4 block text-center px-5 py-3 bg-gradient-to-r from-black to-neutral-800 dark:from-white dark:to-neutral-200 text-white dark:text-black rounded-2xl text-sm font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Hire Me
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.aside>

            {/* Subtle ambient background gradient following sidebar */}
            <div className="fixed left-0 top-0 w-96 h-full pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent dark:from-white/3 -translate-x-32" />
            </div>
        </>
    );
}
