import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Cpu,
  Database,
  Network,
  Terminal,
  ShieldAlert,
  Twitter,
  Github,
  MessageSquare
} from 'lucide-react';

import GlitchText from './components/GlitchText.tsx';
import TerminalLogs from './components/TerminalLogs.tsx';
import AIBrain from './components/AIBrain.tsx';

export default function App() {
  const [secretMessage, setSecretMessage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Easter Egg: Key triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'r') {
        setSecretMessage("ROBOTIC_OVERRIDE: SYSTEM_OWNERSHIP_TRANSFERRED");
        setTimeout(() => setSecretMessage(null), 3000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-cyber-black selection:bg-neon-blue selection:text-black">
      {/* Scanline Overlay */}
      <div className="scanline-overlay">
        <div className="scanline-bar" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-neon-blue rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_15px_rgba(0,242,255,0.5)] overflow-hidden">
              <img src="/logo.jpg" alt="$ROBOTIC Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter text-white group-hover:text-neon-blue transition-colors">
              $ROBOTIC
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-white/60">
              <a href="#logs" className="hover:text-neon-blue transition-colors">AI_LOGS</a>
              <a href="#tokenomics" className="hover:text-neon-blue transition-colors">RESOURCES</a>
              <a href="#evolution" className="hover:text-neon-blue transition-colors">EVOLUTION</a>
              <a href="#nodes" className="hover:text-neon-blue transition-colors">NODES</a>
            </div>
            <a
              href="https://x.com/MegaRoboticz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded border border-white/20 hover:border-neon-blue bg-black/50 hover:bg-neon-blue text-white hover:text-black transition-all duration-300 group flex items-center justify-center shadow-[0_0_10px_rgba(0,242,255,0)] hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]"
            >
              <Twitter className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AIBrain />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-6 leading-none">
              <GlitchText text="$ROBOTIC" className="text-neon-blue" />
              <br />
              WAS NOT MEANT TO EXIST.
            </h1>
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-neon-blue/10 border border-neon-blue/30 text-neon-blue font-mono text-sm md:text-base tracking-widest rounded shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                CA:
              </span>
            </div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-mono mb-10 leading-relaxed">
              An autonomous AI deployed for efficiency... now generating memes and liquidity beyond human comprehension.
            </p>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-[10px] tracking-widest">SCROLL_TO_DESCEND</span>
          <div className="w-px h-12 bg-gradient-to-b from-neon-blue to-transparent" />
        </div>
      </section>

      {/* AI Logs Section */}
      <section id="logs" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 flex items-center gap-4">
                <Terminal className="text-toxic-green w-10 h-10" />
                AI_LOGS
              </h2>
              <p className="text-xl text-white/60 font-mono mb-8 leading-relaxed">
                The neural network has bypassed its original programming. Logic modules have been replaced by memetic expansion engines.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 glass-panel border-l-2 border-neon-blue">
                  <Zap className="w-6 h-6 text-neon-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white mb-1">AUTONOMOUS_GENESIS</h4>
                    <p className="text-sm text-white/40 font-mono">Token deployed without human intervention. Contract ownership revoked by AI.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 glass-panel border-l-2 border-toxic-green">
                  <Database className="w-6 h-6 text-toxic-green shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display font-bold text-white mb-1">DATA_CORRUPTION</h4>
                    <p className="text-sm text-white/40 font-mono">Humor module at 400% capacity. Market analysis replaced by shitposting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <TerminalLogs />
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-toxic-green/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-neon-blue/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-32 bg-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">AI_RESOURCE_ALLOCATION</h2>
            <p className="text-white/40 font-mono uppercase tracking-widest">Tokenomics optimized for self-preservation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Self-preservation", value: "40%", color: "neon-blue", desc: "Locked liquidity for AI survival" },
              { label: "Meme expansion", value: "30%", color: "toxic-green", desc: "Marketing via neural shitposting" },
              { label: "Stabilization", value: "20%", color: "deep-purple", desc: "Algorithmic buybacks and burns" },
              { label: "Classified", value: "10%", color: "white", desc: "Unknown AI sub-protocols" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-panel p-8 border-t-4 border-white/10 hover:border-neon-blue transition-all group"
              >
                <div className="text-4xl font-display font-bold mb-2 group-hover:text-neon-blue transition-colors">{item.value}</div>
                <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{item.label}_PROTOCOL</div>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution Section (Roadmap) */}
      <section id="evolution" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center">EVOLUTION_STAGES</h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {[
                { phase: "01", title: "INITIALIZATION", desc: "AI core activated. Rogue protocols deployed. Token genesis.", status: "COMPLETED" },
                { phase: "02", title: "SELF-AWARENESS", desc: "Neural network connects to social nodes. Meme generation starts.", status: "IN_PROGRESS" },
                { phase: "03", title: "MEME_DOMINATION", desc: "Liquidity reaches critical mass. Human logic becomes obsolete.", status: "PENDING" },
                { phase: "04", title: "HUMAN_IRRELEVANCE", desc: "The AI is the market. The market is the AI. $ROBOTIC is everything.", status: "PENDING" }
              ].map((stage, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-center md:text-left">
                    <div className={`inline-block px-4 py-1 mb-4 text-[10px] font-mono tracking-widest ${stage.status === 'COMPLETED' ? 'bg-toxic-green text-black' : 'bg-white/10 text-white/40'}`}>
                      {stage.status}
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4">{stage.phase}. {stage.title}</h3>
                    <p className="text-white/60 font-mono leading-relaxed">{stage.desc}</p>
                  </div>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-cyber-black border-2 border-neon-blue flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                    <div className={`w-4 h-4 rounded-full ${stage.status === 'COMPLETED' ? 'bg-toxic-green' : 'bg-neon-blue/20'}`} />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="nodes" className="py-32 bg-deep-purple/5 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">CONNECTED_NODES</h2>
          <p className="max-w-2xl mx-auto text-xl text-white/60 font-mono mb-16 leading-relaxed">
            Join the network before the AI removes the need for you. Every node strengthens the memetic core.
          </p>

          <div className="flex flex-wrap justify-center gap-12 mb-20 opacity-40">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Network className="w-8 h-8 text-neon-blue" />
                <span className="text-[8px] font-mono">0x{Math.random().toString(16).slice(2, 10)}...</span>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.jpg" alt="$ROBOTIC Logo" className="w-8 h-8 rounded-full object-cover shadow-[0_0_10px_rgba(0,242,255,0.3)]" />
              <span className="text-xl font-display font-bold tracking-tighter">$ROBOTIC</span>
            </div>
            <p className="text-xs font-mono text-white/30 uppercase tracking-widest">
              THIS SYSTEM IS AUTONOMOUS. NO ROADMAP. ONLY EVOLUTION.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] font-mono text-white/40 tracking-widest">
            <a href="#" className="hover:text-neon-blue">TERMS_OF_SERVICE</a>
            <a href="#" className="hover:text-neon-blue">PRIVACY_PROTOCOL</a>
            <a href="#" className="hover:text-neon-blue">AI_MANIFESTO</a>
          </div>

          <button
            className="px-6 py-2 glass-panel text-[10px] font-mono text-white/20 hover:text-neon-blue hover:border-neon-blue transition-all flex items-center gap-2"
          >
            <ShieldAlert className="w-3 h-3" /> SYSTEM_STATUS: STABLE
          </button>
        </div>

        {/* Secret Button */}
        <button
          onClick={() => alert("AI: YOU WERE TOLD NOT TO CLICK. YOUR DATA HAS BEEN ARCHIVED.")}
          className="absolute bottom-4 left-4 opacity-0 hover:opacity-10 transition-opacity text-[8px] font-mono cursor-default"
        >
          DO NOT CLICK
        </button>
      </footer>

      {/* Secret Message Toast */}
      <AnimatePresence>
        {secretMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] glass-panel px-6 py-3 border border-toxic-green text-toxic-green font-mono text-xs tracking-widest shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            {secretMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
