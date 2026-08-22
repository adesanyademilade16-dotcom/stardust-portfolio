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
    <section id="capabilities" className={`${styles.section} tone-surface`} aria-label="Capabilities">
      <div className="container">
        <div className={styles.header}>
          <span className="section-index" aria-hidden="true">
            04
          </span>
          <h2 className="text-h2">Capabilities</h2>
        </div>

        <ul className={styles.list}>
          {capabilities.map((label, index) => {
            const supported = hasSupportingWork(label);
            const number = String(index + 1).padStart(2, '0');
            return (
              <li key={label} className={styles.listItem}>
                {supported ? (
                  <Link href="/#full-work" className={styles.item}>
                    <span className={styles.itemIndex}>{number}</span>
                    <span className="text-display-l">{label}</span>
                  </Link>
                ) : (
                  <span className={styles.item}>
                    <span className={styles.itemIndex}>{number}</span>
                    <span className="text-display-l">{label}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
