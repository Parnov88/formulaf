import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { PillButton } from './shared/PillButton';
import { useCountdown } from '../hooks/useCountdown';
import { content } from '../data/content';

export function Pricing() {
  const { formatted, expired } = useCountdown();

  return (
    <section id="oferta" className="c3-pricing-section relative z-10">
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="c3-noise-pricing">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves={2} stitchTiles="stitch" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.075" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Fórmula</span>
          <span className="c3-watermark-line-2">F</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="c3-grid-single"
      >
        <div className="c3-card c3-card-pro">
          {expired ? (
            <div className="text-center py-10">
              <h2 className="c3-tier-large">{content.offer.expiredTitle}</h2>
              <p className="c3-desc mt-4">{content.offer.expiredText}</p>
            </div>
          ) : (
            <>
              <h2 className="c3-tier-large">{content.offer.title}</h2>

              <ul className="c3-list">
                {content.offer.items.map((item) => (
                  <li key={item.label}>
                    <span className="c3-check">✓</span>
                    <span className="flex-1">{item.label}</span>
                    <span className="text-white/40 whitespace-nowrap">{item.price}</span>
                  </li>
                ))}
              </ul>

              <div className="c3-total">
                <span>{content.offer.totalLabel}</span>
                <span>
                  De <s>{content.offer.totalValue}</s>
                </span>
              </div>

              <div className="c3-price-block">
                <p className="c3-price-label">{content.offer.priceLabel}</p>
                <p className="c3-price-value">{content.offer.price}</p>
              </div>

              <p className="c3-countdown">Oferta expira em {formatted}</p>

              <PillButton
                icon={ShoppingBag}
                label={content.offer.cta}
                href={content.offer.hotmartLink}
                variant="success"
                full
              />
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
