import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import { Trophy, Award, Users, FileText, ChevronRight } from 'lucide-react';

export default function Achievements() {
  const getAchievementIcon = (iconName) => {
    const props = { size: 20, className: "text-purple-400" };
    switch (iconName) {
      case "Trophy": return <Trophy {...props} />;
      case "Award": return <Award {...props} />;
      case "Users": return <Users {...props} />;
      default: return <FileText {...props} />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Honors & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My programming milestones, contest wins, publications, and roles.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl neo-card border border-white/5 relative group hover:border-purple-500/20"
            >
              {/* Highlight gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-500/20 pointer-events-none transition-colors" />

              <div className="flex items-start space-x-5">
                {/* Node icon */}
                <div className="w-12 h-12 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center flex-shrink-0">
                  {getAchievementIcon(ach.icon)}
                </div>

                {/* Text details */}
                <div className="flex-grow space-y-2">
                  <span className="inline-block text-[10px] font-bold font-mono tracking-widest text-purple-400 uppercase rounded bg-purple-500/5 px-2 py-0.5 border border-purple-500/15">
                    {ach.category}
                  </span>
                  <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-body">
                    {ach.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
