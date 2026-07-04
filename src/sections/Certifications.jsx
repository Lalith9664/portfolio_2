import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import { Brain, Cpu, Cloud, Code, Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    const props = { size: 20, className: "text-indigo-400" };
    switch (iconName) {
      case "Brain": return <Brain {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "Cloud": return <Cloud {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            My accredited technical specializations and credentials.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl neo-card border border-white/5 flex flex-col justify-between hover:scale-102 hover:border-indigo-500/20 glow-border"
            >
              <div>
                {/* Header Icon */}
                <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center mb-5">
                  {getCertIcon(cert.icon)}
                </div>

                {/* Title and Issuer */}
                <h3 className="text-sm font-bold font-display text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-[10px] font-semibold text-slate-400 font-display uppercase tracking-widest mb-6">
                  {cert.issuer}
                </p>
              </div>

              {/* View Credentials Button */}
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl neo-btn text-[10px] font-bold font-display uppercase tracking-wider flex items-center justify-center space-x-1.5"
              >
                <span>View Certificate</span>
                <ExternalLink size={10} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
