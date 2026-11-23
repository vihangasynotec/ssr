import Link from 'next/link';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0A0A0B] px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-ssr-red/10 border border-ssr-red/30 text-ssr-red flex items-center justify-center mx-auto shadow-inner">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
            404 • DETOUR
          </span>
          <h1 className="text-4xl font-black text-white uppercase tracking-tight">
            Off The Map
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            The road you are looking for has taken a sharp turn or doesn’t exist. Rejoin the pack on the main route.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-ssr-red hover:bg-ssr-deepred text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-ssr-red transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO SSR HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
