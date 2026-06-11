import { motion } from 'motion/react';
import { content } from '../data/content';

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
        Depoimentos
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {content.testimonials.map((testimonial, i) => (
          <motion.figure
            key={testimonial.quote}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6 ring-1 ring-success/30"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10 text-xs text-white/50">
              {testimonial.attribution}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
