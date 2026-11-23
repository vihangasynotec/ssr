import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Gauge } from 'lucide-react';

export default function RideCard({ ride }) {
  return (
    <article className="group bg-[#131317] rounded-3xl border border-white/10 overflow-hidden shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 flex flex-col">
      {/* Cover Image */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-900">
        <Image
          src={ride.coverImage}
          alt={ride.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-white border border-white/15 backdrop-blur-sm">
            {ride.category}
          </span>
        </div>

        {/* Distance Badge */}
        {ride.distance && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ssr-red text-white text-[11px] font-black tracking-wider uppercase shadow-md">
            <Gauge className="w-3.5 h-3.5" />
            <span>{ride.distance}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-ssr-red uppercase tracking-wider mb-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{ride.destination}</span>
          </div>

          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors line-clamp-1">
            {ride.title}
          </h3>

          <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {ride.excerpt}
          </p>
        </div>

        {/* Footer Meta & Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            {ride.date}
          </span>

          <Link
            href={`/rides/${ride.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-black text-ssr-red hover:text-white uppercase tracking-wider group/link transition-colors"
          >
            <span>VIEW DETAILS</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
