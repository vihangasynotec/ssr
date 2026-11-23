import InnerPageHero from '@/components/hero/InnerPageHero';
import MediaHub from '@/components/media/MediaHub';

export const metadata = {
  title: 'Media & Social Hub',
  description:
    'Watch high-definition motorcycle ride films, vlogs, and explore Southern Super Riders’ official YouTube, TikTok, Facebook, and Instagram channels.',
};

export default function MediaPage() {
  return (
    <>
      <InnerPageHero
        badge="DIGITAL FOOTAGE & REELS"
        title="THE JOURNEY DOESN'T END ON THE ROAD."
        subtitle="EXPLORE THE MOMENTS, VIDEOS, STORIES, AND ADVENTURES OF SOUTHERN SUPER RIDERS."
        description="Ride alongside our pack through high-octane video documentaries, convoy acoustics, and social media coverage across Sri Lanka."
        breadcrumbs={[{ label: 'MEDIA' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MediaHub />
        </div>
      </section>
    </>
  );
}
