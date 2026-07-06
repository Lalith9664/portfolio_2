import { ArrowUp, Mail, Award, Terminal } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5 bg-bg-base/80 backdrop-blur-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Core footer elements */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between pb-8 border-b border-white/5 gap-8">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-start space-y-3">
            <a
              href="#home"
              onClick={handleScrollTop}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-bg-card border border-white/5 shadow-neo-btn text-white font-black tracking-widest font-display text-sm hover:border-indigo-500/30 transition-all"
            >
              LK
            </a>
            <p className="text-[10px] text-slate-400 font-body max-w-[200px] leading-relaxed">
              Designing premium interfaces and solving complex data problems.
            </p>
          </div>
          {/* Back to top & socials row */}
          <div className="flex items-center space-x-4">
            
            {/* Social profiles icons */}
            <div className="flex space-x-2">
              {[
                { icon: <Github size={14} />, url: "https://github.com/Lalith9664" },
                { icon: <Linkedin size={14} />, url: "https://www.linkedin.com/in/lalith-kumar-2a124b331/" },
                { icon: <Mail size={14} />, url: "https://mail.google.com/mail/?view=cm&fs=1&to=lalith8302@gmail.com&su=Collaboration%20Inquiry%20%7C%20Portfolio%20Visitor&body=Hi%20Lalith%2C%0A%0AI%20visited%20your%20portfolio%20website%20and%20was%20impressed%20by%20your%20work%20in%20AI%2C%20Machine%20Learning%2C%20and%20Full%20Stack%20Development.%20I%20am%20reaching%20out%20to%20discuss%20potential%20collaboration%20%2F%20career%20opportunities.%0A%0AA%20bit%20about%20myself%20%2F%20the%20project%3A%0A-%20Name%3A%20%5BYour%20Name%5D%0A-%20Company%20%2F%20Organization%3A%20%5BYour%20Organization%5D%0A-%20Nature%20of%20Inquiry%3A%20%5Be.g.%2C%20Job%20Opportunity%20%2F%20Freelance%20Project%20%2F%20Tech%20Discussion%5D%0A%0ALet's%20connect%20soon!%0A%0ABest%20regards%2C" }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-bg-card border border-white/5 shadow-neo-btn flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/20 transition-all"
                >
                  {soc.icon}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <a
              href="#home"
              onClick={handleScrollTop}
              className="w-10 h-10 rounded-full neo-btn flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:shadow-glow-indigo transition-all"
              title="Back to Top"
              aria-label="Back to top of the page"
            >
              <ArrowUp size={16} />
            </a>

          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center sm:justify-between text-[10px] text-slate-500 font-mono tracking-wider gap-4">
          <span>&copy; {new Date().getFullYear()} LALITH KUMAR. ALL RIGHTS RESERVED.</span>
        </div>

      </div>
    </footer>
  );
}
