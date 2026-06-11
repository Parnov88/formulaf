import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { SectionEyebrow } from './shared/SectionEyebrow';
import { content } from '../data/content';

export function FeatureBenefits() {
  return (
    <section
      id="beneficios"
      className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-start"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <SectionEyebrow label={content.benefits.eyebrow} tag={content.benefits.eyebrowTag} />
        <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
          {content.benefits.title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="liquid-glass rounded-2xl p-6"
      >
        <ul className="flex flex-col gap-4">
          {content.benefits.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-brand/15 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
