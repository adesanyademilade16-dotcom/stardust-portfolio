import { ContentRequired } from '@/components/ui/ContentRequired';
import { Logo } from '@/components/brand/Logo';
import { FragmentSystem } from '@/components/motion/FragmentSystem';
import { profile } from '@/data/about';
import styles from './Contact.module.css';

/**
 * Contact (visual redesign pass) — the page's one deliberately dark
 * section, per the redesign brief ("dark/tonal background is allowed
 * using the existing approved ink color"). The fragment system reappears
 * here at a larger scale, resolving the FRAGMENT → ALIGN → COMPOSE →
 * EXPERIENCE arc the hero opens with. Content is unchanged — closing
 * statement, email, and LinkedIn are still ContentRequired until supplied.
 */
export function Contact() {
  return (
    <section id="contact" className={`${styles.section} tone-ink`} aria-label="Contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.intro}>
            <span className="section-index" aria-hidden="true">
              05
            </span>
            <h2 className="text-display-l">Contact</h2>
            <p className="text-body-large">
              <ContentRequired label="Contact — closing statement" />
            </p>
          </div>

          <FragmentSystem className={styles.closingMark} maxWidth={200} />
        </div>

        <dl className={styles.channels}>
          <div className={styles.channel}>
            <dt className="text-label" style={{ color: 'var(--text-secondary)' }}>
              Email
            </dt>
            <dd className={styles.channelValue}>
              <ContentRequired label="email address" />
            </dd>
          </div>

          <div className={styles.channel}>
            <dt className="text-label" style={{ color: 'var(--text-secondary)' }}>
              LinkedIn
            </dt>
            <dd className={styles.channelValue}>
              <ContentRequired label="LinkedIn URL" />
            </dd>
          </div>
        </dl>

        <div className={styles.footer}>
          <Logo variant="compact" className={styles.mark} />
          <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
            STARDUST — {profile.name}
          </p>
        </div>
      </div>
    </section>
  );
}
