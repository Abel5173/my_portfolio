import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Neo-brutalist Title Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
              <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg p-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="gradient-text">Abel Zeleke Mergia</span>
                </h1>
              </div>
            </motion.div>

            {/* Animated Role Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative mb-8"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg blur opacity-30" />
              <div className="relative bg-primary-dark border-2 border-accent-purple/50 rounded-lg p-4">
                <h2 className="text-2xl md:text-3xl text-text-secondary">
                  <TypeAnimation
                    sequence={[
                      'Data Scientist',
                      1000,
                      'AI Engineer',
                      1000,
                      'Full-Stack Developer',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
              </div>
            </motion.div>

            {/* Description with Neo-brutalist Style */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-secondary text-lg mb-8 max-w-xl mx-auto lg:mx-0 bg-primary-dark/50 backdrop-blur-sm p-6 rounded-lg border border-accent-blue/20"
            >
              Building intelligent solutions at the intersection of data, systems, and AI.
              Currently crafting AI-powered tools at Commercial Bank of Ethiopia.
            </motion.p>

            {/* Action Buttons with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-8 py-3 flex items-center gap-2">
                  <span className="text-accent-blue font-medium">Get in Touch</span>
                  <FaArrowRight className="text-accent-blue transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1RufGvgHN4N1ZVbrSH9QETcDr2oYLQdKh/view"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-primary-dark border-2 border-accent-purple/50 rounded-lg px-8 py-3">
                  <span className="text-accent-purple font-medium">View Resume</span>
                </div>
              </motion.a>
            </motion.div>

            {/* Social Links with Neo-brutalist Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 justify-center lg:justify-start mt-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-full p-3">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              {/* Neo-brutalist Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-2xl border-4 border-accent-blue/30" />
              
              {/* Animated Elements */}
              <motion.div
                className="absolute inset-4 bg-primary-dark rounded-xl overflow-hidden"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 bg-gradient-conic from-accent-blue via-accent-purple to-accent-blue opacity-20" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-accent-blue to-accent-purple rounded-full opacity-20 blur-3xl" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue/20 rounded-lg"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent-purple/20 rounded-lg"
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator with Neo-brutalist Style */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30" />
          <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-full p-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-accent-blue rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-accent-blue rounded-full mt-2"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
