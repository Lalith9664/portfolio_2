import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === 'light';

  return (
    <div
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full cursor-pointer flex items-center justify-between px-2 transition-all duration-300 select-none ${
        isLight 
          ? 'bg-[#FDFCFA] shadow-[inset_3px_3px_6px_#e2dfd5,_inset_-3px_-3px_6px_#ffffff]' 
          : 'bg-[#0a0f1b] shadow-[inset_3px_3px_6px_#020307,_inset_-3px_-3px_6px_rgba(255,255,255,0.02)] border border-white/5'
      }`}
      role="button"
      aria-label="Toggle Theme"
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      {/* Sun Icon (Left) */}
      <div className="z-10 flex items-center justify-center pointer-events-none ml-0.5">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={isLight ? "#f59e0b" : "#475569"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-300">
          <circle cx="12" cy="12" r="4" fill={isLight ? "#f59e0b" : "transparent"} />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M6.34 17.66l-1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        </svg>
      </div>

      {/* Moon + Star Icon (Right) */}
      <div className="z-10 flex items-center justify-center pointer-events-none mr-0.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill={!isLight ? "#f59e0b" : "#475569"} stroke={!isLight ? "#f59e0b" : "#475569"} strokeWidth="1" />
          <path d="M19 3l.6 1.2 1.3.2-1 .9.2 1.3-1.1-.6-1.1.6.2-1.3-1-.9 1.3-.2.6-1.2z" fill={!isLight ? "#f59e0b" : "transparent"} />
        </svg>
      </div>

      {/* Sliding Raised Knob */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-[#e0e0e0] transition-all duration-300 ease-out ${
          isLight 
            ? 'left-[36px] shadow-[2px_2px_5px_#e2dfd5,_-2px_-2px_5px_#ffffff]' 
            : 'left-[4px] shadow-[2px_2px_5px_#020307,_-2px_-2px_5px_rgba(255,255,255,0.05)] border border-white/5'
        }`}
      />
    </div>
  );
}
