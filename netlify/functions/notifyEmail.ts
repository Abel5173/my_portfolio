
import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const MY_EMAIL = process.env.MY_EMAIL;

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    if (!SMTP_USER || !SMTP_PASS || !SMTP_HOST || !MY_EMAIL) {
        console.error('Email credentials missing');
        return { statusCode: 500, body: 'Configuration Error' };
    }

    try {
        const data = JSON.parse(event.body || '{}');
        const { source, location, device, page, time } = data;

        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Bot" <${SMTP_USER}>`,
            to: MY_EMAIL,
            subject: '⚡ New Portfolio Visitor',
            text: `
New Visitor Detected!

Source: ${source}
Location: ${location}
Device: ${device}
Page: ${page}
Time: ${time}
      `,
            html: `
        <h2>⚡ New Portfolio Visitor</h2>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Device:</strong> ${device}</p>
        <p><strong>Page:</strong> ${page}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return { statusCode: 200, body: 'Email sent' };
    } catch (error) {
        console.error('Email notification error:', error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
