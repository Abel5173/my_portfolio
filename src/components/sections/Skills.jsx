import { motion } from 'framer-motion';
import { Cpu, Code2, Zap, Target, TrendingUp, Sparkles, Brain, Server, Layout, Cloud, Smartphone, Terminal, Database, GitBranch, Cpu as CpuIcon, BarChart3 } from 'lucide-react';
import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';

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
        ],
        color: 'black'
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
        ],
        color: 'black'
    },
    {
        id: 'tools',
        title: 'Tools & Platforms',
        icon: Terminal,
        description: 'Daily development environment',
        skills: [
            { name: 'Docker/K8s', level: 85, impact: 'Containerized deployments' },
            { name: 'PostgreSQL', level: 88, impact: 'Relational data systems' },
            { name: 'AWS/GCP', level: 82, impact: 'Cloud infrastructure' },
            { name: 'Git/CI-CD', level: 90, impact: 'Team collaboration flows' },
        ],
        color: 'black'
    },
    {
        id: 'method',
        title: 'How I Work',
        icon: BarChart3,
        description: 'Approach & methodology',
        skills: [
            { name: 'Product Thinking', level: 92, impact: 'User-centric solutions' },
            { name: 'System Design', level: 88, impact: 'Scalable architectures' },
            { name: 'Team Leadership', level: 85, impact: 'Cross-functional teams' },
            { name: 'Clear Communication', level: 90, impact: 'Stakeholder alignment' },
        ],
        color: 'black'
    }
];

// Tool icons for quick scan - using emojis for simplicity
const dailyTools = [
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'VS Code', icon: '⚡' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📮' },
    { name: 'Jupyter', icon: '📓' },
    { name: 'Terminal', icon: '💻' },
];

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

const SkillDepthIndicator = ({ level }) => {
    const width = Math.max(20, level * 0.8);

    return (
        <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1 rounded-full bg-black/10 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${width}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full"
                    style={{ background: 'rgba(0,0,0,0.8)' }}
                />
            </div>
            <span className="text-xs font-mono text-black/40 tabular-nums">
                {level}%
            </span>
        </div>
    );
};

const Skills = () => {
    const [activeCluster, setActiveCluster] = useState('core');
    const containerRef = useRef(null);
    const inView = useInView(containerRef, { once: true, margin: '-50px' });

    const activeData = skillClusters.find(c => c.id === activeCluster);

    return (
        <section
            id="skills"
            className="relative py-24 md:py-32 bg-transparent overflow-hidden"
            ref={containerRef}
        >
            {/* Minimal background - subtle grid */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Very subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" className="text-black" />
                    </svg>
                </div>

                {/* Gentle gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)'
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-4">
                        <Code2 className="w-6 h-6 md:w-8 md:h-8 text-black/60" />
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Skills & Expertise
                        </h2>
                        <Cpu className="w-6 h-6 md:w-8 md:h-8 text-black/60" />
                    </div>
                    <p className="text-base md:text-xl text-black/60 max-w-2xl mx-auto font-light leading-relaxed">
                        My technical stack, strengths, and what I bring to the table.
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
                                    className={`relative p-6 md:p-8 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                                            ? 'border border-black/20 bg-white/5 shadow-sm'
                                            : 'border border-transparent hover:border-black/10 hover:bg-white/2'
                                        }`}
                                >
                                    {/* Active indicator */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                                            style={{ background: 'rgba(0,0,0,0.9)' }}
                                        />
                                    )}

                                    <div className="flex items-start justify-between mb-4 md:mb-6">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className={`p-2 md:p-3 rounded-lg ${isActive ? 'bg-black/5' : 'bg-black/3'}`}>
                                                <Icon className="w-5 h-5 md:w-6 md:h-6 text-black/70" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg md:text-2xl font-semibold text-black/90">
                                                    {cluster.title}
                                                </h3>
                                                <p className="text-black/50 text-xs md:text-sm mt-0.5">
                                                    {cluster.description}
                                                </p>
                                            </div>
                                        </div>

                                        {isActive && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="w-2 h-2 rounded-full bg-black/80"
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
                                                className="p-3 md:p-4 rounded-lg border border-black/5 hover:border-black/10 transition-colors"
                                            >
                                                <div className="flex justify-between items-start mb-1 md:mb-2">
                                                    <span className="font-medium text-black/90 text-sm md:text-base">
                                                        {skill.name}
                                                    </span>
                                                    <span className="text-xs font-mono text-black/40">
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <SkillDepthIndicator level={skill.level} />
                                                <p className="text-xs md:text-sm text-black/50 mt-2 leading-relaxed">
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
                            {/* Current Focus */}
                            <div className="p-6 md:p-8 rounded-xl md:rounded-2xl border border-black/10 bg-white/2">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <Target className="w-4 h-4 md:w-5 md:h-5 text-black/60" />
                                    <h4 className="text-lg md:text-xl font-semibold text-black/90">
                                        Current Focus
                                    </h4>
                                </div>

                                {activeData && (
                                    <div>
                                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                                            <activeData.icon className="w-6 h-6 md:w-8 md:h-8 text-black/70" />
                                            <div>
                                                <h5 className="font-semibold text-black/90 text-base md:text-lg">
                                                    {activeData.title}
                                                </h5>
                                                <p className="text-sm text-black/50">
                                                    {activeData.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 md:space-y-4">
                                            {activeData.skills.map((skill, index) => (
                                                <div key={skill.name} className="pb-3 md:pb-4 border-b border-black/5 last:border-0">
                                                    <div className="flex justify-between items-center mb-1 md:mb-2">
                                                        <span className="font-medium text-black/80 text-sm md:text-base">{skill.name}</span>
                                                        <span className="text-xs font-mono text-black/40">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                    <div className="h-1 w-full bg-black/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                            className="h-full rounded-full"
                                                            style={{ background: 'rgba(0,0,0,0.8)' }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Daily Tools */}
                            <div className="p-6 md:p-8 rounded-xl md:rounded-2xl border border-black/10 bg-white/2">
                                <div className="flex items-center gap-3 mb-4 md:mb-6">
                                    <Terminal className="w-4 h-4 md:w-5 md:h-5 text-black/60" />
                                    <h4 className="text-lg md:text-xl font-semibold text-black/90">
                                        Daily Tools
                                    </h4>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
                                    {dailyTools.map((tool) => (
                                        <motion.div
                                            key={tool.name}
                                            whileHover={{ y: -2, scale: 1.05 }}
                                            className="p-2 md:p-3 rounded-lg border border-black/5 hover:border-black/10 transition-all cursor-default flex items-center gap-2 justify-center"
                                        >
                                            <span className="text-base md:text-lg">{tool.icon}</span>
                                            <span className="text-xs md:text-sm font-medium text-black/80">
                                                {tool.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Methodology Note */}
                            <div className="p-4 md:p-6 rounded-lg md:rounded-xl border border-black/10 bg-black/2">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-black/60 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-medium text-black/90 mb-1 md:mb-2 text-sm md:text-base">
                                            Approach
                                        </h5>
                                        <p className="text-xs md:text-sm text-black/50 leading-relaxed">
                                            Focus on clean architecture, automated testing, and scalable solutions.
                                            Strong believer in documentation and clear communication.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: Timeline Growth */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-black/10"
                >
                    <div className="flex items-center gap-3 mb-6 md:mb-8">
                        <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-black/60" />
                        <h3 className="text-xl md:text-3xl font-semibold text-black/90">
                            Growth Timeline
                        </h3>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-black/10 hidden md:block" />

                        <div className="relative flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                            {[
                                { year: '2019', label: 'Frontend', desc: 'React & UI Systems' },
                                { year: '2020', label: 'Backend', desc: 'Node.js & APIs' },
                                { year: '2021', label: 'Data', desc: 'Python & Analytics' },
                                { year: '2022', label: 'AI/ML', desc: 'Models & Pipelines' },
                                { year: '2023', label: 'LLMs', desc: 'Fine-tuning & RAG' },
                                { year: '2024', label: 'MLOps', desc: 'Deployment & Scaling' },
                            ].map((item, index) => (
                                <div key={item.year} className="relative flex md:flex-col items-center md:text-center gap-4 md:gap-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-black/90 flex-shrink-0 md:mx-auto md:mb-3"
                                    />
                                    <div className="flex-1 md:flex-none">
                                        <div className="text-sm font-medium text-black/90">{item.year}</div>
                                        <div className="text-xs text-black/60 mt-0.5">{item.label}</div>
                                        <div className="text-xs text-black/40 mt-0.5 max-w-[120px]">
                                            {item.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
                <div className="h-px w-full" style={{
                    background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)'
                }} />
            </div>
        </section>
    );
};

export default Skills;
