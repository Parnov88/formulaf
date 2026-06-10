import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { PillButton } from './shared/PillButton';
import { content } from '../data/content';

export function FinalCTA() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-20 text-center flex flex-col items-center gap-6"
        style={{
          backgroundImage:
            'radial-gradient(600px circle at 50% 0%, rgba(200,151,58,0.25), transparent 70%)',
        }}
      >
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
          {content.finalCta.line1}
          <br />
          {content.finalCta.line2}
        </h2>

        <PillButton
          icon={ShoppingBag}
          label={content.finalCta.cta}
          href={content.finalCta.hotmartLink}
          variant="success"
        />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-white/50">
          {content.finalCta.notes.map((note) => (
            <span key={note}>{note}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
