import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchProbability?: number;
}

export default function GlitchText({ text, className = "", glitchProbability = 0.05 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchProbability) {
        const glitched = text.split('').map(char => {
          if (char === ' ') return ' ';
          return Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : char;
        }).join('');
        setDisplayText(glitched);
        setTimeout(() => setDisplayText(text), 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [text, glitchProbability]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{displayText}</span>
      {displayText !== text && (
        <>
          <span className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 translate-x-[2px] animate-glitch">
            {displayText}
          </span>
          <span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70 -translate-x-[2px] animate-glitch">
            {displayText}
          </span>
        </>
      )}
    </span>
  );
}
