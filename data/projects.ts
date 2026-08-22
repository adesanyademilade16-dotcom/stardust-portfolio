export type Project = {
  slug: string;
  title: string;
  category: string;
  collection?: string;
  brief?: string;
  deliverable?: string;
  role?: string;
  client?: string;
  clientType?: string;
  year?: number;
  featured: boolean;
  /** Lower number = higher priority within its tier. */
  priority: number;
  primaryImage: {
    src: string;
    alt: string;
    orientation: 'portrait' | 'landscape' | 'square';
  };
  supportingImages?: {
    src: string;
    alt: string;
    orientation: 'portrait' | 'landscape' | 'square';
  }[];
};

/**
 * STARDUST project data.
 *
 * Per Phase 6 §11 and Phase 9 §13: no project is published here until its
 * verified fields (title, category, brief, deliverable, primaryImage) are
 * confirmed. Optional fields (client, role, year) stay omitted — never
 * "Unknown" or "N/A" — when unverified.
 *
 * No entries yet: still pending confirmed briefs/roles/client-naming
 * permissions for the supplied sample work (see Phase 9 §33 content status).
 */
export const projects: Project[] = [];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.priority - b.priority);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Previous/next project relative to the curated (priority) order, for the
 * case-study footer navigation. Omits either side at the ends of the list
 * rather than wrapping around — there is no "last → first" loop.
 */
export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const ordered = getAllProjects();
  const index = ordered.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
