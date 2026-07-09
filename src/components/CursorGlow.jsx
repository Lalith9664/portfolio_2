import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring with slight lag for the outer neomorphic ring (increased responsiveness)
  const ringX = useSpring(mouseX, { damping: 22, stiffness: 450, mass: 0.25 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 450, mass: 0.25 });
  
  // High-stiffness spring for the center active dot (near-instant follow)
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 850, mass: 0.15 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 850, mass: 0.15 });

  // Sluggish drifting spring for the ambient spotlight background glow (smooth drift)
  const ambientX = useSpring(mouseX, { damping: 36, stiffness: 220, mass: 0.5 });
  const ambientY = useSpring(mouseY, { damping: 36, stiffness: 220, mass: 0.5 });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const [trail, setTrail] = useState([]);
  const [ripples, setRipples] = useState([]);
  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const dist = Math.hypot(e.clientX - lastX.current, e.clientY - lastY.current);
      if (dist > 18) {
        lastX.current = e.clientX;
        lastY.current = e.clientY;
        
        const newParticle = {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2.5,
          color: Math.random() > 0.5 ? '#14b8a6' : '#10b981',
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5 - 0.4,
        };
        
        setTrail((prev) => [...prev.slice(-8), newParticle]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      
      const newRipple = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-2), newRipple]);
    };

    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Dynamic mouse listeners on interactive items
    const handleMouseOver = (e) => {
      if (!e.target) return;
      const target = e.target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovered(!!target);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sluggish Drifting Ambient Spotlight Glow */}
      <motion.div
        style={{
          x: ambientX,
          y: ambientY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="pointer-events-none fixed top-0 left-0 z-0 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-teal-500/5 to-emerald-500/5 blur-[120px] mix-blend-screen select-none opacity-80"
      />

      {/* Particle Trail */}
      {trail.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            x: p.x, 
            y: p.y, 
            scale: 1, 
            opacity: 0.8,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{ 
            x: p.x + p.speedX * 30, 
            y: p.y + p.speedY * 30, 
            scale: 0.1, 
            opacity: 0 
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}

      {/* Click Ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.div
            key={r.id}
            initial={{ 
              x: r.x, 
              y: r.y, 
              scale: 0.2, 
              opacity: 0.8,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{ 
              scale: 2.2, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((item) => item.id !== r.id));
            }}
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border-2 border-teal-400"
            style={{
              boxShadow: '0 0 12px rgba(20, 184, 166, 0.4)',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Tactile Neomorphic Outer Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.85 : isHovered ? 1.55 : 1,
          borderWidth: isHovered ? '2px' : '1px',
          borderColor: isHovered ? 'rgba(20, 184, 166, 0.45)' : 'rgba(20, 184, 166, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full bg-white/5 backdrop-blur-[1px] shadow-[3px_3px_6px_#03050a,_-3px_-3px_6px_rgba(255,255,255,0.02)] neomorphic-cursor-ring"
      />

      {/* Center Target Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0.4 : 1,
          opacity: isHovered ? 0.15 : 1,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20, 184, 166, 0.75)]"
      />
    </>
  );
}
