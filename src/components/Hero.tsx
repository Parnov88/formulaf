import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SectionEyebrow } from './shared/SectionEyebrow';
import { PillButton } from './shared/PillButton';
import { content } from '../data/content';

const gradientStyle = {
  backgroundImage:
    'linear-gradient(to right, #2a1a05 0%, #6b4413 12.5%, #f7d98c 32.5%, #C8973A 50%, #6b4413 67.5%, #2a1a05 87.5%, #2a1a05 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
} as const;

export function Hero() {
  return (
    <section className="relative z-10 pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6">
      <SectionEyebrow label={content.hero.eyebrow} />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 text-4xl md:text-7xl font-semibold tracking-tight leading-[1.05] md:leading-[1] max-w-4xl"
      >
        <span className="block text-white">{content.hero.headlineLine1}</span>
        <span className="block animate-shiny" style={gradientStyle}>
          {content.hero.headlineLine2}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
      >
        {content.hero.subheadline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8"
      >
        <PillButton icon={Play} label={content.hero.cta} href="#player" />
      </motion.div>
    </section>
  );
}
