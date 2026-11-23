'use client';

import { useState } from 'react';
import { EVENTS_DATA } from '@/data/events';
import EventCard from './EventCard';

export default function EventsExplorer() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Past Events',
    'Upcoming Events',
    'Group Meetups',
    'Community Events',
  ];

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
