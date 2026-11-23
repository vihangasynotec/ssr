'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, ArrowUpRight, Phone, MessageSquare, MapPin, Youtube, Facebook, Instagram, ShieldCheck, Heart } from 'lucide-react';
import { BRAND } from '@/lib/constants';
import { NAV_LINKS } from '@/data/navigation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Top red accent glow line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-ssr-red to-transparent opacity-90 shadow-[0_0_15px_#E31E24]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-ssr-red group-hover:shadow-[0_0_20px_rgba(227,30,36,0.6)] transition-all">
                <Image
                  src="/assets/logo.jpg"
                  alt="Southern Super Riders Crest"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-black text-2xl tracking-tighter text-white group-hover:text-ssr-red transition-colors block leading-tight">
                  SOUTHERN SUPER RIDERS
                </span>
                <p className="text-[11px] font-black text-ssr-red tracking-widest uppercase">
                  Sri Lanka • High-Capacity Motorcycle Club
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Bringing together passionate high-capacity motorcycle enthusiasts from Sri Lanka’s Southern Province.
              United by discipline, brotherhood, and the endless pursuit of the open road.
            </p>

            {/* Authentic Brand-Colored Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BRAND.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#FF0000] hover:border-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all shadow-sm"
                aria-label="SSR YouTube"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.5)] transition-all shadow-sm"
                aria-label="SSR Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-tr hover:from-[#FFDC80] hover:via-[#FD1D1D] hover:to-[#833AB4] hover:border-[#E4405F] hover:shadow-[0_0_15px_rgba(228,64,95,0.5)] transition-all shadow-sm"
                aria-label="SSR Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black hover:border-cyan-400 hover:shadow-[2px_2px_0px_#00F2FE,-2px_-2px_0px_#FE0979] transition-all shadow-sm"
                aria-label="SSR TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.05-.14z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-ssr-red pl-2.5">
              Explore SSR
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-ssr-red transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-ssr-red"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Direct Connect (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-black tracking-widest text-white uppercase border-l-2 border-ssr-red pl-2.5">
              Southern Hub Contact
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10 shadow-sm">
                <MapPin className="w-5 h-5 text-ssr-red flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white">Southern Province</span>
                  <span className="text-xs text-gray-400">Galle • Matara • Hambantota, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white/5 rounded-xl border border-white/10 shadow-sm">
                <Phone className="w-5 h-5 text-ssr-red flex-shrink-0" />
                <div className="flex-1">
                  <span className="block text-xs text-gray-400 font-semibold">Club Inquiries</span>
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="font-bold text-white hover:text-ssr-red transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-gray-400">
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-ssr-red shrink-0" />
            <span>&copy; {new Date().getFullYear()} Southern Super Riders (SSR). All rights reserved.</span>
          </div>

          {/* Developer Credit linking to itzmevihanga.vercel.app */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-gray-400">Developed by</span>
            <a
              href="https://itzmevihanga.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ssr-red hover:text-red-400 font-bold tracking-wide transition-colors inline-flex items-center gap-1 hover:underline"
              title="ItzmeVihanGa"
            >
              <span>ItzmeVihanGa</span>
              <ArrowUpRight className="w-3 h-3 text-ssr-red" />
            </a>
          </div>

          {/* Links & Scroll to top */}
          <div className="flex items-center gap-5">
            <Link href="/contact" className="font-bold text-ssr-red hover:underline">
              Contact Us
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-ssr-red hover:border-ssr-red shadow-sm transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span className="text-[11px] font-bold">TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}