import { motion, AnimatePresence } from 'framer-motion';
import { Award, FileText, CheckCircle, Eye, Filter, SortAsc, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeProvider';

const Certificates = () => {
    const { resolvedTheme } = useTheme();
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showAll, setShowAll] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const modalRef = useRef(null);

    const isDark = resolvedTheme === 'dark';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSelectedCertificate(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Enhanced certificate data with tags and verification
    const certificates = [
        {
            id: 1,
            title: "HCIA-Datacom (Huawei Certified ICT Associate - Datacom)",
            issuer: "Huawei",
            provider: "Huawei ICT Academy / Wolkite University",
            issueDate: "2022-06",
            description: "Data Communication and Network Technology (62 Hrs + 66 Hrs) - Module 1 & 2",
            credentialId: "N/A (Physical certificate)",
            skills: ["Networking", "Routing", "Switching", "Huawei", "Datacom"],
            downloadUrl: "https://drive.google.com/file/d/1SqdEBp87J2vo0a1G47ccLPQ7g057wNND/view?usp=sharing", // Huawei pink cert
            verificationUrl: "https://e.huawei.com/en/talent/#/certification",
            category: "networking",
            priority: 1
        },
        {
            id: 2,
            title: "ICPC Ethiopian Collegiate Programming Contest - Honorable Mention",
            issuer: "ICPC Foundation",
            provider: "Wolkite University / Adama Science and Technology University",
            issueDate: "2023-09",
            description: "2023 ICPC Ethiopian Collegiate Programming Contest (21 Aug – 22 Sep 2023)",
            credentialId: "N/A",
            skills: ["Competitive Programming", "Algorithms", "Problem Solving", "C/C++"],
            downloadUrl: "https://drive.google.com/file/d/1nUkshb3TiOMNi_GhD7EOBoUmoHaa0BC7/view?usp=sharing", // ICPC Honorable Mention
            verificationUrl: "https://icpc.global",
            category: "programming",
            priority: 1
        },
        {
            id: 3,
            title: "ALX Software Engineering - Back-End Specialization",
            issuer: "ALX (powered by Holberton)",
            provider: "ALX Africa",
            issueDate: "2024-06",
            validUntil: "Lifetime",
            description: "12-month intensive software engineering program with specialization in Back-End development",
            credentialId: "MNJYLCZEM",
            skills: ["C", "Python", "Linux", "Back-End", "DevOps", "Systems Programming"],
            downloadUrl: "https://drive.google.com/file/d/1fsrFxO1qudsj9Q7NbCj75kX7Cm03XiV2/view?usp=sharing", // ALX cert with QR
            verificationUrl: "https://intranet.alxswe.com/certificates/MNJYLCZEM",
            category: "software",
            priority: 1
        },
        {
            id: 4,
            title: "Kifiya AI Mastery Training Program (with Distinction)",
            issuer: "Kifiya Financial Technology / 10 Academy",
            provider: "Mastercard Foundation & SAFEE KAIM",
            issueDate: "2025-09",
            description: "3-month intensive program: Machine Learning Engineering, Data Engineering, and Financial Analysis for Fintech",
            credentialId: "N/A",
            skills: ["Machine Learning", "Data Engineering", "MLOps", "Fintech", "Python", "SQL"],
            downloadUrl: "https://drive.google.com/file/d/1_A8EvEUiOqc59VKUlFfVzfVxfN_rteca/view?usp=sharing", // Kifiya Mastercard cert (name: Abel Mergia)
            verificationUrl: "https://10academy.org",
            category: "ml",
            priority: 1
        },
        {
            id: 5,
            title: "Frontier Tech Leaders Programme - Machine Learning Project-Based Training",
            issuer: "UNDP IICPSD / SDG AI Lab",
            provider: "United Nations Technology Innovation Lab",
            issueDate: "2025-08",
            description: "Advanced project-based Machine Learning training under UN Frontier Tech Leaders initiative",
            credentialId: "N/A",
            skills: ["Machine Learning", "Deep Learning", "AI for SDGs", "Project Development"],
            downloadUrl: "https://drive.google.com/file/d/1atWBEDBvr6FTD9Uq7jmk-lekpR14ybQQ/view?usp=sharing", // UN Frontier Tech cert
            verificationUrl: "https://www.undp.org/innovation",
            category: "ml",
            priority: 1
        },
        {
            id: 6,
            title: "Red Hat Application Development I: Programming in Java EE (AD183)",
            issuer: "Red Hat Academy",
            provider: "Wolkite University",
            issueDate: "2022-03",
            description: "Certificate of Attendance – Red Hat Java EE Enterprise Application Development",
            credentialId: "N/A",
            skills: ["Java EE", "Jakarta EE", "Enterprise Java", "JBoss"],
            downloadUrl: "https://drive.google.com/file/d/1On5ZJT14dlqBLhXebs6d-X7P-pttg6iw/view?usp=sharing", // Red Hat pink cert
            verificationUrl: "https://www.redhat.com/en/services/training-and-certification",
            category: "programming",
            priority: 2
        },
        {
            id: 7,
            title: "NDG Linux Essentials Professional Development Certificate",
            issuer: "Cisco Networking Academy",
            provider: "Wolkite University",
            issueDate: "2022-05",
            description: "Successfully completed Linux Essentials course by Cisco Networking Academy (LPI prep)",
            credentialId: "Prepared for LPI Linux Essentials",
            skills: ["Linux", "Command Line", "Bash", "Open Source", "System Administration"],
            downloadUrl: "https://drive.google.com/file/d/1AL47Y_LzvsCyUKcQ-DwhBz-nKF6nq2ha/view?usp=sharing", // NDG Linux cert
            verificationUrl: "https://www.netacad.com",
            category: "linux",
            priority: 2
        },
        {
            id: 9,
            title: "Intermediate Machine Learning",
            issuer: "Kaggle",
            provider: "Kaggle Learn",
            issueDate: "2024",
            description: "Advanced machine learning concepts and techniques for building predictive models.",
            credentialId: "N/A",
            skills: ["Machine Learning", "Python", "Data Science"],
            downloadUrl: "#",
            verificationUrl: "https://www.kaggle.com/learn/intermediate-machine-learning",
            category: "ml",
            priority: 2
        },
        {
            id: 10,
            title: "Introduction to Machine Learning",
            issuer: "Kaggle",
            provider: "Kaggle Learn",
            issueDate: "2023",
            description: "Foundational concepts in machine learning including supervised and unsupervised learning.",
            credentialId: "N/A",
            skills: ["Machine Learning", "Python", "Data Science"],
            downloadUrl: "#",
            verificationUrl: "https://www.kaggle.com/learn/intro-to-machine-learning",
            category: "ml",
            priority: 2
        },
        {
            id: 11,
            title: "Red Hat System Administration",
            issuer: "Red Hat Academy",
            provider: "Wolkite University",
            issueDate: "2023",
            description: "Certificate of Attendance – Red Hat System Administration training.",
            credentialId: "N/A",
            skills: ["System Administration", "Linux", "Red Hat"],
            downloadUrl: "#",
            verificationUrl: "https://www.redhat.com/en/services/training-and-certification",
            category: "linux",
            priority: 2
        }
    ];

    // Filter and sort logic
    const categories = [
        { id: 'all', label: 'All Certificates', count: certificates.length },
        { id: 'ml', label: 'ML/AI', count: certificates.filter(c => c.category === 'ml').length },
        { id: 'software', label: 'Software Eng', count: certificates.filter(c => c.category === 'software').length },
        { id: 'programming', label: 'Programming', count: certificates.filter(c => c.category === 'programming').length },
        { id: 'networking', label: 'Networking', count: certificates.filter(c => c.category === 'networking').length },
        { id: 'linux', label: 'Linux/Systems', count: certificates.filter(c => c.category === 'linux').length },
    ];

    const filteredCertificates = certificates
        .filter(cert => filter === 'all' || cert.category === filter)
        .sort((a, b) => {
            if (sortBy === 'recent') {
                return new Date(b.issueDate) - new Date(a.issueDate);
            }
            if (sortBy === 'priority') {
                return a.priority - b.priority;
            }
            return 0;
        });

    const displayCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 6);

    const openCertificateModal = (cert) => {
        setSelectedCertificate(cert);
        setIsLoading(true);
        document.body.style.overflow = 'hidden';
    };

    const closeCertificateModal = () => {
        setSelectedCertificate(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="certificates" className="relative py-20 bg-transparent overflow-hidden">
            {/* Content is now layered over the unified background system */}

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                Certificates & Credentials
                            </h2>
                            <p className={`mt-2 text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                Curated, verifiable credentials relevant to my work
                            </p>
                        </div>
                    </div>

                    {/* Filter & Sort Controls */}
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Filter size={16} className={isDark ? 'text-white/60' : 'text-black/60'} />
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setFilter(cat.id)}
                                        className={`px-3 py-1.5 text-sm rounded-full transition-all ${filter === cat.id
                                            ? isDark
                                                ? 'bg-white text-black'
                                                : 'bg-black text-white'
                                            : isDark
                                                ? 'text-white/60 hover:text-white hover:bg-white/10'
                                                : 'text-black/60 hover:text-black hover:bg-black/10'
                                            }`}
                                    >
                                        {cat.label} ({cat.count})
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                            <SortAsc size={16} className={isDark ? 'text-white/60' : 'text-black/60'} />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className={`text-sm bg-transparent border-none focus:ring-0 ${isDark ? 'text-white' : 'text-black'}`}
                            >
                                <option value="recent">Most Recent</option>
                                <option value="priority">Most Relevant</option>
                            </select>
                        </div>
                    </div>
                </motion.div>

                {/* Compact Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {displayCertificates.map((cert, index) => (
                        <motion.article
                            key={cert.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -2 }}
                            className="group"
                        >
                            <div className={`relative h-full rounded-xl border p-4 transition-all duration-300 ${isDark
                                ? 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10'
                                : 'bg-black/5 border-black/10 hover:border-black/20 hover:bg-black/10'
                                }`}>
                                {/* Compact Header */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-1.5 rounded ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                                            <Award className={`w-4 h-4 ${isDark ? 'text-white/80' : 'text-black/80'}`} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1">
                                                <CheckCircle className="w-3 h-3 text-green-500" />
                                                <span className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                                                    Verified
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => openCertificateModal(cert)}
                                        className={`opacity-0 group-hover:opacity-100 p-1 rounded ${isDark ? 'hover:bg-white/20' : 'hover:bg-black/20'}`}
                                    >
                                        <Eye className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                                    </button>
                                </div>

                                {/* Main Content - Ultra Compact */}
                                <div className="space-y-2">
                                    <h3 className={`font-bold text-sm line-clamp-1 ${isDark ? 'text-white' : 'text-black'}`}>
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                            {cert.issuer}
                                        </span>
                                        <span className={`text-xs ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                                            {cert.issueDate}
                                            {cert.validUntil && ` • Valid ${cert.validUntil}`}
                                        </span>
                                    </div>
                                    <p className={`text-xs line-clamp-2 ${isDark ? 'text-white/50' : 'text-black/50'}`}>
                                        {cert.description}
                                    </p>
                                </div>

                                {/* Tags - Minimal */}
                                <div className="mt-3 flex flex-wrap gap-1">
                                    {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-1.5 py-0.5 text-[10px] rounded ${isDark
                                                ? 'bg-white/5 text-white/70'
                                                : 'bg-black/5 text-black/70'}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills.length > 2 && (
                                        <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                            +{cert.skills.length - 2}
                                        </span>
                                    )}
                                </div>

                                {/* Bottom Line */}
                                <div className={`mt-3 pt-3 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-[10px] ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                            ID: {cert.credentialId}
                                        </span>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => openCertificateModal(cert)}
                                            className={`text-xs px-2 py-1 rounded ${isDark
                                                ? 'text-white/60 hover:text-white hover:bg-white/10'
                                                : 'text-black/60 hover:text-black hover:bg-black/10'}`}
                                        >
                                            View
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Show All Toggle */}
                {filteredCertificates.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm ${isDark
                                ? 'bg-white/10 hover:bg-white/20 text-white'
                                : 'bg-black/10 hover:bg-black/20 text-black'}`}
                        >
                            {showAll ? 'Show Less' : `Show All ${filteredCertificates.length} Certificates`}
                            <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
                        </button>
                    </motion.div>
                )}

                {/* ATS-Optimized Text List (Hidden by default, shown when printing) */}
                <div className="hidden print:block mt-12">
                    <h3 className="font-bold text-lg mb-4">Certificates List (ATS Optimized)</h3>
                    <div className="space-y-2">
                        {certificates.map((cert, index) => (
                            <div key={cert.id} className="text-sm">
                                <span className="font-medium">{cert.title}</span>
                                {' • '}
                                <span>{cert.issuer}</span>
                                {' • '}
                                <span>{cert.issueDate}</span>
                                {cert.validUntil && ` • Valid until ${cert.validUntil}`}
                                {index < certificates.length - 1 && ','}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Simplified Modal */}
            <AnimatePresence>
                {selectedCertificate && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className={`relative w-full max-w-2xl rounded-xl ${isDark ? 'bg-black' : 'bg-white'} p-6`}
                        >
                            {/* Modal Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award className={`w-5 h-5 ${isDark ? 'text-white' : 'text-black'}`} />
                                        <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                                            {selectedCertificate.title}
                                        </h3>
                                    </div>
                                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                        {selectedCertificate.issuer} • Issued {selectedCertificate.issueDate}
                                        {selectedCertificate.validUntil && ` • Valid until ${selectedCertificate.validUntil}`}
                                    </div>
                                </div>
                                <button
                                    onClick={closeCertificateModal}
                                    className={`p-2 rounded ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                                >
                                    <span className={`text-xl ${isDark ? 'text-white' : 'text-black'}`}>×</span>
                                </button>
                            </div>

                            {/* Certificate Preview */}
                            <div className="mb-6 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 border border-white/10 dark:border-white/10 aspect-video relative">
                                <AnimatePresence>
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className={`absolute inset-0 z-10 flex flex-col items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
                                        >
                                            <div className="relative">
                                                {/* Outer rotating ring */}
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                    className={`w-16 h-16 rounded-full border-2 border-dashed ${isDark ? 'border-white/20' : 'border-black/20'}`}
                                                />

                                                {/* Inner rotating ring (reverse) */}
                                                <motion.div
                                                    animate={{ rotate: -360 }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                                    className={`absolute inset-0 w-16 h-16 rounded-full border-2 border-dotted ${isDark ? 'border-white/20' : 'border-black/20'}`}
                                                />

                                                {/* Center Icon */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <FileText className={`w-6 h-6 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                                                </div>
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="mt-4 text-center"
                                            >
                                                <p className={`text-sm font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                                                    Loading Preview
                                                </p>
                                                <p className={`text-xs mt-1 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                                    Retrieving document...
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <iframe
                                    src={selectedCertificate.downloadUrl.replace('/view?usp=sharing', '/preview')}
                                    className="w-full h-full"
                                    title="Certificate Preview"
                                    onLoad={() => setIsLoading(false)}
                                ></iframe>
                            </div>

                            {/* Key Details */}
                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className={`font-semibold mb-2 text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                                        Description
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                        {selectedCertificate.description}
                                    </p>
                                </div>
                                <div>
                                    <h4 className={`font-semibold mb-2 text-sm ${isDark ? 'text-white/80' : 'text-black/80'}`}>
                                        Skills Validated
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedCertificate.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className={`px-2 py-1 text-xs rounded ${isDark
                                                    ? 'bg-white/10 text-white/80'
                                                    : 'bg-black/10 text-black/80'}`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between pt-6 border-t border-white/10 dark:border-white/10">
                                <div className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Verified Digital Credential</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href={selectedCertificate.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg text-sm ${isDark
                                            ? 'bg-white text-black hover:bg-white/90'
                                            : 'bg-black text-white hover:bg-black/90'}`}
                                    >
                                        Download PDF
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
