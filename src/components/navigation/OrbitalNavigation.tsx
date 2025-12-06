import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Home,
    Briefcase,
    Code2,
    FileText,
    User,
    Mail,
    Award,
    BookOpen,
    Settings,
    Play
} from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
    isPage?: boolean;
}

const OrbitalNavigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Navigation items with their routes and icons
    const navItems: NavItem[] = [
        { name: 'Home', href: '/', icon: <Home size={20} />, isPage: true },
        { name: 'Projects', href: '#projects', icon: <Briefcase size={20} /> },
        { name: 'Skills', href: '#skills', icon: <Code2 size={20} /> },
        { name: 'Articles', href: '/articles', icon: <BookOpen size={20} />, isPage: true },
        { name: 'Experience', href: '#experience', icon: <Award size={20} /> },
        { name: 'About', href: '#about', icon: <User size={20} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
        { name: 'Nav Playground', href: '/demo/nav-playground', icon: <Play size={20} />, isPage: true },
        { name: 'Analytics', href: '/admin/analytics', icon: <Settings size={20} />, isPage: true },
    ];

    // Filter items based on current page context
    const getVisibleItems = () => {
        if (location.pathname === '/') {
            // On home page, show all items
            return navItems;
        } else {
            // On other pages, prioritize page-based navigation
            const pageItems = navItems.filter(item => item.isPage);
            const sectionItems = navItems.filter(item => !item.isPage && item.href.startsWith('#'));
            return [...pageItems, ...sectionItems];
        }
    };

    const visibleItems = getVisibleItems();

    // Calculate orbital positions
    const getOrbitalPosition = (index: number, total: number, radius: number = 120) => {
        const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { x, y, angle };
    };

    const handleItemClick = (item: NavItem) => {
        if (item.href.startsWith('#')) {
            // Handle section navigation on home page
            if (location.pathname === '/') {
                const element = document.querySelector(item.href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Navigate to home and then scroll to section
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(item.href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        } else {
            // Handle page navigation
            navigate(item.href);
        }
        setIsExpanded(false);
    };

    return (
        <div className="fixed bottom-8 left-8 z-[9998]">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Central Control Orb */}
                <motion.button
                    className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-secondary shadow-2xl shadow-primary/30 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsExpanded(!isExpanded)}
                    animate={{
                        boxShadow: isExpanded
                            ? '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)'
                            : '0 0 20px rgba(59, 130, 246, 0.3)'
                    }}
                >
                    {/* Animated background particles */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                            background: [
                                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%)',
                                'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.3), transparent 70%)',
                                'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%)',
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Central icon */}
                    <motion.div
                        animate={{ rotate: isExpanded ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="w-6 h-6 bg-white rounded-sm relative">
                            <div className="absolute inset-1 bg-primary rounded-sm" />
                        </div>
                    </motion.div>

                    {/* Pulsing ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.button>

                {/* Orbital Navigation Orbs */}
                <AnimatePresence>
                    {isExpanded && (
                        <>
                            {visibleItems.map((item, index) => {
                                const { x, y, angle } = getOrbitalPosition(index, visibleItems.length);
                                const isActive = location.pathname === item.href ||
                                    (item.href.startsWith('#') && location.pathname === '/' &&
                                        window.location.hash === item.href);

                                return (
                                    <motion.button
                                        key={item.name}
                                        className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-md border transition-all duration-300 ${isActive
                                                ? 'bg-primary border-primary-light shadow-primary/50'
                                                : 'bg-surface/80 border-border hover:bg-surface hover:border-primary/50'
                                            }`}
                                        initial={{
                                            x: 0,
                                            y: 0,
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x,
                                            y,
                                            scale: 1,
                                            opacity: 1
                                        }}
                                        exit={{
                                            x: 0,
                                            y: 0,
                                            scale: 0,
                                            opacity: 0
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                            delay: index * 0.05
                                        }}
                                        whileHover={{
                                            scale: 1.15,
                                            boxShadow: isActive
                                                ? '0 0 25px rgba(59, 130, 246, 0.6)'
                                                : '0 0 20px rgba(59, 130, 246, 0.4)'
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <div className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-foreground hover:text-primary'
                                            }`}>
                                            {item.icon}
                                        </div>

                                        {/* Tooltip */}
                                        <motion.div
                                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-surface/90 backdrop-blur-md rounded-lg border border-border text-sm font-medium text-foreground whitespace-nowrap opacity-0 pointer-events-none"
                                            initial={{ opacity: 0, y: 5 }}
                                            whileHover={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.name}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-surface/90" />
                                        </motion.div>
                                    </motion.button>
                                );
                            })}

                            {/* Orbital ring visualization */}
                            <motion.div
                                className="absolute inset-0 rounded-full border border-primary/20 pointer-events-none"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: 2.4,
                                    opacity: [0, 0.3, 0]
                                }}
                                transition={{
                                    scale: { duration: 0.5, ease: "easeOut" },
                                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default OrbitalNavigation;
