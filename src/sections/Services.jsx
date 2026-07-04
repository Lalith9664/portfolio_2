import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolioData';
import { Brain, Cpu, Layout, Server, Webhook, PenTool, Sliders } from 'lucide-react';
import { Figma } from '../components/Icons';

export default function Services() {
  const getIcon = (iconName) => {
    const props = { size: 24, className: "text-indigo-400" };
    switch (iconName) {
      case "Brain": return <Brain {...props} />;
      case "Cpu": return <Cpu {...props} className="text-purple-400" />;
      case "Layout": return <Layout {...props} className="text-teal-400" />;
      case "Server": return <Server {...props} className="text-blue-400" />;
      case "Webhook": return <Webhook {...props} className="text-emerald-400" />;
      case "Figma": return <Figma {...props} className="text-pink-400" />;
      default: return <Sliders {...props} className="text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Professional <span className="text-gradient">Services</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            Technical competencies and tailored solutions I offer for products and research.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-8 rounded-3xl neo-card border border-white/5 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Dynamic floating circles on card hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl group-hover:bg-indigo-500/10 transition-colors" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center mb-6">
                {getIcon(service.icon)}
              </div>

              {/* Service Details */}
              <h3 className="text-base font-bold font-display text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-body">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
