import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Photo from '../../assets/images/photo.png';

const About = () => {
    return (
        <section id="about" className="relative py-24 bg-transparent transition-colors duration-300">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div>
                            <div />
                            <div>
                                <img
                                    src={Photo}
                                    alt="Abel Zeleke"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div />
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
                                href="https://drive.google.com/file/d/14EJKDuNdoTyJaYhWHfHAxcQgtl13Nb6U/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
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
