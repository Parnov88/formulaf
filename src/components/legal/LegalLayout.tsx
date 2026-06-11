import { ArrowLeft } from 'lucide-react';
import { LogoMark } from '../shared/LogoMark';

interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string[];
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
  footerNote: string;
}

export function LegalLayout({ title, lastUpdated, sections, footerNote }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <a href="/" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
          <LogoMark className="w-6 h-6 text-brand" />
          <span>Fórmula F</span>
        </a>

        <h1 className="mt-10 text-3xl md:text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-white/40">{lastUpdated}</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-sm font-semibold text-brand tracking-wide">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-3 text-sm text-white/70 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {section.list.map((item) => (
                    <li key={item} className="pl-4 relative text-sm text-white/70 leading-relaxed">
                      <span className="absolute left-0 text-white/30">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.afterList?.map((p) => (
                <p key={p} className="mt-3 text-sm text-white/70 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col gap-4">
          <p className="text-xs text-white/40">{footerNote}</p>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
}
