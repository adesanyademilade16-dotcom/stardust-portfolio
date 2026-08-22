import { ContentRequired } from '@/components/ui/ContentRequired';
import { FragmentSystem } from '@/components/motion/FragmentSystem';
import styles from './Hero.module.css';

/**
 * Hero — visual redesign pass.
 *
 * Previous version was structurally correct (7/5 split, fragment system,
 * content-required copy) but read as mostly empty: a small logo and a
 * dashed placeholder in the middle of a blank viewport. This version keeps
 * every piece of real information the same (nothing invented) but makes
 * the composition itself do the work: an oversized watermark word, a
 * confirmed-positioning eyebrow line (not a personal quote — this is the
 * designer's stated professional positioning from the project brief), and
 * a much larger fragment composition that acts as a graphic element rather
 * than a small decorative icon.
 */
export function Hero() {
  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <span className={styles.watermark} aria-hidden="true">
        STARDUST
      </span>

      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={`index-label ${styles.eyebrow}`}>Graphic Design — Visual Communication</p>
          <h1 className="text-display-xl">
            <ContentRequired label="hero positioning statement" />
          </h1>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
            <ContentRequired label="supporting statement, one sentence" />
          </p>
          <a href="#work" className={`text-action text-button ${styles.cta}`}>
            View Work <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className={styles.fragmentColumn}>
          <FragmentSystem maxWidth={340} />
        </div>
      </div>
    </section>
  );
}
