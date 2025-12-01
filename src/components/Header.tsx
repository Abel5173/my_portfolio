import { useState } from 'react';
import { useScrollState } from '../hooks/useScrollState';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { Hamburger } from './Hamburger';
import { Drawer } from './Drawer';
import { Icon, IconName } from './icons';

const navItems: Array<{ name: string; href: string; icon: IconName }> = [
  { name: 'Home', href: '#home', icon: 'home' },
  { name: 'Projects', href: '#projects', icon: 'projects' },
  { name: 'Skills', href: '#skills', icon: 'skills' },
  { name: 'Experience', href: '#experience', icon: 'experience' },
  { name: 'Articles', href: '#articles', icon: 'articles' },
  { name: 'Contact', href: '#contact', icon: 'contact' },
];

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isScrolled = useScrollState(16);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-surface/80 backdrop-blur-md shadow-sm border-b border-border h-18 md:h-18'
            : 'bg-transparent h-14 md:h-18'
          }`}
        style={{
          backdropFilter: isScrolled ? 'blur(6px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(6px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl text-primary">Abel</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Primary navigation">
              <NavLinks items={navItems} />
            </nav>

            {/* Right Side Utilities */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Download Resume"
              >
                <Icon name="download" size={16} />
                Resume
              </button>

              {/* Mobile Hamburger */}
              <Hamburger isOpen={isDrawerOpen} onToggle={handleDrawerToggle} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} items={navItems} />
    </>
  );
}
