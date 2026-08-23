'use client';

import { useInView } from '@/hooks/useInView';
import styles from './SkillBar.module.css';

type SkillBarProps = {
  label: string;
  level: number;
  index: number;
};

/** Animated proficiency bar — fills from 0 to `level`% once scrolled into view. */
export function SkillBar({ label, level, index }: SkillBarProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const number = String(index).padStart(2, '0');

  return (
    <div className={styles.item} ref={ref}>
      <div className={styles.top}>
        <span className={styles.label}>
          <span className={styles.index}>{number}</span>
          <span className="text-h4">{label}</span>
        </span>
        <span className={styles.value}>{inView ? level : 0}%</span>
      </div>
      <div className={styles.track}>
        <div
          className={`${styles.fill} ${inView ? styles.fillVisible : ''}`}
          style={{ '--target-width': `${level}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
