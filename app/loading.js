import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0A0A0B]">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-ssr-red border-t-transparent rounded-full animate-spin"></div>
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/assets/logo.jpg"
            alt="SSR Loading"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-4 text-xs font-black tracking-widest text-white uppercase animate-pulse">
        Southern Super Riders...
      </p>
    </div>
  );
}
