import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const handler: Handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const { page, x, y, scroll_depth } = data;

        if (!page || x === undefined || y === undefined) {
            return { statusCode: 400, body: 'Missing required fields' };
        }

        const { error } = await supabase.from('heatmap_events').insert({
            page,
            x,
            y,
            scroll_depth: scroll_depth || 0,
            timestamp: new Date().toISOString(),
        });

        if (error) {
            console.error('Error storing heatmap event:', error);
            return { statusCode: 500, body: 'Error storing event' };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Event stored' }),
        };
    } catch (error) {
        console.error('Heatmap error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
