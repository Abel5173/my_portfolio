import { useState, useEffect } from 'react';

/**
 * Hook to track if the user has scrolled past a certain threshold.
 * Used for toggling the compact mode of the header.
 * 
 * @param threshold - The scroll Y value to trigger the state change (default: 16px)
 * @returns boolean - True if scrolled past threshold
 */
export function useScrollState(threshold = 16) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrolled = window.scrollY > threshold;
                    setIsScrolled(scrolled);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial check
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [threshold]);

    return isScrolled;
}
