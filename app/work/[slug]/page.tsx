import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation/Navigation';
import { getAllProjects, getProjectBySlug, getAdjacentProjects } from '@/data/projects';
import styles from './page.module.css';

type CaseStudyPageProps = {
  params: { slug: string };
};

/**
 * Pre-renders a route per published project. Returns an empty list while
 * `data/projects.ts` is empty — Next.js falls through to request-time
 * rendering (and `notFound()` below) for any slug, published or not.
 */
export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} — STARDUST`,
    description: project.brief,
  };
}

const ORIENTATION_CLASS = {
  portrait: styles.mediaPortrait,
  landscape: styles.mediaLandscape,
  square: styles.mediaSquare,
} as const;

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(project.slug);
  const hasMeta = Boolean(project.client || project.role || project.deliverable || project.year);

  return (
    <>
      <Navigation />
      <article>
        <header className={`container ${styles.header}`}>
          <p className={`text-label ${styles.eyebrow}`}>
            {project.category}
            {project.clientType ? ` · ${project.clientType}` : ''}
          </p>
          <h1 className="text-display-l">{project.title}</h1>
          {project.brief && <p className={`text-body-large ${styles.brief}`}>{project.brief}</p>}

          {hasMeta && (
            <dl className={styles.metaList}>
              {project.client && (
                <div className={styles.metaItem}>
                  <dt className="text-caption">Client</dt>
                  <dd className="text-body-small">{project.client}</dd>
                </div>
              )}
              {project.role && (
                <div className={styles.metaItem}>
                  <dt className="text-caption">Role</dt>
                  <dd className="text-body-small">{project.role}</dd>
                </div>
              )}
              {project.deliverable && (
                <div className={styles.metaItem}>
                  <dt className="text-caption">Deliverable</dt>
                  <dd className="text-body-small">{project.deliverable}</dd>
                </div>
              )}
              {project.year && (
                <div className={styles.metaItem}>
                  <dt className="text-caption">Year</dt>
                  <dd className="text-body-small">{project.year}</dd>
                </div>
              )}
            </dl>
          )}
        </header>

        <div className={`container ${styles.primaryMediaWrap}`}>
          <div className={`${styles.media} ${ORIENTATION_CLASS[project.primaryImage.orientation]}`}>
            <Image
              src={project.primaryImage.src}
              alt={project.primaryImage.alt}
              fill
              sizes="(max-width: 767px) 92vw, 80vw"
              priority
              className={styles.image}
            />
          </div>
        </div>

        {project.supportingImages && project.supportingImages.length > 0 && (
          <div className={`container ${styles.supporting}`}>
            {project.supportingImages.map((image) => (
              <div
                key={image.src}
                className={`${styles.media} ${styles.supportingMedia} ${ORIENTATION_CLASS[image.orientation]}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 767px) 92vw, 44vw"
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        )}

        <nav aria-label="Project navigation" className={`container ${styles.caseNav}`}>
          <div className={styles.caseNavSide}>
            {previous && (
              <Link href={`/work/${previous.slug}`} className={styles.caseNavLink}>
                <span className={styles.caseNavDirection} aria-hidden="true">
                  ←
                </span>
                <span className={styles.caseNavLabel}>
                  <span className={`text-caption ${styles.caseNavCaption}`}>Previous</span>
                  <span className="text-h4">{previous.title}</span>
                </span>
              </Link>
            )}
          </div>

          <Link href="/#work" className={`text-action text-button ${styles.backLink}`}>
            Back to Work
          </Link>

          <div className={`${styles.caseNavSide} ${styles.caseNavSideEnd}`}>
            {next && (
              <Link href={`/work/${next.slug}`} className={`${styles.caseNavLink} ${styles.caseNavLinkEnd}`}>
                <span className={styles.caseNavLabel}>
                  <span className={`text-caption ${styles.caseNavCaption}`}>Next</span>
                  <span className="text-h4">{next.title}</span>
                </span>
                <span className={styles.caseNavDirection} aria-hidden="true">
                  →
                </span>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </>
  );
}
