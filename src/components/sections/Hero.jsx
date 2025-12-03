import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Top-right to Bottom-left Gradient Pattern */}
            <div className="absolute inset-0 z-0">
                {/* Main gradient fade */}
                <div
                    className="absolute inset-0 bg-gradient-to-bl from-transparent via-neutral-200/20 to-neutral-900/5 dark:from-transparent dark:via-white/5 dark:to-black/20"
                    style={{
                        maskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(circle at top right, black 0%, transparent 70%)',
                    }}
                />

                {/* Subtle grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #000 1px, transparent 1px),
                            linear-gradient(to bottom, #000 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom left, transparent 0%, black 30%, black 70%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, transparent 0%, black 30%, black 70%, transparent 100%)',
                    }}
                />

                {/* Concentric circles pattern */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.015]"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <radialGradient id="circleFade" cx="100%" cy="0%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="1200" cy="0" r="200" fill="url(#circleFade)" className="text-black dark:text-white" />
                    <circle cx="1200" cy="0" r="400" fill="url(#circleFade)" className="text-black dark:text-white" />
                    <circle cx="1200" cy="0" r="600" fill="url(#circleFade)" className="text-black dark:text-white" />
                </svg>

                {/* Diagonal lines pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, currentColor 15px, currentColor 30px)',
                        maskImage: 'linear-gradient(to bottom left, transparent 10%, black 40%, black 60%, transparent 90%)',
                        WebkitMaskImage: 'linear-gradient(to bottom left, transparent 10%, black 40%, black 60%, transparent 90%)',
                    }}
                />


            </div>

            {/* Abstract floating elements */}
            <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
                {/* Floating dots following diagonal direction */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-neutral-400/20 dark:bg-neutral-600/20"
                        initial={{
                            x: Math.random() * 100 + 80 + '%',
                            y: Math.random() * 20 + 10 + '%',
                            opacity: 0,
                        }}
                        animate={{
                            x: [null, `-${Math.random() * 40 + 20}%`],
                            y: [null, `${Math.random() * 40 + 40}%`],
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content – Clean & Bold */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="inline-block px-4 py-2 mb-6 rounded-full bg-neutral-100/60 dark:bg-neutral-900/60 border border-neutral-300/30 dark:border-neutral-700/40 backdrop-blur-sm"
                        >
                            <span className="text-neutral-700 dark:text-neutral-300 font-medium text-sm">
                                AI Engineer & Full Stack Developer
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white">
                            Building the <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-300">
                                Intelligent Future
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I specialize in crafting advanced AI solutions and scalable web applications. Bridging the gap between complex
                            machine learning models and intuitive user experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-semibold text-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] transition-all flex items-center gap-2"
                            >
                                View Projects <ArrowRight size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://drive.google.com/file/d/14EJKDuNdoTyJaYhWHfHAxcQgtl13Nb6U/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-transparent border border-neutral-400/30 dark:border-neutral-600/40 text-neutral-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-neutral-100/20 dark:hover:bg-neutral-800/20 transition-all flex items-center gap-2"
                            >
                                Download CV <Download size={20} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Visual: Minimalist AI Terminal – Black & White */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Floating Glass Panel with diagonal gradient */}
                            <div
                                className="absolute inset-0 backdrop-blur-xl rounded-2xl border border-neutral-300/20 dark:border-neutral-700/30 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.03)] rounded-[28px]"
                                style={{
                                    background: 'linear-gradient(to bottom left, rgba(255,255,255,0.05), rgba(0,0,0,0.05))',
                                }}
                            />

                            {/* Inner Content – AI Data Stream */}
                            <div className="relative z-10 w-full h-full bg-gradient-to-bl from-white/5 to-black/5 backdrop-blur-2xl rounded-2xl border border-white/10 dark:border-black/20 p-6 flex flex-col">
                                {/* Terminal Header Dots */}
                                <div className="flex items-center gap-2 mb-5">
                                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                                </div>

                                {/* Simulated AI Output – Clean Monospace */}
                                <div className="flex-1 flex flex-col justify-end space-y-3 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                                    <div className="h-3 bg-neutral-300/40 dark:bg-neutral-700/50 rounded w-4/5" />
                                    <div className="h-3 bg-neutral-300/40 dark:bg-neutral-700/50 rounded w-2/3" />
                                    <div className="h-3 bg-neutral-300/40 dark:bg-neutral-700/50 rounded w-5/6" />

                                    {/* AI Result – Highlighted with Precision */}
                                    <div className="mt-4 p-3 bg-gradient-to-bl from-neutral-900/5 to-white/5 dark:from-white/5 dark:to-black/5 border border-neutral-400/20 dark:border-neutral-600/30 rounded-lg text-center">
                                        <span className="font-medium text-neutral-900 dark:text-neutral-200">
                                            Model Inference: 98.7% Confidence
                                        </span>
                                    </div>
                                </div>

                                {/* Subtle diagonal highlight */}
                                <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-black/10 rounded-full" />
                                <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-black/5 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
