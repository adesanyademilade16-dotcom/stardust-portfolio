import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { profile, education, experience } from '@/data/about';
import { getAllProjects } from '@/data/projects';
import styles from './About.module.css';

export function About() {
  const categoryCount = new Set(getAllProjects().map((p) => p.category)).size;

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
          <Reveal variant="scale" className={styles.portrait}>
            <Image
              src="/images/general/profile.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(max-width: 767px) 60vw, (max-width: 1199px) 32vw, 300px"
              className={styles.portraitImage}
            />
            <span className={styles.portraitRing} aria-hidden="true" />
          </Reveal>

          <div className={styles.copy}>
            <Reveal>
              <p className="text-body-large">{profile.introduction}</p>
            </Reveal>

            <Reveal delay={100} className={styles.statsRow}>
              <div className={styles.statBlock}>
                <AnimatedCounter value={getAllProjects().length} suffix="+" />
                <p className="text-caption">Projects</p>
              </div>
              <div className={styles.statBlock}>
                <AnimatedCounter value={categoryCount} />
                <p className="text-caption">Categories</p>
              </div>
              <div className={styles.statBlock}>
                <AnimatedCounter value={100} suffix="%" />
                <p className="text-caption">Original concepts</p>
              </div>
            </Reveal>

            <Reveal delay={150} className={styles.grid}>
              <div className={styles.block}>
                <p className="text-label" style={{ color: 'var(--text-secondary)' }}>
                  Education
                </p>
                <p className="text-h4">{education.institution}</p>
                <p className="text-body-small" style={{ color: 'var(--text-secondary)' }}>
                  {education.program} · {education.year}
                </p>
              </div>

              <div className={styles.block}>
                <h3 className="text-label" style={{ color: 'var(--text-secondary)' }}>
                  Experience
                </h3>
                <ul className={styles.experienceList}>
                  {experience.map((record) => (
                    <li key={record.organization} className={styles.experienceItem}>
                      <p className="text-h4">
                        {record.organization} <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>— {record.role}</span>
                      </p>
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
                <p className="text-body">{profile.designPerspective}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
