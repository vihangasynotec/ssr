import InnerPageHero from '@/components/hero/InnerPageHero';
import ContactForm from '@/components/forms/ContactForm';
import { Phone, MessageSquare, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Contact Southern Super Riders',
  description:
    'Contact Southern Super Riders (SSR) in the Southern Province of Sri Lanka. Call +94 78 563 2545 or chat on WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        badge="GET IN TOUCH"
        title="LET'S CONNECT."
        subtitle="OFFICIAL CONTACT CHANNELS FOR SOUTHERN SUPER RIDERS."
        description="Whether you have an event inquiry, brand partnership proposal, media request, or community question, our team is ready to assist."
        breadcrumbs={[{ label: 'CONTACT' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Direct Info & Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                  HEADQUARTERS & BASE
                </span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                  SOUTHERN SUPER RIDERS
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Headquartered across the Southern Province of Sri Lanka. Coordinating rides and events spanning Galle, Matara, Hambantota, and island-wide routes.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#141418] border border-white/10 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-ssr-red flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Region Base
                    </span>
                    <span className="text-sm font-black text-white">
                      Southern Province, Sri Lanka
                    </span>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Galle • Matara • Hambantota
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#141418] border border-white/10 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-ssr-red flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Official Club Hotline
                    </span>
                    <a
                      href={`tel:${BRAND.phoneRaw}`}
                      className="text-base font-black text-white hover:text-ssr-red transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Available for verified club calls & ride inquiries
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#141418] border border-white/10 flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                      Instant WhatsApp Desk
                    </span>
                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-black text-emerald-400 hover:underline block"
                    >
                      Connect on WhatsApp (+94 78 563 2545)
                    </a>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Fastest response for rider communications
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Follow Official Social Channels
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={BRAND.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-ssr-red hover:border-ssr-red shadow-sm transition-all"
                    title="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] shadow-sm transition-all"
                    title="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E4405F] hover:border-[#E4405F] shadow-sm transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black hover:border-white/20 shadow-sm transition-all"
                    title="TikTok"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.18 8.18 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.05-.14z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
