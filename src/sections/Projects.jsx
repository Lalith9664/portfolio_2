import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, Eye, X, ChevronRight } from 'lucide-react';
import { Github } from '../components/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            A curated list of my technical systems, algorithms, and applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-3xl neo-card border border-white/5 overflow-hidden flex flex-col justify-between"
            >
              {/* Project Image Container */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-80" />
                
                {/* Tech tags */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-[#0a0f1b]/80 text-indigo-300 border border-white/5 shadow-neo-inset"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-400 leading-relaxed font-body line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#0a0f1b] hover:bg-[#111a2e] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-neo-inset"
                      title="View GitHub Source"
                    >
                      <Github size={14} />
                    </a>
                    {project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#0a0f1b] hover:bg-[#111a2e] border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-neo-inset"
                        title="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-full neo-btn text-[10px] font-bold font-display uppercase tracking-widest text-indigo-400 hover:text-white flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ChevronRight size={10} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-base/80 backdrop-blur-md"
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-full max-w-2xl bg-bg-card border border-white/5 rounded-3xl p-6 md:p-8 shadow-neo-flat relative overflow-y-auto max-h-[85vh] scrollbar-thin"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg-card-inset hover:bg-bg-card-hover border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-neo-inset"
                >
                  <X size={16} />
                </button>

                {/* Modal Graphic */}
                <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-white/5 mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title & Icons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-black font-display text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full neo-btn text-xs font-semibold font-display flex items-center space-x-2 text-slate-300 hover:text-white"
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                    {selectedProject.demoUrl !== '#' && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-indigo-600 border border-indigo-500/20 text-xs font-semibold font-display flex items-center space-x-2 text-white hover:bg-indigo-500 shadow-glow-indigo transition-all"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech tags list */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedProject.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-[#0a0f1b] text-indigo-300 border border-white/5 shadow-neo-inset"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description content */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-sm font-bold font-display tracking-wide uppercase text-slate-300">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-body">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Key features list */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-sm font-bold font-display tracking-wide uppercase text-slate-300">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feat, i) => (
                      <li
                        key={i}
                        className="p-3 rounded-xl bg-[#0a0f1b] border border-white/5 text-xs text-slate-400 leading-relaxed shadow-neo-inset flex items-start space-x-2"
                      >
                        <span className="text-indigo-400 font-bold mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
