import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
        >
            {/* Grayscale Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-neutral-50 to-black dark:from-black dark:via-neutral-950 dark:to-neutral-900" />

            {/* Abstract Flowing Geometry – Static but Dynamic */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-5 dark:opacity-10"
                viewBox="0 0 1440 800"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" className="stop-color-white dark:stop-color-black" stopOpacity="0.1" />
                        <stop offset="100%" className="stop-color-black dark:stop-color-white" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                {/* Flowing AI-inspired curves */}
                <path
                    d="M 200,600 Q 400,300 720,400 Q 1040,500 1240,200"
                    stroke="url(#flowGradient)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 100,200 Q 300,100 600,250 Q 900,400 1300,300"
                    stroke="url(#flowGradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.7"
                />
                {/* Subtle grid dots for depth */}
                <circle cx="300" cy="500" r="1" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" opacity="0.3" />
                <circle cx="800" cy="300" r="1" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" opacity="0.3" />
                <circle cx="1100" cy="600" r="1" fill="currentColor" className="text-neutral-400 dark:text-neutral-600" opacity="0.3" />
            </svg>

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
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-semibold text-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(255,255,255,0.08)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/14EJKDuNdoTyJaYhWHfHAxcQgtl13Nb6U/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-transparent border border-neutral-400/30 dark:border-neutral-600/40 text-neutral-900 dark:text-white rounded-lg font-semibold text-lg hover:bg-neutral-100/20 dark:hover:bg-neutral-800/20 transition-all flex items-center gap-2"
                            >
                                Download CV <Download size={20} />
                            </a>
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
                            {/* Floating Glass Panel */}
                            <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-neutral-300/20 dark:border-neutral-700/30 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-12px_rgba(255,255,255,0.03)] rounded-[28px]" />

                            {/* Inner Content – AI Data Stream */}
                            <div className="relative z-10 w-full h-full bg-white/30 dark:bg-black/20 backdrop-blur-2xl rounded-2xl border border-white/10 dark:border-black/20 p-6 flex flex-col">
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
                                    <div className="mt-4 p-3 bg-neutral-900/5 dark:bg-white/5 border border-neutral-400/20 dark:border-neutral-600/30 rounded-lg text-center">
                                        <span className="font-medium text-neutral-900 dark:text-neutral-200">
                                            Model Inference: 98.7% Confidence
                                        </span>
                                    </div>
                                </div>

                                {/* Subtle Reflection Highlight */}
                                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-black/20 rounded-full" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
