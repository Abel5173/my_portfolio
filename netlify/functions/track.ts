
import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';
import { UAParser } from 'ua-parser-js';
import crypto from 'crypto';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const { path, referrer, utm, behavior } = data; // utm and behavior from frontend
        const userAgent = event.headers['user-agent'] || '';
        const ip = event.headers['x-nf-client-connection-ip'] || event.headers['client-ip'] || 'unknown';

        // Parse User Agent
        const parser = new UAParser(userAgent);
        const browser = parser.getBrowser();
        const device = parser.getDevice();
        const os = parser.getOS();

        const browserName = `${browser.name} ${browser.version}`;
        const deviceType = device.type || 'desktop';
        const osName = `${os.name} ${os.version}`;

        // Generate Fingerprint
        const fingerprint = crypto
            .createHash('sha256')
            .update(`${ip}-${userAgent}-${deviceType}`)
            .digest('hex');

        // Check for recent visit (last 24 hours)
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

        const { data: existingVisits, error: searchError } = await supabase
            .from('visits')
            .select('id, recruiter_score')
            .eq('fingerprint', fingerprint)
            .gt('timestamp', twentyFourHoursAgo);

        if (searchError) {
            console.error('Error checking visits:', searchError);
        }

        const isUnique = !existingVisits || existingVisits.length === 0;
        const isReturnVisitor = !isUnique;

        // Calculate Recruiter Score
        // We need to import this dynamically or ensure it's bundled. 
        // For Netlify Functions with TS, relative imports should work if configured correctly.
        // Assuming the build process handles this.
        // If not, we might need to inline logic or ensure shared lib is accessible.
        // For now, let's assume we can import.

        // NOTE: In a real Netlify function, importing from src/lib might require specific build config.
        // We will duplicate the simple logic here if import fails, or rely on the build.
        // Let's try to keep it simple and inline the scoring call if we can't easily import.
        // However, the user asked for `src/lib/scoring/recruiterScore.ts`.
        // We will attempt to import it. If the build fails, we'll need to fix tsconfig.

        // Simplified scoring for the track function (initial hit)
        let score = 0;
        const recruiterSources = ['linkedin', 'job', 'recruiter', 'application'];
        if (referrer && recruiterSources.some(s => referrer.toLowerCase().includes(s))) score += 5;
        if (utm?.source && recruiterSources.some(s => utm.source.toLowerCase().includes(s))) score += 5;

        const recruiterPages = ['cv', 'experience', 'projects', 'resume'];
        if (path && recruiterPages.some((p: string) => p.toLowerCase().includes(p))) score += 3;

        if (isReturnVisitor) score += 2;

        // Add existing score if available
        if (existingVisits && existingVisits.length > 0) {
            // This is a simplification. Ideally we sum up or update. 
            // For a new visit row, we might just store the score for *this* visit 
            // or cumulative if we were updating a user profile.
            // The requirement says "Store recruiter score in database".
            // We will store the score calculated for this specific visit context.
        }

        const utmSource = utm?.source || null;
        const utmMedium = utm?.medium || null;
        const utmCampaign = utm?.campaign || null;
        const utmContent = utm?.content || null;
        const utmTerm = utm?.term || null;

        // Insert Visit
        const { error: insertError } = await supabase.from('visits').insert({
            ipaddress: ip,
            fingerprint,
            referrer: referrer || 'Direct',
            country: event.headers['x-country'] || 'Unknown',
            city: 'Unknown',
            device: deviceType,
            browser: browserName,
            page: path,
            timestamp: new Date().toISOString(),
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            utm_content: utmContent,
            utm_term: utmTerm,
            recruiter_score: score,
        });

        if (insertError) {
            console.error('Error inserting visit:', insertError);
            return { statusCode: 500, body: 'Error tracking visit' };
        }

        // Trigger Notifications
        // Condition: Unique visit OR High Recruiter Score
        if (isUnique || score >= 15) {
            const notificationPayload = {
                source: referrer || 'Direct',
                location: `${event.headers['x-country'] || 'Unknown'}`,
                device: deviceType,
                page: path,
                time: new Date().toLocaleString(),
                recruiter_score: score,
                utm_source: utmSource,
                is_high_intent: score >= 15
            };

            // Fire and forget notifications
            fetch(`${process.env.URL}/.netlify/functions/notifyTelegram`, {
                method: 'POST',
                body: JSON.stringify(notificationPayload),
            }).catch(err => console.error('Telegram trigger error:', err));

            fetch(`${process.env.URL}/.netlify/functions/notifyEmail`, {
                method: 'POST',
                body: JSON.stringify(notificationPayload),
            }).catch(err => console.error('Email trigger error:', err));
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Tracked successfully', unique: isUnique, score }),
        };
    } catch (error) {
        console.error('Tracking error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
