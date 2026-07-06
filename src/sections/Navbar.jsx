import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  ChevronUp, 
  ChevronDown,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../components/ThemeToggle';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// Helper to render icons based on the navigation item name
const getIcon = (name, size = 20) => {
  switch (name.toLowerCase()) {
    case 'home': return <Home size={size} />;
    case 'about': return <User size={size} />;
    case 'skills': return <Cpu size={size} />;
    case 'projects': return <Briefcase size={size} />;
    case 'education': return <GraduationCap size={size} />;
    case 'contact': return <Mail size={size} />;
    default: return <Compass size={size} />;
  }
};

// Calculate rotation angle for dial knob matching each index (6 items)
// Range: -120 degrees to +120 degrees sweep (240 degrees total)
const getAngleForIndex = (index) => {
  return -120 + index * 48;
};

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const consoleRef = useRef(null);

  // Generate tick marks dynamically: a tick line every 8 degrees from -120 to +120 degrees
  const ticks = [];
  const minAngle = -120;
  const maxAngle = 120;
  const step = 8;
  for (let a = minAngle; a <= maxAngle; a += step) {
    const isMain = [-120, -72, -24, 24, 72, 120].some(mainAngle => Math.abs(mainAngle - a) < 2);
    ticks.push({ angle: a, isMain });
  }

  // Scroll Progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside detector to close menu drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (consoleRef.current && !consoleRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // Offset for headers to clear the viewport top
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Convert active section into corresponding index
  const getActiveLink = (section) => {
    if (['education', 'certifications'].includes(section)) {
      return 'education';
    }
    return section;
  };

  const activeLink = getActiveLink(activeSection);
  const activeIndex = NAV_ITEMS.findIndex(item => item.href.substring(1) === activeLink);
  const currentActiveIndex = activeIndex === -1 ? 0 : activeIndex;
  const targetAngle = getAngleForIndex(currentActiveIndex);

  // Knob click handler
  const handleKnobClick = (e) => {
    e.stopPropagation();
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      // Cycle to the next section
      const nextIndex = (currentActiveIndex + 1) % NAV_ITEMS.length;
      const nextItem = NAV_ITEMS[nextIndex];
      scrollToSection(nextItem.href);
    }
  };

  return (
    <div 
      ref={consoleRef}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-center justify-end select-none origin-bottom-right scale-75 sm:scale-90 md:scale-100 transition-all duration-300"
    >
      {/* Vertical Expanded Navigation Tray */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 280, damping: 25 }}
            className={`flex flex-col items-center space-y-4 py-4 px-3 mb-4 rounded-3xl border backdrop-blur-xl shadow-neo-flat transition-all duration-300 w-[72px] lg:w-[80px] ${
              theme === 'light'
                ? 'bg-[#FDFCFA]/95 border-slate-200/50'
                : 'bg-[#0c1322]/90 border-white/5'
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
                setIsExpanded(false);
              }}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-black font-display text-xs tracking-widest transition-all duration-300 ${
                theme === 'light'
                  ? 'bg-[#FDFCFA] shadow-neo-btn text-slate-800 border border-slate-200/50 hover:border-orange-500/50'
                  : 'bg-[#0a0f1b] shadow-neo-btn text-white border border-white/5 hover:border-teal-400/50'
              }`}
            >
              LK
            </a>

            {/* Separator */}
            <div className={`w-8 h-[1px] ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'}`} />

            {/* Navigation links (Vertical Stack) */}
            <div className="flex flex-col items-center space-y-2">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = currentActiveIndex === idx;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="relative flex items-center justify-center p-3 rounded-full transition-all duration-300 group"
                    title={item.name}
                  >
                    {/* Icon element */}
                    <div
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? theme === 'light'
                            ? 'text-orange-500'
                            : 'text-teal-400'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'
                      }`}
                    >
                      {getIcon(item.name, 18)}
                    </div>

                    {/* Active Background Indicator Glow */}
                    {isActive && (
                      <motion.span
                        layoutId="radialActiveNavIndicator"
                        className={`absolute inset-0 rounded-full border ${
                          theme === 'light'
                            ? 'bg-orange-500/10 border-orange-500/25'
                            : 'bg-teal-500/10 border-teal-500/20'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Left-floating Tooltip Label */}
                    <span className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-200 origin-right px-2.5 py-1 text-[10px] font-bold tracking-widest rounded-md font-display pointer-events-none uppercase shadow-md whitespace-nowrap ${
                      theme === 'light'
                        ? 'bg-slate-900 text-[#ffffff]'
                        : 'bg-white text-slate-900'
                    }`}>
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Separator */}
            <div className={`w-8 h-[1px] ${theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'}`} />

            {/* Theme Toggle Button */}
            <div className="py-1">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Console Main Dial Container (Increased Size) */}
      <div 
        className={`relative flex items-center justify-center rounded-full p-4 border transition-all duration-300 shadow-neo-flat w-[114px] h-[114px] ${
          theme === 'light'
            ? 'bg-[#FDFCFA] border-slate-200/50'
            : 'bg-[#0c1322] border-white/5'
        }`}
      >
        {/* Radial Ticks */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {ticks.map((tick) => {
            const isActive = tick.isMain && Math.abs(tick.angle - targetAngle) < 5;
            return (
              <div
                key={tick.angle}
                className={`absolute w-[1.5px] rounded-full transition-all duration-300 ${
                  tick.isMain
                    ? isActive
                      ? theme === 'light'
                        ? 'h-[10px] bg-orange-500 shadow-[0_0_6px_rgba(249,115,22,0.85)]'
                        : 'h-[10px] bg-teal-400 shadow-[0_0_6px_rgba(20,184,166,0.85)]'
                      : 'h-[8px] bg-slate-350 dark:bg-slate-650'
                    : 'h-[5px] bg-slate-200 dark:bg-slate-800/80'
                }`}
                style={{
                  transform: `rotate(${tick.angle}deg) translateY(-49px)`,
                  transformOrigin: 'center center',
                }}
              />
            );
          })}
        </div>

        {/* Scroll Progress Ring SVG */}
        <svg className="absolute w-[114px] h-[114px] transform -rotate-90 pointer-events-none">
          <circle
            cx="57"
            cy="57"
            r="44"
            className={`${
              theme === 'light' ? 'stroke-slate-100' : 'stroke-slate-800/25'
            }`}
            strokeWidth="2.5"
            fill="transparent"
          />
          <motion.circle
            cx="57"
            cy="57"
            r="44"
            className={`${
              theme === 'light' ? 'stroke-orange-500' : 'stroke-teal-450'
            }`}
            strokeWidth="2.5"
            fill="transparent"
            strokeDasharray="276.5"
            animate={{ strokeDashoffset: 276.5 - (276.5 * scrollProgress) / 100 }}
            transition={{ duration: 0.05 }}
          />
        </svg>

        {/* The Neumorphic Knob (Increased Diameter: 80px) */}
        <motion.div
          onClick={handleKnobClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: targetAngle }}
          transition={{ type: 'spring', stiffness: 180, damping: 15 }}
          className={`absolute top-[17px] left-[17px] w-20 h-20 rounded-full cursor-pointer flex items-center justify-center select-none ${
            theme === 'light'
              ? 'bg-[#FDFCFA] shadow-[4px_4px_10px_#e2dfd5,_-4px_-4px_10px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.06),inset_2px_2px_4px_rgba(255,255,255,0.85)]'
              : 'bg-[#0c1322] border border-white/5 shadow-[4px_4px_10px_#03050a,_-4px_-4px_10px_rgba(255,255,255,0.02),inset_-2px_-2px_4px_rgba(0,0,0,0.55),inset_2px_2px_4px_rgba(255,255,255,0.05)]'
          }`}
        >
          {/* Finger Divot Indent */}
          <div 
            className={`absolute top-4 left-4 w-4 h-4 rounded-full ${
              theme === 'light'
                ? 'bg-[#FDFCFA] shadow-[inset_2px_2px_4px_#e2dfd5,_inset_-2px_-2px_4px_#ffffff]'
                : 'bg-[#0a0f1b] shadow-[inset_2px_2px_4px_#03050a,_inset_-2px_-2px_4px_rgba(255,255,255,0.02)]'
            }`}
          />
          
          {/* LED Glowing Indicator */}
          <div 
            className={`absolute top-2 left-1/2 -translate-x-1/2 w-2 h-4 rounded-full ${
              theme === 'light'
                ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]'
                : 'bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.9)]'
            }`}
          />

          {/* Menu Text Inside the Knob (with counter-rotation to keep it upright) */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 z-10">
            <motion.span
              animate={{ rotate: -targetAngle }}
              transition={{ type: 'spring', stiffness: 180, damping: 15 }}
              className={`text-[9px] font-black font-display tracking-widest uppercase transition-colors duration-300 ${
                theme === 'light' ? 'text-slate-600' : 'text-slate-350'
              }`}
            >
              Menu
            </motion.span>
          </div>
        </motion.div>

        {/* Toggle Expand Handle Arrow (Moved to top center) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className={`absolute -top-3.5 flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-300 shadow-neo-btn ${
            theme === 'light'
              ? 'bg-[#FDFCFA] border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              : 'bg-[#0a0f1b] border-white/5 text-slate-400 hover:text-white hover:border-slate-800'
          }`}
          title={isExpanded ? "Collapse Menu" : "Expand Menu"}
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>
      </div>
    </div>
  );
}
