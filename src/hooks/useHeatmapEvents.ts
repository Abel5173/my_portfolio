import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Simple throttle implementation if lodash is not available
function simpleThrottle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

const useHeatmapEvents = () => {
    const location = useLocation();
    const maxScrollDepth = useRef(0);

    useEffect(() => {
        const sendEvent = async (x: number, y: number, scrollDepth: number) => {
            try {
                await fetch('/.netlify/functions/heatmap', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        page: location.pathname,
                        x,
                        y,
                        scroll_depth: scrollDepth,
                    }),
                });
            } catch (error) {
                console.error('Heatmap error:', error);
            }
        };

        const handleClick = (e: MouseEvent) => {
            const scrollDepth = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
            sendEvent(e.clientX, e.clientY, scrollDepth);
        };

        const handleScroll = simpleThrottle(() => {
            const scrollDepth = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
            if (scrollDepth > maxScrollDepth.current + 10) { // Only send if increased by 10%
                maxScrollDepth.current = scrollDepth;
                sendEvent(0, 0, scrollDepth); // 0,0 for scroll events
            }
        }, 300);

        window.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);
};

export default useHeatmapEvents;
