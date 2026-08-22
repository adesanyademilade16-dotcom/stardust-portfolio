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
 * Image paths: `primaryImage.src` / `supportingImages[].src` should point
 * into `public/images/projects/<slug>/...` (e.g.
 * `/images/projects/example-slug/cover.jpg`) so each project's artwork
 * stays grouped by slug as real files are added. `orientation` is set per
 * image, not per project — a project's supporting images can mix portrait,
 * landscape, and square without being forced into one ratio.
 *
 * Ownership of the 12 entries below (13 source images — the two OOU
 * countdown flyers are one campaign/project) was confirmed by the project
 * owner. `client` and `clientType` are left omitted throughout: a business
 * or institution appearing in the artwork (e.g. OOU, RCCG, Elevation
 * Church) is not the same as a confirmed commissioning relationship, and
 * none was supplied. `brief` and `deliverable` describe only what's
 * directly observable in the artwork itself — no invented backstory,
 * results, or client testimony. `year` is omitted throughout — no
 * completion date was supplied (dates visible inside some artwork, e.g.
 * an event date on a flyer, describe the depicted event, not when the
 * design was made).
 */
export const projects: Project[] = [
  {
    slug: 'oou-post-utme',
    title: 'OOU Post-UTME Mock Exam Countdown',
    category: 'Education & Exam-Prep',
    collection: 'Education & Exam-Prep',
    brief:
      'A two-part countdown campaign built around bold numerals and a rotated hourglass motif, counting down to a university mock exam.',
    deliverable: 'Countdown campaign flyers (2 pieces)',
    featured: true,
    priority: 0,
    primaryImage: {
      src: '/images/projects/oou-post-utme/cover.jpg',
      alt: 'Purple countdown flyer reading "04 DAYS LEFT until OOU Post-UTME Mock Exam begins," with a tilted hourglass graphic.',
      orientation: 'square',
    },
    supportingImages: [
      {
        src: '/images/projects/oou-post-utme/supporting-1.jpg',
        alt: 'Companion countdown flyer reading "03 DAYS TO GO," featuring a large pocket watch graphic on a purple background.',
        orientation: 'portrait',
      },
    ],
  },
  {
    slug: 'cyberpunk',
    title: 'Cyberpunk: Into Cyberspace',
    category: 'Editorial / Publication',
    collection: 'Editorial / Publication',
    brief: 'A neon-toned book cover pairing two illustrated characters with bold cyberpunk-style display type.',
    deliverable: 'Book cover design',
    featured: true,
    priority: 1,
    primaryImage: {
      src: '/images/projects/cyberpunk/cover.jpg',
      alt: 'Book cover for "Cyberpunk: Into Cyberspace" featuring two anime-style characters against a neon cityscape, with bold pink display type.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'ice-coffee',
    title: 'Ice Coffee',
    category: 'Food & Beverage',
    collection: 'Food & Beverage',
    brief:
      'A bilingual (English/Arabic) iced-coffee advertisement organised into labelled sections for ice, coffee, and milk.',
    deliverable: 'Bilingual product advertisement',
    featured: true,
    priority: 2,
    primaryImage: {
      src: '/images/projects/ice-coffee/cover.jpg',
      alt: 'Iced coffee advertisement in brown and cream tones with English and Arabic text, sectioned into "Ice," "Coffee," and "Milk" callouts.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'beverage-ad',
    title: 'Three Flavours, One Obsession',
    category: 'Food & Beverage',
    collection: 'Food & Beverage',
    brief: 'A diagonally-sectioned advertisement presenting matcha, strawberry, and chocolate shake flavours.',
    deliverable: 'Product advertisement',
    featured: false,
    priority: 3,
    primaryImage: {
      src: '/images/projects/beverage-ad/cover.jpg',
      alt: 'Advertisement divided into three diagonal bands — green, pink, and brown — each showcasing a matcha, strawberry, or chocolate shake.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'juice-lab',
    title: 'Cool Strawberry Smoothie',
    category: 'Food & Beverage',
    collection: 'Food & Beverage',
    brief: 'A red-toned product advertisement for a strawberry smoothie, built around a central falling-fruit composition.',
    deliverable: 'Product advertisement',
    featured: false,
    priority: 4,
    primaryImage: {
      src: '/images/projects/juice-lab/cover.jpg',
      alt: 'Red-background advertisement for "Cool Strawberry Smoothie" from The Juice Lab, with a central glass and falling strawberry slices.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'coffee',
    title: 'Coffee',
    category: 'Food & Beverage',
    collection: 'Food & Beverage',
    brief: 'A minimalist typographic advertisement repeating "Coffee" around a top-down iced coffee photograph.',
    deliverable: 'Minimalist product advertisement',
    featured: false,
    priority: 5,
    primaryImage: {
      src: '/images/projects/coffee/cover.jpg',
      alt: 'Pink minimalist advertisement with the word "Coffee" repeated around a top-down photo of an iced coffee glass.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'students-union',
    title: 'Mock Exam — University of Ibadan Students\u2019 Union',
    category: 'Education & Exam-Prep',
    collection: 'Education & Exam-Prep',
    brief: 'A high-contrast yellow poster announcing a multi-course mock exam, built around bold condensed type and a student portrait.',
    deliverable: 'Poster design',
    featured: false,
    priority: 6,
    primaryImage: {
      src: '/images/projects/students-union/cover.jpg',
      alt: 'Yellow mock exam poster for the University of Ibadan Students\u2019 Union, listing course codes and a photo of a student holding books.',
      orientation: 'square',
    },
  },
  {
    slug: 'zicoo-designs',
    title: 'Get Your Design at an Affordable Price',
    category: 'Promotional Design',
    collection: 'Promotional Design',
    brief: 'A red-and-white self-promotional advertisement built around bold display type and a contact call-to-action.',
    deliverable: 'Promotional advertisement',
    featured: false,
    priority: 7,
    primaryImage: {
      src: '/images/projects/zicoo-designs/cover.jpg',
      alt: 'Red and white advertisement reading "Get Your Design at Affordable Price," with a woman using a phone and contact details below.',
      orientation: 'square',
    },
  },
  {
    slug: 'youth-sunday',
    title: 'Youth Sunday — June Edition',
    category: 'Faith & Community',
    collection: 'Faith & Community',
    brief: 'A colourful event flyer for a church youth service, built around a group photo and layered geometric shapes.',
    deliverable: 'Event flyer',
    featured: false,
    priority: 8,
    primaryImage: {
      src: '/images/projects/youth-sunday/cover.jpg',
      alt: 'Colourful "Youth Sunday, June Edition" event flyer for RCCG Trinity Hall Family, with a group photo of three smiling young adults.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'family-sunday',
    title: 'Family Sunday',
    category: 'Faith & Community',
    collection: 'Faith & Community',
    brief: 'A circular photo-grid layout announcing a church family service, framed by a red-to-blue gradient arc.',
    deliverable: 'Event flyer',
    featured: false,
    priority: 9,
    primaryImage: {
      src: '/images/projects/family-sunday/cover.jpg',
      alt: 'Event flyer for "Family Sunday" at The Elevation Church Ikoyi, with a circular grid of congregation photos and service times.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'youth-week',
    title: 'Youth Week Celebration',
    category: 'Faith & Community',
    collection: 'Faith & Community',
    brief: 'A blue-toned event flyer for a week-long church youth celebration, layered over a photo of a singing congregation.',
    deliverable: 'Event flyer',
    featured: false,
    priority: 10,
    primaryImage: {
      src: '/images/projects/youth-week/cover.jpg',
      alt: 'Blue "Youth Week Celebration" flyer for Musama Youth Fellowship, overlaid on a photo of a choir singing.',
      orientation: 'portrait',
    },
  },
  {
    slug: 'be-yourself',
    title: 'Be Yourself',
    category: 'Personal / Experimental',
    collection: 'Personal / Experimental',
    brief: 'A four-photo editorial collage exploring mood and movement in monochrome tones.',
    deliverable: 'Photo collage',
    featured: false,
    priority: 11,
    primaryImage: {
      src: '/images/projects/be-yourself/cover.jpg',
      alt: 'Editorial photo collage titled "Be Yourself," with four dark, moody portrait shots of a person in a white shirt.',
      orientation: 'portrait',
    },
  },
];

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
