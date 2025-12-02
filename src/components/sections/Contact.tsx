import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useRef } from 'react';

// Types
interface ContactCardProps {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    value: string;
    href?: string;
    index: number;
}

interface FloatingLabelInputProps
    extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    tag?: 'input' | 'textarea';
}

const Contact = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-white dark:bg-black">
            {/* Subtle animated background orbs - pure monochrome */}
            <div className="pointer-events-none fixed inset-0 opacity-20">
                <motion.div
                    className="absolute -top-40 -left-40 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"
                    animate={{
                        x: useTransform(smoothX, [0, 1920], [-80, 80]),
                        y: useTransform(smoothY, [0, 1080], [-80, 80]),
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-black dark:bg-white rounded-full blur-3xl"
                    animate={{
                        x: useTransform(smoothX, [0, 1920], [80, -80]),
                        y: useTransform(smoothY, [0, 1080], [80, -80]),
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
                        Let's Create Together
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Open to exciting projects, collaborations, or just a deep dive into AI & design.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
                    {/* Contact Cards */}
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="space-y-8"
                        onMouseMove={handleMouseMove}
                    >
                        {[
                            {
                                icon: Mail,
                                title: "Email",
                                value: "abelzeleke5173@gmail.com",
                                href: "mailto:abelzeleke5173@gmail.com",
                            },
                            {
                                icon: Phone,
                                title: "Phone",
                                value: "+251 935 353 626",
                                href: "tel:+251935353626",
                            },
                            {
                                icon: MapPin,
                                title: "Location",
                                value: "Addis Ababa, Ethiopia",
                            },
                        ].map((item, i) => (
                            <ContactCard key={i} {...item} index={i} />
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <form
                            action="https://formspree.io/f/xzzpzkgw"
                            method="POST"
                            className="relative p-10 rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl overflow-hidden"
                        >
                            <div className="relative space-y-8">
                                {["name", "email"].map((field) => (
                                    <FloatingLabelInput
                                        key={field}
                                        id={field}
                                        name={field}
                                        type={field}
                                        placeholder={field === "name" ? "Your Name" : "your.email@example.com"}
                                        required
                                    />
                                ))}

                                <div>
                                    <FloatingLabelInput
                                        id="message"
                                        name="message"
                                        tag="textarea"
                                        rows={5}
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="group relative w-full py-5 px-8 bg-black dark:bg-white text-white dark:text-black font-semibold text-lg rounded-2xl overflow-hidden shadow-xl"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Send Message <Send className="group-hover:translate-x-1 transition-transform" size={22} />
                                    </span>
                                    <motion.div
                                        className="absolute inset-0 bg-white dark:bg-black"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.7 }}
                                    />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// 3D Tilt Card with magnetic icon
const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, value, href, index }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [12, -12]);
    const rotateY = useTransform(x, [-100, 100], [-12, 12]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.7 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.03 }}
            className="group relative p-8 rounded-3xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl transition-all duration-300"
        >
            <div className="absolute inset-0 rounded-3xl bg-white/50 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start gap-6">
                <motion.div
                    whileHover={{ scale: 1.25, rotate: 12 }}
                    className="p-4 rounded-2xl bg-black dark:bg-white text-white dark:text-black shadow-2xl"
                >
                    <Icon size={28} />
                </motion.div>

                <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
                        {title}
                    </h4>
                    {href ? (
                        <a
                            href={href}
                            className="text-xl font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                        >
                            {value}
                        </a>
                    ) : (
                        <p className="text-xl font-medium text-black dark:text-white">
                            {value}
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Floating Label Input
const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ tag: Tag = "input", ...props }) => {
    return (
        <div className="relative">
            <Tag
                {...props}
                className="peer w-full px-5 py-4 bg-white/50 dark:bg-black/50 backdrop-blur border border-gray-300/50 dark:border-gray-700/50 rounded-2xl focus:outline-none focus:border-black dark:focus:border-white focus:ring-4 focus:ring-black/10 dark:focus:ring-white/10 text-black dark:text-white placeholder-transparent transition-all"
            />
            <label
                htmlFor={props.id}
                className="absolute left-5 -top-3 px-2 bg-white dark:bg-black text-sm text-gray-600 dark:text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 dark:peer-placeholder-shown:text-gray-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black dark:peer-focus:text-white"
            >
                {props.placeholder}
            </label>
        </div>
    );
};

export default Contact;
