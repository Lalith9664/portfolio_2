import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  // Slider animation variations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            What university mentors, co-workers, and engineering leads say about my work.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto relative px-4 md:px-12 flex flex-col items-center">
          
          {/* Quote Icon Background decoration */}
          <div className="absolute top-0 left-6 text-indigo-500/5 select-none pointer-events-none">
            <Quote size={120} className="transform -rotate-12" />
          </div>

          {/* Sliding Content Window */}
          <div className="w-full min-h-[250px] relative overflow-hidden flex items-center justify-center py-6">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full p-8 rounded-3xl neo-card border border-white/5 relative z-10 flex flex-col justify-between"
              >
                {/* Testimonial Quote Description */}
                <p className="text-sm md:text-base italic text-slate-300 leading-relaxed font-body">
                  "{activeTestimonial.text}"
                </p>

                {/* Profile Meta Info */}
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-neo-flat flex-shrink-0">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-white">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-[10px] font-semibold text-slate-400 font-display uppercase tracking-wider mt-0.5">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center space-x-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full neo-btn flex items-center justify-center hover:text-indigo-400"
              aria-label="Previous recommendation"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Dots indicator list */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-indigo-500 shadow-glow-indigo'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full neo-btn flex items-center justify-center hover:text-indigo-400"
              aria-label="Next recommendation"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
