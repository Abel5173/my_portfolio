import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-lightest dark:bg-neutral-black border-t border-neutral-light/20 dark:border-neutral-medium/20 py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary dark:bg-secondary rounded-md flex items-center justify-center">
                                <span className="text-white dark:text-primary font-bold text-sm">A</span>
                            </div>
                            <span className="font-bold text-lg text-primary dark:text-white">Abel</span>
                        </div>
                        <p className="text-sm text-neutral-medium dark:text-neutral-light">
                            Building the future with AI & Code.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/Abel5173"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="mailto:abelzeleke5173@gmail.com"
                            className="text-neutral-medium dark:text-neutral-light hover:text-primary dark:hover:text-white transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-light/20 dark:border-neutral-medium/20 text-center">
                    <p className="text-sm text-neutral-medium dark:text-neutral-light">
                        &copy; {currentYear} Abel Zeleke. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
