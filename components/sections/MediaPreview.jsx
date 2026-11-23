'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Play, Youtube, Facebook, Instagram, X } from 'lucide-react';
import { MEDIA_DATA } from '@/data/media';

export default function MediaPreview() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const featuredVideos = MEDIA_DATA.featuredVideos.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0B] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
              <span>DIGITAL CHANNELS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              FOLLOW THE JOURNEY
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Immerse yourself in cinematic ride films, raw motorcycle acoustics, and social vlogs from the official Southern Super Riders channels.
            </p>
          </div>

          <Link
            href="/media"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-ssr-red text-white text-xs font-black tracking-widest uppercase rounded-xl border border-white/15 hover:border-ssr-red transition-all duration-300 shadow-lg group self-start md:self-auto"
          >
            <span>EXPLORE MEDIA</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {featuredVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Stage */}
              <div
                className="relative h-56 w-full overflow-hidden bg-gray-950 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-ssr-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-white border border-white/15 backdrop-blur-sm">
                    {video.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/80 text-white border border-white/10 backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Youtube className="w-4 h-4 text-ssr-red" />
                    {video.channel || 'SSR YOUTUBE'}
                  </span>

                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="text-xs font-black text-ssr-red hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Quick Bar with Authentic Brand Colors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {MEDIA_DATA.socialFeeds.map((feed) => {
            const isYouTube = feed.platform === 'YouTube';
            const isFacebook = feed.platform === 'Facebook';
            const isInstagram = feed.platform === 'Instagram';
            const isTikTok = feed.platform === 'TikTok';

            let cardBg = 'bg-[#131317] border-white/10 hover:border-ssr-red/50 hover:shadow-ssr-red';
            let iconBg = 'bg-white/5 border-white/10 text-white';
            let textColor = 'text-gray-400';

            if (isYouTube) {
              cardBg = 'bg-gradient-to-br from-[#FF0000]/15 via-[#131317] to-[#121215] border-red-600/30 hover:border-[#FF0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.45)]';
              iconBg = 'bg-[#FF0000] text-white shadow-[0_0_15px_rgba(255,0,0,0.6)] border-red-500';
              textColor = 'text-red-400 group-hover:text-red-300';
            } else if (isFacebook) {
              cardBg = 'bg-gradient-to-br from-[#1877F2]/15 via-[#131317] to-[#121215] border-blue-600/30 hover:border-[#1877F2] hover:shadow-[0_0_30px_rgba(24,119,242,0.45)]';
              iconBg = 'bg-[#1877F2] text-white shadow-[0_0_15px_rgba(24,119,242,0.6)] border-blue-400';
              textColor = 'text-blue-400 group-hover:text-blue-300';
            } else if (isInstagram) {
              cardBg = 'bg-gradient-to-br from-[#E4405F]/15 via-[#131317] to-[#121215] border-pink-500/30 hover:border-[#E4405F] hover:shadow-[0_0_30px_rgba(228,64,95,0.45)]';
              iconBg = 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white shadow-[0_0_15px_rgba(228,64,95,0.6)] border-pink-400';
              textColor = 'text-pink-400 group-hover:text-pink-300';
            } else if (isTikTok) {
              cardBg = 'bg-gradient-to-br from-[#00F2FE]/10 via-[#131317] to-[#FE0979]/10 border-cyan-500/30 hover:border-[#00F2FE] hover:shadow-[0_0_30px_rgba(0,242,254,0.35)]';
              iconBg = 'bg-black text-white shadow-[2px_2px_0px_#00F2FE,-2px_-2px_0px_#FE0979] border-white/20';
              textColor = 'text-cyan-400 group-hover:text-cyan-300';
            }

            return (
              <a
                key={feed.platform}
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 group flex items-center justify-between ${cardBg}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110 shrink-0 ${iconBg}`}>
                    {isYouTube && <Youtube className="w-5 h-5 fill-current" />}
                    {isFacebook && <Facebook className="w-5 h-5 fill-current" />}
                    {isInstagram && <Instagram className="w-5 h-5" />}
                    {isTikTok && (
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.05-.14z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className="block text-xs font-black uppercase text-white tracking-wide">
                      {feed.platform}
                    </span>
                    <span className={`text-[11px] font-mono font-bold tracking-tight block ${textColor}`}>
                      {feed.cta}
                    </span>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-white/15 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative w-full max-w-4xl bg-[#121215] rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <div className="p-4 bg-black/60 flex items-center justify-between text-white border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-wider text-ssr-red">
                {selectedVideo.title}
              </span>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative pt-[56.25%] w-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
