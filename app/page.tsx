import { Hero } from '@/components/sections/hero';
import { FeaturedNews } from '@/components/sections/featured-news';
import { AboutPreview } from '@/components/sections/about-preview';
import { UpcomingShows } from '@/components/sections/upcoming-shows';
import { Partners } from '@/components/sections/partners';
import { Newsletter } from '@/components/sections/newsletter';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedNews />
      <AboutPreview />
      <UpcomingShows />
      <Partners />
      <Newsletter />
    </div>
  );
}