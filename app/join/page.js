import InnerPageHero from '@/components/hero/InnerPageHero';
import MembershipForm from '@/components/forms/MembershipForm';
import { MessageSquare, Phone, Facebook, CheckCircle2 } from 'lucide-react';
import { BRAND } from '@/lib/constants';

export const metadata = {
  title: 'Join Southern Super Riders | Membership Enquiry',
  description:
    'Connect with Southern Super Riders. Submit your membership enquiry and ride with Sri Lanka’s premier superbike brotherhood.',
};

export default function JoinPage() {
  return (
    <>
      <InnerPageHero
        badge="BECOME PART OF SSR"
        title="READY TO RIDE WITH US?"
        subtitle="YOUR PASSION BELONGS ON THE ROAD. CONNECT WITH SOUTHERN SUPER RIDERS."
        description="Whether you ride a 600cc supersport, a 1000cc litre-class machine, or an adventure tourer, discover what it means to belong to a true brotherhood."
        breadcrumbs={[{ label: 'JOIN SSR' }]}
      />

      <section className="py-16 lg:py-24 bg-[#0A0A0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7">
              <MembershipForm />
            </div>

            {/* Right Column: Direct Channels & Criteria (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Quick Contact Card */}
              <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs font-black tracking-widest text-ssr-red uppercase">
                    DIRECT CLUB CONNECT
                  </span>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mt-1">
                    Prefer Direct Contact?
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Connect directly with our Southern membership coordinators via WhatsApp or phone.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs tracking-wider uppercase flex items-center justify-between shadow-sm transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Chat on WhatsApp
                    </span>
                    <span>+94 78 563 2545</span>
                  </a>

                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    className="w-full py-3.5 px-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-black text-xs tracking-wider uppercase flex items-center justify-between shadow-sm transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-ssr-red" />
                      Direct Telephone Call
                    </span>
                    <span>+94 78 563 2545</span>
                  </a>

                  <a
                    href={BRAND.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 bg-[#1877F2] hover:bg-blue-700 text-white rounded-xl font-black text-xs tracking-wider uppercase flex items-center justify-between shadow-sm transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Facebook className="w-4 h-4" />
                      Official Facebook Page
                    </span>
                    <span>Message Us</span>
                  </a>
                </div>
              </div>

              {/* Rider Expectations Checklist */}
              <div className="p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl space-y-4">
                <h4 className="text-sm font-black uppercase text-white tracking-wider border-l-2 border-ssr-red pl-2.5">
                  SSR Membership Criteria
                </h4>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                    <span>Ownership of a legally registered high-capacity motorcycle in Sri Lanka.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                    <span>Possession of a valid Sri Lankan motorcycle driving license.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                    <span>Commitment to wearing certified protective riding gear at all times.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-ssr-red flex-shrink-0 mt-0.5" />
                    <span>Respect for road discipline, group formation rules, and mutual brotherhood.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
