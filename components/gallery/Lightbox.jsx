'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

export default function Lightbox({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between z-10 text-white">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-ssr-red text-white text-[10px] font-black uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
            Southern Super Riders Official Gallery
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-ssr-red text-white transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4">
        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-ssr-red text-white transition-colors backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-5xl h-full max-h-[78vh] flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-ssr-red text-white transition-colors backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="z-10 text-center max-w-2xl mx-auto space-y-1.5 text-white pb-2">
        <h3 className="text-lg font-black uppercase tracking-wide">
          {item.title}
        </h3>
        {item.location && (
          <div className="flex items-center justify-center gap-1.5 text-xs text-ssr-red font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
          </div>
        )}
        {item.caption && (
          <p className="text-xs text-gray-300 font-normal">
            {item.caption}
          </p>
        )}
      </div>
    </div>
  );
}
