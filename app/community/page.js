import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import InnerPageHero from '@/components/hero/InnerPageHero';
import { PILLARS } from '@/data/community';

export const metadata = {
  title: 'Our Riding Community & Brotherhood',
  description:
    'Discover the people, discipline, values, and community initiatives behind Southern Super Riders Sri Lanka.',
};

export default function CommunityPage() {
  return (
    <>
      <InnerPageHero
        badge="THE SSR FAMILY"
        title="UNITED BY TWO WHEELS."
        subtitle="MORE THAN MOTORCYCLES. A COMMUNITY BUILT ON PASSION, RESPECT, AND UNFORGETTABLE JOURNEYS."
        description="We ride shoulder-to-shoulder with discipline, looking out for one another across thousands of kilometers of Sri Lankan roads."
        breadcrumbs={[{ label: 'COMMUNITY' }]}
      />

      {/* Section 1: The SSR Brotherhood */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                THE FOUNDATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                ONE BROTHERHOOD. NO ONE RIDES ALONE.
              </h2>
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                In a world that moves fast, Southern Super Riders offers an enduring anchor: authentic brotherhood. On the open road, social backgrounds dissolve. What remains is mutual trust, shared passion, and unyielding support.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                When an SSR rider breaks down, the pack stops. When rain falls in the mountain passes, riders shelter and push through together. That is the creed that makes Southern Super Riders respected across Sri Lanka.
              </p>

              <div className="pt-2">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red group"
                >
                  <span>JOIN THE BROTHERHOOD</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/sigiriya/img1.jpg"
                  alt="SSR Brotherhood on the road"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-lg font-black uppercase">
                      Southern Province • Sri Lanka
                    </p>
                    <p className="text-xs text-gray-400 font-medium">
                      One Brotherhood. One Passion. Endless Roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Club Pillars */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
              OUR PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              HOW WE STAND UNITED
            </h2>
            <p className="text-base text-gray-400 leading-relaxed">
              Three steadfast principles define every mile we ride, every event we host, and every member we welcome into SSR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div
                key={p.number}
                className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black text-ssr-red/30 group-hover:text-ssr-red transition-colors">
                    {p.number}
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-4 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Social Impact & Humanitarian Outreach */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/donations/img01.jpg"
                  alt="SSR Flood Relief Drive"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                GIVING BACK TO SRI LANKA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                MORE THAN MOTORCYCLES: SERVICE IN ACTION.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                When monsoon floods severely impact rural communities across Southern and Uva provinces, Southern Super Riders leverages its logistics, support vehicles, and rider network to deliver hands-on disaster relief.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                From purchasing dry rations and clean drinking water to assembling stationery packs for school children, we ride with purpose and heart.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/10 hover:border-ssr-red transition-all shadow-md"
                >
                  <span>CONNECT FOR CHARITY COLLABORATIONS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Real Community Donations & Humanitarian Gallery */}
      <section className="py-20 lg:py-28 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-3">
            <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
              DONATIONS IN ACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              FIELD AID, RELIEF CONVOYS & CHARITY DELIVERIES
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Real moments captured from Southern Super Riders flood relief operations, food ration packs distribution, and grassroots school supplies drives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: '/images/donations/img01.jpg', label: 'Flood Relief Direct Distribution' },
              { src: '/images/donations/img02.jpg', label: 'Emergency Dry Rations Packing' },
              { src: '/images/donations/img03.jpg', label: 'School Supplies & Children Kits' },
              { src: '/images/donations/img04.jpg', label: 'Rural Village Doorstep Delivery' },
              { src: '/images/donations/img05.jpg', label: 'Community Volunteer Convoy' },
              { src: '/images/donations/img06.jpg', label: 'Disaster Relief Coordination' },
              { src: '/images/donations/img07.jpg', label: 'Heavy Goods Logistics Packing' },
              { src: '/images/donations/img08.jpg', label: 'Direct Aid Handover' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:border-ssr-red/50 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
