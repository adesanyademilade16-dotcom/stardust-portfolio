import { ContentRequired } from '@/components/ui/ContentRequired';
import { Logo } from '@/components/brand/Logo';
import { profile } from '@/data/about';
import styles from './Contact.module.css';

/**
 * Contact (Phase 9, Step 8 — final homepage section).
 *
 * Closing statement, email, and LinkedIn URL have not been supplied and
 * are never invented (Phase 9 §26 Content Placeholder Policy) — each
 * renders as a ContentRequired placeholder with the structure already in
 * place for real values. The compact Compose mark below closes the page
 * on the same fragment/alignment motif that opens it in the hero.
 */
export function Contact() {
  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <h2 className="text-h2">Contact</h2>
          <p className="text-body-large" style={{ color: 'var(--text-secondary)' }}>
            <ContentRequired label="Contact — closing statement" />
          </p>
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
