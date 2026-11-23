import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Compass, Gauge, Users } from 'lucide-react';
import InnerPageHero from '@/components/hero/InnerPageHero';

export const metadata = {
  title: 'About The Brotherhood',
  description:
    'Learn about Southern Super Riders (SSR), Sri Lanka’s premier high-capacity motorcycle club born in the Southern Province.',
};

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        badge="ABOUT SOUTHERN SUPER RIDERS"
        title="THE STORY BEHIND THE BROTHERHOOD."
        subtitle="A SHARED PASSION. A UNITED COMMUNITY. ENDLESS ADVENTURES."
        description="Southern Super Riders brings together passionate high-capacity motorcycle enthusiasts from Sri Lanka’s Southern Province. United by deep camaraderie, respect for the open road, and a commitment to disciplined touring."
        breadcrumbs={[{ label: 'ABOUT' }]}
      />

      {/* Section 1: Who We Are & The Southern Spirit */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                01. WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                BORN ALONG THE SOUTHERN COASTLINE.
              </h2>
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                Southern Super Riders (SSR) was forged in Sri Lanka’s Southern Province—a region defined by sun-bleached coastal highways, dramatic headlands, and a rich motorsport heritage.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                We represent owners of high-capacity superbikes and touring machines who believe that motorcycling is more than simple transportation—it is an art of focus, mechanical mastery, and lifelong brotherhood. From Galle and Matara to Hambantota and beyond, our riders share a collective heartbeat on the asphalt.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-white">
                <div className="p-3.5 rounded-2xl bg-[#141418] border border-white/10 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-ssr-red" />
                  <span>Southern Province Base</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#141418] border border-white/10 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-ssr-red" />
                  <span>High-Capacity Focus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/sigiriya/img2.jpg"
                  alt="SSR Brotherhood Formation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-xs font-black tracking-widest uppercase text-ssr-red bg-black/80 px-2.5 py-1 rounded border border-ssr-red/30">
                      ONE BROTHERHOOD
                    </span>
                    <p className="text-xl font-black uppercase mt-2">
                      UNITED BY PASSION. DRIVEN BY RESPECT.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Our Passion & Riding Culture */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
              02. OUR RIDING CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              PRECISION, FORMATION & DISCIPLINE.
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Real high-performance riding requires uncompromising discipline. At SSR, our riding ethos centers on responsibility toward our fellow riders, the public, and the machines we command.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-ssr-red/10 border border-ssr-red/30 text-ssr-red flex items-center justify-center mb-6 group-hover:bg-ssr-red group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2">
                Mandatory Armor & Gear
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Zero compromises on safety. Certified full-face helmets, armored riding jackets, riding pants, boots, and reinforced gloves are required on every official club ride.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-ssr-red/10 border border-ssr-red/30 text-ssr-red flex items-center justify-center mb-6 group-hover:bg-ssr-red group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2">
                Marshaled Formations
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Our rides are led by seasoned road captains and closed by dedicated sweepers. We maintain disciplined staggered formations and constant radio communication.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-ssr-red/10 border border-ssr-red/30 text-ssr-red flex items-center justify-center mb-6 group-hover:bg-ssr-red group-hover:text-white transition-colors">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black uppercase text-white tracking-tight mb-2">
                Community Responsibility
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We believe in serving Sri Lanka. Beyond leisure touring, we regularly mobilize our club network for charitable donation drives, disaster relief, and rural aid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Southern Super Riders? */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/Arugambay/img03.jpg"
                  alt="SSR Community Ride Experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                03. THE SSR ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                WHY SOUTHERN SUPER RIDERS?
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-ssr-red text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-sm font-black uppercase text-white">Authentic Brotherhood</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      A close-knit community where friendships extend far beyond the weekend ride.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-ssr-red text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-sm font-black uppercase text-white">Epic Island-Wide Expeditions</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Carefully curated long-distance tours such as Ride Sigiriya (1050+ KM), mountain climbs, and coastal sprints.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-ssr-red text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-sm font-black uppercase text-white">Rider Safety & Support</h4>
                    <p className="text-xs text-gray-400 mt-0.5">
                      On-road toolkits, emergency marshals, support vehicle coordination, and technical troubleshooting.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-4">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-ssr-red transition-all"
                >
                  <span>CONNECT WITH SSR</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
