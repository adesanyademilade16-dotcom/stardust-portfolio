'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

/**
 * A button that subtly follows the cursor within its bounds (desktop only —
 * pointer-based, so it's inert on touch). A small, tasteful premium detail;
 * resets to center on mouse leave.
 */
export function MagneticButton({ href, children, className = '', ariaLabel }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 250ms cubic-bezier(0.16,1,0.3,1)' }}
    >
      {children}
    </a>
  );
}
