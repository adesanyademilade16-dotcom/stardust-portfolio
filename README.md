# STARDUST

Portfolio site for Mariam Adesanya — graphic & visual designer. Next.js 14 (App Router) + React + TypeScript, CSS Modules.

## Status: Phase 9, Steps 1–7 complete

Per the approved build order (Phase 9 §27, with Steps 6–7 consolidated per the
Step 6+7 continuation brief):

- [x] **Step 1** — Project setup + architecture
- [x] **Step 2** — Design tokens + typography + global styles (`styles/tokens.css`, `styles/typography.css`, `app/globals.css`)
- [x] **Step 3** — Navigation + responsive shell (`components/navigation/Navigation.tsx`)
- [x] **Step 4** — Hero + signature fragment system (`components/hero/Hero.tsx`, `components/motion/FragmentSystem.tsx`)
- [x] **Step 5** — Featured Work (`components/work/FeaturedWork.tsx`, `components/work/ProjectModule.tsx`)
- [x] **Step 6** — Full Work Grid + case-study routing/templates (`components/work/WorkGrid.tsx`, `app/work/[slug]/page.tsx`)
- [x] **Step 7** — About + Capabilities + Experience (`components/about/About.tsx`, `components/about/Capabilities.tsx`, `data/about.ts`)
- [x] **Step 8** — Contact (`components/contact/Contact.tsx`) — structure only; email/LinkedIn/closing statement pending
- [x] Responsive pass — verified against existing mobile/tablet/desktop breakpoints (no changes needed)
- [x] Accessibility + SEO pass — Open Graph/Twitter metadata added to `app/layout.tsx`; touch targets, focus states, reduced motion, and Escape-to-close were already in place
- [ ] Motion refinement pass
- [ ] Full QA (see Phase 9 §29 gate) — pending real content and a browser/runtime check

## Locked design foundations (do not redesign without an approved phase revision)

- Colors, spacing, radius, breakpoints, motion timing: `styles/tokens.css`
- Type scale: `styles/typography.css`
- Logo (approved "Compose" mark): `components/brand/Logo.tsx`
- Project data model: `data/projects.ts` — currently empty; no project is published until its brief/deliverable/artwork are verified (see file comments)
- Profile/experience data: `data/about.ts` — only fields explicitly confirmed are populated (name, education, TNT Event Centre internship, capability labels)

## Content still required (never fabricated — see `ContentRequired` component usage)

- Hero positioning statement + supporting line
- About introduction statement + design-perspective statement
- Contact closing statement, email address, LinkedIn URL
- Per-project brief/role/client-naming decisions for the supplied sample work
- Favicon asset (`app/layout.tsx` points to `/favicon.ico`; no `public/` folder or icon file exists yet)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.
