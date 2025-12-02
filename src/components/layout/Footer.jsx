import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Abel5173', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Mail, href: 'mailto:abelzeleke5173@gmail.com', label: 'Email' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <footer className="bg-black text-white py-20 border-t border-neutral-900 relative overflow-hidden">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-900/20 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-800/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

            <motion.div
                className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
                    {/* Brand Section */}
                    <motion.div className="md:col-span-5 flex flex-col gap-6" variants={itemVariants}>
                        <div className="flex items-center gap-3">
                            <img src="../../public/dark-theme-f-logo.png" alt="Logo" className="w-14 h-14" />
                            <span className="font-medium text-3xl tracking-tight">Abel Zeleke</span>
                        </div>
                        <p className="text-neutral-400 text-lg max-w-sm leading-relaxed">
                            Crafting digital experiences where <span className="text-white font-medium">design</span> meets <span className="text-white font-medium">intelligence</span>.
                        </p>
                        <div className="flex gap-4 mt-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/50 hover:bg-neutral-800 transition-all group"
                                    whileHover={{ y: -5, rotateX: 10, rotateY: 10, scale: 1.1 }}
                                    style={{ perspective: 1000 }}
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} className="transition-transform group-hover:scale-110" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div className="md:col-span-3 md:col-start-7" variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-6 text-neutral-200">Navigation</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-neutral-400 hover:text-white flex items-center gap-2 group transition-colors w-fit">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white transition-colors" />
                                        <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div className="md:col-span-3" variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-6 text-neutral-200">Let's Connect</h3>
                        <p className="text-neutral-400 mb-6 text-sm">
                            Have a project in mind? Let's build something extraordinary together.
                        </p>
                        <a
                            href="mailto:abelzeleke5173@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors group"
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500"
                    variants={itemVariants}
                >
                    <p>&copy; {currentYear} Abel Zeleke. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
