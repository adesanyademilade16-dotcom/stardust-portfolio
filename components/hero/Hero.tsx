import { ContentRequired } from '@/components/ui/ContentRequired';
import { FragmentSystem } from '@/components/motion/FragmentSystem';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <h1 className="text-display-xl">
            <ContentRequired label="hero positioning statement" />
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
            <ContentRequired label="supporting statement, one sentence" />
          </p>
          <a href="#work" className="text-action text-button">
            View Work <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.fragmentColumn}>
          <FragmentSystem />
        </div>
      </div>
    </section>
  );
}
