import { motion } from 'framer-motion';
import { Brain, Server, Layout, Terminal, PenTool } from 'lucide-react';

const skillCategories = [
    {
        title: "Machine Learning & AI",
        icon: Brain,
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning", "Data Analysis"]
    },
    {
        title: "Backend Engineering",
        icon: Server,
        skills: ["Node.js", "NestJS", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
        title: "Frontend Engineering",
        icon: Layout,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Vue.js"]
    },
    {
        title: "DevOps & Tools",
        icon: Terminal,
        skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Linux", "Nginx"]
    },
    {
        title: "Design & Creative",
        icon: PenTool,
        skills: ["Figma", "Adobe XD", "UI/UX Principles", "Prototyping", "Wireframing"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-neutral-lightest dark:bg-neutral-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-lg text-neutral-medium dark:text-neutral-light max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency across various domains of software engineering and artificial intelligence.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-lightest dark:bg-neutral-black rounded-xl p-6 border border-neutral-light/20 dark:border-neutral-medium/20 hover:border-primary/30 dark:hover:border-secondary/30 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 dark:bg-secondary/10 rounded-lg text-primary dark:text-secondary">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-dark dark:text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skillIndex}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-neutral-dark border border-neutral-light/30 dark:border-neutral-medium/30 rounded-md text-neutral-dark dark:text-neutral-light shadow-sm hover:border-primary/50 dark:hover:border-secondary/50 hover:text-primary dark:hover:text-secondary transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
