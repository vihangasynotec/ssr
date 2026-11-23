'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Sparkles, ExternalLink } from 'lucide-react';

export default function HomeAdModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let timer;

    const handlePreloaderDone = () => {
      // Small delay after preloader dissolves so the entrance feels smooth and intentional
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };

    // Listen for custom event from Preloader
    window.addEventListener('ssr_preloader_finished', handlePreloaderDone);

    // Fallback timer in case preloader is bypassed or finishes early
    const fallbackTimer = setTimeout(() => {
      setIsOpen((prev) => {
        if (!prev) return true;
        return prev;
      });
    }, 2400);

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('ssr_preloader_finished', handlePreloaderDone);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Official SSR Club Announcement"
      className={`fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 select-none transition-all duration-300 ease-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Dark frosted backdrop with radial red glow */}
      <div
        onClick={closeModal}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-ssr-red/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Modal Dialog Card */}
      <div
        className={`relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-[#0F0F13] border border-white/20 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(227,30,36,0.45)] transition-all duration-300 ease-out transform ${
          isClosing ? 'scale-95 translate-y-4 opacity-0' : 'scale-100 translate-y-0 opacity-100'
        }`}
      >
        {/* Top Accent Header Bar */}
        <div className="relative bg-[#16161C] px-4 py-2.5 sm:px-5 sm:py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ssr-red animate-ping" />
            <span className="w-2 h-2 rounded-full bg-ssr-red -ml-3.5" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-gray-200 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-ssr-red" />
              SPECIAL CLUB ANNOUNCEMENT • SSR
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            aria-label="Close Announcement"
            className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-ssr-red text-gray-400 hover:text-white border border-white/10 hover:border-ssr-red transition-all duration-200 shadow-sm"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider hidden sm:inline">
              ESC
            </span>
            <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
          </button>
        </div>

        {/* Ad Image Container */}
        <div className="relative bg-black/70 flex items-center justify-center p-2 sm:p-3 overflow-hidden">
          <div className="relative w-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center rounded-xl overflow-hidden group">
            {/* Fallback & High-Res Ad Image */}
            <img
              src="/images/ad.jpg"
              alt="Southern Super Riders Featured Announcement"
              className="w-full h-auto max-h-[68vh] object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => {
                // Fallback to assets folder if images path fails
                e.currentTarget.src = '/assets/ad.jpg';
              }}
            />
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="bg-[#14141A] px-4 py-3 sm:px-6 sm:py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold text-white tracking-wide">
              SOUTHERN SUPER RIDERS • SRI LANKA
            </p>
            <p className="text-[10px] text-gray-400 font-mono">
              High-Capacity Motorcycle Club • Down South
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <Link
              href="/events"
              onClick={closeModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(227,30,36,0.4)]"
            >
              EXPLORE EVENTS
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={closeModal}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}