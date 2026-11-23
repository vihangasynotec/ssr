import InnerPageHero from '@/components/hero/InnerPageHero';
import EventsExplorer from '@/components/events/EventsExplorer';

export const metadata = {
  title: 'Club Events & Gatherings',
  description:
    'Discover upcoming rides, verified past expeditions, and community outreach programs organized by Southern Super Riders.',
};

export default function EventsPage() {
  return (
    <>
      <InnerPageHero
        badge="CALENDAR & ACTIVITIES"
        title="WHERE PASSION MEETS THE ROAD."
        subtitle="OFFICIAL GATHERINGS, TOURING SCHEDULES, AND COMMUNITY INITIATIVES."
        description="Stay informed about Southern Super Riders’ verified official runs, technical safety clinics, and community relief missions."
        breadcrumbs={[{ label: 'EVENTS' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventsExplorer />
        </div>
      </section>
    </>
  );
}
