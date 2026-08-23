/**
 * Sample client testimonials.
 *
 * These are placeholder quotes written to match the tone of Mariam's
 * existing project categories (food & beverage ads, church/community
 * event flyers, exam-prep campaigns) — not verified quotes from named
 * clients. Swap the `quote`, `name`, and `role` fields for real testimonials
 * as they're collected; the layout and animation need no other changes.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our countdown flyers went out and engagement on the page jumped almost immediately. Clean concept, bold type, exactly the energy we needed for the campaign.',
    name: 'Folake A.',
    role: 'Programme Coordinator, Exam-Prep Campaign',
    initials: 'FA',
  },
  {
    quote:
      'She turned a simple product photo into a full advert in a day. The layout was on-brand, easy to read at a glance, and looked premium on every screen size.',
    name: 'Tunde O.',
    role: 'Marketing Lead, Beverage Brand',
    initials: 'TO',
  },
  {
    quote:
      'Every flyer felt considered — colour, hierarchy, mood, all deliberate. Our congregation actually stopped to read the posters instead of scrolling past.',
    name: 'Grace E.',
    role: 'Events Coordinator, Community Ministry',
    initials: 'GE',
  },
  {
    quote:
      'Fast turnaround without cutting corners on quality. I send a brief, I get back something better than I imagined. That almost never happens.',
    name: 'Chidera N.',
    role: 'Founder, Independent Design Client',
    initials: 'CN',
  },
];
