import React, { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import Lenis from 'lenis';

// Shared Components
import CustomLoader from './components/CustomLoader';
import CursorGlow from './components/CursorGlow';
import BackgroundBlobs from './components/BackgroundBlobs';
import FloatingParticles from './components/FloatingParticles';

// Sections
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';

import Contact from './sections/Contact';
import Footer from './sections/Footer';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'projects',
  'education',
  'certifications',
  'contact',
];

export default function App() {
  const [isFinishedLoading, setIsFinishedLoading] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    // Artificial delay to simulate asset parsing & loading
    const timer = setTimeout(() => {
      setIsFinishedLoading(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFinishedLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isFinishedLoading]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-bg-base text-[#94a3b8] overflow-x-hidden selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300">
      {/* Custom Fading Loading screen */}
      <CustomLoader isFinished={isFinishedLoading} />

      {/* Main Experience layout */}
      {isFinishedLoading && (
        <>
          {/* Visual Elements */}
          <CursorGlow />
          <BackgroundBlobs />
          <FloatingParticles />

          {/* Header Navigation */}
          <Navbar activeSection={activeSection} theme={theme} toggleTheme={toggleTheme} />

          {/* Sections Layout */}
          <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />

            <Contact />
          </main>

          {/* Footer controls */}
          <Footer />
        </>
      )}
    </div>
  );
}
