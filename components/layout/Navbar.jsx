'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { NAV_LINKS, CTA_LINK } from '@/data/navigation';
import { BRAND } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0B]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] border-b border-white/10 py-2.5 sm:py-3'
            : 'bg-[#0A0A0B]/85 backdrop-blur-lg border-b border-white/5 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LEFT SIDE: STRICTLY PRESERVED AS REQUESTED (Logo & Title Name) */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ssr-red rounded-xl p-1 shrink-0"
              aria-label="Southern Super Riders Home"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-2 border-white/20 group-hover:border-ssr-red group-hover:shadow-[0_0_15px_rgba(227,30,36,0.6)] transition-all">
                <Image
                  src="/assets/logo.jpg"
                  alt="Southern Super Riders Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl sm:text-2xl tracking-tighter text-white leading-none group-hover:text-ssr-red transition-colors">
                  SOUTHERN
                </span>
                <span className="text-[10px] sm:text-[11px] font-black tracking-[0.22em] text-ssr-red uppercase mt-0.5 leading-none">
                  SUPER RIDERS
                </span>
              </div>
            </Link>

            {/* CENTER: High-End Sleek Pill Navigation Capsule */}
            <nav
              className="hidden xl:flex items-center gap-1 bg-black/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-black tracking-wider uppercase transition-all duration-300 rounded-full group ${
                      isActive
                        ? 'bg-ssr-red text-white shadow-[0_0_20px_#E31E24]'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE: Redesigned WhatsApp Button + Glow Contact Us */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              {/* Upgraded Authentic WhatsApp Button */}
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.15)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300"
                title="Chat with SSR on WhatsApp"
                aria-label="Connect on WhatsApp"
              >
                {/* Live Online Pulse */}
                <span className="w-2 h-2 rounded-full bg-[#25D366] group-hover:bg-white animate-pulse" />
                
                {/* Official WhatsApp Handset & Bubble Vector */}
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
                </svg>

                <span className="text-xs font-mono font-bold tracking-wider hidden 2xl:inline">
                  WHATSAPP
                </span>
              </a>

              {/* Upgraded Glowing CONTACT US Button */}
              <Link
                href={CTA_LINK.href}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-ssr-red via-[#FF2A32] to-[#B5121B] hover:from-[#FF3B43] hover:to-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-full shadow-[0_0_25px_rgba(227,30,36,0.6)] hover:shadow-[0_0_35px_rgba(227,30,36,0.9)] hover:scale-105 active:scale-100 transition-all duration-300 border border-red-500/50 overflow-hidden"
              >
                <span className="relative z-10">{CTA_LINK.name}</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
              </Link>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Contact + Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3" />
                </svg>
              </a>

              <Link
                href={CTA_LINK.href}
                className="inline-flex items-center px-3.5 py-1.5 bg-ssr-red text-white text-xs font-black tracking-wider uppercase rounded-full shadow-[0_0_15px_#E31E24] sm:hidden"
              >
                CONTACT
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-ssr-red" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-md transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Slide-out Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 bg-[#121215] shadow-2xl border-l border-white/10 flex flex-col justify-between transition-transform duration-300 ease-out xl:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/assets/logo.jpg"
                alt="Southern Super Riders Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg text-white leading-none">SOUTHERN</span>
              <span className="text-[10px] font-black tracking-widest text-ssr-red uppercase">SUPER RIDERS</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-gray-400 hover:text-ssr-red hover:bg-white/5 focus:outline-none"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-6 overflow-y-auto flex-1">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Navigation</p>
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold tracking-wider transition-colors ${
                    isActive
                      ? 'bg-ssr-red text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-ssr-red'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-6 border-t border-white/10 bg-[#0A0A0B] space-y-3">
          <Link
            href={CTA_LINK.href}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 px-4 bg-ssr-red text-white text-center font-black text-xs tracking-widest uppercase rounded-xl shadow-ssr-red flex items-center justify-center gap-2"
          >
            <span>CONTACT SOUTHERN SUPER RIDERS</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-2 px-1">
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-ssr-red font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-ssr-red" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#25D366] hover:underline flex items-center gap-1"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}