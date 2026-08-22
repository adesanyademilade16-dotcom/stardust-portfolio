import styles from './FragmentSystem.module.css';

type Fragment = {
  /** Final resting position/size, expressed as % of the stage (grid-aligned). */
  top: number;
  left: number;
  width: number;
  height: number;
  /** Arrival offset — where the fragment travels in from. */
  startX: number;
  startY: number;
  startRotation: number;
  delayMs: number;
  accent?: boolean;
};

/**
 * Deterministic composition echoing the approved "Compose" logo mark:
 * a handful of grid-aligned rectangles that arrive, align, and settle
 * into one fixed relationship. Position values are fixed (not random)
 * so the result is identical on every load.
 */
const FRAGMENTS: Fragment[] = [
  { top: 8, left: 8, width: 14, height: 46, startX: -28, startY: -16, startRotation: -6, delayMs: 0 },
  { top: 8, left: 26, width: 66, height: 14, startX: 24, startY: -24, startRotation: 4, delayMs: 60 },
  { top: 26, left: 26, width: 30, height: 14, startX: -18, startY: 10, startRotation: -3, delayMs: 120 },
  { top: 26, left: 60, width: 32, height: 14, startX: 22, startY: 8, startRotation: 5, delayMs: 160 },
  { top: 44, left: 26, width: 14, height: 32, startX: -10, startY: 22, startRotation: 3, delayMs: 220 },
  { top: 44, left: 44, width: 14, height: 32, startX: 12, startY: 26, startRotation: -4, delayMs: 260 },
  { top: 44, left: 62, width: 30, height: 14, startX: 20, startY: -14, startRotation: 4, delayMs: 300, accent: true },
];

type FragmentSystemProps = {
  className?: string;
  /** Overrides the default 220px stage cap — used where the composition
   * needs to act as a real graphic element (hero, contact) rather than a
   * small decorative mark. */
  maxWidth?: number;
};

export function FragmentSystem({ className, maxWidth }: FragmentSystemProps) {
  return (
    <div
      className={`${styles.stage} ${className ?? ''}`}
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      role="presentation"
      aria-hidden="true"
    >
      {FRAGMENTS.map((fragment, index) => (
        <span
          key={index}
          className={styles.fragment}
          data-accent={fragment.accent ? 'true' : undefined}
          style={
            {
              top: `${fragment.top}%`,
              left: `${fragment.left}%`,
              width: `${fragment.width}%`,
              height: `${fragment.height}%`,
              '--start-x': `${fragment.startX}px`,
              '--start-y': `${fragment.startY}px`,
              '--start-rot': `${fragment.startRotation}deg`,
              '--delay': `${fragment.delayMs}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
