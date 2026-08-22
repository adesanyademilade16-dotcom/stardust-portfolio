import { ContentRequired } from '@/components/ui/ContentRequired';
import { profile, education, experience } from '@/data/about';
import styles from './About.module.css';

/**
 * About (Phase 9, Step 7).
 *
 * Introduction and "design perspective" prose have not been supplied and
 * are never invented — they render as ContentRequired until provided.
 * Education is confirmed and renders directly. Experience is nested here
 * (there's no separate nav destination for it) rather than fabricating a
 * résumé timeline.
 */
export function About() {
  return (
    <section id="about" className={styles.section} aria-label="About">
      <div className="container">
        <div className={styles.intro}>
          <h2 className="text-h2">About</h2>
          <p className="text-body-large">
            <ContentRequired label="About — introduction statement" />
          </p>
        </div>

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
    </section>
  );
}
