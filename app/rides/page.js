import InnerPageHero from '@/components/hero/InnerPageHero';
import RidesExplorer from '@/components/rides/RidesExplorer';
import { RIDES_DATA } from '@/data/rides';

export const metadata = {
  title: 'Our Rides & Expeditions',
  description:
    'Explore the epic superbike journeys, group tours, and cross-island expeditions of Southern Super Riders Sri Lanka.',
};

export default function RidesPage() {
  return (
    <>
      <InnerPageHero
        badge="EXPEDITIONS & TOURS"
        title="EVERY ROAD HAS A STORY."
        subtitle="EXPLORE THE JOURNEYS, DESTINATIONS, AND UNFORGETTABLE RIDING EXPERIENCES OF SOUTHERN SUPER RIDERS."
        description="From the sweeping coastal asphalt of the South to the misty hairpins of the Central Highlands and the historic cross-island conquest of Ride Sigiriya (1050+ KM)."
        breadcrumbs={[{ label: 'RIDES' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RidesExplorer initialRides={RIDES_DATA} />
        </div>
      </section>
    </>
  );
}
