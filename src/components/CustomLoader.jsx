import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingSteps = [
  { max: 15, text: "Establishing secure port connection..." },
  { max: 32, text: "Initializing kernel subsystems..." },
  { max: 50, text: "Loading interactive monogram modules..." },
  { max: 68, text: "Parsing client asset metadata..." },
  { max: 85, text: "Optimizing layout rendering engine..." },
  { max: 98, text: "Securing dynamic paths..." },
  { max: 100, text: "Welcome to the experience." }
];

export default function CustomLoader({ isFinished }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (isFinished) {
      setPercent(100);
      return;
    }
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 98;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isFinished]);

  // Determine current status log message based on percentage
  const currentText = useMemo(() => {
    for (const step of loadingSteps) {
      if (percent <= step.max) return step.text;
    }
    return loadingSteps[loadingSteps.length - 1].text;
  }, [percent]);

  // Calculate orbiting particle coordinates on concentric spinner
  // radius = 50, cx = 60, cy = 60. Angle starts at -pi/2 (top of circle)
  const orbitCoords = useMemo(() => {
    const angle = (percent / 100) * 2 * Math.PI - Math.PI / 2;
    return {
      x: 60 + 50 * Math.cos(angle),
      y: 60 + 50 * Math.sin(angle),
    };
  }, [percent]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.1 } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b15] select-none overflow-hidden"
        >
          {/* Futuristic Background Grid */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px), 
                               linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Drifting Laser Scan Line */}
          <motion.div
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent pointer-events-none"
            animate={{ y: ["-10vh", "110vh"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Background Ambient Blobs */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse-glow" />

          {/* Central Loader Widget */}
          <motion.div 
            exit={{ 
              opacity: 0,
              y: -80,
              transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
            }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Concentric rings & SVG monogram container */}
            <div className="relative flex items-center justify-center w-36 h-36 rounded-full bg-[#0c1322]/80 backdrop-blur-md border border-white/5 shadow-2xl p-4">
              <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer track ring */}
                <circle cx="60" cy="60" r="50" stroke="rgba(255,255,255,0.02)" strokeWidth="3" />
                
                {/* Outer animated gradient ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="url(#loaderGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{ 
                    pathLength: percent / 100, 
                    rotate: -90, 
                    transformOrigin: "60px 60px" 
                  }}
                />

                {/* Orbiting glowing particle */}
                {percent > 0 && (
                  <circle
                    cx={orbitCoords.x}
                    cy={orbitCoords.y}
                    r="4.5"
                    fill="#10b981"
                    filter="url(#glowFilter)"
                  />
                )}

                {/* Inner spinning dashed ring */}
                <motion.circle
                  cx="60"
                  cy="60"
                  r="40"
                  stroke="rgba(20, 184, 166, 0.15)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  style={{ transformOrigin: "60px 60px" }}
                />

                {/* SVG Monogram L */}
                <motion.path
                  d="M 42 42 V 78 H 56"
                  stroke="url(#textGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: Math.min(1, percent / 50) }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* SVG Monogram K (Vertical component) */}
                <motion.path
                  d="M 68 42 V 78"
                  stroke="url(#textGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: percent > 50 ? Math.min(1, (percent - 50) / 25) : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* SVG Monogram K (Diagonal components) */}
                <motion.path
                  d="M 80 42 L 68 60 L 80 78"
                  stroke="url(#textGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: percent > 75 ? Math.min(1, (percent - 75) / 25) : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                <defs>
                  <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                  <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Dynamic Status / Log Info */}
            <div className="mt-10 flex flex-col items-center">
              <div className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase select-none">
                System Initializing
              </div>

              {/* Stateful Cycling Log Message */}
              <div className="h-6 mt-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentText}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-xs font-mono tracking-wider text-teal-400/80"
                  >
                    &gt; {currentText}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Glowing Percentage counter */}
              <div className="mt-4 text-3xl font-black font-display tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-cyan-200 drop-shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                {percent}%
              </div>

              {/* Glassmorphic Shimmering Progress Bar */}
              <div className="relative w-64 h-[6px] mt-6 rounded-full bg-slate-950/50 backdrop-blur-sm border border-white/5 overflow-hidden shadow-inner">
                {/* Moving bar */}
                <motion.div
                  className="relative h-full rounded-full bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-400"
                  style={{ width: `${percent}%` }}
                  transition={{ ease: "easeOut" }}
                >
                  {/* Internal Moving Shimmer */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_30%,rgba(255,255,255,0.3)_50%,rgba(255,255,255,0)_70%)] bg-[length:200%_100%] animate-shimmer" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
