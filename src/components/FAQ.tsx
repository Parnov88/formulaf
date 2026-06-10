import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { content } from '../data/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
        Perguntas frequentes
      </h2>

      <div className="flex flex-col gap-3">
        {content.faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question} className="liquid-glass rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium"
              >
                <span>{item.question}</span>
                <Plus
                  className={`w-4 h-4 flex-shrink-0 text-brand transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
