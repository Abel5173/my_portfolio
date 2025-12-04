import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Download, FileText, Calendar, School, CheckCircle, Eye, ChevronLeft, ChevronRight, Lock, Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Certificates = () => {
    const [isDark, setIsDark] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [zoomLevel, setZoomLevel] = useState(1);
    const certificatesPerPage = 6;
    const modalRef = useRef(null);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedCertificate(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Certificate data - Replace with your actual certificates
    const certificates = [
        {
            id: 1,
            title: "Full Stack Web Development",
            issuer: "Coursera",
            issueDate: "2023",
            description: "Complete web development certification covering frontend and backend technologies.",
            imageUrl: "https://drive.google.com/file/d/1atWBEDBvr6FTD9Uq7jmk-lekpR14ybQQ/view?usp=sharing",
            credentialId: "CERT123456",
            skills: ["React", "Node.js", "MongoDB", "Express"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 2,
            title: "Machine Learning Specialization",
            issuer: "Stanford University",
            issueDate: "2023",
            description: "Advanced machine learning algorithms and neural networks certification.",
            imageUrl: "https://drive.google.com/file/d/1_A8EvEUiOqc59VKUlFfVzfVxfN_rteca/view?usp=sharing",
            credentialId: "ML789012",
            skills: ["Python", "TensorFlow", "Neural Networks", "Data Science"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 3,
            title: "AWS Solutions Architect",
            issuer: "Amazon Web Services",
            issueDate: "2023",
            description: "Cloud infrastructure design and deployment certification.",
            imageUrl: "https://drive.google.com/file/d/1SqdEBp87J2vo0a1G47ccLPQ7g057wNND/view?usp=sharing",
            credentialId: "AWS345678",
            skills: ["AWS", "Cloud", "DevOps", "Security"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 4,
            title: "React Native Development",
            issuer: "Meta",
            issueDate: "2023",
            description: "Cross-platform mobile application development with React Native.",
            imageUrl: "https://drive.google.com/file/d/1nUkshb3TiOMNi_GhD7EOBoUmoHaa0BC7/view?usp=sharing",
            credentialId: "RN901234",
            skills: ["React Native", "Mobile", "iOS", "Android"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 5,
            title: "DevOps Engineering",
            issuer: "Google Cloud",
            issueDate: "2023",
            description: "Continuous integration and deployment pipeline certification.",
            imageUrl: "https://drive.google.com/file/d/1AL47Y_LzvsCyUKcQ-DwhBz-nKF6nq2ha/view?usp=sharing",
            credentialId: "DEV567890",
            skills: ["Docker", "Kubernetes", "CI/CD", "Git"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 6,
            title: "UI/UX Design Principles",
            issuer: "Interaction Design Foundation",
            issueDate: "2023",
            description: "User interface and experience design methodologies certification.",
            imageUrl: "https://drive.google.com/file/d/1On5ZJT14dlqBLhXebs6d-X7P-pttg6iw/view?usp=sharing",
            credentialId: "UX123789",
            skills: ["Figma", "Prototyping", "User Research", "Wireframing"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 7,
            title: "Data Structures & Algorithms",
            issuer: "University of California",
            issueDate: "2022",
            description: "Advanced algorithms and data structures certification.",
            imageUrl: "https://drive.google.com/thumbnail?id=YOUR_IMAGE_ID_7&sz=w1000",
            credentialId: "DSA456123",
            skills: ["Algorithms", "Data Structures", "Problem Solving", "C++"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 8,
            title: "Cybersecurity Fundamentals",
            issuer: "ISC²",
            issueDate: "2022",
            description: "Foundational cybersecurity principles and practices certification.",
            imageUrl: "https://drive.google.com/thumbnail?id=YOUR_IMAGE_ID_8&sz=w1000",
            credentialId: "SEC789456",
            skills: ["Security", "Networking", "Encryption", "Risk Management"],
            downloadUrl: "#",
            verificationUrl: "#"
        },
        {
            id: 9,
            title: "Python for Data Science",
            issuer: "IBM",
            issueDate: "2022",
            description: "Data analysis and visualization with Python certification.",
            imageUrl: "https://drive.google.com/thumbnail?id=YOUR_IMAGE_ID_9&sz=w1000",
            credentialId: "PDS123567",
            skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
            downloadUrl: "#",
            verificationUrl: "#"
        }
    ];

    // Handle Google Drive image URLs
    const getGoogleDriveImage = (fileId) => {
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    };

    // Pagination logic
    const totalPages = Math.ceil(certificates.length / certificatesPerPage);
    const indexOfLastCertificate = currentPage * certificatesPerPage;
    const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
    const currentCertificates = certificates.slice(indexOfFirstCertificate, indexOfLastCertificate);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const resetZoom = () => {
        setZoomLevel(1);
    };

    const openCertificateModal = (cert) => {
        setSelectedCertificate(cert);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeCertificateModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = 'auto';
    };

    const zoomIn = () => {
        if (zoomLevel < 3) {
            setZoomLevel(zoomLevel + 0.25);
        }
    };

    const zoomOut = () => {
        if (zoomLevel > 0.5) {
            setZoomLevel(zoomLevel - 0.25);
        }
    };

    return (
        <section id="certificates" className="relative py-32 bg-transparent overflow-hidden">
            {/* Background Pattern - Consistent with other sections */}
            <div className="absolute inset-0 z-0">
                {/* Main Diagonal Gradient Flow */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10"
                    style={{
                        background: isDark
                            ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.05) 100%)',
                    }}
                />

                {/* Grid Pattern with Fading Edges */}
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full opacity-[0.03] dark:opacity-[0.02]"
                        style={{
                            backgroundImage: `
                                linear-gradient(90deg, currentColor 1px, transparent 1px),
                                linear-gradient(180deg, currentColor 1px, transparent 1px)
                            `,
                            backgroundSize: '50px 50px',
                            maskImage: 'radial-gradient(circle at 70% 30%, black 20%, transparent 70%)',
                            WebkitMaskImage: 'radial-gradient(circle at 70% 30%, black 20%, transparent 70%)',
                        }}
                    />
                </div>

                {/* Concentric Waves Pattern */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.015]"
                    viewBox="0 0 1200 800"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <defs>
                        <radialGradient id="certsWaveFade" cx="20%" cy="80%">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                            <stop offset="50%" stopColor="currentColor" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {[250, 450, 650].map((r, i) => (
                        <motion.circle
                            key={r}
                            cx="30%"
                            cy="70%"
                            r={r}
                            fill="url(#certsWaveFade)"
                            className="text-black dark:text-white"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.02 }}
                            transition={{
                                duration: 4,
                                delay: i * 0.4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </svg>

                {/* Dynamic Lines Pattern */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(120deg, transparent, transparent 3px, currentColor 3px, currentColor 4px)',
                        opacity: 0.01,
                        maskImage: 'linear-gradient(to top right, transparent 5%, black 25%, black 75%, transparent 95%)',
                        WebkitMaskImage: 'linear-gradient(to top right, transparent 5%, black 25%, black 75%, transparent 95%)',
                    }}
                    animate={{
                        backgroundPosition: ['0px 0px', '100px 100px'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 backdrop-blur-[100px] bg-white/5 dark:bg-black/10" />

                {/* Gradient Orbs */}
                <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)'
                    }}
                />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)'
                    }}
                />
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 z-1 overflow-hidden pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <motion.path
                        d="M50,100 Q250,50 450,150 T850,100"
                        fill="none"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="0.5"
                        strokeDasharray="8,8"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.path
                        d="M150,250 Q350,200 550,300 T950,250"
                        fill="none"
                        stroke={isDark ? "white" : "black"}
                        strokeWidth="0.3"
                        strokeDasharray="6,6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.08 }}
                        transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-6">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-black/20">
                            <Award className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Professional Certifications
                            </h2>
                        </div>
                    </div>
                    <p className={`text-lg ${isDark ? 'text-white/80' : 'text-black/80'} max-w-3xl mx-auto leading-relaxed`}>
                        Validated expertise through industry-recognized certifications, demonstrating proficiency
                        across various technologies and methodologies.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {currentCertificates.map((cert, index) => (
                        <motion.article
                            key={cert.id}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Glassmorphic Certificate Card */}
                            <div className="relative h-full bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/20 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">

                                {/* Hover Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                {/* Certificate Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2 rounded-lg ${isDark ? 'bg-white/10' : 'bg-black/10'} backdrop-blur-sm`}>
                                            <Award className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className={`w-3 h-3 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                                                <span className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                                    Verified Credential
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="opacity-0 group-hover:opacity-100"
                                        animate={{ rotate: 45 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ExternalLink className={`${isDark ? 'text-white/40' : 'text-black/40'}`} size={18} />
                                    </motion.div>
                                </div>

                                {/* Certificate Preview Image */}
                                <div
                                    className="relative mb-4 rounded-xl overflow-hidden border border-white/20 dark:border-white/10 cursor-pointer"
                                    onClick={() => openCertificateModal(cert)}
                                >
                                    {/* Black & White Image Filter */}
                                    <div className="relative aspect-video bg-gradient-to-br from-white/10 to-black/10 dark:from-white/5 dark:to-black/5">
                                        {/* Certificate Placeholder with Black/White Theme */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <FileText className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                                                <div className={`text-lg font-semibold ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                                    {cert.title}
                                                </div>
                                                <div className={`text-sm ${isDark ? 'text-white/30' : 'text-black/30'} mt-2`}>
                                                    Click to view certificate
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 dark:group-hover:bg-white/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <Eye className={`w-8 h-8 ${isDark ? 'text-white' : 'text-black'}`} />
                                        </div>
                                    </div>

                                    {/* Corner Badges */}
                                    <div className="absolute top-2 right-2">
                                        <div className={`px-2 py-1 rounded-full text-xs ${isDark ? 'bg-white/10 text-white/80' : 'bg-black/10 text-black/80'}`}>
                                            <Lock className="w-3 h-3 inline mr-1" />
                                            Verified
                                        </div>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="mb-4">
                                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'} line-clamp-1`}>
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <School className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                                            <span className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                                                {cert.issuer}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                                            <span className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                                                {cert.issueDate}
                                            </span>
                                        </div>
                                    </div>
                                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'} line-clamp-2 mb-3`}>
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-2 py-1 text-xs font-medium backdrop-blur-sm border rounded ${isDark
                                                ? 'bg-white/5 border-white/10 text-white/80'
                                                : 'bg-black/5 border-black/10 text-black/80'}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <span className={`px-2 py-1 text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                            +{cert.skills.length - 3} more
                                        </span>
                                    )}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 pt-4 border-t border-white/20 dark:border-white/10">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => openCertificateModal(cert)}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 ${isDark
                                            ? 'bg-white/10 hover:bg-white/20 text-white'
                                            : 'bg-black/10 hover:bg-black/20 text-black'}`}
                                    >
                                        <Eye size={14} />
                                        View
                                    </motion.button>
                                    <motion.a
                                        href={cert.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-1 px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 ${isDark
                                            ? 'border border-white/20 hover:bg-white/10 text-white'
                                            : 'border border-black/20 hover:bg-black/10 text-black'}`}
                                    >
                                        <Download size={14} />
                                        PDF
                                    </motion.a>
                                </div>

                                {/* Bottom Accent Line */}
                                <motion.div
                                    className={`absolute bottom-0 left-0 right-0 h-px ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-12"
                    >
                        <motion.button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-2 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} disabled:opacity-30 disabled:cursor-not-allowed transition-all`}
                        >
                            <ChevronLeft className={isDark ? 'text-white' : 'text-black'} size={20} />
                        </motion.button>

                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${currentPage === page
                                        ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                                        : isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <motion.button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-2 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} disabled:opacity-30 disabled:cursor-not-allowed transition-all`}
                        >
                            <ChevronRight className={isDark ? 'text-white' : 'text-black'} size={20} />
                        </motion.button>
                    </motion.div>
                )}

                {/* Google Drive Integration Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-sm border ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        <Globe className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                        <span className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                            Certificates hosted on{' '}
                            <a
                                href="https://drive.google.com/drive/folders/1iB6imeKGO0Gj8YKeg2Z-sc_meNMaFuDt?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-medium hover:underline ${isDark ? 'text-white' : 'text-black'}`}
                            >
                                Google Drive
                            </a>
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className={`relative w-full max-w-4xl rounded-3xl overflow-hidden ${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl border ${isDark ? 'border-white/20' : 'border-black/20'}`}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 dark:border-white/10">
                                <div>
                                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                                        {selectedCertificate.title}
                                    </h3>
                                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                        {selectedCertificate.issuer} • Issued {selectedCertificate.issueDate}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* Zoom Controls */}
                                    <div className={`flex items-center gap-1 p-1 rounded-lg ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                                        <motion.button
                                            onClick={zoomOut}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-2 rounded ${isDark ? 'hover:bg-white/20' : 'hover:bg-black/20'}`}
                                        >
                                            <span className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>−</span>
                                        </motion.button>
                                        <span className={`text-sm px-2 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                                            {Math.round(zoomLevel * 100)}%
                                        </span>
                                        <motion.button
                                            onClick={zoomIn}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`p-2 rounded ${isDark ? 'hover:bg-white/20' : 'hover:bg-black/20'}`}
                                        >
                                            <span className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>+</span>
                                        </motion.button>
                                    </div>
                                    <motion.button
                                        onClick={closeCertificateModal}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2 rounded-full ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
                                    >
                                        <span className={`text-xl ${isDark ? 'text-white' : 'text-black'}`}>×</span>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Certificate Image */}
                            <div className="p-6 overflow-auto max-h-[60vh]">
                                <div className="relative rounded-xl overflow-hidden border border-white/10 dark:border-white/10 bg-gradient-to-br from-white/5 to-black/5 dark:from-white/5 dark:to-black/5">
                                    {/* Black & White Certificate Display */}
                                    <div className="relative aspect-video flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <FileText className={`w-32 h-32 mx-auto mb-6 ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                                            <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                                {selectedCertificate.title}
                                            </div>
                                            <div className={`text-lg ${isDark ? 'text-white/30' : 'text-black/30'} mb-4`}>
                                                {selectedCertificate.issuer}
                                            </div>
                                            <div className={`text-sm ${isDark ? 'text-white/20' : 'text-black/20'}`}>
                                                Credential ID: {selectedCertificate.credentialId}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Certificate Details */}
                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                                            Description
                                        </h4>
                                        <p className={`text-sm ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                                            {selectedCertificate.description}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                                            Skills Validated
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCertificate.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-1 text-xs font-medium backdrop-blur-sm border rounded-full ${isDark
                                                        ? 'bg-white/10 border-white/20 text-white/90'
                                                        : 'bg-black/10 border-black/20 text-black/90'}`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center justify-between p-6 border-t border-white/10 dark:border-white/10">
                                <div className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Verified Digital Credential</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href={selectedCertificate.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${isDark
                                            ? 'bg-white/10 hover:bg-white/20 text-white'
                                            : 'bg-black/10 hover:bg-black/20 text-black'}`}
                                    >
                                        <ExternalLink size={14} />
                                        Verify Online
                                    </motion.a>
                                    <motion.a
                                        href={selectedCertificate.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${isDark
                                            ? 'bg-white text-black hover:bg-white/90'
                                            : 'bg-black text-white hover:bg-black/90'}`}
                                    >
                                        <Download size={14} />
                                        Download PDF
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
                <div className={`h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-black/20 to-transparent'}`} />
            </div>
        </section>
    );
};

export default Certificates;
