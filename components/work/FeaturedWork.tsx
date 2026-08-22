import { getFeaturedProjects } from '@/data/projects';
import { ProjectModule, type ProjectModuleVariant } from './ProjectModule';
import styles from './FeaturedWork.module.css';

/**
 * Repeating proportion pattern applied after the strongest (priority 0)
 * project, which always renders as `large`. Keeps the grid from reading as
 * a row of identical cards without hand-coding a layout per project count.
 */
const VARIANT_PATTERN: ProjectModuleVariant[] = ['standard', 'wide', 'tall', 'compact'];

function getVariant(index: number): ProjectModuleVariant {
  if (index === 0) return 'large';
  return VARIANT_PATTERN[(index - 1) % VARIANT_PATTERN.length];
}

/**
 * Featured Work (Phase 9, Step 5).
 *
 * Renders real published projects only. When `data/projects.ts` has no
 * featured entries yet, shows a quiet, honest empty state instead of
 * placeholder projects, "Coming Soon" copy, or fabricated case studies —
 * per Phase 9 §26/§33 content policy.
 */
export function FeaturedWork() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className={styles.section} aria-label="Featured work">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Featured Work</h2>
        </div>

        {featured.length > 0 ? (
          <div className={`grid ${styles.grid}`}>
            {featured.map((project, index) => (
              <ProjectModule
                key={project.slug}
                project={project}
                variant={getVariant(index)}
                priority={index === 0}
              />
            ))}
          </div>
        ) : (
          <p className={`text-body-small ${styles.empty}`}>
            Selected work is being prepared for publication here.
          </p>
        )}
      </div>
    </section>
  );
}
