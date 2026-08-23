/**
 * STARDUST — About / Experience / Capabilities data.
 * Sourced from Mariam Adesanya's CV.
 */

export const profile = {
  name: 'Mariam Adesanya',
  location: 'Ikorodu, Lagos, Nigeria',
  introduction:
    'I design promotional and digital visual assets — event graphics, product advertising, photo-led compositions, and marketing creatives — with an audience-first approach. My focus is turning a message into something people actually stop and look at: clean typography, deliberate hierarchy, and layouts that do the explaining before anyone reads a word.',
  designPerspective:
    'Good design isn\u2019t decoration — it\u2019s communication with better posture. I care most about clarity: a layout should tell you where to look first, second, and third before you\u2019ve consciously decided to read it. Bold doesn\u2019t mean loud; it means deliberate.',
};

export type EducationRecord = {
  program: string;
  institution: string;
  year: string;
};

export const education: EducationRecord = {
  program: 'Mass Communication',
  institution: 'Olabisi Onabanjo University',
  year: '2026',
};

export type ExperienceRecord = {
  organization: string;
  role: string;
  focus: string;
  duration: string;
};

export const experience: ExperienceRecord[] = [
  {
    organization: 'TNT Event Centre',
    role: 'Design Intern',
    focus: 'Photo editing, event-communication layouts, and applied typography',
    duration: 'Aug \u2013 Sep 2025',
  },
];

/**
 * Capability statements — matched to the CV's core-skills list. Each has a
 * self-rated proficiency (editable) that powers the animated skill bars.
 */
export const skills: { label: string; level: number }[] = [
  { label: 'Layout Design & Typography', level: 96 },
  { label: 'Visual Composition & Hierarchy', level: 94 },
  { label: 'Promotional & Event Graphics', level: 95 },
  { label: 'Marketing & Product Advertising', level: 90 },
  { label: 'Photo Editing & Retouching', level: 87 },
  { label: 'Digital & Social Design', level: 88 },
];

export const capabilities: string[] = skills.map((s) => s.label);
