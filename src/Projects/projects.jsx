import { useState, useMemo, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaBrain, FaTools } from 'react-icons/fa';
import AnimatedBackground from '../components/AnimatedBackground';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Document Processing System',
    description: 'Developed an intelligent document processing system using computer vision and NLP to automate data extraction and classification.',
    image: '/src/assets/images/project1.jpg',
    tags: ['AI/ML', 'Computer Vision', 'NLP', 'Python'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com',
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Real-time Data Analytics Dashboard',
    description: 'Built a real-time analytics dashboard for monitoring business metrics and KPIs using React and WebSocket technology.',
    image: '/src/assets/images/project2.jpg',
    tags: ['React', 'WebSocket', 'D3.js', 'Node.js'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com',
    category: 'Web Development'
  },
  {
    id: 3,
    title: 'Predictive Maintenance System',
    description: 'Implemented a machine learning system for predicting equipment failures and optimizing maintenance schedules.',
    image: '/src/assets/images/project3.jpg',
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'IoT'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com',
    category: 'AI/ML'
  }
];

const categories = [
  { name: 'All', icon: FaTools },
  { name: 'AI/ML', icon: FaBrain },
  { name: 'Web Development', icon: FaCode },
  { name: 'Backend', icon: FaServer }
];

const ProjectCard = memo(({ project, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={onMouseLeave}
    >
      {/* Project Card with Neo-brutalist Style */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
      <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg overflow-hidden">
        {/* Project Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-60" />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-text-primary">
            {project.title}
          </h3>
          <p className="text-text-secondary mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover/link:opacity-50 transition-opacity" />
              <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <FaGithub className="text-accent-blue" />
                <span className="text-accent-blue">Code</span>
              </div>
            </motion.a>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg blur opacity-30 group-hover/link:opacity-50 transition-opacity" />
              <div className="relative bg-primary-dark border-2 border-accent-purple/50 rounded-lg px-4 py-2 flex items-center gap-2">
                <FaExternalLinkAlt className="text-accent-purple" />
                <span className="text-accent-purple">Live</span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Memoize filtered projects to prevent unnecessary recalculations
  const filteredProjects = useMemo(() => 
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory),
    [selectedCategory]
  );

  // Memoize category filter handler
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category.toLowerCase());
  }, []);

  // Memoize mouse event handlers
  const handleMouseEnter = useCallback((id) => {
    setHoveredProject(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title with Neo-brutalist Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
            <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-8 py-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">My Projects</span>
              </h2>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6">
            Explore my latest work and innovative solutions
          </p>
        </motion.div>

        {/* Category Filter with Neo-brutalist Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => handleCategoryChange(category.name)}
              className={`relative group ${
                selectedCategory === category.name.toLowerCase() ? 'z-10' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                selectedCategory === category.name.toLowerCase()
                  ? 'from-accent-blue to-accent-purple'
                  : 'from-accent-blue/20 to-accent-purple/20'
              } rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity`} />
              <div className={`relative bg-primary-dark border-2 ${
                selectedCategory === category.name.toLowerCase()
                  ? 'border-accent-blue/50'
                  : 'border-accent-blue/20'
              } rounded-lg px-6 py-3 flex items-center gap-2`}>
                <category.icon className={`text-xl ${
                  selectedCategory === category.name.toLowerCase()
                    ? 'text-accent-blue'
                    : 'text-text-secondary'
                }`} />
                <span className={`font-medium ${
                  selectedCategory === category.name.toLowerCase()
                    ? 'text-accent-blue'
                    : 'text-text-secondary'
                }`}>
                  {category.name}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid with Neo-brutalist Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
