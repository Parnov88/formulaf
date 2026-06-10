import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { VturbPlayer } from './VturbPlayer';
import { PillButton } from './shared/PillButton';
import { content } from '../data/content';

export function PlayerShowcase() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCta(true), content.player.ctaPostVideoDelayMs);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="player" className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="liquid-glass relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl"
      >
        <div className="h-10 flex items-center px-4 border-b border-white/10 relative">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-xs text-white/50">
            {content.player.windowTitle}
          </span>
        </div>

        <div className="px-6 py-10 md:py-14 flex flex-col items-center text-center gap-6">
          <p className="text-sm font-medium text-red-400">{content.player.warning}</p>

          <VturbPlayer />

          <p className="text-sm text-white/50 max-w-md">{content.player.note}</p>

          {showCta && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PillButton icon={Play} label={content.player.ctaPostVideo} href="#oferta" />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
