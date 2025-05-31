import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaCode, FaServer, FaBrain, FaTools, FaDatabase, FaNetworkWired, FaMobile, FaCloud } from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';

const techStacks = [
  {
    category: 'AI/ML',
    icon: FaBrain,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Deep Learning', level: 80 },
      { name: 'Computer Vision', level: 75 },
      { name: 'NLP', level: 70 }
    ]
  },
  {
    category: 'Backend',
    icon: FaServer,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'SQL', level: 85 }
    ]
  },
  {
    category: 'Frontend',
    icon: FaCode,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 }
    ]
  }
];

const SkillCard = ({ skill, index, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-6 rounded-2xl overflow-hidden"
        animate={{
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? -5 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Card Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 to-primary-dark/90 backdrop-blur-xl" />

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl p-[1px]"
          animate={{
            background: isHovered
              ? "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)"
              : `linear-gradient(45deg, ${color})`,
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-primary-dark/95" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${color} bg-opacity-20`}>
              <skill.icon className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
          <p className="text-text-secondary mb-4">{skill.description}</p>
          
          {/* Skills Progress */}
          <div className="space-y-3">
            {skill.skills.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">{item.name}</span>
                  <span className="text-accent-blue">{item.level}%</span>
                </div>
                <div className="h-2 bg-primary-dark/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-2xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.2,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-32 h-32 -ml-16 -mb-16 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 blur-2xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.3 : 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [activeCategory, setActiveCategory] = useState('AI/ML');
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Artistic Style */}
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
            <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-8 py-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">About Me</span>
              </h2>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6">
            A passionate developer with expertise in AI, web development, and software engineering
          </p>
        </motion.div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Content */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
              <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm a full-stack developer with a passion for creating innovative solutions. 
                  My journey in technology has led me to explore various domains, from AI/ML to web development, 
                  always seeking to push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg blur opacity-30" />
              <div className="relative bg-primary-dark border-2 border-accent-purple/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">My Vision</h3>
                <p className="text-text-secondary leading-relaxed">
                  I believe in leveraging technology to solve real-world problems. 
                  My goal is to create impactful solutions that make a difference, 
                  combining technical expertise with creative thinking.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            style={{ y, opacity }}
            className="space-y-8"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {techStacks.map((stack) => (
                <motion.button
                  key={stack.category}
                  onClick={() => setActiveCategory(stack.category)}
                  className={`relative group ${
                    activeCategory === stack.category ? 'z-10' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${
                    activeCategory === stack.category
                      ? 'from-accent-blue to-accent-purple'
                      : 'from-accent-blue/20 to-accent-purple/20'
                  } rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className={`relative bg-primary-dark border-2 ${
                    activeCategory === stack.category
                      ? 'border-accent-blue/50'
                      : 'border-accent-blue/20'
                  } rounded-lg px-6 py-3 flex items-center gap-2`}>
                    <stack.icon className={`text-xl ${
                      activeCategory === stack.category
                        ? 'text-accent-blue'
                        : 'text-text-secondary'
                    }`} />
                    <span className={`font-medium ${
                      activeCategory === stack.category
                        ? 'text-accent-blue'
                        : 'text-text-secondary'
                    }`}>
                      {stack.category}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 gap-6">
              {techStacks
                .filter(stack => stack.category === activeCategory)
                .map((stack, index) => (
                  <SkillCard
                    key={stack.category}
                    skill={stack}
                    index={index}
                    color={stack.color}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
