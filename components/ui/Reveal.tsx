'use client';

import type { ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** ms delay applied once the element is in view — used to stagger groups. */
  delay?: number;
  variant?: 'rise' | 'scale';
};

/**
 * Scroll-triggered reveal wrapper. Runs once per element, respects
 * prefers-reduced-motion globally (see globals.css), and needs no external
 * animation library — just IntersectionObserver + CSS transitions.
 */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'rise' }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal';

  return (
    <Tag
      ref={ref}
      className={`${base} ${inView ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
