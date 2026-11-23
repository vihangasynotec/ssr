'use client';

import { Suspense, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float } from '@react-three/drei';
import MotorcycleModel from './MotorcycleModel';
import Image from 'next/image';
import { RotateCw, Sparkles } from 'lucide-react';

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm z-20">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-ssr-red border-t-transparent rounded-full animate-spin"></div>
        <span className="text-[10px] font-black text-ssr-red">SSR</span>
      </div>
      <p className="mt-3 text-xs font-bold tracking-widest text-ssr-black uppercase">
        Loading 3D Machine...
      </p>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div className="relative w-full h-full min-h-[420px] flex items-center justify-center">
      <div className="relative w-full max-w-lg h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
        <Image
          src="/images/herobackground.jpg"
          alt="SSR Superbike Display"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <p className="text-white text-xs font-bold tracking-wider uppercase">
            Southern Super Riders • Studio Showcase
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MotorcycleScene() {
  const [isInteracting, setIsInteracting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  if (hasError) {
    return <ErrorFallback />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] sm:h-[520px] lg:h-[600px] select-none flex items-center justify-center"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
    >
      <Suspense fallback={<SceneLoader />}>
        <Canvas
          shadows
          camera={{ position: [2.8, 1.2, 3.8], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="cursor-grab active:cursor-grabbing"
          onError={() => setHasError(true)}
        >
          {/* Studio Lighting */}
          <ambientLight intensity={1.2} />
          
          {/* Main Key Light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={2.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />
          
          {/* Soft Fill Light */}
          <directionalLight position={[-5, 4, -4]} intensity={0.9} />
          
          {/* Signature SSR Red Accent Light */}
          <pointLight position={[2, 1.5, -2]} color="#E31E24" intensity={4} distance={8} />
          <pointLight position={[-2, 0.5, 2]} color="#B5121B" intensity={2} distance={6} />
          <spotLight
            position={[0, 6, 2]}
            angle={0.6}
            penumbra={0.8}
            intensity={2}
            color="#FFFFFF"
          />

          {/* Environment Reflections */}
          <Environment preset="city" />

          {/* 3D Model with suspension breathing */}
          <MotorcycleModel isHovered={isInteracting} />

          {/* Realistic Floor Contact Shadows */}
          <ContactShadows
            position={[0, -0.66, 0]}
            opacity={0.75}
            scale={10}
            blur={1.8}
            far={4}
            color="#111111"
          />

          {/* Orbit Controls with angle clamps */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minDistance={2.5}
            maxDistance={5.5}
            dampingFactor={0.05}
            rotateSpeed={0.8}
          />
        </Canvas>
      </Suspense>

      {/* Interactive Controls Overlay Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-ssr-sm text-ssr-darkgrey text-[11px] font-bold tracking-wider uppercase">
          <RotateCw className="w-3.5 h-3.5 text-ssr-red animate-spin" style={{ animationDuration: '6s' }} />
          <span>Interactive 3D • Drag to Inspect</span>
        </div>
      </div>
    </div>
  );
}
