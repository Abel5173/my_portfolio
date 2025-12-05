import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Photo from '../../assets/images/photo.png';

const About = () => {
    return (
        <section id="about" className="relative py-24 bg-transparent transition-colors duration-300">
            {/* Content is now layered over the unified background system */}
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
                                I&apos;m a passionate Generative AI Engineer and Data Scientist with expertise in building intelligent solutions that bridge the gap between cutting-edge AI research and real-world applications. Currently working at CBE, I specialize in developing enterprise-grade AI systems, RAG architectures, and full-stack ML applications.
                            </p>
                            <p>
                                Currently Working On: Enterprise RAG AI Assistant & Credit Risk Models • Learning: Advanced LLM Fine-tuning & MLOps on Kubernetes • Open for Collaboration: Generative AI projects and innovative ML solutions
                            </p>
                            <p>
                                Ask me about: Python, PyTorch, Hugging Face, RAG systems, ML deployment • Fun fact: I automate everything that can be automated!
                            </p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
                                418+ contributions on GitHub • 82 repositories • Kaggle Expert certified
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
