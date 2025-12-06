import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Rocket, Sparkles } from 'lucide-react';

const experiences = [
    {
        title: "Data Scientist",
        company: "Commercial Bank of Ethiopia (CBE)",
        period: "2023 - Present",
        location: "Addis Ababa, Ethiopia",
        description: [
            "Developed enterprise-grade AI systems and RAG architectures for production use.",
            "Implemented credit scoring systems and HR chatbot using advanced ML algorithms.",
            "Built and deployed RAG assistants for internal knowledge management.",
            "Led AI/ML projects from research to production deployment."
        ]
    },
    {
        title: "Freelance ML Engineer",
        company: "Independent / Remote",
        period: "2022 - Present",
        location: "Remote",
        description: [
            "Won Kaggle competitions and specialized in LLM fine-tuning for custom applications.",
            "Developed end-to-end ML solutions for clients across various industries.",
            "Provided AI consulting services and technical expertise.",
            "Built production-ready ML applications with scalable architectures."
        ]
    },
    {
        title: "Software Engineer",
        company: "Freelance / Self-Employed",
        period: "2022 - Present",
        location: "Remote",
        description: [
            "Developed full-stack applications with AI integration and ML pipelines.",
            "Created AI-powered file organization systems and Telegram bot automation.",
            "Implemented production ML applications with modern web technologies.",
            "Delivered end-to-end solutions combining frontend, backend, and AI components."
        ]
    },
    {
        title: "Freelance Web Developer",
        company: "Private Clients",
        period: "Feb 2022 - Nov 2023",
        location: "Ethiopia",
        description: [
            "Designed and deployed responsive web applications using React.js and Next.js, enhancing user experience for 5+ clients.",
            "Optimized application performance, reducing load times by 20% through efficient coding practices."
        ]
    },
    {
        title: "Full-Stack Web Development Intern",
        company: "AppDiv System Development",
        period: "May 2023 - June 2023",
        location: "Ethiopia",
        description: [
            "Developed full-stack web applications using MERN stack, contributing to 3 scalable features.",
            "Collaborated with senior developers to ensure high-quality deliverables, meeting project deadlines."
        ]
    },
    {
        title: "Co-Founder and Head, ICPC Programming Club",
        company: "Wolkite University",
        period: "June 2021 - Sep 2023",
        location: "Ethiopia",
        description: [
            "Led training for 50+ students in competitive programming, boosting participation in Ethiopian Collegiate Programming Contest (EtCPC).",
            "Organized workshops, fostering a collaborative problem-solving community."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 overflow-hidden bg-transparent">
            {/* Content is now layered over the unified background system */}

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Rocket className="w-6 h-6 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
                            Experience
                        </h2>
                        <Sparkles className="w-6 h-6 text-neutral-600 dark:text-neutral-400" strokeWidth={1.5} />
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-light">
                        My professional journey through the digital landscape
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timeline Line - Following diagonal flow */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, transparent)' }} />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot - Enhanced with particle trails */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 mt-1.5 md:mt-0 z-10">
                                    <motion.div
                                        className="absolute inset-0 bg-black dark:bg-white rounded-full ring-4 ring-white dark:ring-black"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            boxShadow: [
                                                '0 0 0 0 rgba(0,0,0,0.3)',
                                                '0 0 0 8px rgba(0,0,0,0)',
                                                '0 0 0 0 rgba(0,0,0,0)'
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut'
                                        }}
                                    />
                                    {/* Particle trail effect */}
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-black/30 dark:bg-white/30 rounded-full"
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                            animate={{
                                                x: [0, (i + 1) * 20, 0],
                                                y: [0, (i + 1) * 10, 0],
                                                opacity: [0, 0.6, 0],
                                                scale: [0, 1, 0],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                                ease: 'easeOut',
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`relative group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>

                                        {/* Enhanced Glassmorphic Card with shine effects */}
                                        <div className="relative glass-card rounded-xl p-6 md:p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 hover:scale-[1.01] group overflow-hidden">

                                            {/* Animated shine effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                            {/* Subtle background gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Header Section */}
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                                                        {exp.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                                                        <Briefcase className="w-4 h-4" />
                                                        <span className="text-sm font-medium">{exp.company}</span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-700">
                                                        <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                                                        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                                            {exp.period}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-full border border-neutral-200 dark:border-neutral-700">
                                                        <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                                                        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                                            {exp.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description List */}
                                            <ul className="space-y-3">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA - Subtle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500 tracking-widest uppercase">
                        Continuously Evolving
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
