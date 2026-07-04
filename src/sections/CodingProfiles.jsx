import React from 'react';
import { motion } from 'framer-motion';
import { codingProfilesData } from '../data/portfolioData';
import { Code2, Award, ExternalLink, Terminal } from 'lucide-react';
import { Github } from '../components/Icons';

export default function CodingProfiles() {
  const getIcon = (name) => {
    const props = { size: 22, className: "text-slate-300" };
    switch (name) {
      case "GitHub":
        return <Github {...props} />;
      case "LeetCode":
        return <Terminal {...props} className="text-amber-500" />;
      case "HackerRank":
        return <Award {...props} className="text-emerald-500" />;
      default:
        return <Code2 {...props} className="text-indigo-400" />;
    }
  };

  const getPlatformColors = (color) => {
    switch (color) {
      case "indigo": return "border-indigo-500/10 hover:border-indigo-500/25 shadow-glow-indigo/5";
      case "purple": return "border-purple-500/10 hover:border-purple-500/25 shadow-glow-purple/5";
      case "teal": return "border-teal-500/10 hover:border-teal-500/25 shadow-glow-teal/5";
      case "blue": return "border-blue-500/10 hover:border-blue-500/25 shadow-glow-blue/5";
      default: return "border-white/5 hover:border-white/20";
    }
  };

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My coordinates, badges, and solver statistics across algorithmic systems.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfilesData.map((profile, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`p-6 rounded-2xl bg-[#0c1322] border neo-card flex flex-col justify-between hover:scale-102 hover:-translate-y-1 transition-all ${getPlatformColors(profile.color)}`}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center">
                      {getIcon(profile.name)}
                    </div>
                    <h3 className="font-bold font-display text-white text-base">
                      {profile.name}
                    </h3>
                  </div>
                  {/* Badge */}
                  <span className="inline-block text-[9px] font-bold font-mono uppercase tracking-wider text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded border border-white/5 shadow-neo-inset">
                    {profile.badge}
                  </span>
                </div>

                {/* Statistics Details */}
                <div className="mb-8 p-4 rounded-xl bg-[#0a0f1b] border border-white/5 shadow-neo-inset text-center">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-400 font-display block mb-1">
                    Platform Statistics
                  </span>
                  <p className="text-xs font-mono font-semibold text-slate-300">
                    {profile.stats}
                  </p>
                </div>
              </div>

              {/* View Profile CTA */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl neo-btn text-[10px] font-bold font-display uppercase tracking-wider flex items-center justify-center space-x-1.5 hover:shadow-glow-indigo transition-all"
              >
                <span>View Profile</span>
                <ExternalLink size={10} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
