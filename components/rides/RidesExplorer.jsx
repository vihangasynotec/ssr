'use client';

import { useState } from 'react';
import { Search, Gauge, MapPin, ArrowUpRight } from 'lucide-react';
import RideCard from './RideCard';
import Image from 'next/image';
import Link from 'next/link';

export default function RidesExplorer({ initialRides = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Group Rides',
    'Long Distance Rides',
    'Coastal Rides',
    'Mountain Rides',
    'Special Journeys',
  ];

  const filteredRides = initialRides.filter((ride) => {
    const matchesCategory =
      selectedCategory === 'All' || ride.category === selectedCategory;
    const matchesSearch =
      ride.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sigiriyaRide = initialRides.find((r) => r.slug === 'ride-sigiriya-2026');

  return (
    <div>
      {/* Featured Headline Banner: Ride Sigiriya 2026 */}
      {sigiriyaRide && (
        <div className="mb-14 bg-[#131317] rounded-3xl border border-white/10 shadow-2xl overflow-hidden group hover:border-ssr-red/50 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[360px] overflow-hidden">
              <Image
                src={sigiriyaRide.coverImage}
                alt={sigiriyaRide.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full bg-ssr-red text-white text-[11px] font-black uppercase tracking-widest shadow-md">
                  FEATURED PAST ADVENTURE
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-ssr-red/15 text-ssr-red border border-ssr-red/30 font-black text-xs uppercase tracking-wider">
                    <Gauge className="w-3.5 h-3.5" />
                    {sigiriyaRide.distance}
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {sigiriyaRide.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors">
                  {sigiriyaRide.title}
                </h3>

                <p className="text-xs font-bold text-ssr-red uppercase tracking-wider">
                  {sigiriyaRide.subtitle}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {sigiriyaRide.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <MapPin className="w-4 h-4 text-ssr-red" />
                  <span>{sigiriyaRide.destination}</span>
                </div>
              </div>

              <div>
                <Link
                  href={`/rides/${sigiriyaRide.slug}`}
                  className="w-full sm:w-auto px-7 py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl transition-all shadow-ssr-red flex items-center justify-center gap-2"
                >
                  <span>VIEW FULL EXPEDITION DETAILS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="bg-[#131317] p-4 sm:p-6 rounded-3xl border border-white/10 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-ssr-red text-white shadow-ssr-red'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rides or destinations..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-medium focus:outline-none focus:border-ssr-red placeholder-gray-500"
          />
        </div>
      </div>

      {/* Ride Cards Grid */}
      {filteredRides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-[#131317] border border-white/10">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
            No matching rides found
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-ssr-red text-white text-xs font-bold uppercase rounded-lg"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
