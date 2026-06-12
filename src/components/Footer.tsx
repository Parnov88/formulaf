import { LogoMark } from './shared/LogoMark';
import { content } from '../data/content';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6 text-center">
        <LogoMark className="w-7 h-7 text-brand" />

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          {content.footer.links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/40">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
