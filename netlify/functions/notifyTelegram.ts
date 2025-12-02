
import { Handler } from '@netlify/functions';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.error('Telegram credentials missing');
        return { statusCode: 500, body: 'Configuration Error' };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const { source, location, device, page, time } = data;

        const message = `
⚡ *New Portfolio Visitor*
*Source:* ${source}
*Location:* ${location}
*Device:* ${device}
*Page:* ${page}
*Time:* ${time}
    `;

        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Telegram API Error:', errorText);
            return { statusCode: 500, body: 'Failed to send Telegram notification' };
        }

        return { statusCode: 200, body: 'Notification sent' };
    } catch (error) {
        console.error('Telegram notification error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
