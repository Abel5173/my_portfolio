import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../ThemeProvider';

const Contact = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
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
            {/* Content is now layered over the unified background system */}

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
                    <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'
                        }`}>
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
                                    isDark={isDark}
                                />
                            </motion.div>
                        ))}

                        {/* Location (non-clickable) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className={`flex items-start space-x-4 p-4 rounded-xl backdrop-blur-xl border ${isDark
                                    ? 'bg-white/5 border-white/10'
                                    : 'bg-black/5 border-black/10'
                                }`}
                        >
                            <div className={`p-3 rounded-lg backdrop-blur-xl ${isDark
                                    ? 'bg-white/10 border border-white/20'
                                    : 'bg-black/10 border border-black/20'
                                }`}>
                                <MapPin className={`${isDark ? 'text-white/70' : 'text-black/70'
                                    }`} size={20} />
                            </div>
                            <div>
                                <p className={`text-sm mb-1 ${isDark ? 'text-white/60' : 'text-black/60'
                                    }`}>Location</p>
                                <p className={`font-medium ${isDark ? 'text-white' : 'text-black'
                                    }`}>Addis Ababa, Ethiopia</p>
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
                            className="space-y-6 p-8 rounded-2xl glass-card shadow-glass"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-black/80'
                                        }`}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all backdrop-blur-xl ${isDark
                                                ? 'bg-white/5 border border-white/20 focus:ring-white/30 text-white placeholder-white/50'
                                                : 'bg-black/5 border border-black/20 focus:ring-black/30 text-black placeholder-black/50'
                                            }`}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-black/80'
                                        }`}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all backdrop-blur-xl ${isDark
                                                ? 'bg-white/5 border border-white/20 focus:ring-white/30 text-white placeholder-white/50'
                                                : 'bg-black/5 border border-black/20 focus:ring-black/30 text-black placeholder-black/50'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-white/80' : 'text-black/80'
                                        }`}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all backdrop-blur-xl resize-none ${isDark
                                                ? 'bg-white/5 border border-white/20 focus:ring-white/30 text-white placeholder-white/50'
                                                : 'bg-black/5 border border-black/20 focus:ring-black/30 text-black placeholder-black/50'
                                            }`}
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
                    className={`mt-20 pt-8 border-t text-center ${isDark ? 'border-white/10' : 'border-black/10'
                        }`}
                >
                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'
                        }`}>
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
    isDark: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, label, value, href, isDark }) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2 }}
            className={`flex items-center space-x-4 p-4 rounded-xl backdrop-blur-xl border transition-all group ${isDark
                    ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                    : 'bg-black/5 border-black/10 hover:border-black/20 hover:bg-black/10'
                }`}
        >
            <div className={`p-3 rounded-lg backdrop-blur-xl border transition-colors ${isDark
                    ? 'bg-white/10 border-white/20 group-hover:bg-white/20'
                    : 'bg-black/10 border-black/20 group-hover:bg-black/20'
                }`}>
                <Icon className={`transition-colors ${isDark
                        ? 'text-white/70 group-hover:text-white'
                        : 'text-black/70 group-hover:text-black'
                    }`} size={20} />
            </div>
            <div className="flex-1 min-w-0">
                <p className={`text-sm mb-1 ${isDark ? 'text-white/60' : 'text-black/60'
                    }`}>{label}</p>
                <p className={`font-medium truncate transition-colors ${isDark
                        ? 'text-white group-hover:text-white/90'
                        : 'text-black group-hover:text-black/90'
                    }`}>
                    {value}
                </p>
            </div>
        </motion.a>
    );
};

export default Contact;
