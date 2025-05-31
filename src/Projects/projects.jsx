import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaRobot } from 'react-icons/fa';
import { staggerContainer, fadeIn, hoverScale, tapScale } from '../utils/animations';

const projects = [
  {
    title: 'AI-Powered Document Analysis',
    description: 'Developed an intelligent document processing system using NLP and computer vision.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI'],
    image: '/project1.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://demo.project1.com',
    category: 'AI/ML',
    icon: FaRobot,
    color: 'text-accent-blue'
  },
  {
    title: 'Real-time Data Dashboard',
    description: 'Built a real-time analytics dashboard for monitoring system performance.',
    technologies: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    image: '/project2.jpg',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://demo.project2.com',
    category: 'Full-Stack',
    icon: FaServer,
    color: 'text-accent-purple'
  },
  {
    title: 'Database Optimization Tool',
    description: 'Created a tool for optimizing database performance and query execution.',
    technologies: ['SQL', 'Python', 'PostgreSQL', 'Redis'],
    image: '/project3.jpg',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://demo.project3.com',
    category: 'Backend',
    icon: FaDatabase,
    color: 'text-accent-green'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'AI/ML', 'Full-Stack', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
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
              Featured Projects
            </span>
        </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in AI, full-stack development, and system architecture.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              variants={fadeIn}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === category
                  ? 'bg-accent-blue text-white'
                  : 'bg-primary-dark/50 text-text-secondary hover:bg-secondary-dark'
              }`}
              whileHover={hoverScale}
              whileTap={tapScale}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn}
              className="glass-card group relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                    filter: hoveredProject === index ? 'brightness(0.7)' : 'brightness(1)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className={`text-6xl ${project.color} opacity-50`} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-dark/50 text-accent-blue rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredProject === index ? 1 : 0, y: hoveredProject === index ? 0 : 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                    className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors"
              >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
              </a>
                </motion.div>
            </div>

              {/* Hover Overlay */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hoveredProject === index ? 1 : 0,
                  y: hoveredProject === index ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
