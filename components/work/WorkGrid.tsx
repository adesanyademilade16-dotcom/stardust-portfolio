import { getAllProjects, type Project } from '@/data/projects';
import { ProjectModule, type ProjectModuleVariant } from './ProjectModule';
import styles from './WorkGrid.module.css';

/**
 * Full Work Grid (Phase 9, Step 6).
 *
 * Unlike Featured Work's editorial pattern, module proportion here is
 * driven by the artwork's own orientation — the grid's asymmetry comes
 * from the real mix of project shapes, not an imposed rhythm.
 */
const ORIENTATION_VARIANT: Record<Project['primaryImage']['orientation'], ProjectModuleVariant> = {
  portrait: 'tall',
  landscape: 'wide',
  square: 'standard',
};

type CollectionGroup = {
  collection?: string;
  projects: Project[];
};

/**
 * Groups projects by their `collection` label, preserving priority order
 * both across and within groups. Projects without a collection form their
 * own (unlabeled) group. Collections are a visual grouping only — there is
 * no filter, sort, or search control.
 */
function groupByCollection(list: Project[]): CollectionGroup[] {
  const order: string[] = [];
  const groups = new Map<string, Project[]>();

  for (const project of list) {
    const key = project.collection ?? '';
    if (!groups.has(key)) {
      order.push(key);
      groups.set(key, []);
    }
    groups.get(key)!.push(project);
  }

  return order.map((key) => ({
    collection: key || undefined,
    projects: groups.get(key)!,
  }));
}

/**
 * Renders the complete catalog beyond what's already highlighted in
 * Featured Work above it — the two sections are not meant to duplicate the
 * same entries on the same page. Toggle a project's `featured` flag to move
 * it between the two.
 */
export function WorkGrid() {
  const projects = getAllProjects().filter((project) => !project.featured);
  const groups = groupByCollection(projects);

  return (
    <section id="full-work" className={styles.section} aria-label="Full work">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Full Work</h2>
        </div>

        {projects.length === 0 ? (
          <p className={`text-body-small ${styles.empty}`}>
            Additional case studies will appear here as they&rsquo;re published.
          </p>
        ) : (
          groups.map((group) => (
            <div key={group.collection ?? '__general'} className={styles.collectionBlock}>
              {group.collection && <p className={`text-label ${styles.collectionLabel}`}>{group.collection}</p>}
              <div className={`grid ${styles.grid}`}>
                {group.projects.map((project) => (
                  <ProjectModule
                    key={project.slug}
                    project={project}
                    variant={ORIENTATION_VARIANT[project.primaryImage.orientation]}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
