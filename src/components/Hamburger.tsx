import { Icon } from './icons';

interface HamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Hamburger({ isOpen, onToggle }: HamburgerProps) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-md text-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      aria-expanded={isOpen}
      aria-controls="mobile-drawer"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <Icon name={isOpen ? 'close' : 'menu'} size={24} />
    </button>
  );
}
