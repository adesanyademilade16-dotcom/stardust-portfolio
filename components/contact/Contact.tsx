import { Logo } from '@/components/brand/Logo';
import { FragmentSystem } from '@/components/motion/FragmentSystem';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Reveal } from '@/components/ui/Reveal';
import { CopyEmailButton } from './CopyEmailButton';
import { profile } from '@/data/about';
import styles from './Contact.module.css';

const CONTACT_EMAIL = 'miaadex108@gmail.com';
const CONTACT_PHONE = '+234 907 131 9328';
const CONTACT_PHONE_HREF = '+2349071319328';
const LINKEDIN_URL = '#'; // TODO: add real LinkedIn URL once available
const INSTAGRAM_URL = '#'; // TODO: add real Instagram handle once available

export function Contact() {
  return (
    <section id="contact" className={`${styles.section} tone-ink`} aria-label="Contact">
      <div className={`${styles.glowBlob} glow-blob`} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <Reveal className={styles.intro}>
            <span className="section-index" aria-hidden="true">
              06
            </span>
            <p className={`eyebrow-pill ${styles.eyebrow}`}>
              <span className="dot" aria-hidden="true" />
              Currently open for new projects
            </p>
            <h2 className="text-display-l">
              Have a brief? <br />
              Let&rsquo;s make it unforgettable.
            </h2>
            <p className="text-body-large">
              Whether it&rsquo;s a single flyer or a full campaign — send the brief and I&rsquo;ll reply within a day.
            </p>
            <div className={styles.ctaRow}>
              <MagneticButton href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
                Start a project <span aria-hidden="true">→</span>
              </MagneticButton>
              <CopyEmailButton email={CONTACT_EMAIL} />
            </div>
          </Reveal>

          <FragmentSystem className={styles.closingMark} maxWidth={220} />
        </div>

        <Reveal delay={100}>
          <dl className={styles.channels}>
            <div className={styles.channel}>
              <dt className="text-label" style={{ color: 'var(--text-secondary)' }}>
                Email
              </dt>
              <dd className={styles.channelValue}>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`text-h3 ${styles.channelLink}`}>
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>

            <div className={styles.channel}>
              <dt className="text-label" style={{ color: 'var(--text-secondary)' }}>
                Phone / WhatsApp
              </dt>
              <dd className={styles.channelValue}>
                <a href={`tel:${CONTACT_PHONE_HREF}`} className={`text-h3 ${styles.channelLink}`}>
                  {CONTACT_PHONE}
                </a>
              </dd>
            </div>

            <div className={styles.channel}>
              <dt className="text-label" style={{ color: 'var(--text-secondary)' }}>
                Location
              </dt>
              <dd className={styles.channelValue}>
                <span className="text-h3">{profile.location}</span>
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className={styles.footer}>
          <div className={styles.footerBrand}>
            <Logo variant="compact" className={styles.mark} />
            <p className="text-caption" style={{ color: 'var(--text-secondary)' }}>
              STARDUST — {profile.name} · © {new Date().getFullYear()}
            </p>
          </div>
          <div className={styles.social}>
            <a href={LINKEDIN_URL} className={styles.socialLink} aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href={INSTAGRAM_URL} className={styles.socialLink} aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
