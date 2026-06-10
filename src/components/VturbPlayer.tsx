import { useEffect, useRef } from 'react';
import { content } from '../data/content';

export function VturbPlayer() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const player = document.createElement('vturb-smartplayer');
          player.id = `vid-${content.vturb.playerId}`;
          player.style.display = 'block';
          player.style.margin = '0 auto';
          player.style.width = '100%';
          player.style.maxWidth = '400px';
          wrapper.appendChild(player);

          const script = document.createElement('script');
          script.src = `https://scripts.converteai.net/${content.vturb.accountId}/players/${content.vturb.playerId}/v4/player.js`;
          script.async = true;
          document.head.appendChild(script);

          obs.disconnect();
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="w-full max-w-[400px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-brand/40 bg-black/40"
    />
  );
}
