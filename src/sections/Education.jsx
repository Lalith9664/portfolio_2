import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My academic training, grades, and relevant coursework.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-purple-500/10" />

          {/* Timeline Cards */}
          <div className="space-y-12">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline circle point */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#0c1322] border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />

                  {/* Desktop offset */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Education Info Box */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8">
                    <div className="p-6 rounded-2xl neo-card border border-white/5 relative group hover:border-purple-500/20">
                      {/* Top highlight bar */}
                      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="font-bold font-display text-white text-base">
                          {item.degree}
                        </h3>
                        <span className="inline-flex text-[10px] font-bold text-purple-400 bg-purple-500/5 px-2 py-0.5 rounded-full border border-purple-500/15">
                          {item.duration}
                        </span>
                      </div>

                      {/* University details */}
                      <h4 className="text-xs font-semibold text-slate-300 font-display flex items-center mb-1">
                        <GraduationCap size={12} className="mr-1 text-slate-400" />
                        {item.college}
                      </h4>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest font-display mb-4">
                        {item.department}
                      </p>

                      {/* Grade display */}
                      <div className="mb-5 p-3 rounded-xl bg-[#0a0f1b] border border-white/5 shadow-neo-inset flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">Score Achieved:</span>
                        <span className="text-xs font-mono font-bold text-emerald-400 flex items-center">
                          <Award size={12} className="mr-1" />
                          {item.cgpa}
                        </span>
                      </div>

                      {/* Coursework Tags */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-bold tracking-wider uppercase text-slate-400 flex items-center">
                          <BookOpen size={10} className="mr-1" />
                          Coursework Focus:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 dark:border-purple-500/30 transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
