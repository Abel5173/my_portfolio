import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCode, FaNetworkWired, FaRobot, FaDatabase, FaTimes, FaDownload } from 'react-icons/fa';

const certifications = [
  {
    id: 1,
    title: "ICPC Ethiopian Collegiate Programming Contest",
    subtitle: "Honorable Mention",
    issuer: "International Collegiate Programming Contest (ICPC)",
    institution: "Wolkite University",
    date: "21 August - 22 September 2023",
    details: "Recognized with an Honorable Mention for outstanding performance in the 2023 ICPC Ethiopian Collegiate Programming Contest, held at Wol kite University. This achievement reflects strong problem-solving skills, algorithmic thinking, and teamwork in a competitive programming environment, focusing on solving complex computational problems under time constraints.",
    image: "/src/assets/images/icpc.png",
    category: "Programming",
    icon: FaCode,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "ICPC Ethiopian Collegiate Programming Contest",
    subtitle: "Certificate of Participation",
    issuer: "International Collegiate Programming Contest (ICPC)",
    institution: "Wolkite University",
    date: "21-22 September 2023",
    details: "Received a Certificate of Participation for active involvement in the 2023 Ethiopian Collegiate Programming Contest (ECPC) held at Adama Science and Technology University. This recognition highlights my participation in a competitive programming environment, showcasing my problem-solving skills, algorithmic thinking, and dedication to improving the quality of education in informatics and general education in Ethiopia. The event, organized in collaboration with Wol kite University, provided a platform to enhance my programming expertise and teamwork abilities.",
    image: "/src/assets/images/icpc1.jpg",
    category: "Programming",
    icon: FaCode,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Red Hat Certificate of Attendance",
    subtitle: "Java Development",
    issuer: "Red Hat Training Services",
    institution: "Wol kite University",
    date: "9 March 2022",
    details: "Completed a Red Hat training program in Java Development, earning a Certificate of Attendance. The program provided hands-on experience in Java programming, focusing on application development and software engineering principles, enhancing my ability to build robust and scalable applications.",
    image: "/src/assets/images/redhat.jpg",
    category: "Development",
    icon: FaCode,
    color: "from-red-500 to-red-600"
  },
  {
    id: 4,
    title: "NDG Linux Essentials",
    subtitle: "Professional Certificate",
    issuer: "Cisco Networking Academy",
    institution: "Wolkite University",
    date: "26 March 2022",
    details: "Earned the NDG Linux Essentials Professional Certificate through the Cisco Networking Academy. This certification demonstrates foundational knowledge of Linux operating systems, including file management, command-line operations, and system navigation, equipping me with essential skills for working in Linux-based environments.",
    image: "/src/assets/images/cisco.jpg",
    category: "Networking",
    icon: FaNetworkWired,
    color: "from-green-500 to-green-600"
  },
  {
    id: 5,
    title: "HCIA Datacom",
    subtitle: "Networking and Technology",
    issuer: "Huawei ICT Academy",
    institution: "Wolkite University",
    date: "01 - 30 June 2022",
    details: "Successfully completed the HCIA Datacom course (62 hours) through the Huawei ICT Academy, focusing on data communication and networking technologies. This certification highlights my understanding of network fundamentals, protocols, and configurations, preparing me for roles in network administration and IT infrastructure management.",
    image: "/src/assets/images/huawei.png",
    category: "Networking",
    icon: FaNetworkWired,
    color: "from-red-500 to-red-600"
  },
  {
    id: 6,
    title: "ALX Software Engineering",
    subtitle: "Back-end Specialization",
    issuer: "ALX, Holberton Inc.",
    institution: "ALX",
    date: "7 June 2024",
    details: "Completed a 12-month intensive ALX Software Engineering program with a specialization in Back-end development. This program honed my skills in server-side programming, database management, and API development, culminating in the ability to design and implement scalable back-end systems for web applications.",
    image: "/src/assets/images/alx.png",
    category: "Development",
    icon: FaCode,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 7,
    title: "ALX AI Starter Kit",
    subtitle: "Artificial Intelligence",
    issuer: "ALX",
    institution: "ALX",
    date: "12 March 2025",
    details: "Successfully completed the ALX AI Starter Kit, gaining foundational knowledge in artificial intelligence concepts. This program introduced me to AI principles, tools, and applications, providing a stepping stone for further exploration in AI-driven technologies and solutions.",
    image: "/src/assets/images/alx-ai.png",
    category: "AI/ML",
    icon: FaRobot,
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 8,
    title: "Kaggle Intro to Programming",
    subtitle: "Data Science Programming",
    issuer: "Kaggle",
    institution: "Kaggle",
    date: "15 January 2025",
    details: "Successfully completed Kaggle's 'Intro to Programming' course, gaining foundational programming skills tailored for data science applications. This course enhanced my ability to write efficient code for data manipulation and analysis, preparing me for advanced data science challenges.",
    image: "/src/assets/images/kaggle.png",
    category: "AI/ML",
    icon: FaDatabase,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 9,
    title: "Kaggle Intro to Machine Learning",
    subtitle: "Machine Learning Fundamentals",
    issuer: "Kaggle",
    institution: "Kaggle",
    date: "12 February 2025",
    details: "Earned a certificate for completing Kaggle's 'Intro to Machine Learning' course, focusing on core concepts such as supervised learning and model validation. This training enhanced my ability to build and evaluate machine learning models for predictive tasks.",
    image: "/src/assets/images/kaggle1.png",
    category: "AI/ML",
    icon: FaDatabase,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 10,
    title: "Kaggle Intermediate Machine Learning",
    subtitle: "Advanced ML Techniques",
    issuer: "Kaggle",
    institution: "Kaggle",
    date: "15 February 2025",
    details: "Completed Kaggle's 'Intermediate Machine Learning' course, focusing on complex topics like categorical data encoding and hyperparameter tuning. This training strengthened my expertise in building high-performing machine learning models.",
    image: "/src/assets/images/kaggle2.png",
    category: "AI/ML",
    icon: FaDatabase,
    color: "from-blue-500 to-blue-600"
  }
];

const categories = [
  { id: 'all', label: 'All Certificates', icon: FaAward },
  { id: 'Programming', label: 'Programming', icon: FaCode },
  { id: 'Networking', label: 'Networking', icon: FaNetworkWired },
  { id: 'AI/ML', label: 'AI/ML', icon: FaRobot },
  { id: 'Development', label: 'Development', icon: FaCode }
];

const CertificateModal = ({ certificate, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef(null);

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = certificate.image;
    link.download = `${certificate.title.toLowerCase().replace(/\s+/g, '-')}-certificate`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImageClick = () => {
    window.open(certificate.image, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl bg-primary-dark rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
          {/* Image Section */}
          <div className="relative h-full">
            <motion.div
              className="relative h-full w-full cursor-pointer group"
              onClick={handleImageClick}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt className="text-4xl text-white" />
              </div>
            </motion.div>
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-col h-full overflow-y-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-2">
                  {certificate.title}
                </h2>
                <p className="text-accent-blue font-medium">
                  {certificate.subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <certificate.icon className="text-accent-blue text-xl" />
                  <div>
                    <p className="text-text-secondary text-sm">Issued by</p>
                    <p className="text-text-primary font-medium">{certificate.issuer}</p>
                  </div>
                </div>

                <div>
                  <p className="text-text-secondary text-sm">Institution</p>
                  <p className="text-text-primary font-medium">{certificate.institution}</p>
                </div>

                <div>
                  <p className="text-text-secondary text-sm">Completion Date</p>
                  <p className="text-text-primary font-medium">{certificate.date}</p>
                </div>
              </div>

              <div>
                <p className="text-text-secondary text-sm mb-2">Description</p>
                <p className="text-text-primary">{certificate.details}</p>
              </div>

              <motion.button
                onClick={handleDownload}
                className="w-full py-3 px-4 rounded-lg bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload />
                <span>Download Certificate</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificationCard = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ y, opacity, scale }}
        className="relative w-full h-[500px]"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative h-full rounded-2xl overflow-hidden"
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
                : "linear-gradient(45deg, #3b82f6, #8b5cf6)",
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-primary-dark/95" />
          </motion.div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Image Section */}
            <motion.div 
              className="relative h-1/2 w-full overflow-hidden"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={certification.image}
                alt={certification.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent" />
              
              {/* Category Badge */}
              <motion.div
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-blue/20 backdrop-blur-sm"
                animate={{
                  y: isHovered ? 0 : -10,
                  opacity: isHovered ? 1 : 0.8,
                }}
              >
                <div className="flex items-center gap-2">
                  <certification.icon className="text-accent-blue" />
                  <span className="text-sm text-accent-blue font-medium">
                    {certification.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col">
              <div className="space-y-3">
                <motion.h3
                  className="text-xl font-bold text-text-primary line-clamp-2"
                  animate={{
                    textShadow: isHovered ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none',
                  }}
                >
                  {certification.title}
                </motion.h3>
                <motion.p
                  className="text-accent-blue font-medium"
                  animate={{
                    textShadow: isHovered ? '0 0 8px rgba(59, 130, 246, 0.5)' : 'none',
                  }}
                >
                  {certification.subtitle}
                </motion.p>
                <div className="flex items-center gap-2 text-text-secondary text-sm">
                  <certification.icon className="text-accent-blue" />
                  <span>{certification.issuer}</span>
                </div>
                <p className="text-text-secondary text-sm">
                  {certification.date}
                </p>
              </div>

              {/* Description */}
              <motion.div
                className="mt-4 flex-1"
                animate={{
                  height: isHovered ? 'auto' : '60px',
                  opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-text-secondary text-sm line-clamp-3">
                  {certification.details}
                </p>
              </motion.div>

              {/* Action Button */}
              <motion.div
                className="mt-4 flex justify-end"
                animate={{
                  y: isHovered ? 0 : 10,
                  opacity: isHovered ? 1 : 0.8,
                }}
              >
                <motion.button
                  onClick={() => setShowModal(true)}
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/20 text-accent-blue hover:bg-accent-blue/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-medium">View Details</span>
                  <motion.div
                    animate={{
                      x: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaExternalLinkAlt className="text-accent-blue" />
                  </motion.div>
                </motion.button>
              </motion.div>
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

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <CertificateModal
            certificate={certification}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const filteredCertifications = (hoveredCategory || selectedCategory) === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === (hoveredCategory || selectedCategory));

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="min-h-screen py-20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse-slow" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

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
                <span className="gradient-text">Certifications</span>
              </h2>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mt-6">
            Professional certifications and achievements that showcase my expertise
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
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`relative group ${
                selectedCategory === category.id ? 'z-10' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${
                selectedCategory === category.id || hoveredCategory === category.id
                  ? 'from-accent-blue to-accent-purple'
                  : 'from-accent-blue/20 to-accent-purple/20'
              } rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity`} />
              <div className={`relative bg-primary-dark border-2 ${
                selectedCategory === category.id || hoveredCategory === category.id
                  ? 'border-accent-blue/50'
                  : 'border-accent-blue/20'
              } rounded-lg px-6 py-3`}>
                <span className={`font-medium ${
                  selectedCategory === category.id || hoveredCategory === category.id
                    ? 'text-accent-blue'
                    : 'text-text-secondary'
                }`}>
                  {category.label}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid with Neo-brutalist Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertifications.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div 
                className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleCertificateClick(certificate)}
              >
                {/* Certificate Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-60" />
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FaAward className="text-accent-blue" />
                    <h3 className="text-xl font-bold text-text-primary">
                      {certificate.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-2">
                    {certificate.issuer}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {certificate.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal with Neo-brutalist Style */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30" />
                <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg overflow-hidden">
                  {/* Modal Header */}
                  <div className="p-6 border-b border-accent-blue/20">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-text-primary">
                        {selectedCertificate.title}
                      </h3>
                      <motion.button
                        onClick={handleCloseModal}
                        className="relative group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                        <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-full p-2">
                          <FaTimes className="text-accent-blue" />
                        </div>
                      </motion.button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Certificate Image */}
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={selectedCertificate.image}
                          alt={selectedCertificate.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Certificate Details */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-text-primary mb-2">
                            Issuer
                          </h4>
                          <p className="text-text-secondary">
                            {selectedCertificate.issuer}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-text-primary mb-2">
                            Date Earned
                          </h4>
                          <p className="text-text-secondary">
                            {selectedCertificate.date}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-medium text-text-primary mb-2">
                            Description
                          </h4>
                          <p className="text-text-secondary">
                            {selectedCertificate.details}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                          <motion.a
                            href={selectedCertificate.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group flex-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-primary-dark border-2 border-accent-blue/50 rounded-lg px-6 py-3 flex items-center justify-center gap-2">
                              <FaExternalLinkAlt className="text-accent-blue" />
                              <span className="text-accent-blue">View Certificate</span>
                            </div>
                          </motion.a>

                          <motion.button
                            className="relative group flex-1"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative bg-primary-dark border-2 border-accent-purple/50 rounded-lg px-6 py-3 flex items-center justify-center gap-2">
                              <FaDownload className="text-accent-purple" />
                              <span className="text-accent-purple">Download</span>
                            </div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications; 