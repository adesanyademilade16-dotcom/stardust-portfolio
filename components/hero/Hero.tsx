import { FragmentSystem } from '@/components/motion/FragmentSystem';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Reveal } from '@/components/ui/Reveal';
import { getAllProjects } from '@/data/projects';
import styles from './Hero.module.css';

/**
 * Hero — premium redesign pass.
 *
 * Oversized ghost wordmark, ambient ember glow, a confirmed positioning
 * headline (no more empty ContentRequired placeholder), magnetic CTAs,
 * and a quick-read stats strip so the fold does real work instead of
 * reading as empty space.
 */
export function Hero() {
  const projectCount = getAllProjects().length;

  return (
    <section id="top" className={styles.hero} aria-label="Introduction">
      <div className={`${styles.glowBlob} glow-blob`} aria-hidden="true" />
      <span className={styles.watermark} aria-hidden="true">
        STARDUST
      </span>

      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={`eyebrow-pill ${styles.eyebrow}`}>
            <span className="dot" aria-hidden="true" />
            Available for freelance &amp; collaborations
          </p>

          <h1 className={`text-display-xl ${styles.headline}`}>
            Design that stops the scroll <em className={styles.headlineAccent}>and starts a conversation.</em>
          </h1>

          <p className={`text-body-large ${styles.sub}`}>
            I&rsquo;m Mariam Adesanya — a graphic &amp; visual communication designer crafting
            bold, brand-true visuals for campaigns, communities, and products across Nigeria and beyond.
          </p>

          <div className={styles.ctaRow}>
            <MagneticButton href="#work" className={`btn btn-primary ${styles.ctaPrimary}`}>
              View Work <span aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-secondary">
              Let&rsquo;s Talk
            </MagneticButton>
          </div>

          <Reveal delay={200} className={styles.stats}>
            <div className={styles.statItem}>
              <AnimatedCounter value={projectCount} suffix="+" />
              <p className="text-caption">Projects shipped</p>
            </div>
            <div className={styles.statItem}>
              <AnimatedCounter value={5} />
              <p className="text-caption">Categories covered</p>
            </div>
            <div className={styles.statItem}>
              <AnimatedCounter value={24} suffix="h" />
              <p className="text-caption">Typical turnaround</p>
            </div>
          </Reveal>
        </div>

        <div className={styles.fragmentColumn}>
          <FragmentSystem maxWidth={380} />
        </div>
      </div>

      <a href="#work" className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLine} />
        Scroll
      </a>
    </section>
  );
}
