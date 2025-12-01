import { NavItem } from './NavItem';

interface NavLinksProps {
    items: Array<{
        name: string;
        href: string;
        icon: string;
    }>;
}

export function NavLinks({ items }: NavLinksProps) {
    return (
        <ul className="flex items-center space-x-8">
            {items.map((item) => (
                <li key={item.name}>
                    <NavItem item={item} />
                </li>
            ))}
        </ul>
    );
}
