import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function InnerPageHero({
  badge = 'SOUTHERN SUPER RIDERS',
  title,
  subtitle,
  description,
  breadcrumbs = [],
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-[#121216] via-[#0A0A0B] to-[#0A0A0B] border-b border-white/10 overflow-hidden">
      {/* Decorative background grid and red accent glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ssr-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ssr-red transition-colors">
              HOME
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-ssr-red transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-ssr-red font-bold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ssr-red/10 border border-ssr-red/30 text-ssr-red text-[11px] font-black tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-ssr-red" />
            <span>{badge}</span>
          </div>
        )}

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight max-w-4xl">
          {title}
        </h1>

        {/* Subtitle / Description */}
        {subtitle && (
          <p className="mt-3 text-lg sm:text-xl font-bold text-ssr-red tracking-wide uppercase max-w-3xl">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
