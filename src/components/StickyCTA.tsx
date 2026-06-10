import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight } from 'lucide-react';
import { content } from '../data/content';

export function StickyCTA() {
  const [timerElapsed, setTimerElapsed] = useState(false);
  const [ofertaInView, setOfertaInView] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setTimerElapsed(true), 30000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const target = document.getElementById('oferta');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOfertaInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = timerElapsed && !ofertaInView && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="lg:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-4"
        >
          <div className="liquid-glass rounded-2xl flex items-center gap-3 px-4 py-3 bg-[#0c0c0c]/80">
            <a
              href="#oferta"
              className="flex-1 flex items-center justify-center gap-1 rounded-full bg-success text-white font-medium text-sm px-4 py-3 transition-all active:scale-[0.98]"
            >
              <span>{content.stickyCta.label}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Fechar"
              className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
