import {
    Menu,
    X,
    Sun,
    Moon,
    Home,
    Briefcase,
    Code,
    User,
    FileText,
    Mail,
    Download,
    Search,
    ChevronRight
} from 'lucide-react';
import React from 'react';

export type IconName =
    | 'menu'
    | 'close'
    | 'sun'
    | 'moon'
    | 'home'
    | 'projects'
    | 'skills'
    | 'experience'
    | 'articles'
    | 'contact'
    | 'download'
    | 'search'
    | 'chevron-right';

const iconMap: Record<IconName, React.ElementType> = {
    'menu': Menu,
    'close': X,
    'sun': Sun,
    'moon': Moon,
    'home': Home,
    'projects': Briefcase,
    'skills': Code,
    'experience': User, // Using User for experience/about usually, or we can swap
    'articles': FileText,
    'contact': Mail,
    'download': Download,
    'search': Search,
    'chevron-right': ChevronRight
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number | string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className, ...props }) => {
    const LucideIcon = iconMap[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return <LucideIcon size={size} className={className} {...props} />;
};
