import { motion } from 'motion/react';
import { Menu, Play } from 'lucide-react';
import { LogoMark } from './shared/LogoMark';
import { PillButton } from './shared/PillButton';
import { content } from '../data/content';

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-20 max-w-6xl mx-auto px-6 h-20 flex items-center justify-between"
    >
      <LogoMark className="w-8 h-8 text-brand" />

      <div className="hidden md:flex gap-8">
        {content.navbar.links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
            className="text-white/70 text-sm font-medium hover:text-white"
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center">
        <div className="hidden md:block">
          <PillButton icon={Play} label={content.navbar.cta} href="#player" />
        </div>
        <button
          type="button"
          aria-label="Abrir menu"
          className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}
