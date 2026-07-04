import React, { useState, useEffect } from "react";
import { Mail, ArrowRight, Download, Terminal, Database } from "lucide-react";
import { Github, Linkedin } from "../components/Icons";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

const TYPED_STRINGS = [
  "AI & Machine Learning Engineer",
  "Frontend Developer",
  "Python Developer",
  "Problem Solver",
  "Full Stack Learner",
];

export default function Hero() {
  const mousePosition = useMousePosition();
  const [typedText, setTypedText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Centered mouse coordinates for parallax
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;
  const h = typeof window !== "undefined" ? window.innerHeight : 800;
  const parallaxX = (mousePosition.x - w / 2) / 35;
  const parallaxY = (mousePosition.y - h / 2) / 35;

  // Typing logic
  useEffect(() => {
    const activeString = TYPED_STRINGS[stringIndex];
    let timer;

    if (isDeleting) {
      // Deleting speed
      timer = setTimeout(() => {
        setTypedText(activeString.substring(0, typedText.length - 1));
      }, 50);
    } else {
      // Typing speed
      timer = setTimeout(() => {
        setTypedText(activeString.substring(0, typedText.length + 1));
      }, typingSpeed);
    }

    // Determine state change
    if (!isDeleting && typedText === activeString) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before backspacing
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % TYPED_STRINGS.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, stringIndex, typingSpeed]);

  const handleContactScroll = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Parallax Floating Ambient Circles */}
      <motion.div
        style={{ x: parallaxX * 1.5, y: parallaxY * 1.5 }}
        className="absolute top-[20%] left-[10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div
        style={{ x: -parallaxX * 1.2, y: -parallaxY * 1.2 }}
        className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#0a0f1b] border border-white/5 shadow-neo-inset mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold font-display tracking-widest uppercase text-emerald-400">
                Available for Freelance & Roles
              </span>
            </div>

            {/* Hello Header */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-display text-white">
              Hello, I'm <br />
              <span className="text-gradient">Lalith Kumar</span>
            </h1>

            {/* Typing Container */}
            <div className="h-16 flex items-center justify-center lg:justify-start mt-4">
              <p className="text-xl sm:text-2xl font-semibold font-display text-slate-300">
                I am a{" "}
                <span className="text-indigo-400 border-r-2 border-indigo-400 pr-1 animate-pulse">
                  {typedText}
                </span>
              </p>
            </div>

            {/* Paragraph Introduction */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              An ambitious AI & Machine Learning engineer and passionate Full
              Stack Web Developer. I build highly responsive web products,
              design neural network architectures, and automate robust workflows
              using cutting-edge models.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={handleContactScroll}
                className="w-full sm:w-auto px-8 py-4 rounded-full neo-btn font-semibold font-display text-sm flex items-center justify-center space-x-2 text-white hover:border-indigo-500/40 hover:shadow-glow-indigo transition-all group"
              >
                <span>Contact Me</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="#resume"
                className="w-full sm:w-auto px-8 py-4 rounded-full neo-card-inset font-semibold font-display text-sm text-slate-300 flex items-center justify-center space-x-2 border border-white/5 hover:bg-white/5 hover:text-white transition-all shadow-neo-inset"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Icons Grid */}
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-4">
              {[
                {
                  icon: <Github size={20} />,
                  label: "GitHub",
                  url: "https://github.com/Lalith9664",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/in/lalith-kumar-2a124b331/",
                },
                {
                  icon: <Terminal size={20} />,
                  label: "LeetCode",
                  url: "https://leetcode.com/u/Lalithkumar8302/",
                },
                {
                  icon: <Database size={20} />,
                  label: "HackerRank",
                  url: "https://www.hackerrank.com/profile/lalith8302",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  url: "mailto:lalith8302@gmail.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full neo-btn text-slate-400 hover:text-indigo-400 hover:border-indigo-500/20 hover:shadow-glow-indigo transition-all"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Lanyard ID Card Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          {/* Lanyard holder wrapper */}
          <div className="relative pt-6 pb-4 md:pt-12 md:pb-6">
            {/* Lanyard String extending up to the ceiling */}
            <div className="absolute left-1/2 bottom-full -translate-x-1/2 w-[4px] md:w-[6px] h-[300px] md:h-[500px] bg-gradient-to-t from-indigo-500/80 via-purple-500/30 to-transparent pointer-events-none" />

            {/* ID Badge Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateZ: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateZ: [-2.5, 2.5],
              }}
              transition={{
                opacity: { duration: 1.2 },
                y: { duration: 1.2, type: "spring", damping: 20 },
                rotateZ: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
              style={{
                rotateY: parallaxX * -0.4,
                rotateX: parallaxY * 0.4,
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="relative w-64 h-[380px] min-[400px]:w-72 min-[400px]:h-[430px] md:w-80 md:h-[480px] rounded-3xl neo-card p-4 md:p-6 flex flex-col items-center justify-between border border-white/5"
            >
              {/* Lanyard metallic clip attached to the top of card */}
              <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 w-10 h-8 md:w-12 md:h-9 rounded-lg bg-gradient-to-b from-slate-600 to-slate-800 border border-slate-500 shadow-neo-btn flex items-center justify-center z-20">
                <div className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 rounded-full bg-slate-900 shadow-neo-inset" />
              </div>

              {/* Tag header */}
              <div className="w-full flex items-center justify-between text-[10px] min-[400px]:text-[11px] md:text-[12px] font-extrabold tracking-widest text-slate-400 font-display uppercase border-b border-white/5 pb-2 md:pb-3">
                <span>Pass Card</span>
                <span className="text-indigo-400">#LK-9876</span>
              </div>

              {/* Avatar Frame */}
              <div
                style={{ transform: "translateZ(30px)" }}
                className="w-24 h-24 min-[400px]:w-28 min-[400px]:h-28 md:w-32 md:h-32 shrink-0 aspect-square rounded-full bg-bg-card-inset border border-indigo-500/20 shadow-neo-inset flex items-center justify-center relative overflow-hidden group mt-2 md:mt-4"
              >
                <img
                  src="/lalith1.jpeg"
                  alt="Lalith Kumar"
                  className="w-full h-full object-cover"
                />

                {/* Active Indicator green dot */}
                <span className="absolute bottom-1 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>

              {/* Identity labels */}
              <div
                style={{ transform: "translateZ(20px)" }}
                className="text-center mt-2 md:mt-3"
              >
                <h3 className="text-lg min-[400px]:text-xl md:text-2xl font-black font-display tracking-wider text-white uppercase">
                  Lalith Kumar
                </h3>
                <p className="text-[11px] min-[400px]:text-[12px] md:text-[13px] font-semibold text-indigo-400 font-display uppercase tracking-widest mt-1">
                  AI & Full-Stack Engineer
                </p>
              </div>

              {/* Pass Details Segment */}
              <div
                style={{ transform: "translateZ(15px)" }}
                className="w-full bg-bg-card-inset/60 border border-white/5 rounded-2xl p-3 md:p-4 mt-2 md:mt-3 grid grid-cols-2 gap-x-2 gap-y-2 md:gap-y-3 font-mono text-[10px] min-[400px]:text-[11px] md:text-[12px] text-left leading-tight"
              >
                <div>
                  <span className="block text-[9px] min-[400px]:text-[10px] md:text-[11px] text-slate-500 uppercase">
                    Location
                  </span>
                  <span className="font-semibold text-slate-200">
                    Coimbatore, IND
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] min-[400px]:text-[10px] md:text-[11px] text-slate-500 uppercase">
                    Access
                  </span>
                  <span className="font-semibold text-emerald-400">
                    Level 4 [Dev]
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] min-[400px]:text-[10px] md:text-[11px] text-slate-500 uppercase">
                    Issued By
                  </span>
                  <span className="font-semibold text-slate-200">
                    Portfolio engine
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] min-[400px]:text-[10px] md:text-[11px] text-slate-500 uppercase">
                    Expires
                  </span>
                  <span className="font-semibold text-slate-200">Never</span>
                </div>
              </div>

              {/* Monospace Barcode segment */}
              <div
                style={{ transform: "translateZ(25px)" }}
                className="w-full flex flex-col items-center mt-2 md:mt-3"
              >
                <div className="w-full flex items-center justify-center space-x-[2px] h-5 min-[400px]:h-6 md:h-8 opacity-60">
                  <div className="w-[2px] h-full bg-slate-400" />
                  <div className="w-[1px] h-full bg-slate-400" />
                  <div className="w-[3px] h-full bg-slate-400" />
                  <div className="w-[1px] h-full bg-slate-400" />
                  <div className="w-[2px] h-full bg-slate-400" />
                  <div className="w-[4px] h-full bg-slate-400" />
                  <div className="w-[1px] h-full bg-slate-400" />
                  <div className="w-[2px] h-full bg-slate-400" />
                  <div className="w-[3px] h-full bg-slate-400" />
                  <div className="w-[1px] h-full bg-slate-400" />
                  <div className="w-[2px] h-full bg-slate-400" />
                  <div className="w-[4px] h-full bg-slate-400" />
                  <div className="w-[1px] h-full bg-slate-400" />
                  <div className="w-[3px] h-full bg-slate-400" />
                  <div className="w-[2px] h-full bg-slate-400" />
                </div>
                <span className="text-[7px] md:text-[8px] font-mono font-bold text-slate-500 tracking-widest mt-1">
                  #LK-987654-DEV
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
