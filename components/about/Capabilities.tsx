import { SkillBar } from '@/components/ui/SkillBar';
import { skills } from '@/data/about';
import styles from './Capabilities.module.css';

/**
 * Capabilities — rendered as animated proficiency bars (self-rated),
 * each filling in once scrolled into view.
 */
export function Capabilities() {
  return (
    <section id="capabilities" className={`${styles.section} tone-surface`} aria-label="Capabilities">
      <div className={`${styles.glowBlob} glow-blob`} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-index" aria-hidden="true">
              04
            </span>
            <h2 className="text-h2">Capabilities</h2>
          </div>
          <p className={`text-body ${styles.headerCopy}`}>
            Core strengths, self-rated against the work published in this portfolio — not a claim of mastery, a
            honest read on where I&rsquo;m strongest today.
          </p>
        </div>

        <div className={styles.list}>
          {skills.map((skill, index) => (
            <SkillBar key={skill.label} label={skill.label} level={skill.level} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
