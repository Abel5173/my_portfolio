import { useEffect } from 'react';
import { useTheme } from '../components/ThemeProvider';

export function useDynamicFavicon() {
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
        if (!link) return;

        if (resolvedTheme === 'dark') {
            link.href = '/dark-theme-f-logo.png';
        } else {
            link.href = '/light-theme-f-logo.png';
        }
    }, [resolvedTheme]);
}
