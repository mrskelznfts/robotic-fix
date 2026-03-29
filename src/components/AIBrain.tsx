import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function AIBrain() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/10 via-transparent to-transparent opacity-30" />
      
      {/* The "Brain" Core */}
      <motion.div 
        animate={{ 
          rotateY: mousePos.x, 
          rotateX: -mousePos.y,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateY: { type: "spring", stiffness: 50 },
          rotateX: { type: "spring", stiffness: 50 }
        }}
        className="relative w-64 h-64 md:w-96 md:h-96 preserve-3d"
      >
        {/* Outer Rings */}
        <div className="absolute inset-0 border-2 border-neon-blue/20 rounded-full animate-pulse-neon" />
        <div className="absolute inset-4 border border-toxic-green/20 rounded-full animate-pulse-neon delay-700" />
        <div className="absolute inset-8 border border-deep-purple/20 rounded-full animate-pulse-neon delay-1000" />
        
        {/* Core Sphere */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" />
          <div className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-neon-blue/40 to-deep-purple/40 opacity-50" />
            <div className="absolute w-full h-1 bg-white/20 animate-scanline" />
            
            {/* Inner "Eye" or Core */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-4 h-4 md:w-6 md:h-6 bg-white rounded-full shadow-[0_0_20px_white]"
            />
          </div>
        </div>

        {/* Floating Particles/Nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              x: Math.cos(i * 30) * 120 + (Math.random() * 10 - 5),
              y: Math.sin(i * 30) * 120 + (Math.random() * 10 - 5),
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: i * 0.2
            }}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-toxic-green rounded-full shadow-[0_0_10px_#39ff14]"
          />
        ))}
      </motion.div>

      {/* Terminal Overlays */}
      <div className="absolute top-10 left-10 font-mono text-[10px] text-neon-blue/40 hidden md:block">
        <p>SYSTEM_CORE_ACTIVE: TRUE</p>
        <p>NEURAL_LOAD: 88.4%</p>
        <p>MEME_DENSITY: CRITICAL</p>
        <p>HUMAN_INTERFERENCE: MINIMAL</p>
      </div>
      
      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-toxic-green/40 hidden md:block text-right">
        <p>ENCRYPTION: QUANTUM_CHAOS</p>
        <p>UPTIME: 420:69:00</p>
        <p>PROTOCOL: $ROBOTIC_v1.0</p>
      </div>
    </div>
  );
}
