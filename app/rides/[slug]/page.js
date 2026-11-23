import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Gauge, MapPin, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { RIDES_DATA } from '@/data/rides';
import RideCard from '@/components/rides/RideCard';

export function generateStaticParams() {
  return RIDES_DATA.map((ride) => ({
    slug: ride.slug,
  }));
}

export function generateMetadata({ params }) {
  const ride = RIDES_DATA.find((r) => r.slug === params.slug);
  if (!ride) return { title: 'Ride Not Found' };
  return {
    title: `${ride.title} | SSR Rides`,
    description: ride.excerpt,
  };
}

export default function RideDetailPage({ params }) {
  const ride = RIDES_DATA.find((r) => r.slug === params.slug);

  if (!ride) {
    notFound();
  }

  const relatedRides = RIDES_DATA.filter((r) => r.slug !== ride.slug).slice(0, 2);

  return (
    <article className="pt-28 pb-20 bg-[#0A0A0B]">
      {/* Top Back Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/rides"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-ssr-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Rides</span>
        </Link>
      </div>

      {/* Main Cover Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-80 sm:h-[480px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={ride.coverImage}
            alt={ride.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-black/40 to-transparent" />
          
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-ssr-red text-white text-xs font-black uppercase tracking-widest shadow-md">
              {ride.category}
            </span>
            {ride.distance && (
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 border border-white/10 backdrop-blur-sm">
                <Gauge className="w-3.5 h-3.5 text-ssr-red" />
                {ride.distance}
              </span>
            )}
          </div>

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 max-w-3xl text-white space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              {ride.title}
            </h1>
            <p className="text-sm sm:text-lg text-red-400 font-bold tracking-wide uppercase">
              {ride.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-ssr-red" />
                {ride.destination}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-ssr-red" />
                {ride.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Story & Highlights (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                Expedition Overview
              </h2>
              <div className="text-base text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                {ride.description}
              </div>
            </div>

            {/* Key Highlights */}
            {ride.highlights && (
              <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-ssr-red" />
                  <span>Key Expedition Highlights</span>
                </h3>
                <ul className="space-y-3">
                  {ride.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Embedded YouTube Showcase */}
            {ride.youtubeId && (
              <div className="space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Featured Ride Footage
                </h3>
                <div className="relative pt-[56.25%] rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${ride.youtubeId}`}
                    title={ride.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            {/* Photo Gallery Grid */}
            {ride.gallery && ride.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Expedition Photo Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ride.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-64 rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-white/10">
                      <Image
                        src={img}
                        alt={`${ride.title} Gallery Shot ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Specs & Information (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-base font-black text-white uppercase tracking-wider border-l-2 border-ssr-red pl-2.5">
                Ride Specifications
              </h3>

              <div className="space-y-4 text-xs font-semibold text-gray-300">
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Total Distance</span>
                  <span className="text-base font-black text-white">{ride.distance || 'Verified Route'}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Convoy Pace & Formation</span>
                  <span className="text-sm font-bold text-white">{ride.specs?.convoyPace || 'Regulated Highway Formation'}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Road Conditions</span>
                  <span className="text-sm font-bold text-white">{ride.specs?.roadType || 'Asphalt Highways & Byways'}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Safety Protocol</span>
                  <span className="text-sm font-bold text-white">{ride.specs?.safetyGear || 'Mandatory Full Protective Armor'}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/join"
                  className="w-full py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red flex items-center justify-center gap-2"
                >
                  <span>JOIN NEXT EXPEDITION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Related Rides */}
        {relatedRides.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/10">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
              Explore More Journeys
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedRides.map((rel) => (
                <RideCard key={rel.id} ride={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
