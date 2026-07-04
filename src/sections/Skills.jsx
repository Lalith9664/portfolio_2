import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Brain, Layout, Server, Database, Settings, Terminal, Code } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI & Machine Learning": return <Brain size={20} className="text-teal-500" />;
      case "Frontend": return <Layout size={20} className="text-emerald-500" />;
      case "Backend": return <Server size={20} className="text-cyan-500" />;
      case "Databases & Cloud": return <Database size={20} className="text-teal-500" />;
      case "DevOps & Tools": return <Settings size={20} className="text-emerald-500" />;
      case "Programming Languages": return <Code size={20} className="text-amber-500" />;

      default: return <Terminal size={20} className="text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-teal-500 mx-auto rounded-full shadow-[0_0_8px_rgba(20,184,166,0.3)]" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            A comprehensive index of technologies, languages, and packages I work with.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((categoryGroup, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="p-6 rounded-3xl neo-card border border-white/5 relative group flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <h3 className="font-bold font-display text-slate-100 tracking-wide text-base">
                    {categoryGroup.category}
                  </h3>
                </div>

                {/* Skill Badges Grid */}
                <div className="flex flex-wrap gap-2.5">
                  {categoryGroup.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIdx * 0.03 }}
                      className="px-3.5 py-1.5 text-xs font-semibold font-display tracking-wide rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 shadow-sm text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500/35 transition-all duration-300 cursor-default select-none"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
