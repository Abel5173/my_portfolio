import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
        <section id="experience" className="py-24 bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light max-w-2xl mx-auto">
                        My journey in the software industry, highlighting key roles and contributions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-neutral-light/30 dark:bg-neutral-medium/30" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary dark:bg-secondary rounded-full border-4 border-white dark:border-neutral-black z-10 mt-1.5" />

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`bg-white dark:bg-neutral-dark p-6 rounded-xl border border-neutral-light/20 dark:border-neutral-medium/20 shadow-sm hover:shadow-md transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                        }`}>
                                        <div className="flex items-center gap-2 mb-2 text-primary dark:text-secondary font-semibold">
                                            <Briefcase size={18} />
                                            <h3>{exp.title}</h3>
                                        </div>

                                        <h4 className="text-lg font-bold text-neutral-dark dark:text-white mb-2">
                                            {exp.company}
                                        </h4>

                                        <div className="flex flex-wrap gap-4 text-sm text-neutral-medium dark:text-neutral-light mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-neutral-medium dark:text-neutral-light leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
