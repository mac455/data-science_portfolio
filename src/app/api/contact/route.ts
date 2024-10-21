import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator'; 

export async function POST(req: Request) {
    const { name, email, message, phone } = await req.json();

    // Validate email
    if (!validator.isEmail(email)) {
        return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '465'),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `${name} wants to connect!`,
            text: message,
            html: `
                <p><strong>${name}</strong> has submitted a contact form on your website.</p>
                <p>Their email is: ${email}</p>
                <p>Their number is: ${phone}</p>
                <p>Their message is: '${message}'</p>
            `,
        });

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
