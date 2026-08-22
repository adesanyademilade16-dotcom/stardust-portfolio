# STARDUST

Portfolio site for Mariam Adesanya — graphic & visual designer. Next.js 14 (App Router) + React + TypeScript, CSS Modules.

## Status: Phase 9B — real portfolio content integrated

12 projects (13 confirmed artwork files) are live. Steps 1–8 are complete;
remaining gaps are copy, not architecture:

- [x] **Step 1** — Project setup + architecture
- [x] **Step 2** — Design tokens + typography + global styles (`styles/tokens.css`, `styles/typography.css`, `app/globals.css`)
- [x] **Step 3** — Navigation + responsive shell (`components/navigation/Navigation.tsx`)
- [x] **Step 4** — Hero + signature fragment system (`components/hero/Hero.tsx`, `components/motion/FragmentSystem.tsx`)
- [x] **Step 5** — Featured Work (`components/work/FeaturedWork.tsx`, `components/work/ProjectModule.tsx`)
- [x] **Step 6** — Full Work Grid + case-study routing/templates (`components/work/WorkGrid.tsx`, `app/work/[slug]/page.tsx`)
- [x] **Step 7** — About + Capabilities + Experience (`components/about/About.tsx`, `components/about/Capabilities.tsx`, `data/about.ts`)
- [x] **Step 8** — Contact (`components/contact/Contact.tsx`) — structure only; email/LinkedIn/closing statement pending
- [x] **Step 9** — Real project data (`data/projects.ts`) — 12 confirmed projects populated; see Asset structure below
- [x] Responsive pass — verified against existing mobile/tablet/desktop breakpoints (no changes needed)
- [x] Accessibility + SEO pass — Open Graph/Twitter metadata added to `app/layout.tsx`; touch targets, focus states, reduced motion, and Escape-to-close were already in place
- [ ] Motion refinement pass
- [ ] Full QA (see Phase 9 §29 gate) — pending remaining copy and a browser/runtime check

## Locked design foundations (do not redesign without an approved phase revision)

- Colors, spacing, radius, breakpoints, motion timing: `styles/tokens.css`
- Type scale: `styles/typography.css`
- Logo (approved "Compose" mark): `components/brand/Logo.tsx`
- Project data model: `data/projects.ts` — 12 confirmed projects populated (see file comments for what's verified vs. intentionally omitted)
- Profile/experience data: `data/about.ts` — only fields explicitly confirmed are populated (name, education, TNT Event Centre internship, capability labels)

## Asset structure

```
public/
├── images/
│   ├── projects/   — 12 project folders, each with cover.jpg (+ supporting-N.jpg where applicable)
│   └── general/    — profile.jpg (Mariam's supplied portrait — staged, not yet wired into any component)
└── favicon/
    ├── favicon.ico — generated from the approved Compose mark (components/brand/Logo.tsx)
    └── icon.svg    — same mark, vector source
```

`data/projects.ts` image fields (`primaryImage.src`, `supportingImages[].src`) point into
`public/images/projects/<slug>/...`; each image carries its own `orientation`
(portrait/landscape/square), so a project's supporting images are never forced into one ratio.
All artwork was copied byte-identical from the supplied originals — no cropping, recoloring,
or resizing.

`public/images/general/profile.jpg` is staged but not yet displayed anywhere — the approved
`About` layout (`components/about/About.tsx`) has no image slot, and adding one is a layout
change outside this task's scope. It needs an explicit go-ahead before that changes.

`public/images/projects/be-yourself/cover.jpg` retains an un-removed Canva placeholder
watermark (`@reallygreatsite`) from the original export — preserved as supplied, per
instruction not to alter the artwork. Whether this piece belongs in the final public
portfolio (vs. Mariam providing a clean export) is still an open decision.

## Content still required (never fabricated — see `ContentRequired` component usage)

- Hero positioning statement + supporting line
- About introduction statement + design-perspective statement
- Contact closing statement, email address, LinkedIn URL
- An approved decision on where/whether the profile portrait appears in the About section
- A decision on the `be-yourself` watermark (see Asset structure above)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.
