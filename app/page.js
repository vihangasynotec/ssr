import HomeHero from '@/components/hero/HomeHero';
import AboutPreview from '@/components/sections/AboutPreview';
import FeaturedRides from '@/components/sections/FeaturedRides';
import FeaturedEvents from '@/components/sections/FeaturedEvents';
import GalleryPreview from '@/components/sections/GalleryPreview';
import CommunityPreview from '@/components/sections/CommunityPreview';
import MediaPreview from '@/components/sections/MediaPreview';
import JoinCTA from '@/components/sections/JoinCTA';
import HomeAdModal from '@/components/modals/HomeAdModal';

export default function HomePage() {
  return (
    <>
      <HomeAdModal />
      <HomeHero />
      <AboutPreview />
      <FeaturedRides />
      <FeaturedEvents />
      <GalleryPreview />
      <CommunityPreview />
      <MediaPreview />
      <JoinCTA />
    </>
  );
}
