import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBrain, FaCode, FaServer, FaTools, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { staggerContainer, fadeIn, hoverScale, tapScale } from '../utils/animations';

const techStacks = [
  {
    category: 'AI/ML & Data Science',
    icon: FaBrain,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Pandas', level: 90 },
      { name: 'NLP', level: 85 }
    ],
    color: 'text-accent-blue'
  },
  {
    category: 'Frontend',
    icon: FaCode,
    skills: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Next.js', level: 75 },
      { name: 'Redux', level: 80 },
      { name: 'GraphQL', level: 70 }
    ],
    color: 'text-accent-purple'
  },
  {
    category: 'Backend & Deployment',
    icon: FaServer,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'Redis', level: 75 }
    ],
    color: 'text-accent-green'
  },
  {
    category: 'System & Tools',
    icon: FaTools,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Terraform', level: 65 },
      { name: 'Monitoring', level: 75 }
    ],
    color: 'text-accent-blue'
  }
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState('AI/ML & Data Science');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A passionate Data Scientist and AI Engineer focused on building intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeIn} className="glass-card p-8">
              <h3 className="text-2xl font-space font-bold mb-6 text-text-primary">Who I Am</h3>
              <p className="text-text-secondary leading-relaxed">
                I'm a Data Scientist and AI Engineer with a passion for building intelligent solutions that solve real-world problems. 
                Currently working at Commercial Bank of Ethiopia, I focus on developing AI-powered tools and systems that enhance 
                business processes and decision-making.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="glass-card p-8">
              <h3 className="text-2xl font-space font-bold mb-6 text-text-primary">My Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                I believe in the power of AI and data to transform businesses and improve lives. My goal is to create 
                innovative solutions that are not only technically sound but also accessible and impactful.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {techStacks.map((stack) => (
                <motion.button
                  key={stack.category}
                  variants={fadeIn}
                  onClick={() => setActiveCategory(stack.category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeCategory === stack.category
                      ? 'bg-accent-blue text-white'
                      : 'bg-primary-dark/50 text-text-secondary hover:bg-secondary-dark'
                  }`}
                  whileHover={hoverScale}
                  whileTap={tapScale}
                >
                  <stack.icon className={`inline-block mr-2 ${stack.color}`} />
                  {stack.category}
                </motion.button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {techStacks
                .find((stack) => stack.category === activeCategory)
                ?.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeIn}
                    className="glass-card p-4"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-primary">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-primary-dark/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          hoveredSkill === skill.name
                            ? 'bg-gradient-to-r from-accent-blue to-accent-purple'
                            : 'bg-accent-blue'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
