import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactDetails = [
        {
            icon: Mail,
            label: 'Email',
            value: 'abelzeleke5173@gmail.com',
            href: 'mailto:abelzeleke5173@gmail.com',
            delay: 0.1
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+251 935 353 626',
            href: 'tel:+251935353626',
            delay: 0.4
        }
    ];

    return (
        <section id="contact" className="relative py-32 bg-transparent">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Interested in collaborating on AI/ML projects or discussing backend architecture?
                        I'm always open to meaningful conversations about technology.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {contactDetails.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item.delay, duration: 0.5 }}
                            >
                                <ContactItem
                                    icon={item.icon}
                                    label={item.label}
                                    value={item.value}
                                    href={item.href}
                                    index={index}
                                />
                            </motion.div>
                        ))}

                        {/* Location (non-clickable) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex items-start space-x-4 p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50"
                        >
                            <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                                <MapPin className="text-neutral-600 dark:text-neutral-400" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Location</p>
                                <p className="text-neutral-900 dark:text-neutral-100 font-medium">Addis Ababa, Ethiopia</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form
                            action="https://formspree.io/f/xzzpzkgw"
                            method="POST"
                            className="space-y-6 p-8 rounded-2xl bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.02)]"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:border-transparent text-black dark:text-white transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:border-transparent text-black dark:text-white transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 focus:border-transparent text-black dark:text-white resize-none transition-all"
                                        placeholder="Describe your project or inquiry..."
                                    />
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3.5 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg flex items-center justify-center gap-3 transition-all hover:shadow-lg"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center"
                >
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        I typically respond within 24 hours. For urgent matters, please use phone contact.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

interface ContactItemProps {
    icon: React.ComponentType<{ size?: number | string; className?: string }>;
    label: string;
    value: string;
    href: string;
    index: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, href }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className="flex items-center space-x-4 p-4 rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-neutral-800/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all group"
        >
            <div className="p-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-700 transition-colors">
                <Icon className="text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" size={20} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium truncate group-hover:text-black dark:group-hover:text-white transition-colors">
                    {value}
                </p>
            </div>
        </motion.a>
    );
};

export default Contact;
