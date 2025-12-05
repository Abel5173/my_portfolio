import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Layout, Server, ArrowUpRight, FolderGit2, Cpu, Terminal, GitBranch, Star, Clock, Users, Filter, Grid3x3, TrendingUp, Target } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../ThemeProvider';

const projects = [
    {
        id: 1,
        title: "CBE RAG AI Assistant",
        description: "Enterprise conversational AI system with advanced retrieval-augmented generation for internal knowledge management and query processing.",
        tags: ["Python", "Hugging Face", "FastAPI", "RAG"],
        links: {
            github: "#",
            demo: "#"
        },
        icon: Cpu,
        status: "production",
        stars: 0,
        lastUpdated: "Recently deployed",
        contributors: 1
    },
    {
        id: 2,
        title: "Fraud Detection System",
        description: "Comprehensive fraud detection system for e-commerce and banking transactions using advanced ML techniques with SHAP explainability.",
        tags: ["Python", "scikit-learn", "Jupyter Notebook", "ML", "Fraud Detection"],
        links: {
            github: "https://github.com/Abel5173/Fraud-Detection-Ecommerce-Banking",
            demo: "#"
        },
        icon: Server,
        status: "production",
        stars: 0,
        lastUpdated: "Active",
        contributors: 1
    },
    {
        id: 3,
        title: "Credit Risk Modeling",
        description: "End-to-end credit risk probability model for BNPL using alternative eCommerce data with MLflow tracking and FastAPI deployment.",
        tags: ["Python", "MLflow", "FastAPI", "Jupyter Notebook", "Credit Risk"],
        links: {
            github: "https://github.com/Abel5173/credit-risk-model",
            demo: "#"
        },
        icon: TrendingUp,
        status: "production",
        stars: 0,
        lastUpdated: "Active",
        contributors: 1
    },
    {
        id: 4,
        title: "Stock Sentiment Analysis",
        description: "Stock market sentiment analysis and technical analysis combining news sentiment with historical data and trading indicators.",
        tags: ["Python", "Jupyter Notebook", "Finance", "Sentiment Analysis"],
        links: {
            github: "https://github.com/Abel5173/tenx-stock-sentiment-analysis",
            demo: "#"
        },
        icon: Target,
        status: "completed",
        stars: 0,
        lastUpdated: "Completed",
        contributors: 1
    },
    {
        id: 5,
        title: "Telegram AI Responder",
        description: "Personal Telegram userbot AI assistant with context-aware responses using multiple AI providers and persistent chat history.",
        tags: ["Python", "Telegram API", "AI", "Automation"],
        links: {
            github: "https://github.com/Abel5173/telegram_AI_responder",
            demo: "#"
        },
        icon: Terminal,
        status: "active",
        stars: 0,
        lastUpdated: "Active",
        contributors: 1
    },
    {
        id: 6,
        title: "ML File Organizer",
        description: "AI-powered file management system with intelligent content classification using zero-shot ML models for automated organization.",
        tags: ["Python", "ML", "Automation", "File Management"],
        links: {
            github: "https://github.com/Abel5173/ml_file_organizer",
            demo: "#"
        },
        icon: FolderGit2,
        status: "completed",
        stars: 0,
        lastUpdated: "Completed",
        contributors: 1
    }
];

const statusStyles = {
    active: "bg-white/10 dark:bg-white/20 text-black dark:text-white border border-white/20 dark:border-white/30",
    production: "bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20",
    "in-progress": "bg-white/5 dark:bg-white/15 text-black dark:text-white border border-white/10 dark:border-white/25",
    completed: "bg-black/10 dark:bg-white/5 text-black dark:text-white border border-black/20 dark:border-white/15",
    planning: "bg-white/10 dark:bg-white/10 text-black/60 dark:text-white/60 border border-white/20 dark:border-white/20",
    archived: "bg-black/5 dark:bg-black/10 text-black/40 dark:text-white/40 border border-black/10 dark:border-black/20"
};

const Projects = () => {
    const { resolvedTheme } = useTheme();
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const isDark = resolvedTheme === 'dark';

    const categories = [
        { id: 'all', label: 'All Projects', icon: FolderGit2, count: projects.length },
        { id: 'frontend', label: 'Frontend', icon: Layout, count: projects.filter(p => p.tags.some(t => ['Next.js', 'React', 'HTML5', 'CSS3', 'JavaScript'].includes(t))).length },
        { id: 'backend', label: 'Backend', icon: Server, count: projects.filter(p => p.tags.some(t => ['NestJS', 'Node.js', 'Express', 'PostgreSQL', 'Redis'].includes(t))).length },
        { id: 'mobile', label: 'Mobile', icon: Smartphone, count: projects.filter(p => p.tags.some(t => ['React Native', 'Mobile', 'iOS', 'Android'].includes(t))).length }
    ];

    const filteredProjects = projects.filter(project => {
        if (activeCategory === 'all') return true;
        if (activeCategory === 'frontend') return project.tags.some(t => ['Next.js', 'React', 'HTML5', 'CSS3', 'JavaScript'].includes(t));
        if (activeCategory === 'backend') return project.tags.some(t => ['NestJS', 'Node.js', 'Express', 'PostgreSQL', 'Redis'].includes(t));
        if (activeCategory === 'mobile') return project.tags.some(t => ['React Native', 'Mobile', 'iOS', 'Android'].includes(t));
        return true;
    });

    return (
        <section id="projects" className="relative py-32 bg-transparent overflow-hidden">
            {/* Content is now layered over the unified background system */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header with Glass Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-6">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card shadow-glass">
                            <Grid3x3 className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Technical Projects
                            </h2>
                        </div>
                    </div>
                    <p className={`text-lg ${isDark ? 'text-white/80' : 'text-black/70'} max-w-3xl mx-auto leading-relaxed`}>
                        A curated collection of systems and applications built with modern technologies,
                        focusing on clean architecture and performance.
                    </p>
                </motion.div>

                {/* Category Filter with Glass Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Filter className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                        <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/50'}`}>Filter by category</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 border backdrop-blur-xl shadow-sm ${activeCategory === category.id
                                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-black/20 dark:shadow-white/20'
                                    : 'bg-white/50 dark:bg-black/30 border-white/40 dark:border-black/30 text-black dark:text-white hover:bg-white/70 dark:hover:bg-black/50 hover:shadow-md'
                                    }`}
                            >
                                <category.icon size={16} />
                                <span className="font-medium">{category.label}</span>
                                <span className={`px-2 py-0.5 text-xs rounded-full ${activeCategory === category.id
                                    ? 'bg-white/20 dark:bg-black/20'
                                    : 'bg-white/10 dark:bg-black/10'
                                    }`}>
                                    {category.count}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            className="group relative"
                        >
                            {/* Premium Glass Card */}
                            <div className="relative h-full glass-card rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-all duration-500 overflow-hidden group">

                                {/* Animated Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${isDark ? 'via-white/5' : 'via-black/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[project.status]}`}>
                                        {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                                    </span>
                                </div>

                                {/* Project Icon */}
                                <div className="mb-4 relative">
                                    <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/15'} backdrop-blur-xl inline-block border ${isDark ? 'border-white/20' : 'border-black/30'} shadow-sm`}>
                                        <project.icon className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>
                                </div>

                                {/* Project Title */}
                                <div className="mb-3">
                                    <div className="flex items-start justify-between">
                                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'} group-hover:opacity-90 transition-opacity pr-8 line-clamp-1`}>
                                            {project.title}
                                        </h3>
                                        <motion.div
                                            className="opacity-0 group-hover:opacity-100"
                                            animate={{ rotate: hoveredProject === project.id ? 45 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ArrowUpRight className={`${isDark ? 'text-white/40' : 'text-black/40'}`} size={20} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Project Stats */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star className={`w-3.5 h-3.5 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                        <span className={isDark ? 'text-white/70' : 'text-black/70'}>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Users className={`w-3.5 h-3.5 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                        <span className={isDark ? 'text-white/70' : 'text-black/70'}>{project.contributors}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                        <span className={isDark ? 'text-white/60' : 'text-black/60'}>{project.lastUpdated}</span>
                                    </div>
                                </div>

                                {/* Project Description */}
                                <p className={`mb-4 leading-relaxed line-clamp-3 ${isDark ? 'text-white/70' : 'text-black/65'}`}>
                                    {project.description}
                                </p>

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                                            className={`px-3 py-1 text-xs font-medium backdrop-blur-xl border rounded-lg shadow-sm ${isDark
                                                ? 'bg-white/10 border-white/20 text-white/90'
                                                : 'bg-black/15 border-black/30 text-black/90'}`}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 pt-4 border-t border-white/20 dark:border-white/10">
                                    <motion.a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 ${isDark
                                            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                                            : 'bg-black/15 hover:bg-black/25 text-black border border-black/30'}`}
                                    >
                                        <Github size={16} />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2 ${isDark
                                            ? 'border border-white/20 hover:bg-white/10 text-white'
                                            : 'border border-black/30 hover:bg-black/15 text-black'}`}
                                    >
                                        <ExternalLink size={16} />
                                        <span>Demo</span>
                                    </motion.a>
                                </div>

                                {/* Bottom Accent Line */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 right-0 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Empty State */}
                <AnimatePresence>
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-16"
                        >
                            <FolderGit2 className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-white/40' : 'text-black/40'}`} />
                            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                                No projects found
                            </h3>
                            <p className={isDark ? 'text-white/60' : 'text-black/60'}>
                                Try selecting a different category
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Portfolio Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { value: projects.length, label: 'Total Projects', icon: FolderGit2 },
                            { value: projects.reduce((acc, p) => acc + p.stars, 0), label: 'GitHub Stars', icon: Star },
                            { value: projects.reduce((acc, p) => acc + p.contributors, 0), label: 'Contributors', icon: Users },
                            { value: projects.filter(p => p.status === 'production').length, label: 'In Production', icon: Terminal },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 + index * 0.1 }}
                                // Enhanced: Increased light theme background opacity and border contrast
                                className={`text-center p-6 rounded-2xl backdrop-blur-2xl border shadow-lg ${isDark
                                    ? 'bg-white/10 border-white/10 shadow-white/5'
                                    : 'bg-black/10 border-black/20 shadow-black/10'}`}
                            >
                                <div className={`p-3 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/20'} backdrop-blur-xl mb-4 inline-block border ${isDark ? 'border-white/20' : 'border-black/30'} shadow-sm`}>
                                    <stat.icon className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                                </div>
                                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                                    {stat.value}
                                </div>
                                <div className={`text-sm ${isDark ? 'text-white/60' : 'text-black/50'}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className={`text-sm mb-6 max-w-2xl mx-auto ${isDark ? 'text-white/60' : 'text-black/50'}`}>
                        All projects follow modern development practices with a focus on clean code,
                        comprehensive documentation, and maintainability.
                    </p>
                    <motion.a
                        href="https://github.com/Abel5173"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-2xl border shadow-lg ${isDark
                            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-white/5'
                            : 'bg-black/15 hover:bg-black/25 text-black border-black/30 shadow-black/10'}`}
                    >
                        <GitBranch size={18} />
                        View All Projects on GitHub
                    </motion.a>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
                <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-black/20 to-transparent'}`} />
            </div>
        </section>
    );
};

export default Projects;
