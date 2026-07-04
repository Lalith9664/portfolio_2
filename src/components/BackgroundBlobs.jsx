import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export default function BackgroundBlobs() {
  const mouse = useMousePosition();
  const [hasMoved, setHasMoved] = useState(false);

  // Set hasMoved to true once the mouse starts moving
  useEffect(() => {
    if (mouse.x !== 0 || mouse.y !== 0) {
      setHasMoved(true);
    }
  }, [mouse.x, mouse.y]);

  const spotlightStyle = {
    maskImage: `radial-gradient(350px circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 100%)`,
    WebkitMaskImage: `radial-gradient(350px circle at ${mouse.x}px ${mouse.y}px, black 20%, transparent 100%)`,
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      
      {/* 1. Base Grid Layer (Subtle, always visible) */}
      <svg className="absolute inset-0 h-full w-full stroke-[var(--bg-grid-color)] opacity-45" aria-hidden="true">
        <defs>
          <pattern id="base-grid" width="48" height="48" patternUnits="userSpaceOnUse" x="-1" y="-1">
            <path d="M.5 48V.5H48" fill="none" strokeWidth="0.75" />
            <circle cx="0.5" cy="0.5" r="1.2" fill="var(--bg-grid-dots)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#base-grid)" />
      </svg>

      {/* 2. Interactive Spotlight Grid Layer (Illuminates under mouse cursor) */}
      {hasMoved && (
        <div className="absolute inset-0 transition-opacity duration-500" style={spotlightStyle}>
          <svg className="absolute inset-0 h-full w-full stroke-[var(--bg-grid-color)] opacity-100" aria-hidden="true">
            <defs>
              <pattern id="spotlight-grid" width="48" height="48" patternUnits="userSpaceOnUse" x="-1" y="-1">
                <path d="M.5 48V.5H48" fill="none" strokeWidth="1.2" />
                <circle cx="0.5" cy="0.5" r="1.8" fill="var(--bg-grid-dots)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#spotlight-grid)" />
          </svg>
        </div>
      )}

      {/* 3. Floating Aurora Blobs (Slow, organic movement) */}
      
      {/* Blob 1: Indigo-leaning */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -90, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[5%] left-[5%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-[var(--blob-one)] blur-[120px]"
      />
      
      {/* Blob 2: Purple-leaning */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -80, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] right-[3%] w-[400px] md:w-[650px] h-[400px] md:h-[650px] rounded-full bg-[var(--blob-two)] blur-[130px]"
      />
      
      {/* Blob 3: Teal-leaning */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 50, 70, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[8%] left-[8%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[var(--blob-three)] blur-[110px]"
      />

      {/* Blob 4: Cyan-leaning */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, -50, 60, 0],
          scale: [0.9, 1.1, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[25%] right-[12%] w-[350px] md:w-[550px] h-[350px] md:h-[550px] rounded-full bg-[var(--blob-four)] blur-[125px]"
      />

      {/* 4. Elegant Rotating Blueprint rings */}
      
      {/* Top Right Blueprint Ring */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[12%] -right-[10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] text-[var(--blueprint-color)] stroke-current opacity-60"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" strokeWidth="0.5" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="150" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="145" strokeWidth="0.25" strokeDasharray="40 10 5 10" />
        <circle cx="200" cy="200" r="100" strokeWidth="0.8" strokeDasharray="1 6" />
        <line x1="200" y1="10" x2="200" y2="390" strokeWidth="0.2" strokeDasharray="5 5" />
        <line x1="10" y1="200" x2="390" y2="200" strokeWidth="0.2" strokeDasharray="5 5" />
      </motion.svg>

      {/* Bottom Left Blueprint Ring */}
      <motion.svg
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[15%] -left-[10%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] text-[var(--blueprint-color)] stroke-current opacity-50"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="170" strokeWidth="0.4" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="130" strokeWidth="0.6" strokeDasharray="30 20" />
        <circle cx="200" cy="200" r="95" strokeWidth="0.2" />
        <circle cx="200" cy="200" r="60" strokeWidth="0.5" strokeDasharray="1 4" />
      </motion.svg>

    </div>
  );
}
