import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider';
import { useEffect, useState } from 'react';

const BackgroundSystem = ({ className = "" }) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === 'dark';

    return (
        <div className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${className}`}>
            {/* Base Layer: Deep Monochrome Radial Gradient Backdrop */}
            <div
                className="absolute inset-0"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(169,169,169,0.08) 30%, rgba(64,64,64,0.05) 60%, rgba(32,32,32,0.8) 80%, rgba(0,0,0,0.9) 100%)'
                        : 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, rgba(220,220,220,0.1) 30%, rgba(169,169,169,0.05) 60%, rgba(105,105,105,0.3) 80%, rgba(64,64,64,0.6) 100%)',
                }}
            />

            {/* Layer 1: Soft Atmospheric Radial Gradient Base */}

            {/* Layer 2: Monochrome Spectrum Flow - Diagonal Waves */}
            <motion.div
                className="absolute inset-0 opacity-20 dark:opacity-15"
                style={{
                    background: isDark
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(200,200,200,0.05) 25%, rgba(150,150,150,0.03) 50%, rgba(100,100,100,0.02) 75%, rgba(50,50,50,0.01) 100%)'
                        : 'linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(50,50,50,0.04) 25%, rgba(100,100,100,0.02) 50%, rgba(150,150,150,0.015) 75%, rgba(200,200,200,0.005) 100%)',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Layer 3: Faint Geometric Grid Overlay */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full opacity-[0.04] dark:opacity-[0.035]"
                    style={{
                        backgroundImage: `
              linear-gradient(90deg, currentColor 1px, transparent 1px),
              linear-gradient(180deg, currentColor 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px',
                        maskImage: 'radial-gradient(circle at 40% 30%, black 30%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(circle at 40% 30%, black 30%, transparent 80%)',
                    }}
                />
            </div>

            {/* Layer 4: Soft Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Layer 4.5: Additional Soft Noise Texture for Organic Warmth */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.03] mix-blend-soft-light"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='organicNoiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23organicNoiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Layer 5: Blurred Gradient Clouds */}
            <div className="absolute inset-0">
                {/* Cloud 1 - Top Left */}
                <motion.div
                    className="absolute w-96 h-96 opacity-[0.08] dark:opacity-[0.06] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.03) 40%, transparent 70%)',
                        top: '10%',
                        left: '10%',
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.08, 0.12, 0.08],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Cloud 2 - Bottom Right */}
                <motion.div
                    className="absolute w-80 h-80 opacity-[0.06] dark:opacity-[0.04] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 40%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 40%, transparent 70%)',
                        bottom: '15%',
                        right: '15%',
                    }}
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.06, 0.09, 0.06],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Cloud 3 - Center */}
                <motion.div
                    className="absolute w-64 h-64 opacity-[0.05] dark:opacity-[0.03] blur-2xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.015) 40%, transparent 70%)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />

                {/* Additional Large Blurred Shapes - Top Right Oval */}
                <motion.div
                    className="absolute w-[500px] h-[300px] opacity-[0.04] dark:opacity-[0.03] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(ellipse 60% 40%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, transparent 80%)'
                            : 'radial-gradient(ellipse 60% 40%, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 50%, transparent 80%)',
                        top: '5%',
                        right: '5%',
                        transform: 'rotate(-15deg)',
                    }}
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.04, 0.06, 0.04],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Bottom Left Amorphous Blob */}
                <motion.div
                    className="absolute w-[450px] h-[350px] opacity-[0.05] dark:opacity-[0.035] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(ellipse 70% 50%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.035) 45%, transparent 75%)'
                            : 'radial-gradient(ellipse 70% 50%, rgba(0,0,0,0.035) 0%, rgba(0,0,0,0.018) 45%, transparent 75%)',
                        bottom: '8%',
                        left: '8%',
                        transform: 'rotate(25deg) scaleY(0.8)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                    }}
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.05, 0.07, 0.05],
                        rotate: [25, 35, 25],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 3
                    }}
                />

                {/* Center Left Soft Arc */}
                <motion.div
                    className="absolute w-[400px] h-[250px] opacity-[0.03] dark:opacity-[0.025] blur-2xl"
                    style={{
                        background: isDark
                            ? 'conic-gradient(from 180deg at 50% 100%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 50%, transparent 100%)'
                            : 'conic-gradient(from 180deg at 50% 100%, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.015) 50%, transparent 100%)',
                        top: '35%',
                        left: '15%',
                        transform: 'rotate(-20deg)',
                        clipPath: 'ellipse(50% 30% at 50% 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5
                    }}
                />

                {/* Top Center Large Circle */}
                <motion.div
                    className="absolute w-[600px] h-[600px] opacity-[0.02] dark:opacity-[0.015] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 35%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 35%, transparent 70%)',
                        top: '-10%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.02, 0.03, 0.02],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 7
                    }}
                />

                {/* Right Center Amorphous Shape */}
                <motion.div
                    className="absolute w-[380px] h-[420px] opacity-[0.04] dark:opacity-[0.03] blur-3xl"
                    style={{
                        background: isDark
                            ? 'radial-gradient(ellipse 50% 70%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.025) 55%, transparent 85%)'
                            : 'radial-gradient(ellipse 50% 70%, rgba(0,0,0,0.025) 0%, rgba(0,0,0,0.013) 55%, transparent 85%)',
                        top: '60%',
                        right: '10%',
                        transform: 'rotate(45deg)',
                        borderRadius: '40% 60% 70% 30% / 40% 40% 60% 60%',
                    }}
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.04, 0.06, 0.04],
                        rotate: [45, 55, 45],
                    }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 9
                    }}
                />
            </div>

            {/* Layer 6: Gentle Vignette Shading */}
            <div
                className="absolute inset-0 opacity-30 dark:opacity-20"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0.2) 100%)'
                        : 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.05) 70%, rgba(0,0,0,0.1) 100%)',
                }}
            />

            {/* Layer 6.5: Low-Intensity Vignette Effect */}
            <div
                className="absolute inset-0 opacity-[0.15] dark:opacity-[0.12]"
                style={{
                    background: isDark
                        ? 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.15) 100%)'
                        : 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.04) 75%, rgba(0,0,0,0.08) 100%)',
                }}
            />

            {/* Layer 7: Optional Streak Effects */}
            <div className="absolute inset-0">
                {/* Subtle diagonal streaks */}
                <motion.div
                    className="absolute w-full h-px opacity-[0.02] dark:opacity-[0.015]"
                    style={{
                        background: isDark
                            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                            : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)',
                        top: '30%',
                        transform: 'rotate(-15deg)',
                        transformOrigin: 'center',
                    }}
                    animate={{
                        x: ['-100%', '100%'],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                />

                <motion.div
                    className="absolute w-full h-px opacity-[0.015] dark:opacity-[0.01]"
                    style={{
                        background: isDark
                            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                            : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)',
                        top: '70%',
                        transform: 'rotate(10deg)',
                        transformOrigin: 'center',
                    }}
                    animate={{
                        x: ['100%', '-100%'],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 3
                    }}
                />
            </div>

            {/* Layer 7.5: Hybrid Background Structure */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.025]">
                {/* Radial gradient foundation */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: isDark
                            ? 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(200,200,200,0.02) 40%, rgba(100,100,100,0.01) 70%, transparent 100%)'
                            : 'radial-gradient(circle at center, rgba(0,0,0,0.03) 0%, rgba(100,100,100,0.015) 40%, rgba(200,200,200,0.005) 70%, transparent 100%)',
                    }}
                />

                {/* Fine geometric grid overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                  linear-gradient(90deg, currentColor 1px, transparent 1px),
                  linear-gradient(180deg, currentColor 1px, transparent 1px)
                `,
                        backgroundSize: '40px 40px',
                        opacity: 0.3,
                    }}
                />

                {/* Subtle diagonal light streaks */}
                <div className="absolute inset-0">
                    <div
                        className="absolute w-full h-px opacity-20"
                        style={{
                            background: isDark
                                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.25), transparent)',
                            top: '20%',
                            transform: 'rotate(-25deg)',
                            transformOrigin: 'center',
                        }}
                    />
                    <div
                        className="absolute w-full h-px opacity-15"
                        style={{
                            background: isDark
                                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.2), transparent)',
                            top: '50%',
                            transform: 'rotate(15deg)',
                            transformOrigin: 'center',
                        }}
                    />
                    <div
                        className="absolute w-full h-px opacity-10"
                        style={{
                            background: isDark
                                ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                                : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.15), transparent)',
                            top: '80%',
                            transform: 'rotate(-5deg)',
                            transformOrigin: 'center',
                        }}
                    />
                </div>
            </div>

            {/* Layer 8: Micro-animations - Parallax Grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.008] dark:opacity-[0.006]"
                style={{
                    backgroundImage: `
            linear-gradient(90deg, currentColor 1px, transparent 1px),
            linear-gradient(180deg, currentColor 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
                animate={{
                    backgroundPosition: ['0px 0px', '80px 80px'],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Layer 8.5: Pulsing Radial Glow */}
            <motion.div
                className="absolute inset-0 opacity-[0.02] dark:opacity-[0.015] pointer-events-none"
                style={{
                    background: isDark
                        ? 'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.02) 50%, transparent 70%)'
                        : 'radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.025) 30%, rgba(0,0,0,0.015) 50%, transparent 70%)',
                }}
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.02, 0.035, 0.02],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Layer 8.6: Tiny Sparkles on Hover */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Sparkle 1 */}
                <motion.div
                    className="absolute w-1 h-1 opacity-0 dark:opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                    style={{
                        background: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
                        borderRadius: '50%',
                        boxShadow: isDark
                            ? '0 0 4px rgba(255,255,255,0.6), 0 0 8px rgba(255,255,255,0.4)'
                            : '0 0 4px rgba(0,0,0,0.4), 0 0 8px rgba(0,0,0,0.2)',
                        top: '25%',
                        left: '75%',
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0,
                        ease: "easeInOut",
                    }}
                />

                {/* Sparkle 2 */}
                <motion.div
                    className="absolute w-1 h-1 opacity-0 dark:opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                    style={{
                        background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)',
                        borderRadius: '50%',
                        boxShadow: isDark
                            ? '0 0 3px rgba(255,255,255,0.5), 0 0 6px rgba(255,255,255,0.3)'
                            : '0 0 3px rgba(0,0,0,0.3), 0 0 6px rgba(0,0,0,0.15)',
                        top: '60%',
                        left: '20%',
                    }}
                    animate={{
                        scale: [0, 1.2, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: 1.5,
                        ease: "easeInOut",
                    }}
                />

                {/* Sparkle 3 */}
                <motion.div
                    className="absolute w-1 h-1 opacity-0 dark:opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                        background: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)',
                        borderRadius: '50%',
                        boxShadow: isDark
                            ? '0 0 2px rgba(255,255,255,0.4), 0 0 4px rgba(255,255,255,0.2)'
                            : '0 0 2px rgba(0,0,0,0.2), 0 0 4px rgba(0,0,0,0.1)',
                        top: '80%',
                        left: '85%',
                    }}
                    animate={{
                        scale: [0, 0.8, 0],
                        opacity: [0, 0.4, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: 3,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Layer 8.7: Scroll-Triggered Fade Effects */}
            <motion.div
                className="absolute inset-0 opacity-0 dark:opacity-0 pointer-events-none"
                style={{
                    background: isDark
                        ? 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.02) 100%)'
                        : 'linear-gradient(180deg, rgba(0,0,0,0.015) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.015) 100%)',
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ amount: 0.1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                }}
            />

            {/* Performance optimization: Use will-change for animated elements */}
            <style jsx>{`
        .background-layer {
          will-change: transform, opacity;
        }
      `}</style>
        </div>
    );
};

export default BackgroundSystem;
