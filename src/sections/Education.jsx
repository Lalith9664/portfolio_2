import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const item = educationData[0];
  if (!item) return null;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Decorative blurred background blobs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            My <span className="text-gradient">Education</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My current academic path, enrollment status, and institutional focus.
          </p>
        </div>

        {/* Centered Dashboard Card Layout */}
        <div className="flex justify-center w-full max-w-xl mx-auto">
          
          {/* Academic Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full p-6 sm:p-8 rounded-3xl neo-card border border-white/5 relative group hover:border-indigo-500/25 transition-all flex flex-col justify-between"
          >
            {/* Top glass glow strip */}
            <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Card Header & Pulse Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0a0f1b] border border-white/5 shadow-neo-inset">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-extrabold font-display tracking-widest uppercase text-emerald-400">
                    Currently Enrolled
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center">
                  <GraduationCap className="text-indigo-400" size={20} />
                </div>
              </div>

              {/* Degree Title */}
              <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-wide leading-tight">
                {item.degree}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-indigo-400 font-display tracking-wide mt-1 uppercase">
                {item.department}
              </p>

              {/* Institution details */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start text-slate-300">
                  <div className="mt-1 text-slate-400 shrink-0 mr-2">
                    <GraduationCap size={16} />
                  </div>
                  <span className="text-xs sm:text-sm font-medium font-body leading-snug">
                    {item.college}
                  </span>
                </div>
                <div className="flex items-center text-slate-400 text-xs font-mono">
                  <Calendar size={14} className="mr-2" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>

            {/* Score & Progress Tracker */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400 flex items-center">
                  <Award size={12} className="mr-1.5 text-emerald-400" />
                  Current CGPA
                </span>
                <span className="text-sm font-mono font-black text-emerald-400">
                  {item.cgpa}
                </span>
              </div>
              
              {/* Progress bar representing 8.5/10 (85%) */}
              <div className="w-full h-2 rounded-full bg-[#0a0f1b] shadow-neo-inset overflow-hidden p-[2px]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 shadow-[0_0_8px_rgba(20,184,166,0.3)]"
                />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
