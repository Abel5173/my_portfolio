import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light max-w-2xl mx-auto">
                        Have a project in mind or want to discuss the latest in AI? I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-neutral-dark p-8 rounded-2xl border border-neutral-light/20 dark:border-neutral-medium/20 shadow-sm">
                            <h3 className="text-2xl font-bold text-neutral-dark dark:text-white mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-dark dark:text-white">Email</h4>
                                        <a href="mailto:abelzeleke5173@gmail.com" className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-secondary transition-colors">
                                            abelzeleke5173@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-dark dark:text-white">Phone</h4>
                                        <p className="text-neutral-medium dark:text-neutral-light">
                                            +251 912 345 678
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-dark dark:text-white">Location</h4>
                                        <p className="text-neutral-medium dark:text-neutral-light">
                                            Addis Ababa, Ethiopia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <form
                            action="https://formspree.io/f/xzzpzkgw"
                            method="POST"
                            className="bg-white dark:bg-neutral-dark p-8 rounded-2xl border border-neutral-light/20 dark:border-neutral-medium/20 shadow-sm space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark dark:text-white mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-lightest dark:bg-neutral-black border border-neutral-light dark:border-neutral-medium focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 outline-none transition-all text-neutral-dark dark:text-white placeholder-neutral-medium"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark dark:text-white mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-lightest dark:bg-neutral-black border border-neutral-light dark:border-neutral-medium focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 outline-none transition-all text-neutral-dark dark:text-white placeholder-neutral-medium"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark dark:text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-neutral-lightest dark:bg-neutral-black border border-neutral-light dark:border-neutral-medium focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 outline-none transition-all text-neutral-dark dark:text-white placeholder-neutral-medium resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-primary dark:bg-secondary text-white dark:text-primary font-bold rounded-lg hover:shadow-glow transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
