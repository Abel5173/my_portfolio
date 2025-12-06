import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowUpRight, Eye, Heart, Share2, TrendingUp, Sparkles, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useParams, useNavigate } from 'react-router-dom';

const articles = [
    {
        id: 1,
        title: "Building Scalable AI Systems: Lessons from Production",
        excerpt: "Exploring the architectural patterns and best practices for deploying large-scale AI applications in enterprise environments, with real-world examples from fraud detection and recommendation systems.",
        content: "In this comprehensive guide, we dive deep into the challenges of scaling AI systems...",
        tags: ["AI", "System Design", "Production", "Scalability"],
        readTime: "8 min read",
        publishedDate: "2024-12-15",
        views: 1247,
        likes: 89,
        featured: true,
        category: "Technical Deep Dive"
    },
    {
        id: 2,
        title: "The Future of Machine Learning Engineering",
        excerpt: "How ML engineering is evolving beyond model training to encompass full lifecycle management, MLOps, and responsible AI deployment strategies.",
        content: "Machine learning engineering has matured significantly...",
        tags: ["MLOps", "ML Engineering", "Future Tech", "AI Ethics"],
        readTime: "6 min read",
        publishedDate: "2024-12-08",
        views: 2156,
        likes: 156,
        featured: false,
        category: "Industry Insights"
    },
    {
        id: 3,
        title: "Optimizing RAG Systems for Enterprise Knowledge Management",
        excerpt: "Advanced techniques for implementing retrieval-augmented generation systems that can handle complex enterprise knowledge bases with high accuracy and low latency.",
        content: "Retrieval-augmented generation (RAG) has become...",
        tags: ["RAG", "NLP", "Enterprise", "Knowledge Management"],
        readTime: "10 min read",
        publishedDate: "2024-11-28",
        views: 987,
        likes: 67,
        featured: true,
        category: "Technical Deep Dive"
    },
    {
        id: 4,
        title: "From Prototype to Production: AI Model Deployment Strategies",
        excerpt: "A practical guide to transitioning AI models from research environments to production systems, covering containerization, monitoring, and performance optimization.",
        content: "Deploying AI models in production requires careful consideration...",
        tags: ["Deployment", "DevOps", "Monitoring", "Performance"],
        readTime: "7 min read",
        publishedDate: "2024-11-20",
        views: 1834,
        likes: 123,
        featured: false,
        category: "Engineering Practices"
    },
    {
        id: 5,
        title: "Understanding Large Language Model Architectures",
        excerpt: "An in-depth exploration of transformer architectures, attention mechanisms, and the innovations driving modern language models forward.",
        content: "Large language models have revolutionized natural language processing...",
        tags: ["LLMs", "Transformers", "Architecture", "NLP"],
        readTime: "12 min read",
        publishedDate: "2024-11-12",
        views: 3241,
        likes: 234,
        featured: true,
        category: "Technical Deep Dive"
    },
    {
        id: 6,
        title: "The Role of AI in Modern Software Development",
        excerpt: "How artificial intelligence is transforming software development workflows, from code generation to automated testing and deployment optimization.",
        content: "Artificial intelligence is increasingly becoming a core part...",
        tags: ["AI", "Software Development", "Automation", "DevTools"],
        readTime: "5 min read",
        publishedDate: "2024-11-05",
        views: 1456,
        likes: 98,
        featured: false,
        category: "Industry Insights"
    }
];

const categoryColors = {
    "Technical Deep Dive": "from-blue-500/20 to-purple-500/20 border-blue-500/30",
    "Industry Insights": "from-green-500/20 to-teal-500/20 border-green-500/30",
    "Engineering Practices": "from-orange-500/20 to-red-500/20 border-orange-500/30"
};

const Articles = () => {
    const { resolvedTheme } = useTheme();
    const { id } = useParams();
    const navigate = useNavigate();
    const [hoveredArticle, setHoveredArticle] = useState(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const isDark = resolvedTheme === 'dark';

    // Find the current article if viewing individual article
    const currentArticle = id ? articles.find(article => article.id === parseInt(id)) : null;

    // If viewing individual article, show article detail view
    if (currentArticle) {
        return (
            <div className="min-h-screen bg-transparent">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/articles')}
                        className={`mb-8 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-white/70' : 'hover:bg-black/10 text-black/70'}`}
                    >
                        <ArrowLeft size={16} />
                        Back to Articles
                    </motion.button>

                    {/* Article Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full backdrop-blur-xl border ${categoryColors[currentArticle.category]}`}>
                                {currentArticle.category}
                            </span>
                            {currentArticle.featured && (
                                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 backdrop-blur-xl">
                                    <Sparkles className="w-3 h-3 text-yellow-400" />
                                    <span className="text-sm font-medium text-yellow-400">Featured</span>
                                </div>
                            )}
                        </div>

                        <h1 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
                            {currentArticle.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>
                                    {new Date(currentArticle.publishedDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{currentArticle.readTime}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{currentArticle.views.toLocaleString()} views</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{currentArticle.likes} likes</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {currentArticle.tags.map((tag, tagIndex) => (
                                <motion.span
                                    key={tagIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: tagIndex * 0.05 }}
                                    className={`px-3 py-1 text-sm font-medium backdrop-blur-xl border rounded-lg shadow-sm ${isDark
                                        ? 'bg-white/10 border-white/20 text-white/80'
                                        : 'bg-black/10 border-black/20 text-black/80'
                                        }`}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Article Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
                    >
                        <div className={`text-lg leading-relaxed ${isDark ? 'text-white/90' : 'text-black/90'}`}>
                            {currentArticle.content}
                        </div>
                    </motion.div>

                    {/* Article Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10 text-white/70' : 'hover:bg-black/10 text-black/70'}`}
                                >
                                    <Heart className="w-4 h-4" />
                                    Like ({currentArticle.likes})
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                                >
                                    <Share2 className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    const categories = [
        { id: 'all', label: 'All Articles', count: articles.length },
        { id: 'featured', label: 'Featured', count: articles.filter(a => a.featured).length },
        { id: 'technical', label: 'Technical Deep Dive', count: articles.filter(a => a.category === 'Technical Deep Dive').length },
        { id: 'insights', label: 'Industry Insights', count: articles.filter(a => a.category === 'Industry Insights').length },
        { id: 'engineering', label: 'Engineering Practices', count: articles.filter(a => a.category === 'Engineering Practices').length }
    ];

    const filteredArticles = articles.filter(article => {
        if (activeCategory === 'all') return true;
        if (activeCategory === 'featured') return article.featured;
        if (activeCategory === 'technical') return article.category === 'Technical Deep Dive';
        if (activeCategory === 'insights') return article.category === 'Industry Insights';
        if (activeCategory === 'engineering') return article.category === 'Engineering Practices';
        return true;
    });

    return (
        <div className="min-h-screen bg-transparent">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating Elements */}
                    {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-2 h-2 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                            initial={{
                                x: Math.random() * 100 + '%',
                                y: Math.random() * 100 + '%',
                                opacity: 0,
                            }}
                            animate={{
                                x: [null, `-${Math.random() * 30 + 20}%`],
                                y: [null, `${Math.random() * 30 + 20}%`],
                                opacity: [0, 0.3, 0],
                            }}
                            transition={{
                                duration: Math.random() * 15 + 20,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-8">
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card shadow-glass">
                                <BookOpen className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                                    Articles & Insights
                                </h1>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className={`text-xl ${isDark ? 'text-white/80' : 'text-black/70'} max-w-3xl mx-auto leading-relaxed mb-8`}
                        >
                            Exploring the intersection of artificial intelligence, software engineering, and the future of technology.
                            Insights from building production AI systems and scaling complex applications.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex items-center justify-center gap-8"
                        >
                            {[
                                { value: articles.length, label: 'Articles' },
                                { value: '15k+', label: 'Total Views' },
                                { value: '500+', label: 'Readers' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <motion.div
                                        className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-black'}`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className={`text-sm ${isDark ? 'text-white/60' : 'text-black/60'} mt-1`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 border backdrop-blur-xl shadow-sm ${activeCategory === category.id
                                        ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-black/20 dark:shadow-white/20'
                                        : 'bg-white/50 dark:bg-black/30 border-white/40 dark:border-black/30 text-black dark:text-white hover:bg-white/70 dark:hover:bg-black/50 hover:shadow-md'
                                        }`}
                                >
                                    <span className="font-medium">{category.label}</span>
                                    <span className={`px-2 py-1 text-xs rounded-full ${activeCategory === category.id
                                        ? 'bg-white/20 dark:bg-black/20'
                                        : 'bg-white/10 dark:bg-black/10'
                                        }`}>
                                        {category.count}
                                    </span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="relative pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                onHoverStart={() => setHoveredArticle(article.id)}
                                onHoverEnd={() => setHoveredArticle(null)}
                                onClick={() => navigate(`/articles/${article.id}`)}
                                className="group relative cursor-pointer"
                            >
                                {/* Premium Glass Card */}
                                <div className="relative h-full glass-card rounded-2xl p-6 shadow-glass hover:shadow-glass-lg transition-all duration-500 overflow-hidden group">

                                    {/* Animated Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent ${isDark ? 'via-white/5' : 'via-black/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                    {/* Featured Badge */}
                                    {article.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 backdrop-blur-xl">
                                                <Sparkles className="w-3 h-3 text-yellow-400" />
                                                <span className="text-xs font-medium text-yellow-400">Featured</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Category Badge */}
                                    <div className="mb-4">
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-xl border ${categoryColors[article.category]}`}>
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Article Title */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between">
                                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'} group-hover:opacity-90 transition-opacity pr-8 line-clamp-2 leading-tight`}>
                                                {article.title}
                                            </h3>
                                            <motion.div
                                                className="opacity-0 group-hover:opacity-100 flex-shrink-0"
                                                animate={{ rotate: hoveredArticle === article.id ? 45 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ArrowUpRight className={`${isDark ? 'text-white/40' : 'text-black/40'}`} size={20} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Article Excerpt */}
                                    <p className={`mb-6 leading-relaxed line-clamp-3 ${isDark ? 'text-white/70' : 'text-black/65'}`}>
                                        {article.excerpt}
                                    </p>

                                    {/* Article Meta */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1 text-sm">
                                                <Clock className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{article.readTime}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm">
                                                <Calendar className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                                <span className={isDark ? 'text-white/60' : 'text-black/60'}>
                                                    {new Date(article.publishedDate).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Engagement Stats */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1 text-sm">
                                                <Eye className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{article.views.toLocaleString()}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm">
                                                <Heart className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                                <span className={isDark ? 'text-white/70' : 'text-black/70'}>{article.likes}</span>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                                        >
                                            <Share2 className={`w-4 h-4 ${isDark ? 'text-white/60' : 'text-black/50'}`} />
                                        </motion.button>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <motion.span
                                                key={tagIndex}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                                                className={`px-3 py-1 text-xs font-medium backdrop-blur-xl border rounded-lg shadow-sm ${isDark
                                                    ? 'bg-white/10 border-white/20 text-white/90'
                                                    : 'bg-black/15 border-black/30 text-black/90'}`}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                        {article.tags.length > 3 && (
                                            <span className={`px-3 py-1 text-xs font-medium backdrop-blur-xl border rounded-lg shadow-sm ${isDark
                                                ? 'bg-white/5 border-white/10 text-white/60'
                                                : 'bg-black/10 border-black/20 text-black/60'}`}>
                                                +{article.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Read More Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${isDark
                                            ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30'
                                            : 'bg-black/15 hover:bg-black/25 text-black border-black/30 hover:border-black/40'
                                            }`}
                                    >
                                        <span>Read Article</span>
                                        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </motion.button>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Load More / Newsletter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mt-16"
                    >
                        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
                            <TrendingUp className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-white/60' : 'text-black/60'}`} />
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                                Stay Updated
                            </h3>
                            <p className={`mb-6 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
                                Get notified when I publish new articles on AI, software engineering, and technology insights.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`flex-1 px-4 py-3 rounded-lg backdrop-blur-xl border transition-colors ${isDark
                                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white/40'
                                        : 'bg-black/10 border-black/30 text-black placeholder-black/50 focus:border-black/40'
                                        }`}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
