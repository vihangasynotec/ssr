'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, Sparkles } from 'lucide-react';

export default function HeroVideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Autoplay muted attempt prevented:', err);
          setIsPlaying(false);
        });
    }

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (!document.fullscreenElement) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto my-6 select-none group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(true)}
    >
      {/* Dynamic Ambient Red Backlight Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-ssr-red/30 via-ssr-deepred/20 to-ssr-red/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Video Frame */}
      <div
        onClick={togglePlay}
        className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/90 border-2 border-white/20 group-hover:border-ssr-red/60 shadow-[0_0_60px_rgba(227,30,36,0.35)] cursor-pointer"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          loop
          autoPlay
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/assets/video/bg.mp4" type="video/mp4" />
          <source src="/video/bg.mp4" type="video/mp4" />
          Your browser does not support high-definition video playback.
        </video>

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-ssr-red animate-ping" />
            <span className="w-2 h-2 rounded-full bg-ssr-red -ml-4" />
            <span>SSR CINEMATIC FLEET</span>
          </div>

          {/* Quick Sound Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 hover:bg-ssr-red backdrop-blur-md border border-white/15 hover:border-ssr-red text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-lg"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-ssr-red group-hover:text-white" />
                <span>UNMUTE</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">AUDIO ON</span>
              </>
            )}
          </button>
        </div>

        {/* Center Play Icon Overlay (Shown when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-10">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-ssr-red/90 text-white flex items-center justify-center shadow-[0_0_40px_rgba(227,30,36,0.8)] transform scale-100 hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
        )}

        {/* Bottom Control Bar Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2 z-10 pointer-events-auto">
          {/* Progress Bar Track */}
          <div className="w-full h-1 sm:h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-ssr-deepred to-ssr-red transition-all duration-150 shadow-[0_0_10px_#E31E24]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls Strip */}
          <div className="flex items-center justify-between text-white text-xs pt-0.5">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="hover:text-ssr-red transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleSound}
                className="hover:text-ssr-red transition-colors flex items-center gap-1 text-[11px] font-mono"
                aria-label="Sound Toggle"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-ssr-red" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <span className="text-[10px] font-mono text-gray-300 hidden sm:inline">
                SOUTHERN SUPER RIDERS • 4K
              </span>
            </div>

            <button
              onClick={toggleFullScreen}
              className="hover:text-ssr-red transition-colors p-1"
              aria-label="Toggle Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}