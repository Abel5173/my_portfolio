import { motion } from 'framer-motion';
import {
    Cpu, Code2, Zap, Target, TrendingUp, Sparkles,
    Brain, Server, Layout, Cloud, Smartphone, Terminal,
    Database, GitBranch, Cpu as CpuIcon, BarChart3,
    Wrench, GitPullRequest, Layers, Shield,
    Briefcase, Users, MessageSquare
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useTheme } from '../ThemeProvider';

// Simplified skill structure
const skillClusters = [
    {
        id: 'core',
        title: 'Core Engineering Stack',
        icon: CpuIcon,
        description: 'Technologies I build with daily',
        skills: [
            { name: 'React/Next.js', level: 95, impact: 'Production apps with 10k+ users' },
            { name: 'Node.js/NestJS', level: 92, impact: 'Scalable backend systems' },
            { name: 'Python', level: 90, impact: 'ML pipelines & automation' },
            { name: 'TypeScript', level: 88, impact: 'Type-safe applications' },
        ]
    },
    {
        id: 'ai',
        title: 'AI / ML Expertise',
        icon: Brain,
        description: 'Specialized knowledge areas',
        skills: [
            { name: 'TensorFlow/PyTorch', level: 88, impact: 'Production ML models' },
            { name: 'LLM Fine-tuning', level: 85, impact: 'Custom AI applications' },
            { name: 'RAG Systems', level: 82, impact: 'Enterprise knowledge bases' },
            { name: 'Computer Vision', level: 80, impact: 'Image processing systems' },
        ]
    },
    {
        id: 'tools',
        title: 'Tools & Platforms',
        icon: Wrench,
        description: 'Daily development environment',
        skills: [
            { name: 'Docker/K8s', level: 85, impact: 'Containerized deployments' },
            { name: 'PostgreSQL', level: 88, impact: 'Relational data systems' },
            { name: 'AWS/GCP', level: 82, impact: 'Cloud infrastructure' },
            { name: 'Git/CI-CD', level: 90, impact: 'Team collaboration flows' },
        ]
    },
    {
        id: 'method',
        title: 'How I Work',
        icon: Briefcase,
        description: 'Approach & methodology',
        skills: [
            { name: 'Product Thinking', level: 92, impact: 'User-centric solutions' },
            { name: 'System Design', level: 88, impact: 'Scalable architectures' },
            { name: 'Team Leadership', level: 85, impact: 'Cross-functional teams' },
            { name: 'Communication', level: 90, impact: 'Stakeholder alignment' },
        ]
    }
];

// Daily tools with theme-aware styling
const dailyTools = [
    { name: 'Docker', icon: '🐳', category: 'devops' },
    { name: 'Git', icon: '📦', category: 'devops' },
    { name: 'VS Code', icon: '⚡', category: 'development' },
    { name: 'Linux', icon: '🐧', category: 'devops' },
    { name: 'Figma', icon: '🎨', category: 'design' },
    { name: 'Postman', icon: '📮', category: 'development' },
    { name: 'Jupyter', icon: '📓', category: 'data' },
    { name: 'Terminal', icon: '💻', category: 'development' },
];

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const SkillDepthIndicator = ({ level, isDark }) => {
    const width = Math.max(20, level * 0.8);

    return (
        <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-gradient-to-r from-transparent via-black/5 to-transparent dark:from-transparent dark:via-white/5 dark:to-transparent">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-black/40 to-black/90 dark:from-white/40 dark:to-white/90"
                    style={{
                        boxShadow: isDark
                            ? '0 0 8px rgba(255,255,255,0.1)'
                            : '0 0 8px rgba(0,0,0,0.1)'
                    }}
                />
            </div>
            <span className={`text-xs font-mono tabular-nums ${isDark ? 'text-white/60' : 'text-black/60'
                }`}>
                {level}%
            </span>
        </div>
    );
};

const Skills = () => {
    const { resolvedTheme } = useTheme();
    const [activeCluster, setActiveCluster] = useState('core');
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: '-50px' });

    const isDark = resolvedTheme === 'dark';

    const activeData = skillClusters.find(c => c.id === activeCluster);

    // Theme-aware styles
    const themeClasses = {
        bg: isDark ? 'bg-black' : 'bg-white',
        text: {
            primary: isDark ? 'text-white' : 'text-black',
            secondary: isDark ? 'text-white/70' : 'text-black/70',
            muted: isDark ? 'text-white/50' : 'text-black/50',
            subtle: isDark ? 'text-white/30' : 'text-black/30'
        },
        border: {
            light: isDark ? 'border-white/10' : 'border-black/10',
            medium: isDark ? 'border-white/15' : 'border-black/15',
            strong: isDark ? 'border-white/20' : 'border-black/20'
        },
        surface: {
            card: isDark
                ? 'bg-gradient-to-br from-white/[0.02] to-white/[0.01]'
                : 'bg-gradient-to-br from-black/[0.01] to-black/[0.005]',
            hover: isDark
                ? 'hover:bg-white/[0.02]'
                : 'hover:bg-black/[0.02]',
            active: isDark
                ? 'bg-white/[0.03]'
                : 'bg-black/[0.03]'
        },
        icon: {
            container: isDark
                ? 'bg-white/[0.03]'
                : 'bg-black/[0.03]',
            color: isDark
                ? 'text-white/70'
                : 'text-black/70'
        }
    };

    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 overflow-hidden bg-transparent transition-colors duration-300"
            ref={containerRef}
        >
            {/* Content is now layered over the unified background system */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Code2 className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isDark ? 'text-white/60' : 'text-black/60'
                            }`} />
                        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-colors ${isDark ? 'text-white' : 'text-black'
                            }`}>
                            Skills & Expertise
                        </h2>
                        <Cpu className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${isDark ? 'text-white/60' : 'text-black/60'
                            }`} />
                    </div>
                    <p className={`text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed transition-colors ${isDark ? 'text-white/60' : 'text-black/60'
                        }`}>
                        A curated showcase of my technical capabilities and professional approach
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left: Skill Clusters */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4 md:space-y-6"
                    >
                        {skillClusters.map((cluster) => {
                            const Icon = cluster.icon;
                            const isActive = activeCluster === cluster.id;

                            return (
                                <motion.div
                                    key={cluster.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    onClick={() => setActiveCluster(cluster.id)}
                                    className={`relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                                        ? 'glass-card shadow-glass-lg'
                                        : 'glass-subtle hover:glass-card hover:shadow-glass'
                                        }`}
                                    style={{
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: isActive
                                            ? isDark
                                                ? '0 8px 32px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.05)'
                                                : '0 8px 32px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
                                            : 'none'
                                    }}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                                            style={{
                                                background: isDark
                                                    ? 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.6))'
                                                    : 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.6))'
                                            }}
                                        />
                                    )}

                                    <div className="flex items-start justify-between mb-4 md:mb-6">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className={`p-2 md:p-3 rounded-xl transition-colors ${isActive ? themeClasses.surface.active : themeClasses.icon.container
                                                }`}>
                                                <Icon className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${themeClasses.icon.color
                                                    }`} />
                                            </div>
                                            <div>
                                                <h3 className={`text-lg md:text-2xl font-semibold transition-colors ${themeClasses.text.primary
                                                    }`}>
                                                    {cluster.title}
                                                </h3>
                                                <p className={`transition-colors mt-0.5 text-sm ${themeClasses.text.muted
                                                    }`}>
                                                    {cluster.description}
                                                </p>
                                            </div>
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/80' : 'bg-black/80'
                                                    }`}
                                            />
                                        )}
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        {cluster.skills.map((skill, index) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`p-3 md:p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${themeClasses.border.light
                                                    } ${themeClasses.surface.hover}`}
                                            >
                                                <div className="flex justify-between items-start mb-1 md:mb-2">
                                                    <span className={`font-medium transition-colors text-sm md:text-base ${themeClasses.text.primary
                                                        }`}>
                                                        {skill.name}
                                                    </span>
                                                    <span className={`text-xs font-mono transition-colors ${themeClasses.text.muted
                                                        }`}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <SkillDepthIndicator level={skill.level} isDark={isDark} />
                                                <p className={`text-xs md:text-sm leading-relaxed mt-2 transition-colors ${themeClasses.text.muted
                                                    }`}>
                                                    {skill.impact}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Right: Active Cluster Details & Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <div className="sticky top-24 space-y-6 md:space-y-8">
                            {/* Current Focus Card */}
                            <div className="p-6 md:p-8 rounded-2xl glass-card shadow-glass">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <Target className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${themeClasses.icon.color
                                        }`} />
                                    <h4 className={`text-lg md:text-xl font-semibold transition-colors ${themeClasses.text.primary
                                        }`}>
                                        Current Focus
                                    </h4>
                                </div>

                                {activeData && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                                            <activeData.icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors ${themeClasses.icon.color
                                                }`} />
                                            <div>
                                                <h5 className={`font-semibold transition-colors text-base md:text-lg ${themeClasses.text.primary
                                                    }`}>
                                                    {activeData.title}
                                                </h5>
                                                <p className={`text-sm transition-colors ${themeClasses.text.muted
                                                    }`}>
                                                    {activeData.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 md:space-y-4">
                                            {activeData.skills.map((skill, index) => (
                                                <div key={skill.name} className={`pb-3 md:pb-4 border-b last:border-0 transition-colors ${themeClasses.border.light
                                                    }`}>
                                                    <div className="flex justify-between items-center mb-1 md:mb-2">
                                                        <span className={`font-medium transition-colors text-sm md:text-base ${themeClasses.text.primary
                                                            }`}>
                                                            {skill.name}
                                                        </span>
                                                        <span className={`text-xs font-mono transition-colors ${themeClasses.text.muted
                                                            }`}>
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className={`h-1 w-full rounded-full overflow-hidden bg-gradient-to-r from-transparent ${isDark ? 'via-white/5' : 'via-black/5'
                                                        } to-transparent`}>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                            className="h-full rounded-full"
                                                            style={{
                                                                background: isDark
                                                                    ? 'linear-gradient(90deg, rgba(255,255,255,0.4), rgba(255,255,255,0.9))'
                                                                    : 'linear-gradient(90deg, rgba(0,0,0,0.4), rgba(0,0,0,0.9))',
                                                                boxShadow: isDark
                                                                    ? '0 0 8px rgba(255,255,255,0.2)'
                                                                    : '0 0 8px rgba(0,0,0,0.2)'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Daily Tools Card */}
                            <div className="p-6 md:p-8 rounded-2xl glass-card shadow-glass">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <Terminal className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${themeClasses.icon.color
                                        }`} />
                                    <h4 className={`text-lg md:text-xl font-semibold transition-colors ${themeClasses.text.primary
                                        }`}>
                                        Daily Tools
                                    </h4>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
                                    {dailyTools.map((tool) => (
                                        <motion.div
                                            key={tool.name}
                                            whileHover={{ y: -2, scale: 1.05 }}
                                            className={`p-2 md:p-3 rounded-xl border transition-all duration-300 cursor-default ${themeClasses.border.light
                                                } ${themeClasses.surface.hover} group`}
                                        >
                                            <div className="flex items-center gap-2 justify-center">
                                                <span className="text-base md:text-lg opacity-70 group-hover:opacity-100 transition-opacity">
                                                    {tool.icon}
                                                </span>
                                                <span className={`text-xs md:text-sm font-medium transition-colors group-hover:opacity-100 ${themeClasses.text.secondary
                                                    }`}>
                                                    {tool.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Philosophy Card */}
                            <div className={`p-4 md:p-6 rounded-xl border backdrop-blur-sm transition-colors ${themeClasses.border.light
                                } ${themeClasses.surface.card}`}>
                                <div className="flex items-start gap-3">
                                    <Sparkles className={`w-5 h-5 text-black/60 mt-0.5 transition-colors mt-0.5 ${themeClasses.icon.color
                                        }`} />
                                    <div>
                                        <h5 className={`font-medium mb-1 md:mb-2 text-sm md:text-base transition-colors ${themeClasses.text.primary
                                            }`}>
                                            Development Philosophy
                                        </h5>
                                        <p className={`text-xs md:text-sm leading-relaxed transition-colors ${themeClasses.text.muted
                                            }`}>
                                            Focus on clean, maintainable code with robust testing.
                                            Build scalable systems with clear documentation and efficient collaboration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Growth Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 pt-8 md:pt-12"
                >
                    <div className={`border-t pt-8 md:pt-12 transition-colors ${themeClasses.border.light
                        }`}>
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <TrendingUp className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isDark ? 'text-white/60' : 'text-black/60'
                                }`} />
                            <h3 className={`text-xl md:text-3xl font-semibold transition-colors ${themeClasses.text.primary
                                }`}>
                                Professional Journey
                            </h3>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 hidden md:block ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent'
                                : 'bg-gradient-to-r from-transparent via-black/10 to-transparent'
                                }`} />

                            <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                                {[
                                    { year: '2019', label: 'Frontend', desc: 'React & UI Systems', icon: Layout },
                                    { year: '2020', label: 'Backend', desc: 'Node.js & APIs', icon: Server },
                                    { year: '2021', label: 'Data', desc: 'Python & Analytics', icon: Database },
                                    { year: '2022', label: 'AI/ML', desc: 'Models & Pipelines', icon: Brain },
                                    { year: '2023', label: 'LLMs', desc: 'Fine-tuning & RAG', icon: Sparkles },
                                    { year: '2024', label: 'MLOps', desc: 'Deployment & Scaling', icon: Cloud },
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.year} className="relative flex md:flex-col items-center md:text-center gap-4 md:gap-0">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0 md:mx-auto md:mb-3 ${isDark ? 'bg-white/90' : 'bg-black/90'
                                                    }`}
                                            />
                                            <div className="flex-1 md:flex-none">
                                                <div className={`text-sm font-medium transition-colors ${themeClasses.text.primary
                                                    }`}>
                                                    {item.year}
                                                </div>
                                                <div className={`text-xs transition-colors mt-0.5 ${themeClasses.text.secondary
                                                    }`}>
                                                    {item.label}
                                                </div>
                                                <div className={`text-xs transition-colors mt-0.5 ${themeClasses.text.muted
                                                    }`}>
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section divider with gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div className="h-px w-full" style={{
                    background: isDark
                        ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
                }} />
            </div>
        </section>
    );
};

export default Skills;
