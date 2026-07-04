import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My professional career path, software roles, and internships.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-indigo-500/10" />

          {/* Experience list */}
          <div className="space-y-12">
            {experienceData.map((item, idx) => {
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
                  {/* Timeline point */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#0c1322] border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] z-10" />

                  {/* Left spacer for desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Timeline Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8">
                    <div className="p-6 rounded-2xl neo-card border border-white/5 relative group hover:border-indigo-500/20">
                      {/* Top Accent line */}
                      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Title & Organization */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="font-bold font-display text-white text-base">
                          {item.role}
                        </h3>
                        <span className="inline-flex items-center text-[10px] font-semibold text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded-full border border-indigo-500/15">
                          <Calendar size={10} className="mr-1" />
                          {item.duration}
                        </span>
                      </div>

                      <h4 className="text-xs font-semibold text-slate-300 font-display flex items-center mb-4">
                        <Briefcase size={12} className="mr-1 text-slate-400" />
                        {item.company}
                      </h4>

                      <p className="text-xs text-slate-400 leading-relaxed font-body mb-5">
                        {item.description}
                      </p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.tech.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-[#0a0f1b] text-indigo-300 border border-white/5 shadow-neo-inset"
                          >
                            {tag}
                          </span>
                        ))}
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
