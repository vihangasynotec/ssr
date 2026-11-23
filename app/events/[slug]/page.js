import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EVENTS_DATA } from '@/data/events';
import { BRAND } from '@/lib/constants';

export function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }) {
  const event = EVENTS_DATA.find((e) => e.slug === params.slug);
  if (!event) return { title: 'Event Not Found' };
  return {
    title: `${event.title} | SSR Events`,
    description: event.excerpt,
  };
}

export default function EventDetailPage({ params }) {
  const event = EVENTS_DATA.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 bg-[#0A0A0B]">
      {/* Top Back Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-ssr-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>
      </div>

      {/* Main Cover Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={event.coverImage}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-black/40 to-transparent" />

          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-ssr-red text-white text-xs font-black uppercase tracking-widest shadow-md">
              {event.category}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-black uppercase tracking-widest shadow-md border border-white/10 backdrop-blur-sm">
              {event.status}
            </span>
          </div>

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 max-w-3xl text-white space-y-3">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
              {event.title}
            </h1>
            <p className="text-sm sm:text-base text-red-400 font-bold tracking-wide uppercase">
              {event.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-ssr-red" />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-ssr-red" />
                {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-ssr-red" />
                {event.location}
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
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                Event Description
              </h2>
              <div className="text-base text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                {event.description}
              </div>
            </div>

            {/* Event Highlights */}
            {event.highlights && (
              <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 space-y-4 shadow-xl">
                <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-ssr-red" />
                  <span>Program Highlights</span>
                </h3>
                <ul className="space-y-3">
                  {event.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {event.gallery && event.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  Event Photography
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.gallery.map((img, idx) => (
                    <div key={idx} className="relative h-64 rounded-2xl overflow-hidden bg-gray-900 shadow-xl border border-white/10">
                      <Image
                        src={img}
                        alt={`${event.title} Moment ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-base font-black text-white uppercase tracking-wider border-l-2 border-ssr-red pl-2.5">
                Event Details & Inquiries
              </h3>

              <div className="space-y-4 text-xs font-semibold text-gray-300">
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Date</span>
                  <span className="text-sm font-bold text-white">{event.date}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Time</span>
                  <span className="text-sm font-bold text-white">{event.time}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Venue / Gathering Point</span>
                  <span className="text-sm font-bold text-white">{event.venue || event.location}</span>
                </div>

                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-[10px]">Event Contact</span>
                  <span className="text-sm font-bold text-ssr-red">{event.contactInfo}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>INQUIRE VIA WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
