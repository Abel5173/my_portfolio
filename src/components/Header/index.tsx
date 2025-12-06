import { useState } from 'react';
import { useScrollState } from '../../hooks/useScrollState';
import { NavLinks } from '../NavLinks';
import { ThemeToggle } from '../ThemeToggle';
import { Hamburger } from '../Hamburger';
import { Drawer } from '../Drawer';
import { Icon, IconName } from '../icons';
import { Link, useLocation } from 'react-router-dom';

const navItems: { name: string; href: string; icon: IconName; isPage?: boolean }[] = [
    { name: 'Home', href: '/', icon: 'home', isPage: true },
    { name: 'Projects', href: '#projects', icon: 'projects' },
    { name: 'Skills', href: '#skills', icon: 'skills' },
    { name: 'Articles', href: '/articles', icon: 'articles', isPage: true },
    { name: 'Experience', href: '#experience', icon: 'experience' },
    { name: 'About', href: '#about', icon: 'about' },
    { name: 'Contact', href: '#contact', icon: 'contact' },
];

export default function Header() {
    const isScrolled = useScrollState(16);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const location = useLocation();

    // Filter navigation items based on current page
    const currentNavItems = location.pathname === '/'
        ? navItems // Show all items on home page
        : navItems.filter(item => item.isPage); // Only show page-based items on other pages

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'h-14 bg-surface/80 backdrop-blur-md border-b border-border shadow-sm'
                    : 'h-[72px] bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-primary dark:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded-md"
                            aria-label="Neural Slate Home"
                        >
                            <span className="sr-only">Neural Slate</span>
                            {/* Placeholder for Logo SVG - using text for now */}
                            NS
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <NavLinks items={currentNavItems} />

                    {/* Utilities */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <ThemeToggle />

                        <a
                            href="https://drive.google.com/file/d/14EJKDuNdoTyJaYhWHfHAxcQgtl13Nb6U/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden sm:flex items-center px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-surface"
                        >
                            <Icon name="download" size={16} className="mr-2" />
                            Resume
                        </a>

                        {/* Mobile Menu Button */}
                        <Hamburger isOpen={isDrawerOpen} onToggle={() => setIsDrawerOpen(!isDrawerOpen)} />
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} items={currentNavItems} />
        </>
    );
};
