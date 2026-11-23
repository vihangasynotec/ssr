import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import EventCard from '@/components/events/EventCard';

export default function FeaturedEvents() {
  const events = EVENTS_DATA.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>GATHERINGS & MEETUPS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              CLUB EVENTS & ACTIVITIES
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Stay connected with Southern Super Riders’ verified official runs, brotherhood meetups, and humanitarian relief drives.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/15 hover:border-ssr-red transition-all duration-300 shadow-lg group self-start md:self-auto"
          >
            <span>VIEW ALL EVENTS</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}
