import { motion, AnimatePresence } from 'framer-motion';
import { Award, Download, FileText, CheckCircle, Eye, Filter, SortAsc, ChevronDown, Copy, Check } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../ThemeProvider';

const Certificates = () => {
    const { resolvedTheme } = useTheme();
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('recent');
    const [showAll, setShowAll] = useState(false);
    const [copied, setCopied] = useState(false);
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
            title: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            provider: "AWS Training & Certification",
            issueDate: "2024-05",
            validUntil: "2026-05",
            description: "Architected scalable cloud infrastructure with IaC and container services",
            credentialId: "AWS-ACS-789012",
            skills: ["AWS", "Cloud", "Infrastructure", "Terraform", "ECS"],
            downloadUrl: "#",
            verificationUrl: "https://www.aws.training/verify",
            category: "cloud",
            priority: 1
        },
        {
            id: 2,
            title: "Machine Learning Specialization",
            issuer: "Coursera",
            provider: "Stanford University",
            issueDate: "2023-11",
            description: "Advanced ML algorithms, neural networks, and production deployment",
            credentialId: "CERT-ML-456789",
            skills: ["Python", "TensorFlow", "Neural Networks", "Data Science"],
            downloadUrl: "#",
            verificationUrl: "https://coursera.org/verify",
            category: "ml",
            priority: 1
        },
        {
            id: 3,
            title: "Google Cloud Professional Cloud Architect",
            issuer: "Google Cloud",
            provider: "Google Cloud Certification",
            issueDate: "2024-02",
            validUntil: "2026-02",
            description: "Designed scalable GCP solutions with security and compliance",
            credentialId: "GCP-PCA-123456",
            skills: ["GCP", "Cloud", "Architecture", "Security"],
            downloadUrl: "#",
            verificationUrl: "https://cloud.google.com/certification",
            category: "cloud",
            priority: 1
        },
        {
            id: 4,
            title: "TensorFlow Developer Certificate",
            issuer: "TensorFlow",
            provider: "Google Developer Certification",
            issueDate: "2023-09",
            description: "Building and training ML models with TensorFlow 2.x",
            credentialId: "TF-DEV-789012",
            skills: ["TensorFlow", "Deep Learning", "Python", "Keras"],
            downloadUrl: "#",
            verificationUrl: "https://www.tensorflow.org/certificate",
            category: "ml",
            priority: 2
        },
        {
            id: 5,
            title: "HashiCorp Certified: Terraform Associate",
            issuer: "HashiCorp",
            provider: "HashiCorp Certification",
            issueDate: "2023-12",
            validUntil: "2025-12",
            description: "Infrastructure as Code with Terraform for multi-cloud deployment",
            credentialId: "HC-TF-345678",
            skills: ["Terraform", "IaC", "DevOps", "Automation"],
            downloadUrl: "#",
            verificationUrl: "https://www.hashicorp.com/certification",
            category: "devops",
            priority: 2
        },
        {
            id: 6,
            title: "CompTIA Security+",
            issuer: "CompTIA",
            provider: "CompTIA Certification",
            issueDate: "2023-08",
            validUntil: "2026-08",
            description: "Foundational cybersecurity skills and best practices",
            credentialId: "COMP-SEC-901234",
            skills: ["Security", "Cybersecurity", "Networking", "Risk Management"],
            downloadUrl: "#",
            verificationUrl: "https://www.comptia.org/certifications/security",
            category: "security",
            priority: 2
        },
        {
            id: 7,
            title: "Databricks Lakehouse Fundamentals",
            issuer: "Databricks",
            provider: "Databricks Academy",
            issueDate: "2024-01",
            description: "Data engineering and analytics on Databricks Lakehouse Platform",
            credentialId: "DB-LHF-567890",
            skills: ["Databricks", "Data Engineering", "Spark", "Delta Lake"],
            downloadUrl: "#",
            verificationUrl: "https://academy.databricks.com",
            category: "data",
            priority: 3
        },
        {
            id: 8,
            title: "Kubernetes Fundamentals",
            issuer: "Linux Foundation",
            provider: "Linux Foundation Training",
            issueDate: "2023-10",
            description: "Container orchestration with Kubernetes for production workloads",
            credentialId: "LF-K8S-123789",
            skills: ["Kubernetes", "Containers", "DevOps", "Orchestration"],
            downloadUrl: "#",
            verificationUrl: "https://training.linuxfoundation.org",
            category: "devops",
            priority: 3
        }
    ];

    // Filter and sort logic
    const categories = [
        { id: 'all', label: 'All Certificates', count: certificates.length },
        { id: 'cloud', label: 'Cloud', count: certificates.filter(c => c.category === 'cloud').length },
        { id: 'ml', label: 'ML/AI', count: certificates.filter(c => c.category === 'ml').length },
        { id: 'devops', label: 'DevOps', count: certificates.filter(c => c.category === 'devops').length },
        { id: 'security', label: 'Security', count: certificates.filter(c => c.category === 'security').length },
        { id: 'data', label: 'Data', count: certificates.filter(c => c.category === 'data').length }
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

    // Copy keywords for ATS
    const copyKeywords = () => {
        const keywords = certificates.map(c => `${c.title}, ${c.issuer}`).join(', ');
        navigator.clipboard.writeText(keywords);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Download summary PDF (mock function)
    const downloadSummary = () => {
        // In production, this would generate/request a PDF
        alert('Summary PDF would be generated here');
    };

    const openCertificateModal = (cert) => {
        setSelectedCertificate(cert);
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
                        <div className="flex flex-wrap gap-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={copyKeywords}
                                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${isDark
                                    ? 'bg-white/10 hover:bg-white/20 text-white'
                                    : 'bg-black/10 hover:bg-black/20 text-black'}`}
                            >
                                {copied ? <Check size={14} /> : <Copy size={14} />}
                                {copied ? 'Copied!' : 'Copy Keywords'}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={downloadSummary}
                                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg ${isDark
                                    ? 'bg-white text-black hover:bg-white/90'
                                    : 'bg-black text-white hover:bg-black/90'}`}
                            >
                                <Download size={14} />
                                Download PDF
                            </motion.button>
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
                            <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-white/5 to-black/5 dark:from-white/5 dark:to-black/5 border border-white/10 dark:border-white/10">
                                <div className="text-center py-8">
                                    <FileText className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-white/20' : 'text-black/20'}`} />
                                    <div className={`text-lg font-bold mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                                        {selectedCertificate.title}
                                    </div>
                                    <div className={`text-sm ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                                        Credential ID: {selectedCertificate.credentialId}
                                    </div>
                                </div>
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
                                        href={selectedCertificate.verificationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-4 py-2 rounded-lg text-sm ${isDark
                                            ? 'bg-white/10 hover:bg-white/20 text-white'
                                            : 'bg-black/10 hover:bg-black/20 text-black'}`}
                                    >
                                        Verify Online
                                    </motion.a>
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
