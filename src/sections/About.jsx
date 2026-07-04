import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutStats } from '../data/portfolioData';
import { Code2, Server, GraduationCap, Trophy } from 'lucide-react';

function AnimatedCounter({ value, suffix = '', duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-display font-black text-3xl sm:text-4xl text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const milestones = [
    { year: "2026", title: "AI Intern @ AI Labs", desc: "Automated ML datasets preprocessing pipelines using OpenCV & PyTorch frameworks." },
    { year: "2025", title: "SaaS Systems Development", desc: "Built modern neomorphic dashboard hubs using React, TypeScript & FastAPIs." },
    { year: "2024", title: "Data Algorithms Mastery", desc: "Practiced 116+ complex programming challenges on LeetCode & competitive engines." },
    { year: "2022", title: "CSE B.Tech Launch", desc: "Commenced undergraduate studies majoring in Computer Science and Engineering." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-2 w-12 h-[3px] bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-body">
            A deeper look into my technical journey, learning metrics, and milestones.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stats Cards & Main Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl neo-card border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
              <h3 className="text-xl font-bold font-display text-white mb-4">My Story</h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-body">
                I am a technology enthusiast who loves coding, problem solving, and designing automated systems. Since starting my computer science journey, I have explored diverse fields, ranging from core data structures to neural networks and frontend web interfaces.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed text-sm sm:text-base font-body">
                My core strength is bridging the gap between computational backends (Python, FastAPI, Machine Learning models) and clean, responsive frontends (React, Tailwind CSS). I enjoy designing soft interfaces with realistic lighting depth and clean architectures.
              </p>
            </div>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {aboutStats.map((stat, idx) => {
                const getIcon = (label) => {
                  switch (label) {
                    case "Years Learning": return <GraduationCap className="text-indigo-400" size={18} />;
                    case "Projects Built": return <Code2 className="text-purple-400" size={18} />;
                    case "Problems Solved": return <Trophy className="text-teal-400" size={18} />;
                    default: return <Server className="text-blue-400" size={18} />;
                  }
                };

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl neo-card border border-white/5 text-center flex flex-col items-center justify-center hover:scale-105 hover:border-indigo-500/20 glow-border"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0a0f1b] shadow-neo-inset flex items-center justify-center mb-3">
                      {getIcon(stat.label)}
                    </div>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase font-display mt-2">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl neo-card border border-white/5 relative">
              <h3 className="text-xl font-bold font-display text-white mb-8">Milestones</h3>
              
              {/* Vertical Timeline */}
              <div className="relative border-l border-indigo-500/10 pl-6 space-y-8 ml-3">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1 w-[10px] h-[10px] rounded-full bg-[#0c1322] border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />
                    
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold font-mono tracking-widest text-indigo-400 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2">
                      {milestone.year}
                    </span>
                    
                    <h4 className="text-sm font-bold font-display text-white">
                      {milestone.title}
                    </h4>
                    
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed font-body">
                      {milestone.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
