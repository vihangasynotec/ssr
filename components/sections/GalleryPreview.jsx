import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export default function GalleryPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>VISUAL ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              CAPTURED ON THE ROAD
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              From dawn highway runaways to brotherhood gatherings, explore moments that define the Southern Super Riders journey.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/15 hover:border-ssr-red transition-all duration-300 shadow-lg group self-start md:self-auto"
          >
            <span>EXPLORE GALLERY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Gallery Grid with initial limit of 6 */}
        <GalleryGrid initialLimit={6} />

      </div>
    </section>
  );
}
