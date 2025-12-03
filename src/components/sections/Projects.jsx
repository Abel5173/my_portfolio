import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone, Layout, Server, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Internship Management System",
        description: "A comprehensive frontend web application built with Next.js for managing internship processes.",
        tags: ["Next.js", "React", "Tailwind CSS"],
        links: {
            github: "https://github.com/TsionTegene/InternshipManagementSystem",
            demo: "#"
        },
        icon: Layout
    },
    {
        title: "Backend Management System",
        description: "Robust backend architecture built with NestJS to power the internship management platform.",
        tags: ["NestJS", "TypeScript", "PostgreSQL"],
        links: {
            github: "https://github.com/bereket21-12/Web-Based-Internship-Management-System/tree/master",
            demo: "#"
        },
        icon: Server
    },
    {
        title: "Mobile Application",
        description: "Cross-platform mobile application developed using React Native for on-the-go access.",
        tags: ["React Native", "Mobile", "Android/iOS"],
        links: {
            github: "https://github.com/Abel5173/Mobile_App",
            demo: "#"
        },
        icon: Smartphone
    },
    {
        title: "Static Portfolio Collection",
        description: "A curated collection of static web pages showcasing fundamental HTML, CSS, and JavaScript skills.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        links: {
            github: "https://codepen.io/abel5173",
            demo: "https://codepen.io/abel5173"
        },
        icon: Code
    }
];

const Projects = () => {
    return (
        <section id="projects" className="relative py-32 bg-transparent overflow-hidden">
            {/* Continuing Diagonal Pattern from Hero */}
            <div className="absolute inset-0 z-0">
                {/* Main diagonal gradient fade (continued pattern) */}
                <div
                    className="absolute inset-0 bg-gradient-to-bl from-transparent via-neutral-200/20 to-neutral-900/5 dark:from-transparent dark:via-white/5 dark:to-black/20"
                    style={{
                        maskImage: 'linear-gradient(to bottom left, transparent 20%, black 50%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, transparent 20%, black 50%, black 80%, transparent 100%)',
                    }}
                />

                {/* Subtle grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom left, transparent 10%, black 40%, black 60%, transparent 90%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, transparent 10%, black 40%, black 60%, transparent 90%)',
                    }}
                />

                {/* Concentric circles pattern (offset continuation) */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.01]"
                    viewBox="0 0 1200 1200"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <radialGradient id="projectsCircleFade" cx="80%" cy="20%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="960" cy="240" r="200" fill="url(#projectsCircleFade)" className="text-black dark:text-white" />
                    <circle cx="960" cy="240" r="400" fill="url(#projectsCircleFade)" className="text-black dark:text-white" />
                    <circle cx="960" cy="240" r="600" fill="url(#projectsCircleFade)" className="text-black dark:text-white" />
                </svg>

                {/* Diagonal lines pattern (continued) */}
                <div
                    className="absolute inset-0 opacity-[0.015] dark:opacity-[0.01]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 40px)',
                        maskImage: 'linear-gradient(to bottom left, transparent 20%, black 50%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, transparent 20%, black 50%, black 70%, transparent 100%)',
                    }}
                />


            </div>

            {/* Floating elements continuation */}
            <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
                {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-neutral-400/10 dark:bg-neutral-600/10"
                        initial={{
                            x: Math.random() * 100 + 60 + '%',
                            y: Math.random() * 30 + 30 + '%',
                            opacity: 0,
                        }}
                        animate={{
                            x: [null, `-${Math.random() * 30 + 20}%`],
                            y: [null, `${Math.random() * 30 + 30}%`],
                            opacity: [0, 0.2, 0],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.6,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight mb-4">
                        Technical Projects
                    </h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        A selection of systems and applications built with modern technologies,
                        focusing on scalability, performance, and clean architecture.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-neutral-200/70 dark:border-neutral-800/70 rounded-2xl hover:border-neutral-300/80 dark:hover:border-neutral-700/80 transition-all duration-300 overflow-hidden">

                                {/* Glassmorphic overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent dark:via-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Diagonal accent line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200/50 dark:via-neutral-800/50 to-transparent" />

                                {/* Project Header */}
                                <div className="relative flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-xl bg-white/50 dark:bg-black/50 border border-neutral-200/50 dark:border-neutral-800/50 group-hover:bg-white/80 dark:group-hover:bg-black/80 transition-all duration-300">
                                            <project.icon className="text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 mt-2">
                                                <motion.a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                                    aria-label="View Source Code"
                                                >
                                                    <Github size={18} />
                                                </motion.a>
                                                <motion.a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.1 }}
                                                    className="text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                                                    aria-label="View Live Demo"
                                                >
                                                    <ExternalLink size={18} />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* External Link Indicator */}
                                    <motion.div
                                        initial={{ rotate: 45, scale: 0 }}
                                        animate={{ rotate: 45, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    >
                                        <ArrowUpRight className="text-neutral-300/70 dark:text-neutral-700/70" size={20} />
                                    </motion.div>
                                </div>

                                {/* Project Description */}
                                <p className="relative text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                                    {project.description}
                                </p>

                                {/* Technology Tags */}
                                <div className="relative flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.3 }}
                                            className="px-3 py-1.5 text-xs font-medium bg-white/40 dark:bg-black/40 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-800/50 rounded-lg text-neutral-700 dark:text-neutral-300 group-hover:border-neutral-300/70 dark:group-hover:border-neutral-700/70 transition-colors"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Bottom Accent Line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                                    className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neutral-200/50 dark:via-neutral-800/50 to-transparent"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-20 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 text-center"
                >
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        All projects follow modern development practices with focus on clean code,
                        documentation, and maintainability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
