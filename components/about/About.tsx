import Image from 'next/image';
import { ContentRequired } from '@/components/ui/ContentRequired';
import { profile, education, experience } from '@/data/about';
import styles from './About.module.css';

/**
 * About (visual redesign pass).
 *
 * Content is unchanged from Step 7 — nothing here is invented. The portrait
 * now appears (it previously wasn't used anywhere), placed naturally in
 * the grid at its own native aspect ratio rather than as a circular avatar,
 * per the redesign brief's explicit instruction.
 */
export function About() {
  return (
    <section id="about" className={styles.section} aria-label="About">
      <div className="container">
        <div className={styles.header}>
          <span className="section-index" aria-hidden="true">
            03
          </span>
          <h2 className="text-h2">About</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.portrait}>
            <Image
              src="/images/general/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(max-width: 767px) 60vw, (max-width: 1199px) 32vw, 300px"
              className={styles.portraitImage}
            />
          </div>

          <div className={styles.copy}>
            <p className="text-body-large">
              <ContentRequired label="About — introduction statement" />
            </p>

            <div className={styles.grid}>
              <div className={styles.block}>
                <p className="text-label" style={{ color: 'var(--text-secondary)' }}>
                  Education
                </p>
                <p className="text-h4">{profile.name}</p>
                <p className="text-body-small" style={{ color: 'var(--text-secondary)' }}>
                  {education.program}, {education.institution}
                </p>
              </div>

              <div className={styles.block}>
                <h3 className="text-label" style={{ color: 'var(--text-secondary)' }}>
                  Experience
                </h3>
                <ul className={styles.experienceList}>
                  {experience.map((record) => (
                    <li key={record.organization} className={styles.experienceItem}>
                      <p className="text-h4">{record.organization}</p>
                      <p className="text-body-small" style={{ color: 'var(--text-secondary)' }}>
                        {record.focus} · {record.duration}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <p className="text-label" style={{ color: 'var(--text-secondary)' }}>
                  Design perspective
                </p>
                <p className="text-body">
                  <ContentRequired label="About — design perspective statement" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
