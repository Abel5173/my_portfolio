import { motion } from 'framer-motion';
import { useMemo } from 'react';

const AnimatedBackground = () => {
  // Memoize particle positions to prevent recalculation on re-renders
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    })), []
  );

  // Memoize line positions
  const lines = useMemo(() => 
    Array.from({ length: 5 }, (_, i) => ({
      id: i,
      width: `${Math.random() * 200 + 100}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotate: Math.random() * 360,
      duration: 10 + Math.random() * 10,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden will-change-transform">
      {/* Animated Grid - Using CSS animation for better performance */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 animate-pulse-slow" />
      
      {/* Floating Orbs - Using transform instead of x/y for better performance */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          translateX: [0, 50, 0],
          translateY: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
          translateX: [0, -50, 0],
          translateY: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Animated Particles - Using transform instead of x/y */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-accent-blue/30 rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            willChange: 'transform, opacity'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
            translateX: [0, particle.x, 0],
            translateY: [0, particle.y, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Central Gradient - Using transform for rotation */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Floating Lines - Using transform instead of x/y */}
      {lines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
          style={{
            width: line.width,
            left: line.left,
            top: line.top,
            transform: `rotate(${line.rotate}deg)`,
            willChange: 'transform, opacity'
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
            translateX: [0, line.x, 0],
            translateY: [0, line.y, 0],
          }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground; 