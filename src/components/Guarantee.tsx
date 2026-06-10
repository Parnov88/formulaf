import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { content } from '../data/content';

export function Guarantee() {
  return (
    <section id="garantia" className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="liquid-glass rounded-3xl px-8 py-16 md:py-20 text-center max-w-2xl mx-auto flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 rounded-full border-2 border-success flex items-center justify-center text-success">
          <Shield className="w-7 h-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{content.guarantee.title}</h2>
        <p className="text-white/60 text-base leading-[1.6]">{content.guarantee.text}</p>
        <p className="text-success font-semibold">{content.guarantee.highlight}</p>
      </motion.div>
    </section>
  );
}
