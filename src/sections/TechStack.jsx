import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database, Server, Settings, Globe, Shield } from 'lucide-react';

const CORE_STACK = [
  { name: "React", icon: <Globe size={22} className="text-teal-400" />, desc: "UI Architecture", gridArea: "md:col-start-1 md:row-start-1" },
  { name: "Python", icon: <Code size={22} className="text-cyan-400" />, desc: "Core Logic", gridArea: "md:col-start-2 md:row-start-1" },
  { name: "TensorFlow", icon: <Cpu size={22} className="text-amber-500" />, desc: "Deep Learning", gridArea: "md:col-start-3 md:row-start-1" },
  { name: "Docker", icon: <Settings size={22} className="text-sky-450" />, desc: "Containerization", gridArea: "md:col-start-1 md:row-start-2" },
  { name: "FastAPI", icon: <Server size={22} className="text-emerald-400" />, desc: "High-Perf API", gridArea: "md:col-start-3 md:row-start-2" },
  { name: "MongoDB", icon: <Database size={22} className="text-emerald-500" />, desc: "NoSQL Database", gridArea: "md:col-start-1 md:row-start-3" },
  { name: "PyTorch", icon: <Cpu size={22} className="text-orange-500" />, desc: "Neural Networks", gridArea: "md:col-start-2 md:row-start-3" },
  { name: "TypeScript", icon: <Shield size={22} className="text-teal-400" />, desc: "Type Safety", gridArea: "md:col-start-3 md:row-start-3" }
];

const CONNECTIONS = [
  { x2: "18%", y2: "18%", color: "#14b8a6", delay: 0.0 }, // React
  { x2: "50%", y2: "18%", color: "#06b6d4", delay: 0.6 }, // Python
  { x2: "82%", y2: "18%", color: "#f59e0b", delay: 1.2 }, // TensorFlow
  { x2: "18%", y2: "50%", color: "#38bdf8", delay: 0.3 }, // Docker
  { x2: "82%", y2: "50%", color: "#10b981", delay: 0.9 }, // FastAPI
  { x2: "18%", y2: "82%", color: "#10b981", delay: 1.5 }, // MongoDB
  { x2: "50%", y2: "82%", color: "#f97316", delay: 0.5 }, // PyTorch
  { x2: "82%", y2: "82%", color: "#f43f5e", delay: 1.1 }  // TypeScript
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-bg-base">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            Tech Stack <span className="text-gradient">Visualization</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-teal-500 mx-auto rounded-full shadow-[0_0_8px_rgba(20,184,166,0.4)]" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            An interactive neural representation of my primary development engine.
          </p>
        </div>

        {/* Neural Grid Container */}
        <div className="relative max-w-4xl mx-auto md:h-[500px] flex items-center justify-center">
          
          {/* Animated Connecting SVG Lines with Travelling Lights (Desktop/Tablet) */}
          <div className="absolute inset-0 hidden md:block">
            <svg width="100%" height="100%" className="absolute inset-0 opacity-60">
              <defs>
                <filter id="lineGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {CONNECTIONS.map((conn, idx) => (
                <React.Fragment key={idx}>
                  {/* Faint background track line */}
                  <line 
                    x1="50%" 
                    y1="50%" 
                    x2={conn.x2} 
                    y2={conn.y2} 
                    stroke={conn.color} 
                    strokeWidth="1.2" 
                    strokeOpacity="0.12" 
                  />

                  {/* Pulsing dashed indicator line */}
                  <line 
                    x1="50%" 
                    y1="50%" 
                    x2={conn.x2} 
                    y2={conn.y2} 
                    stroke={conn.color} 
                    strokeWidth="1.5" 
                    strokeOpacity="0.25" 
                    strokeDasharray="4 6" 
                    className="animate-[dash_8s_linear_infinite]" 
                  />

                  {/* Travelling glowing data particle */}
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="3.5"
                    fill={conn.color}
                    filter="url(#lineGlowFilter)"
                    animate={{
                      cx: ["50%", conn.x2],
                      cy: ["50%", conn.y2],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: conn.delay
                    }}
                  />
                </React.Fragment>
              ))}
            </svg>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 w-full md:h-full relative z-10 p-4">
            
            {/* SURROUNDING STACK CARDS */}
            {CORE_STACK.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`p-5 rounded-2xl neo-card border border-white/5 flex flex-col items-center text-center justify-center ${tech.gridArea} hover:shadow-glow-teal/5 hover:border-teal-500/20`}
              >
                {/* Floating animated icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                  className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center mb-3 group-hover:shadow-glow-teal transition-all"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-xs sm:text-sm font-bold font-display text-white">{tech.name}</h3>
                <p className="text-[9px] font-semibold tracking-wider text-slate-400 uppercase font-display mt-1">{tech.desc}</p>
              </motion.div>
            ))}

            {/* CENTRAL NEURAL HUB ENGINE (Only visible on desktop 3x3) */}
            <div className="col-start-2 row-start-2 hidden md:flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-32 h-32 rounded-full bg-[#0c1322] border border-teal-500/20 shadow-neo-flat flex flex-col items-center justify-center p-3 relative group"
              >
                {/* Ring glows */}
                <div className="absolute inset-1 rounded-full border border-dashed border-teal-500/25 animate-spin" style={{ animationDuration: '15s' }} />
                <div className="absolute inset-0 rounded-full border border-teal-500/10 shadow-glow-teal opacity-70" />

                <div className="w-full h-full rounded-full bg-[#0a0f1b] shadow-neo-inset flex flex-col items-center justify-center relative z-10">
                  <Brain size={28} className="text-teal-400 animate-pulse" />
                  <span className="text-[9px] font-black font-display tracking-widest text-teal-300 uppercase mt-2">
                    CORE HUB
                  </span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

      {/* Embedded Dash Animation css */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}
