'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MessageSquare, ShieldCheck, Phone, Sparkles, Flame, Users, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export default function JoinCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-ssr-red/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#16161D] via-[#121217] to-[#0D0D11] border-2 border-white/10 hover:border-ssr-red/50 p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-500 group">
          
          {/* Subtle Speed Graphic Accents */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-ssr-red/15 rounded-full blur-3xl pointer-events-none group-hover:bg-ssr-red/20 transition-all duration-700" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ssr-deepred/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Responsive 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Compelling Typography & CTAs (7 Columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-ssr-red animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-ssr-red -ml-3" />
                <Sparkles className="w-3.5 h-3.5 text-ssr-red" />
                <span>CONNECT WITH SOUTHERN SUPER RIDERS</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
                YOUR NEXT JOURNEY <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ssr-red via-[#FF3B43] to-white drop-shadow-[0_0_35px_rgba(227,30,36,0.5)]">
                  STARTS HERE.
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
                Passionate about high-capacity motorcycles? Love exploring the roads of Sri Lanka with a bonded brotherhood? Connect with Southern Super Riders and ride alongside the island’s most disciplined riders.
              </p>

              {/* Quick Perks List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-ssr-red shrink-0" />
                  <span>Verified 600cc – 1400cc Fleet</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-ssr-red shrink-0" />
                  <span>100% Marshal Convoy Protocol</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-ssr-red shrink-0" />
                  <span>Cross-Country Endurance Rides</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-ssr-red shrink-0" />
                  <span>Community Service & Charity Drives</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-ssr-red to-[#B5121B] hover:from-[#FF2A32] hover:to-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.6)] hover:shadow-[0_0_45px_rgba(227,30,36,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5 border border-red-500/50"
                >
                  <span>CONTACT US TODAY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 bg-black/60 hover:bg-black/90 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 text-xs font-black tracking-widest uppercase rounded-2xl backdrop-blur-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>

              {/* Footer Specs Strip */}
              <div className="pt-6 flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-gray-400 font-mono border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-ssr-red" />
                  <span>Safety First Culture</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-ssr-red" />
                  <span>Zero Rider Left Behind</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-ssr-red" />
                  <span>Hotline: {BRAND.phone}</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-Impact Visual Showcase Stage (5 Columns) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              
              {/* Outer Card Wrapper with Glowing Neon Border */}
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden border-2 border-white/15 bg-black/70 shadow-[0_15px_45px_rgba(0,0,0,0.9)] group/card">
                
                {/* Visual Image Stage */}
                <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                  <Image
                    src="/images/sigiriya/img2.jpg"
                    alt="Southern Super Riders Fleet Brotherhood"
                    fill
                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 filter brightness-95 contrast-110"
                  />
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                </div>

                {/* Overlaid Live Telemetry Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-ssr-red animate-ping" />
                    <span>SOUTHERN PROVINCE</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-ssr-red text-white text-[10px] font-black uppercase tracking-wider shadow-[0_0_15px_#E31E24]">
                    DOWN SOUTH
                  </span>
                </div>

                {/* Bottom Content Over Image */}
                <div className="p-5 bg-gradient-to-b from-black/80 to-[#121217] border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-black text-white uppercase tracking-tight">
                        SOUTHERN SUPER RIDERS
                      </h4>
                      <p className="text-[11px] text-gray-400 font-mono tracking-wider">
                        GALLE • MATARA • HAMBANTOTA
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-ssr-red/15 border border-ssr-red/40 flex items-center justify-center text-ssr-red shadow-[0_0_15px_rgba(227,30,36,0.4)]">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gray-400">RIDE PROTOCOL</span>
                    <span className="text-ssr-red font-bold">DISCIPLINE & RESPECT</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}