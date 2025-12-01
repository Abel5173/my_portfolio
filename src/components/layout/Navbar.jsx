import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Home, Briefcase, Code, User, FileText, Mail } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: FileText },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-neutral-black/80 backdrop-blur-md shadow-sm border-b border-neutral-light/20 dark:border-neutral-medium/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <div className="w-8 h-8 bg-primary dark:bg-secondary rounded-lg flex items-center justify-center">
                            <span className="text-white dark:text-primary font-bold text-xl">A</span>
                        </div>
                        <span className="font-bold text-xl text-primary dark:text-white tracking-tight">Abel</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative group px-3 py-2 text-sm font-medium text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-neutral-lightest dark:hover:bg-neutral-dark transition-colors text-neutral-medium dark:text-neutral-light"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a
                            href="#contact"
                            className="px-4 py-2 bg-primary dark:bg-white text-white dark:text-primary rounded-md font-medium text-sm hover:shadow-glow transition-all hover:-translate-y-0.5"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-neutral-lightest dark:hover:bg-neutral-dark transition-colors text-neutral-medium dark:text-neutral-light"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-neutral-black border-b border-neutral-light/20 dark:border-neutral-medium/20 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white hover:bg-neutral-lightest dark:hover:bg-neutral-dark transition-colors"
                                >
                                    <link.icon size={18} />
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 pb-2">
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-4 py-2 bg-primary dark:bg-white text-white dark:text-primary rounded-md font-medium text-base hover:shadow-glow transition-all"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
