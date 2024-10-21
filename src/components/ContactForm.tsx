'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { name, email, phone, message };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
            } else {
                throw new Error('Something went wrong, Please try again');
            }
        } catch{
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="mt-20 flex flex-col items-center bg-white p-6 rounded-lg shadow-md max-w-md mx-auto w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Contact Me</h2>
            <p className="text-2xl font-light mb-6 text-black text-center">Please fill in this form and I will get back to you asap!</p>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-600">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-600">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-600">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-600">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Send
                </button>
            </form>
            {status && <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
        </div>
    );
};

export default ContactForm;
