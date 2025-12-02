
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useTrackVisitor = () => {
    const location = useLocation();

    useEffect(() => {
        const trackVisit = async () => {
            // Skip tracking in development mode
            if (import.meta.env.DEV) {
                console.log('Skipping visitor tracking in development mode');
                return;
            }

            try {
                const searchParams = new URLSearchParams(location.search);
                const utm = {
                    source: searchParams.get('utm_source'),
                    medium: searchParams.get('utm_medium'),
                    campaign: searchParams.get('utm_campaign'),
                    content: searchParams.get('utm_content'),
                    term: searchParams.get('utm_term'),
                };

                const payload = {
                    path: location.pathname,
                    referrer: document.referrer,
                    utm,
                };

                const response = await fetch('/.netlify/functions/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    console.warn('Tracking request failed:', response.status);
                }
            } catch (error) {
                console.error('Tracking error:', error);
            }
        };

        trackVisit();
    }, [location]);
};

export default useTrackVisitor;
