'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Disable body scroll while loading
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      // Dynamic acceleration sweep
      const step = current < 40 ? Math.floor(Math.random() * 4) + 3 : Math.floor(Math.random() * 6) + 4;
      current += step;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setSpeed(299);
        clearInterval(interval);

        // Smooth quick fade out sequence
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'unset';
            if (typeof window !== 'undefined') {
              window.dispatchEvent(new CustomEvent('ssr_preloader_finished'));
            }
          }, 500);
        }, 350);
      } else {
        setProgress(current);
        setSpeed(Math.round((current / 100) * 299));
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  // Gauge calculations (270 degree sweep from -135deg to +135deg)
  const arcRadius = 100;
  const circumference = 2 * Math.PI * arcRadius;
  const arcLength = circumference * (270 / 360); // 471.24px
  const strokeOffset = arcLength - (arcLength * progress) / 100;
  const needleAngle = -135 + (progress / 100) * 270;

  // Gear Calculation (N, 1, 2, 3, 4, 5, 6)
  let gear = 'N';
  let isNeutral = true;
  if (progress > 15 && progress <= 35) {
    gear = '1';
    isNeutral = false;
  } else if (progress > 35 && progress <= 55) {
    gear = '2';
    isNeutral = false;
  } else if (progress > 55 && progress <= 72) {
    gear = '3';
    isNeutral = false;
  } else if (progress > 72 && progress <= 88) {
    gear = '4';
    isNeutral = false;
  } else if (progress > 88 && progress <= 97) {
    gear = '5';
    isNeutral = false;
  } else if (progress > 97) {
    gear = '6';
    isNeutral = false;
  }

  // Speedometer tick markers
  const speedTicks = [0, 50, 100, 150, 200, 250, 299];

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#0A0A0B] flex flex-col items-center justify-center p-6 select-none transition-all duration-500 ease-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient racing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ssr-red/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Speedometer Instrument Cluster */}
      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        
        {/* Top Mini Brand Pill */}
        <div className="flex items-center gap-2 mb-6">
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-md">
            <Image
              src="/assets/logo.jpg"
              alt="SSR"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xs font-black tracking-widest text-white uppercase font-mono">
            SOUTHERN <span className="text-ssr-red">SUPER RIDERS</span>
          </span>
        </div>

        {/* Speedometer Gauge Dial (Analog + Digital) */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          
          {/* SVG Gauge Cluster */}
          <svg className="w-full h-full" viewBox="0 0 240 240">
            {/* Center Outer Glow Ring */}
            <circle
              cx="120"
              cy="120"
              r="108"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />

            {/* Background Inactive Arc Track */}
            <circle
              cx="120"
              cy="120"
              r={arcRadius}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="7"
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeLinecap="round"
              transform="rotate(135 120 120)"
            />

            {/* Active Speedometer Red Progress Arc */}
            <circle
              cx="120"
              cy="120"
              r={arcRadius}
              fill="none"
              stroke="#E31E24"
              strokeWidth="7"
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              transform="rotate(135 120 120)"
              className="filter drop-shadow-[0_0_10px_rgba(227,30,36,0.85)] transition-all duration-75 ease-out"
            />

            {/* Dial Tick Marks */}
            {speedTicks.map((val) => {
              const tickAngle = -135 + (val / 299) * 270;
              const rad = (tickAngle - 90) * (Math.PI / 180);
              const innerRadius = 88;
              const outerRadius = 96;
              const textRadius = 75;

              const x1 = 120 + innerRadius * Math.cos(rad);
              const y1 = 120 + innerRadius * Math.sin(rad);
              const x2 = 120 + outerRadius * Math.cos(rad);
              const y2 = 120 + outerRadius * Math.sin(rad);
              const tx = 120 + textRadius * Math.cos(rad);
              const ty = 120 + textRadius * Math.sin(rad) + 3;

              const isReached = speed >= val;

              return (
                <g key={val}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={isReached ? '#E31E24' : 'rgba(255,255,255,0.25)'}
                    strokeWidth={val % 100 === 0 || val === 299 ? '2.5' : '1.5'}
                    className="transition-colors duration-150"
                  />
                  <text
                    x={tx}
                    y={ty}
                    fill={isReached ? '#FFFFFF' : 'rgba(255,255,255,0.3)'}
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="monospace"
                    textAnchor="middle"
                    className="transition-colors duration-150"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Illuminated Needle */}
            <g transform={`rotate(${needleAngle} 120 120)`} className="transition-transform duration-75 ease-out">
              {/* Needle Blade */}
              <line
                x1="120"
                y1="120"
                x2="120"
                y2="28"
                stroke="#FF2A32"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="filter drop-shadow-[0_0_8px_#E31E24]"
              />
              {/* Inner Needle Tip Highlight */}
              <line
                x1="120"
                y1="70"
                x2="120"
                y2="30"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Center Needle Pivot Pin */}
              <circle cx="120" cy="120" r="10" fill="#121215" stroke="#E31E24" strokeWidth="2.5" />
              <circle cx="120" cy="120" r="4" fill="#FFFFFF" />
            </g>
          </svg>

          {/* Central Digital HUD Display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-7">
            
            {/* Gear Position Indicator */}
            <div className="mb-0.5">
              <span
                className={`inline-block px-2 py-0.5 rounded text-[11px] font-black font-mono tracking-wider border transition-colors ${
                  isNeutral
                    ? 'text-emerald-400 bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.35)]'
                    : 'text-white bg-ssr-red/20 border-ssr-red/50 shadow-[0_0_10px_rgba(227,30,36,0.35)]'
                }`}
              >
                GEAR {gear}
              </span>
            </div>

            {/* Digital Speed Number */}
            <div className="flex items-baseline justify-center">
              <span className="text-5xl sm:text-6xl font-black font-mono text-white tracking-tighter leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                {speed}
              </span>
            </div>

            {/* Speed Unit */}
            <span className="text-[10px] font-black font-mono tracking-[0.2em] text-ssr-red uppercase mt-0.5">
              KM / H
            </span>
          </div>

        </div>

        {/* Minimal Bottom Status Bar */}
        <div className="w-full max-w-xs mt-3 flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ssr-red animate-ping" />
            <span className="text-gray-300 font-bold uppercase text-[11px] tracking-wider">
              {progress >= 100 ? 'READY TO RIDE' : 'THROTTLE ENGAGED'}
            </span>
          </div>
          <span className="text-white font-black text-xs">
            {progress}%
          </span>
        </div>

      </div>
    </div>
  );
}