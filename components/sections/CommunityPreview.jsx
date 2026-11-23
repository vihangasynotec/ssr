import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Shield, Award, Heart, Compass } from 'lucide-react';
import { COMMUNITY_VALUES } from '@/data/community';

export default function CommunityPreview() {
  const iconMap = {
    Shield: Shield,
    Award: Award,
    Heart: Heart,
    Compass: Compass,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>THE BROTHERHOOD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              UNITED BY TWO WHEELS
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              More than high-displacement machines. Southern Super Riders is built upon unconditional mutual respect, brotherhood, and collective social impact.
            </p>
          </div>

          <Link
            href="/community"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/15 hover:border-ssr-red transition-all duration-300 shadow-lg group self-start md:self-auto"
          >
            <span>MEET OUR COMMUNITY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COMMUNITY_VALUES.map((val) => {
            const Icon = iconMap[val.icon] || Shield;
            return (
              <div
                key={val.title}
                className="p-6 rounded-3xl bg-[#131317] border border-white/10 hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-ssr-red/10 border border-ssr-red/30 text-ssr-red flex items-center justify-center mb-4 group-hover:bg-ssr-red group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Full Banner Feature */}
        <div className="relative rounded-3xl overflow-hidden bg-black text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/images/herobackground.jpg"
              alt="SSR Community Ride"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-black text-ssr-red tracking-widest uppercase">
              THE SOUTHERN ETHOS
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight">
              “NO RIDER IS LEFT BEHIND. <br />
              WE START TOGETHER, WE ROLL TOGETHER.”
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Every ride is choreographed with safety marshals, sweepers, and technical support. We celebrate superbike culture with dignity, community pride, and responsible riding.
            </p>
            <div className="pt-2">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red"
              >
                <span>READ OUR BROTHERHOOD STORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
