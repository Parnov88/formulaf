import { useEffect, useState } from 'react';
import { content } from '../data/content';

export function useCountdown() {
  const [remainingSeconds, setRemainingSeconds] = useState(content.countdown.durationSeconds);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const { storageKey, durationSeconds } = content.countdown;

    let expiry = parseInt(sessionStorage.getItem(storageKey) ?? '', 10);
    if (!expiry) {
      expiry = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(expiry));
    }

    const tick = () => {
      const remainingMs = expiry - Date.now();
      if (remainingMs <= 0) {
        setRemainingSeconds(0);
        setExpired(true);
        return;
      }
      setRemainingSeconds(Math.floor(remainingMs / 1000));
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(remainingSeconds % 60).padStart(2, '0');

  return { formatted: `${h}:${m}:${s}`, expired };
}
