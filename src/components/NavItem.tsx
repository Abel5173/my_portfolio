import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavItemProps {
  item: {
    name: string;
    href: string;
    icon: string;
  };
}

export function NavItem({ item }: NavItemProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkActive = () => {
      const currentHash = window.location.hash;
      setIsActive(currentHash === item.href);
    };

    checkActive();
    window.addEventListener('hashchange', checkActive);
    return () => window.removeEventListener('hashchange', checkActive);
  }, [item.href]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', item.href);
      setIsActive(true);
    }
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded ${
        isActive ? 'text-primary' : 'text-foreground'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.name}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-primary"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
        layoutId="nav-underline"
      />
    </a>
  );
}
