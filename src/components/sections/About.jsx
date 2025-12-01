import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Photo from '../../assets/images/my_image.png';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white dark:bg-neutral-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse-slow" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-neutral-black shadow-2xl">
                                <img
                                    src={Photo}
                                    alt="Abel Zeleke"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-neutral-lightest dark:bg-neutral-black rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                <span className="text-2xl">🚀</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark dark:text-white mb-6">
                            About Me
                        </h2>

                        <div className="space-y-4 text-lg text-neutral-medium dark:text-neutral-light leading-relaxed mb-8">
                            <p>
                                I am a passionate Software Engineer with a strong foundation in full-stack development and a keen interest in Artificial Intelligence. My journey began with a curiosity for how things work, which evolved into a career dedicated to building efficient, scalable, and user-centric solutions.
                            </p>
                            <p>
                                With expertise in modern web technologies like React, Node.js, and Python, I strive to bridge the gap between complex backend logic and intuitive frontend interfaces. I am constantly learning and adapting to new technologies to stay at the forefront of the industry.
                            </p>
                            <p>
                                When I&apos;m not coding, you can find me exploring the latest advancements in AI, contributing to open-source projects, or sharing my knowledge through technical writing and mentorship.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="px-6 py-3 bg-primary dark:bg-white text-white dark:text-primary rounded-lg font-semibold hover:shadow-glow transition-all flex items-center gap-2"
                            >
                                <Download size={20} /> Download CV
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-neutral-medium/20 dark:border-neutral-light/20 text-neutral-dark dark:text-white rounded-lg font-semibold hover:bg-neutral-light/10 transition-all flex items-center gap-2"
                            >
                                <Mail size={20} /> Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
