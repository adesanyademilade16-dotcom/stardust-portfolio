'use client';

import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

/**
 * Counts up from 0 to `value` once it scrolls into view. Deterministic,
 * ease-out timing, no library — a single requestAnimationFrame loop.
 */
export function AnimatedCounter({ value, suffix = '', prefix = '', duration = 1400 }: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-stat">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
