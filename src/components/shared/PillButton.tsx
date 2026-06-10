import { ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PillButtonProps {
  icon?: LucideIcon;
  label: string;
  href?: string;
  full?: boolean;
  variant?: 'light' | 'dark' | 'success';
  onClick?: () => void;
}

export function PillButton({ icon: Icon, label, href, full, variant = 'light', onClick }: PillButtonProps) {
  const variantClasses =
    variant === 'light'
      ? 'bg-white text-black hover:bg-white/90'
      : variant === 'success'
        ? 'bg-success text-white hover:bg-success/90'
        : 'bg-black/40 text-white border border-white/15 hover:bg-black/60';

  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-5 py-3 transition-all active:scale-[0.98] ${variantClasses} ${full ? 'w-full' : ''}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
