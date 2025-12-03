import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Rocket, Sparkles } from 'lucide-react';

const experiences = [
    {
        title: "Junior Full-stack Developer",
        company: "Freelance / Self-Employed",
        period: "2022 - Present",
        location: "Remote",
        description: [
            "Developed and deployed full-stack web applications using React, Node.js, and PostgreSQL.",
            "Collaborated with clients to define requirements and deliver custom software solutions.",
            "Implemented responsive designs and ensured cross-browser compatibility.",
            "Integrated third-party APIs and payment gateways."
        ]
    },
    {
        title: "Software Engineering Intern",
        company: "AppDiv System Software Development",
        period: "March 2023 - June 2023",
        location: "Addis Ababa, Ethiopia",
        description: [
            "Assisted in the development of enterprise-level software solutions.",
            "Participated in code reviews and contributed to agile development processes.",
            "Gained hands-on experience with backend technologies and database management.",
            "Worked closely with senior developers to troubleshoot and resolve bugs."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="relative py-24 overflow-hidden">
            {/* Background Grid Pattern - Super subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Organic Shapes - Micro, not loud */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neutral-200/20 dark:bg-neutral-800/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neutral-200/20 dark:bg-neutral-800/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
            </div>

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
                    {/* Vertical Timeline Line - Subtle Gradient */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent opacity-50" />

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
                                {/* Timeline Dot - Minimalist */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 mt-1.5 md:mt-0 z-10">
                                    <div className="absolute inset-0 bg-neutral-900 dark:bg-neutral-100 rounded-full ring-4 ring-white dark:ring-black" />
                                </div>

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`relative group ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>

                                        {/* Glassmorphic Card */}
                                        <div className="relative bg-white/5 dark:bg-black/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl p-6 md:p-8 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-2px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.01] group-hover:border-white/30 dark:group-hover:border-white/20">

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
