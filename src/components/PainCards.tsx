import { motion } from 'motion/react';
import { content } from '../data/content';

export function PainCards() {
  return (
    <section id="dor" className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.painCards.map((card, i) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <span className="text-3xl" aria-hidden="true">
              {card.icon}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
