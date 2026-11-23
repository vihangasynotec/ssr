import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, HeartHandshake, Gauge } from 'lucide-react';

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image */}
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/sigiriya/img2.jpg"
                  alt="Southern Super Riders Fleet"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-ssr-red uppercase bg-black/80 px-2.5 py-1 rounded border border-ssr-red/30">
                      SOUTHERN BROTHERHOOD
                    </span>
                    <p className="text-white font-bold text-lg mt-1.5">
                      Galle • Matara • Hambantota
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Overlapping Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#16161B] p-5 rounded-2xl shadow-2xl border border-white/10 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-ssr-red/10 border border-ssr-red/30 flex items-center justify-center text-ssr-red">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase text-white">
                      United Brotherhood
                    </span>
                    <span className="text-[11px] text-gray-400 font-medium">
                      Never ride alone
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>ABOUT THE BROTHERHOOD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              MORE THAN A RIDING CLUB. <br />
              <span className="text-ssr-red">IT'S A BROTHERHOOD.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              Southern Super Riders brings together passionate high-capacity motorcycle enthusiasts from Sri Lanka’s Southern Province. We share the road, explore new destinations, build friendships, and create unforgettable memories through every ride.
            </p>

            {/* Key Club Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#141418] border border-white/10">
                <ShieldCheck className="w-5 h-5 text-ssr-red mb-2" />
                <h3 className="text-xs font-black uppercase text-white">Strict Discipline</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Full armor, lane formation safety, and certified route marshals.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#141418] border border-white/10">
                <Gauge className="w-5 h-5 text-ssr-red mb-2" />
                <h3 className="text-xs font-black uppercase text-white">High Capacity</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Engineered for superbike touring, highway cruising, and endurance.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all duration-300 shadow-ssr-red group"
              >
                <span>DISCOVER SSR</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
