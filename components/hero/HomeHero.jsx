'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import HeroParticles from '@/components/particles/HeroParticles';

export default function HomeHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Autoplay muted attempt prevented:', err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden flex flex-col justify-center bg-[#0A0A0B]">
      {/* 1. Full-Bleed Auto-Playing Background Video (Always Muted) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-80 scale-105 transition-all duration-1000"
        >
          <source src="/assets/video/bg.mp4" type="video/mp4" />
          <source src="/video/bg.mp4" type="video/mp4" />
        </video>

        {/* Top Navbar Dark Fade Gradient */}
        <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B]/75 to-transparent" />

        {/* Ambient Center Radial Vignette for Content Readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,11,0.25)_0%,rgba(10,10,11,0.5)_55%,rgba(10,10,11,0.9)_100%)]" />

        {/* Bottom Smooth Dark Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent" />
      </div>

      {/* 2. Floating Exhaust Embers & Interactive Particles */}
      <HeroParticles />

      {/* 3. Centered Content Floating Seamlessly Over Background Video */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center my-auto">
        
        {/* Top Badge: Location & Club */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-2xl text-white text-xs font-black tracking-widest uppercase hover:border-ssr-red/60 transition-all transform hover:scale-105">
            <span className="w-2.5 h-2.5 rounded-full bg-ssr-red animate-ping" />
            <span className="text-ssr-red font-black tracking-wider">SRI LANKA</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-200">SOUTHERN PROVINCE HIGH-CAPACITY MOTORCYCLE CLUB</span>
          </div>
        </div>

        {/* Cinematic Headline - Large SOUTHERN with Perfectly Proportioned SUPER RIDERS */}
        <h1 className="w-full max-w-5xl mx-auto select-none my-3 sm:my-5 drop-shadow-[0_10px_30px_rgba(0,0,0,0.95)]">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-white leading-none">
            SOUTHERN
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wide uppercase text-white mt-1 sm:mt-2 leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
            SUPER RIDERS
          </span>
        </h1>

        {/* Aerodynamic Speed Divider */}
        <div className="flex items-center justify-center gap-3 w-full max-w-sm my-3 sm:my-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-ssr-red to-transparent opacity-80" />
          <div className="w-2 h-2 rounded-full bg-ssr-red shadow-[0_0_10px_#E31E24]" />
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-ssr-red to-transparent opacity-80" />
        </div>

        {/* Tagline */}
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-wider uppercase mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          ONE BROTHERHOOD <span className="text-ssr-red">•</span> ONE PASSION <span className="text-ssr-red">•</span> ENDLESS ROADS
        </p>

        {/* Descriptive Narrative */}
        <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium leading-relaxed max-w-xl mx-auto mb-8 drop-shadow-[0_3px_10px_rgba(0,0,0,0.98)]">
          Born in Sri Lanka’s Southern Province, united by the thunder of high-capacity machines and the unyielding spirit of the open tarmac.
        </p>

        {/* Action Buttons: High-Octane Racing Red Glow & Dark Glass */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mx-auto">
          <Link
            href="/rides"
            className="group relative w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-ssr-red to-[#B5121B] hover:from-[#FF2A32] hover:to-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-2xl shadow-[0_0_30px_rgba(227,30,36,0.6)] hover:shadow-[0_0_50px_rgba(227,30,36,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 overflow-hidden border border-red-500/50"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
            <span className="relative z-10">EXPLORE OUR RIDES</span>
            <ArrowUpRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>

          <Link
            href="/join"
            className="w-full sm:w-auto px-10 py-4 bg-black/60 hover:bg-black/80 text-white border-2 border-white/20 hover:border-ssr-red text-xs font-black tracking-widest uppercase rounded-2xl backdrop-blur-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2.5"
          >
            <span>JOIN THE BROTHERHOOD</span>
          </Link>
        </div>

      </div>
    </section>
  );
}