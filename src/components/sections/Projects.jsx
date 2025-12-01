import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone, Layout, Server } from 'lucide-react';

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
        <section id="projects" className="py-24 bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light max-w-2xl mx-auto">
                        A selection of my recent work in web and mobile development, showcasing my technical expertise and problem-solving capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-neutral-dark rounded-2xl border border-neutral-light/20 dark:border-neutral-medium/20 overflow-hidden hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-primary/5 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary group-hover:scale-110 transition-transform duration-300">
                                        <project.icon size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                                            aria-label="View Source"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                                            aria-label="View Demo"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-medium dark:text-neutral-light mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-neutral-lightest dark:bg-neutral-black border border-neutral-light/20 dark:border-neutral-medium/20 rounded-full text-neutral-medium dark:text-neutral-light"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
