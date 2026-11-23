import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Gauge, MapPin } from 'lucide-react';
import { RIDES_DATA } from '@/data/rides';
import RideCard from '@/components/rides/RideCard';

export default function FeaturedRides() {
  const sigiriyaRide = RIDES_DATA.find((r) => r.slug === 'ride-sigiriya-2026');
  const otherFeatured = RIDES_DATA.filter((r) => r.slug !== 'ride-sigiriya-2026').slice(0, 2);

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>EXPEDITIONS & ADVENTURES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              FEATURED RIDES
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              From open coastal sprints to multi-day cross-country endurance journeys, experience how Southern Super Riders conquers the open road.
            </p>
          </div>

          <Link
            href="/rides"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/15 hover:border-ssr-red transition-all duration-300 shadow-lg group self-start md:self-auto"
          >
            <span>EXPLORE ALL RIDES</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Past Adventure Hero Card: RIDE SIGIRIYA 2026 */}
        {sigiriyaRide && (
          <div className="mb-12 bg-[#131317] rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:border-ssr-red/40 transition-all duration-500 group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Banner */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] overflow-hidden">
                <Image
                  src={sigiriyaRide.coverImage}
                  alt={sigiriyaRide.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full bg-ssr-red text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                    FEATURED PAST ADVENTURE
                  </span>
                </div>
              </div>

              {/* Text / Details (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ssr-red/15 text-ssr-red border border-ssr-red/30 font-black text-xs uppercase tracking-wider">
                      <Gauge className="w-3.5 h-3.5" />
                      {sigiriyaRide.distance}
                    </span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {sigiriyaRide.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors">
                    {sigiriyaRide.title}
                  </h3>

                  <p className="text-xs font-bold text-ssr-red uppercase tracking-wider">
                    {sigiriyaRide.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {sigiriyaRide.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                    <MapPin className="w-4 h-4 text-ssr-red" />
                    <span>{sigiriyaRide.destination}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/rides/${sigiriyaRide.slug}`}
                    className="w-full sm:w-auto px-6 py-3 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red flex items-center justify-center gap-2"
                  >
                    <span>EXPLORE 1050+ KM EXPEDITION</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2 More Featured Rides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherFeatured.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>

      </div>
    </section>
  );
}
