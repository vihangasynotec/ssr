import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function EventCard({ event }) {
  const isCompleted = event.status?.toLowerCase().includes('completed');
  const isUpcoming = !isCompleted;

  return (
    <article className={`group bg-[#131317] rounded-3xl border overflow-hidden shadow-xl transition-all duration-300 flex flex-col ${
      isUpcoming 
        ? 'border-ssr-red/35 hover:border-ssr-red hover:shadow-[0_0_35px_rgba(227,30,36,0.4)]' 
        : 'border-white/10 hover:border-ssr-red/50 hover:shadow-ssr-red'
    }`}>
      {/* Cover Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-900">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-transparent opacity-80" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider backdrop-blur-sm flex items-center gap-1.5 ${
            isUpcoming 
              ? 'bg-ssr-red/90 text-white border border-red-400 shadow-[0_0_15px_rgba(227,30,36,0.6)]' 
              : 'bg-black/80 text-white border border-white/15'
          }`}>
            {isUpcoming && <Sparkles className="w-3 h-3 text-white animate-pulse" />}
            {event.category}
          </span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5 ${
              isCompleted
                ? 'bg-gray-800 text-gray-300 border border-white/10'
                : 'bg-ssr-red text-white border border-red-400 shadow-[0_0_15px_#E31E24] animate-pulse'
            }`}
          >
            {isUpcoming && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />}
            {event.status}
          </span>
        </div>

        {/* Date on image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/10">
          <Calendar className="w-3.5 h-3.5 text-ssr-red" />
          <span>{event.date}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-ssr-red flex-shrink-0" />
            <span className="truncate">{event.location}</span>
          </div>

          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors line-clamp-1">
            {event.title}
          </h3>

          <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {event.excerpt}
          </p>
        </div>

        {/* Button */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-bold text-ssr-red uppercase tracking-wider">
            {event.time}
          </span>

          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-black text-ssr-red hover:text-white uppercase tracking-wider group/link transition-colors"
          >
            <span>VIEW EVENT</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
