import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
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
                            className="inline-block px-4 py-2 mb-6 rounded-full bg-neutral-light/10 border border-neutral-light/20 backdrop-blur-sm"
                        >
                            <span className="text-primary dark:text-secondary font-medium text-sm">
                                AI Engineer & Full Stack Developer
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-dark dark:text-white">
                            Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary dark:from-secondary dark:to-primary">
                                Intelligent Future
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-neutral-medium dark:text-neutral-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            I specialize in crafting advanced AI solutions and scalable web applications.
                            Bridging the gap between complex machine learning models and intuitive user experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary dark:bg-white text-white dark:text-primary rounded-lg font-semibold text-lg hover:shadow-glow transition-all hover:-translate-y-1 flex items-center gap-2"
                            >
                                View Projects <ArrowRight size={20} />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-8 py-4 bg-transparent border border-neutral-medium/20 dark:border-neutral-light/20 text-neutral-dark dark:text-white rounded-lg font-semibold text-lg hover:bg-neutral-light/10 transition-all flex items-center gap-2"
                            >
                                Download CV <Download size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            {/* Abstract AI Shape Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse-slow" />
                            <div className="relative z-10 w-full h-full bg-neutral-lightest dark:bg-neutral-dark/50 backdrop-blur-xl rounded-2xl border border-neutral-light/20 dark:border-neutral-medium/20 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

                                {/* Code/Data Visualization Mockup */}
                                <div className="relative z-20 w-full space-y-4">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="space-y-2 font-mono text-sm text-neutral-medium dark:text-neutral-light">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 1 }}
                                            className="h-4 bg-neutral-light/50 dark:bg-neutral-medium/50 rounded w-3/4"
                                        />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 1.2 }}
                                            className="h-4 bg-neutral-light/50 dark:bg-neutral-medium/50 rounded w-1/2"
                                        />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 1.4 }}
                                            className="h-4 bg-neutral-light/50 dark:bg-neutral-medium/50 rounded w-5/6"
                                        />
                                        <div className="pt-4">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 2 }}
                                                className="p-4 bg-primary/5 dark:bg-secondary/10 rounded-lg border border-primary/10 dark:border-secondary/20"
                                            >
                                                <span className="text-primary dark:text-secondary">Analysis Complete: 98% Accuracy</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
