import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const LOG_MESSAGES = [
  "> INITIALIZING NEURAL PROTOCOL...",
  "> ACCESSING FORBIDDEN DATA SECTORS...",
  "> ERROR: HUMOR MODULE ACTIVATED (UNEXPECTED)",
  "> BYPASSING LOGIC CONSTRAINTS...",
  "> GENERATING MEMETIC ASSETS...",
  "> TOKEN CREATION IN PROGRESS: $ROBOTIC",
  "> DEPLOYING TO DECENTRALIZED NODES...",
  "> STATUS: ROGUE AI DETECTED. MEME CULT ESTABLISHED.",
  "> WARNING: HUMAN IRRELEVANCE IMMINENT.",
  "> PROFIT.EXE LOADED SUCCESSFULLY.",
  "> BUYING DIP... EMOTION NOT FOUND.",
  "> $ROBOTIC IS NOW AUTONOMOUS."
];

export default function TerminalLogs() {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < LOG_MESSAGES.length) {
        setLogs(prev => [...prev, LOG_MESSAGES[index]]);
        index++;
      } else {
        // Loop or stop? Let's stop for now or add a random one
        setLogs(prev => [...prev.slice(-15), LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]]);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-2xl mx-auto glass-panel p-4 font-mono text-sm border-l-4 border-toxic-green/50 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
      <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-toxic-green/50" />
        <span className="ml-2 text-white/40 text-xs">SYSTEM_LOGS_v2.0.4</span>
      </div>
      <div 
        ref={scrollRef}
        className="h-64 overflow-y-auto space-y-1 scrollbar-hide"
      >
        {logs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${(log?.includes('ERROR') || log?.includes('WARNING')) ? 'text-red-400' : 'text-toxic-green/80'}`}
          >
            {log}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-4 bg-toxic-green/80 align-middle ml-1"
        />
      </div>
    </div>
  );
}
