import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import styles from './ProjectModule.module.css';

/**
 * Approved Featured Work module proportions (Phase 9 §5 — Step 5).
 * Visual weight is controlled entirely by grid placement (see
 * ProjectModule.module.css); the internal structure never changes:
 * artwork → title → category/metadata → short description.
 */
export type ProjectModuleVariant = 'large' | 'wide' | 'standard' | 'tall' | 'compact';

type ProjectModuleProps = {
  project: Project;
  variant: ProjectModuleVariant;
  /** Marks the module as above-the-fold so its artwork loads eagerly. */
  priority?: boolean;
  /** 1-based position — rendered as a tracked "01" style index, an
   * editorial device rather than a real ranking claim. */
  index?: number;
};

const ORIENTATION_CLASS: Record<Project['primaryImage']['orientation'], string> = {
  portrait: styles.mediaPortrait,
  landscape: styles.mediaLandscape,
  square: styles.mediaSquare,
};

const VARIANT_SIZES: Record<ProjectModuleVariant, string> = {
  large: '(max-width: 767px) 92vw, (max-width: 1199px) 92vw, 55vw',
  wide: '(max-width: 767px) 92vw, 92vw',
  standard: '(max-width: 767px) 92vw, (max-width: 1199px) 44vw, 38vw',
  tall: '(max-width: 767px) 92vw, (max-width: 1199px) 44vw, 28vw',
  compact: '(max-width: 767px) 92vw, (max-width: 1199px) 44vw, 28vw',
};

/**
 * A single Featured Work entry. The entire module is one accessible link
 * through to the case study — no separate "view project" control, no modal.
 */
export function ProjectModule({ project, variant, priority, index }: ProjectModuleProps) {
  const showDescription = variant !== 'compact' && Boolean(project.brief);

  return (
    <Link href={`/work/${project.slug}`} className={`${styles.module} ${styles[variant]}`}>
      <div className={`${styles.media} ${ORIENTATION_CLASS[project.primaryImage.orientation]}`}>
        <Image
          src={project.primaryImage.src}
          alt={project.primaryImage.alt}
          fill
          sizes={VARIANT_SIZES[variant]}
          priority={priority}
          className={styles.image}
        />
        <span className={styles.viewProject} aria-hidden="true">
          View project →
        </span>
      </div>

      <div className={styles.meta}>
        <p className={`${styles.tags} text-caption`}>
          {typeof index === 'number' && (
            <span className={styles.index}>{String(index).padStart(2, '0')}</span>
          )}
          {project.category}
          {project.year ? ` · ${project.year}` : ''}
        </p>
        <h3 className={`${styles.title} text-h3`}>{project.title}</h3>
        {showDescription && <p className={`${styles.brief} text-body-small`}>{project.brief}</p>}
      </div>
    </Link>
  );
}
