'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '@/data/gallery';
import Lightbox from './Lightbox';

export default function GalleryGrid({ initialLimit = null }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const displayItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  const handleOpenLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveImageIndex(null);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : displayItems.length - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev < displayItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {GALLERY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-ssr-red text-white shadow-ssr-red'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative h-80 rounded-3xl overflow-hidden bg-gray-900 cursor-pointer shadow-xl hover:shadow-2xl hover:border-ssr-red/50 transition-all duration-300 border border-white/10"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="text-white space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-ssr-red bg-black/80 px-2 py-0.5 rounded border border-ssr-red/30">
                  {item.category}
                </span>
                <h4 className="text-base font-black uppercase tracking-wide">
                  {item.title}
                </h4>
                {item.location && (
                  <p className="text-xs text-gray-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-ssr-red" />
                    <span>{item.location}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Minimal static badge */}
            <div className="absolute top-3 left-3 group-hover:opacity-0 transition-opacity">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-black/75 text-white border border-white/10 backdrop-blur-sm shadow-sm">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <Lightbox
          item={displayItems[activeImageIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
