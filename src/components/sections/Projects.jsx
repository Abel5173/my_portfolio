import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, Smartphone, Layout, Server, ArrowUpRight, FolderGit2, Cpu, Globe, Terminal, GitBranch, Star, Clock, Users, Filter, Grid3x3 } from 'lucide-react';
import { useState, useEffect } from 'react';

const projects = [
    {
        id: 1,
        title: "Internship Management System",
        description: "A comprehensive frontend web application built with Next.js for managing internship processes with real-time collaboration features.",
        tags: ["Next.js", "React", "TypeScript"],
        links: {
            github: "https://github.com/TsionTegene/InternshipManagementSystem",
            demo: "#"
        },
        icon: Layout,
        status: "active",
        stars: 12,
        lastUpdated: "2 months ago",
        contributors: 3
    },
    {
        id: 2,
        title: "Backend Management System",
        description: "Robust backend architecture built with NestJS, PostgreSQL, and Redis for high-performance internship management.",
        tags: ["NestJS", "TypeScript", "PostgreSQL"],
        links: {
            github: "https://github.com/bereket21-12/Web-Based-Internship-Management-System/tree/master",
            demo: "#"
        },
        icon: Server,
        status: "production",
        stars: 8,
        lastUpdated: "1 month ago",
        contributors: 2
    },
    {
        id: 3,
        title: "Mobile Application",
        description: "Cross-platform mobile application with offline-first architecture and push notifications.",
        tags: ["React Native", "Expo", "Mobile"],
        links: {
            github: "https://github.com/Abel5173/Mobile_App",
            demo: "#"
        },
        icon: Smartphone,
        status: "in-progress",
        stars: 5,
        lastUpdated: "3 weeks ago",
        contributors: 1
    },
    {
        id: 4,
        title: "Static Portfolio Collection",
        description: "A curated collection showcasing modern frontend techniques with responsive designs and animations.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        links: {
            github: "https://codepen.io/abel5173",
            demo: "https://codepen.io/abel5173"
        },
        icon: Code,
        status: "completed",
        stars: 15,
        lastUpdated: "1 week ago",
        contributors: 1
    },
    {
        id: 5,
        title: "AI Model Dashboard",
        description: "Real-time monitoring dashboard for machine learning model performance and metrics.",
        tags: ["React", "Chart.js", "TensorFlow.js"],
        links: {
            github: "#",
            demo: "#"
        },
        icon: Cpu,
        status: "planning",
        stars: 0,
        lastUpdated: "Just added",
        contributors: 0
    },
    {
        id: 6,
        title: "API Gateway Service",
        description: "Microservices API gateway with rate limiting, authentication, and caching layers.",
        tags: ["Node.js", "Express", "Redis"],
        links: {
            github: "#",
            demo: "#"
        },
        icon: Globe,
        status: "archived",
        stars: 3,
        lastUpdated: "6 months ago",
        contributors: 2
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
    const [isDark, setIsDark] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

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
            {/* Black & White Gradient Background with Glassmorphism */}
            <div className="absolute inset-0 z-0">
                {/* Main Gradient Background - Enhanced for Light Theme */}
                <div className="absolute inset-0 opacity-30 dark:opacity-10"
                    style={{
                        background: isDark
                            ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(0,0,0,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.08) 100%)',
                    }}
                />

                {/* Grid Pattern with Enhanced Visibility */}
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full opacity-[0.08] dark:opacity-[0.02]"
                        style={{
                            backgroundImage: `
                    linear-gradient(90deg, currentColor 1px, transparent 1px),
                    linear-gradient(180deg, currentColor 1px, transparent 1px)
                `,
                            backgroundSize: '40px 40px',
                            maskImage: 'radial-gradient(circle at 30% 20%, black 20%, transparent 70%)',
                            WebkitMaskImage: 'radial-gradient(circle at 30% 20%, black 20%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Diagonal Checkerboard Pattern */}
                <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.015]">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                    linear-gradient(45deg, currentColor 1px, transparent 1px),
                    linear-gradient(-45deg, currentColor 1px, transparent 1px)
                `,
                            backgroundSize: '20px 20px',
                            maskImage: 'radial-gradient(circle at 70% 80%, black 15%, transparent 85%)',
                            WebkitMaskImage: 'radial-gradient(circle at 70% 80%, black 15%, transparent 85%)',
                        }}
                    />
                </div>

                {/* Concentric Waves Pattern (Enhanced for Light Theme) */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.06] dark:opacity-[0.015]"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <radialGradient id="projectsWaveFade" cx="80%" cy="20%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {[200, 400, 600, 800].map((r, i) => (
                        <motion.circle
                            key={r}
                            cx="960"
                            cy="160"
                            r={r}
                            fill="url(#projectsWaveFade)"
                            className="text-black dark:text-white"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.06 }}
                            transition={{
                                duration: 4,
                                delay: i * 0.3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </svg>

                {/* Dynamic Diagonal Lines with Enhanced Visibility */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(60deg, transparent, transparent 2px, currentColor 2px, currentColor 3px)',
                        opacity: isDark ? 0.01 : 0.03,
                        maskImage: 'linear-gradient(to bottom right, transparent 5%, black 25%, black 75%, transparent 95%)',
                        WebkitMaskImage: 'linear-gradient(to bottom right, transparent 5%, black 25%, black 75%, transparent 95%)',
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '100px 100px'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Subtle Glassmorphism Overlay for Enhanced Depth */}
                <div className="absolute inset-0 backdrop-blur-[80px] bg-white/8 dark:bg-black/10" />

                {/* Binary Rain Animation */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-xs font-mono text-black/30 dark:text-white/30 select-none pointer-events-none"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `-20px`,
                            }}
                            animate={{
                                y: ['0vh', '120vh'],
                            }}
                            transition={{
                                duration: Math.random() * 6 + 8,
                                repeat: Infinity,
                                delay: Math.random() * 3,
                                ease: 'linear',
                            }}
                        >
                            {Math.random() > 0.5 ? '1' : '0'}
                        </motion.div>
                    ))}
                </div>

                {/* Gradient Orbs for Seamless Flow - Enhanced */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-25"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.25) 0%, transparent 70%)'
                    }}
                />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)'
                    }}
                />
            </div>

            {/* Animated Connection Lines - Enhanced for Light Theme */}
            <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10">
                    <motion.path
                        d="M0,100 Q200,50 400,150 T800,200"
                        fill="none"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="0.5"
                        strokeDasharray="8,8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.2 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M200,300 Q400,250 600,350 T1000,400"
                        fill="none"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="0.3"
                        strokeDasharray="6,6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

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
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/60 dark:bg-black/20 backdrop-blur-2xl border border-white/40 dark:border-white/20 shadow-lg shadow-black/5 dark:shadow-white/5">
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
                            {/* Glassmorphic Project Card - Enhanced for Light Theme */}
                            <div className="relative h-full bg-white/70 dark:bg-black/60 backdrop-blur-2xl rounded-2xl border border-white/50 dark:border-white/20 p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden shadow-black/10 dark:shadow-white/10">

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
