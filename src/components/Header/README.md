# Header Component

A modern, accessible navigation header for the Neural Slate portfolio with responsive design, theme support, and smooth animations.

## Features

- **Sticky Navigation**: Fixed header that transforms on scroll with frosted glass effect
- **Responsive Design**: Desktop navigation with mobile slide-in drawer
- **Theme Support**: Integrated dark/light mode toggle with persistence
- **Accessibility**: Full keyboard navigation, focus management, and ARIA compliance
- **Animations**: Smooth transitions using Framer Motion with reduced-motion support
- **Performance**: Optimized scroll handling and lazy loading

## API

### Header

The main header component that orchestrates all navigation elements.

```tsx
import { Header } from './components/Header';

function App() {
  return <Header />;
}
```

### NavLinks

Renders a list of navigation items.

```tsx
import { NavLinks } from './components/NavLinks';

const items = [
  { name: 'Home', href: '#home', icon: 'home' },
  { name: 'Projects', href: '#projects', icon: 'briefcase' },
];

<NavLinks items={items} />
```

### NavItem

Individual navigation item with active state and underline animation.

```tsx
import { NavItem } from './NavItem';

<NavItem item={{ name: 'Home', href: '#home', icon: 'home' }} />
```

### ThemeToggle

Theme switcher with localStorage persistence.

```tsx
import { ThemeToggle } from './ThemeToggle';

<ThemeToggle />
```

### Hamburger

Mobile menu toggle button.

```tsx
import { Hamburger } from './Hamburger';

<Hamburger isOpen={isOpen} onToggle={handleToggle} />
```

### Drawer

Accessible mobile navigation drawer.

```tsx
import { Drawer } from './Drawer';

<Drawer isOpen={isOpen} onClose={handleClose} items={navItems} />
```

## Accessibility

### Keyboard Navigation
- **Tab**: Cycles through navigation elements
- **Enter/Space**: Activates buttons and links
- **Escape**: Closes drawers and menus
- **Arrow Keys**: Navigate menu items (future submenu support)

### Focus Management
- Visible focus rings using `--secondary` color with 3px offset
- Focus trapped within drawer when open
- Focus restored to trigger element when drawer closes

### ARIA Attributes
- `aria-label="Primary navigation"` on nav element
- `aria-current="page"` on active navigation items
- `aria-expanded` and `aria-controls` on disclosure elements
- `aria-pressed` on theme toggle
- `role="dialog"` and `aria-modal` on drawer

### Screen Reader Support
- Semantic HTML structure
- Descriptive labels and instructions
- Live region announcements for state changes

## Design Tokens

Uses Neural Slate design tokens defined in `src/styles/tokens.css`:

- `--primary`: Deep Indigo (#0E2356)
- `--secondary`: Electric Teal (#1DB3A6)
- `--surface`: Background surface color
- `--foreground`: Text color
- `--border`: Border color
- And more...

## Performance

- **Scroll Optimization**: Uses `requestAnimationFrame` for smooth scroll detection
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **Lazy Loading**: Icons loaded dynamically if needed
- **Bundle Size**: Minimal dependencies, tree-shakable imports

## Browser Support

- Modern browsers with CSS Grid and Flexbox
- Progressive enhancement for backdrop-filter
- Fallback styles for older browsers

## Testing

Run tests with:
```bash
npm test
```

Tests cover:
- Keyboard navigation
- Focus management
- ARIA attributes
- Theme persistence
- Responsive behavior

## References

- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
