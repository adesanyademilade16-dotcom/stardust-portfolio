/**
 * STARDUST — About / Experience / Capabilities data.
 *
 * Per Phase 9 §7 content policy: only fields explicitly confirmed are
 * populated here. Unconfirmed prose (introduction, design-perspective
 * statement) is intentionally left out — the About component renders a
 * ContentRequired placeholder for those, not invented copy.
 */

export const profile = {
  name: 'Mariam Adesanya',
};

export type EducationRecord = {
  program: string;
  institution: string;
};

export const education: EducationRecord = {
  program: 'Mass Communication',
  institution: 'Olabisi Onabanjo University',
};

export type ExperienceRecord = {
  organization: string;
  focus: string;
  duration: string;
};

export const experience: ExperienceRecord[] = [
  {
    organization: 'TNT Event Centre',
    focus: 'Photo editing and creative work',
    duration: 'Six-month internship',
  },
];

/**
 * Typographic capability statements — not skill bars or percentages.
 * Each is checked against published work (see Capabilities.tsx) so a
 * capability only links out once the portfolio actually demonstrates it.
 */
export const capabilities: string[] = [
  'Graphic Design',
  'Visual Communication',
  'Layout & Composition',
  'Marketing Collateral / Social Graphics',
  'Photo Editing',
];
