import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Cpu, Zap, Brain } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const Hero = () => {
    const { resolvedTheme } = useTheme();

    const isDark = resolvedTheme === 'dark';

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Content is now layered over the unified background system */}

            {/* Animated Floating Elements */}
            <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
                {/* Floating AI Icons */}
                {[Brain, Cpu, Zap].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        initial={{
                            x: Math.random() * 80 + 10 + '%',
                            y: Math.random() * 80 + 10 + '%',
                            opacity: 0,
                            rotate: 0
                        }}
                        animate={{
                            x: [null, `-${Math.random() * 20 + 10}%`],
                            y: [null, `+${Math.random() * 20 + 10}%`],
                            opacity: [0, 0.1, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2,
                        }}
                    >
                        <Icon className={`w-6 h-6 ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                    </motion.div>
                ))}

                {/* Enhanced Floating Dots */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                        initial={{
                            x: Math.random() * 100 + 80 + '%',
                            y: Math.random() * 100 + 10 + '%',
                            opacity: 0,
                        }}
                        animate={{
                            x: [null, `-${Math.random() * 60 + 40}%`],
                            y: [null, `${Math.random() * 60 + 40}%`],
                            opacity: [0, 0.4, 0],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 12,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3,
                        }}
                    />
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <motion.path
                        d="M80,100 Q400,50 600,200 T1200,300"
                        fill="none"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="0.5"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content – Enhanced with Animations */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left relative"
                    >
                        {/* Floating Badge with Particles */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-block mb-8 relative"
                        >
                            <div className="px-5 py-2.5 rounded-full bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 backdrop-blur-xl flex items-center gap-3">
                                <Sparkles className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">
                                    Generative AI Engineer & Data Scientist
                                </span>
                            </div>

                            {/* Animated particles around badge */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-white/30' : 'bg-black/30'}`}
                                    style={{
                                        left: `${Math.cos(i * 120 * Math.PI / 180) * 20}px`,
                                        top: `${Math.sin(i * 120 * Math.PI / 180) * 20}px`,
                                    }}
                                    animate={{
                                        scale: [0, 1, 0],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3,
                                    }}
                                />
                            ))}
                        </motion.div>

                        {/* Main Heading with Staggered Text */}
                        <div className="overflow-hidden gap-2 mb-6">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight"
                            >
                                Building the
                                <br />
                                <span className="relative">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-300 dark:to-white">
                                        Intelligent Future
                                    </span>
                                    {/* Animated underline */}
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-900/50 to-transparent dark:via-white/50"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.8, duration: 1 }}
                                    />
                                </span>
                            </motion.h1>
                        </div>

                        {/* Subtitle with Fade In */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mb-10"
                        >
                            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                I specialize in crafting advanced AI solutions and scalable web applications. Bridging the gap between complex
                                machine learning models and intuitive user experiences.
                            </p>
                        </motion.div>

                        {/* Enhanced CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-semibold text-lg hover:shadow-[0_20px_50px_-12px] hover:shadow-neutral-900/20 dark:hover:shadow-white/20 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                            >
                                <span className="relative z-10">View Projects</span>
                                <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-gray-200 dark:to-white"
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '0%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://drive.google.com/file/d/14EJKDuNdoTyJaYhWHfHAxcQgtl13Nb6U/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-transparent border-2 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30 transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                            >
                                <span className="relative z-10">Download CV</span>
                                <Download size={20} className="relative z-10 transition-transform group-hover:-translate-y-1" />
                                {/* Subtle background effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-100/10 to-transparent dark:via-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.a>
                        </motion.div>

                        {/* Stats Counter */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-12 flex items-center justify-center lg:justify-start gap-8"
                        >
                            {[
                                { value: '3+', label: 'Years Experience' },
                                { value: '20+', label: 'Projects' },
                                { value: '5+', label: 'AI Models' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <motion.div
                                        className="text-2xl font-bold text-neutral-900 dark:text-white"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 1 + i * 0.1, type: "spring" }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Enhanced Visual Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Outer Glow */}
                            <motion.div
                                className="absolute -inset-4 rounded-3xl blur-xl"
                                animate={{
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity
                                }}
                                style={{
                                    background: isDark
                                        ? 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
                                        : 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)'
                                }}
                            />

                            {/* Glass Panel */}
                            <div className="relative w-full h-full backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden">
                                {/* Terminal Content */}
                                <div className="relative z-10 w-full h-full bg-gradient-to-br from-white/5 to-black/5 p-6 flex flex-col">
                                    {/* Terminal Header */}
                                    <div className="flex items-center gap-2 mb-6">
                                        {['#FF5F57', '#FFBD2E', '#28CA42'].map((color, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-3 h-3 rounded-full"
                                                style={{ backgroundColor: color }}
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ delay: i * 0.2, repeat: Infinity, duration: 2 }}
                                            />
                                        ))}
                                        <div className="flex-1 text-center font-mono text-xs text-neutral-600 dark:text-neutral-400">
                                            AI_Terminal_01
                                        </div>
                                    </div>

                                    {/* AI Processing Animation */}
                                    <div className="flex-1 space-y-4">
                                        {[
                                            'Initializing neural network... ✓',
                                            'Loading training data... ✓',
                                            'Processing inference request...',
                                            'Confidence: 98.7%'
                                        ].map((line, i) => (
                                            <motion.div
                                                key={i}
                                                className="font-mono text-sm text-neutral-700 dark:text-neutral-300 flex items-center gap-3"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + i * 0.2 }}
                                            >
                                                <span className="text-neutral-500 dark:text-neutral-500">$</span>
                                                {line}
                                                {i < 2 && (
                                                    <motion.span
                                                        className="text-green-500"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ delay: 0.8 + i * 0.2 }}
                                                    >
                                                        ✓
                                                    </motion.span>
                                                )}
                                            </motion.div>
                                        ))}

                                        {/* AI Output Visualization */}
                                        <motion.div
                                            className="mt-6 p-4 bg-gradient-to-r from-white/5 to-transparent dark:from-black/5 rounded-lg border border-white/10 dark:border-white/5"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.2 }}
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-neutral-900 dark:text-white">
                                                    Model Performance
                                                </span>
                                                <span className="text-xs text-green-500 font-mono">↑ 98.7%</span>
                                            </div>
                                            <div className="h-2 bg-white/10 dark:bg-black/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: '98.7%' }}
                                                    transition={{ delay: 1.4, duration: 1 }}
                                                />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Status Bar */}
                                    <div className="mt-6 pt-4 border-t border-white/10 dark:border-black/10 flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
                                        <span>Ready</span>
                                        <span>AI Terminal v2.0</span>
                                    </div>
                                </div>

                                {/* Animated Scan Line */}
                                <motion.div
                                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ y: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-neutral-400/30 dark:border-neutral-600/30 rounded-full p-1"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full mx-auto"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
