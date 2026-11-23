import InnerPageHero from '@/components/hero/InnerPageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata = {
  title: 'Photography & Visual Gallery',
  description:
    'Experience the raw energy, brotherhood, and machine beauty of Southern Super Riders captured across the roads of Sri Lanka.',
};

export default function GalleryPage() {
  return (
    <>
      <InnerPageHero
        badge="VISUAL ARCHIVE"
        title="MOMENTS THAT DEFINE THE JOURNEY."
        subtitle="THE OFFICIAL PHOTOGRAPHY ARCHIVE OF SOUTHERN SUPER RIDERS."
        description="Capturing the pulse of Sri Lankan superbike touring: dawn formations, coastal throttle runs, mountain mist, and brotherhood on two wheels."
        breadcrumbs={[{ label: 'GALLERY' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
