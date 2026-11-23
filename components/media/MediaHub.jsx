'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, X, Youtube, Facebook, Instagram, ArrowUpRight, ExternalLink } from 'lucide-react';
import { MEDIA_DATA } from '@/data/media';

export default function MediaHub() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Ride Films', 'Expeditions', 'Community Service', 'Mountain Series'];

  const filteredVideos = selectedFilter === 'All'
    ? MEDIA_DATA.featuredVideos
    : MEDIA_DATA.featuredVideos.filter((v) => v.category === selectedFilter);

  return (
    <div>
      {/* Featured YouTube Channel Banner */}
      <div className="mb-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#7A0C10] via-[#3D0608] to-[#121215] text-white shadow-2xl relative overflow-hidden border border-red-600/30">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-black uppercase tracking-wider">
            <Youtube className="w-4 h-4 fill-current text-ssr-red" />
            <span>OFFICIAL YOUTUBE CHANNEL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Southern Super Riders on YouTube
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {MEDIA_DATA.youtubeChannel.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={MEDIA_DATA.youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-ssr-red inline-flex items-center gap-2"
            >
              <span>VISIT YOUTUBE CHANNEL</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Large Decorative Icon Background */}
        <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none text-white">
          <Youtube className="w-72 h-72" />
        </div>
      </div>

      {/* Video Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedFilter === f
                ? 'bg-ssr-red text-white shadow-ssr-red'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group bg-[#131317] rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:border-ssr-red/50 hover:shadow-ssr-red transition-all duration-300 flex flex-col"
          >
            <div
              className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-950 cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-ssr-red text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-black/80 text-white border border-white/15 backdrop-blur-sm">
                  {video.category}
                </span>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/80 text-white border border-white/10 backdrop-blur-sm">
                  {video.duration}
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-ssr-red transition-colors">
                  {video.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Youtube className="w-4 h-4 text-ssr-red" />
                  {video.channel || 'SSR YOUTUBE'}
                </span>

                <button
                  onClick={() => setActiveVideo(video)}
                  className="px-4 py-2 bg-ssr-red hover:bg-ssr-deepred text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Platforms Showcase */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
            CONNECT EVERYWHERE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Official Social Media Hub
          </h3>
          <p className="text-xs text-gray-400">
            Catch real-time touring updates, behind-the-scenes reels, and mechanical vlogs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDIA_DATA.socialFeeds.map((feed) => {
            const isYouTube = feed.platform === 'YouTube';
            const isFacebook = feed.platform === 'Facebook';
            const isInstagram = feed.platform === 'Instagram';
            const isTikTok = feed.platform === 'TikTok';

            let cardBg = 'bg-[#131317] border-white/10 hover:border-ssr-red/50 hover:shadow-ssr-red';
            let iconBg = 'bg-white/5 border-white/10 text-white';
            let textColor = 'text-gray-400';
            let ctaColor = 'text-gray-300 group-hover:text-ssr-red';

            if (isYouTube) {
              cardBg = 'bg-gradient-to-br from-[#FF0000]/15 via-[#131317] to-[#121215] border-red-600/30 hover:border-[#FF0000] hover:shadow-[0_0_35px_rgba(255,0,0,0.45)]';
              iconBg = 'bg-[#FF0000] text-white shadow-[0_0_20px_rgba(255,0,0,0.6)] border-red-500';
              textColor = 'text-red-400';
              ctaColor = 'text-red-400 group-hover:text-white';
            } else if (isFacebook) {
              cardBg = 'bg-gradient-to-br from-[#1877F2]/15 via-[#131317] to-[#121215] border-blue-600/30 hover:border-[#1877F2] hover:shadow-[0_0_35px_rgba(24,119,242,0.45)]';
              iconBg = 'bg-[#1877F2] text-white shadow-[0_0_20px_rgba(24,119,242,0.6)] border-blue-400';
              textColor = 'text-blue-400';
              ctaColor = 'text-blue-400 group-hover:text-white';
            } else if (isInstagram) {
              cardBg = 'bg-gradient-to-br from-[#E4405F]/15 via-[#131317] to-[#121215] border-pink-500/30 hover:border-[#E4405F] hover:shadow-[0_0_35px_rgba(228,64,95,0.45)]';
              iconBg = 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4] text-white shadow-[0_0_20px_rgba(228,64,95,0.6)] border-pink-400';
              textColor = 'text-pink-400';
              ctaColor = 'text-pink-400 group-hover:text-white';
            } else if (isTikTok) {
              cardBg = 'bg-gradient-to-br from-[#00F2FE]/10 via-[#131317] to-[#FE0979]/10 border-cyan-500/30 hover:border-[#00F2FE] hover:shadow-[0_0_35px_rgba(0,242,254,0.35)]';
              iconBg = 'bg-black text-white shadow-[2px_2px_0px_#00F2FE,-2px_-2px_0px_#FE0979] border-white/20';
              textColor = 'text-cyan-400';
              ctaColor = 'text-cyan-400 group-hover:text-white';
            }

            return (
              <a
                key={feed.platform}
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-6 rounded-3xl border transition-all duration-300 group flex flex-col justify-between ${cardBg}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${iconBg}`}>
                      {isYouTube && <Youtube className="w-6 h-6 fill-current" />}
                      {isFacebook && <Facebook className="w-6 h-6 fill-current" />}
                      {isInstagram && <Instagram className="w-6 h-6" />}
                      {isTikTok && (
                        <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.05-.14z" />
                        </svg>
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <h4 className="text-base font-black text-white uppercase tracking-tight">
                      {feed.platform}
                    </h4>
                    <p className={`text-xs font-bold ${textColor}`}>
                      {feed.handle}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {feed.label}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <span className={`text-xs font-black uppercase tracking-wider transition-colors ${ctaColor}`}>
                    {feed.cta} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="relative w-full max-w-4xl bg-[#121215] rounded-3xl overflow-hidden shadow-2xl border border-white/15">
            <div className="p-4 bg-black/60 flex items-center justify-between text-white border-b border-white/10">
              <span className="text-xs font-black uppercase tracking-wider text-ssr-red">
                {activeVideo.title}
              </span>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                aria-label="Close Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative pt-[56.25%] w-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
