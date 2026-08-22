import Link from 'next/link';
import { getAllProjects } from '@/data/projects';
import { capabilities } from '@/data/about';
import styles from './Capabilities.module.css';

/**
 * A capability only links out to the work grid once a published project's
 * category actually matches it — otherwise it renders as a plain
 * typographic statement. Never claims support the portfolio doesn't have.
 */
function hasSupportingWork(label: string): boolean {
  const normalized = label.toLowerCase();
  return getAllProjects().some((project) => {
    const category = project.category.toLowerCase();
    return normalized.includes(category) || category.includes(normalized);
  });
}

/**
 * Capabilities (Phase 9, Step 7). Typographic statement list — deliberately
 * not skill bars, percentage meters, or an icon grid.
 */
export function Capabilities() {
  return (
    <section id="capabilities" className={styles.section} aria-label="Capabilities">
      <div className="container">
        <h2 className={`text-h2 ${styles.heading}`}>Capabilities</h2>

        <ul className={styles.list}>
          {capabilities.map((label) => {
            const supported = hasSupportingWork(label);
            return (
              <li key={label} className={styles.listItem}>
                {supported ? (
                  <Link href="/#full-work" className={`${styles.item} text-display-l`}>
                    {label}
                  </Link>
                ) : (
                  <span className={`${styles.item} text-display-l`}>{label}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
