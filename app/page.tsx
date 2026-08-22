import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/hero/Hero';
import { FeaturedWork } from '@/components/work/FeaturedWork';
import { WorkGrid } from '@/components/work/WorkGrid';
import { About } from '@/components/about/About';
import { Capabilities } from '@/components/about/Capabilities';
import { Contact } from '@/components/contact/Contact';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedWork />
      <WorkGrid />
      <About />
      <Capabilities />
      <Contact />
    </>
  );
}
