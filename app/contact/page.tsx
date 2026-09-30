'use client';

import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { ZodiacWheelSvg } from '@/components/ZodiacWheelSvg';
import { EnquiryForm } from '@/components/EnquiryForm';
import { CONTACT_INFO } from '@/lib/astrology-data';
import { 
  MessageCircle, 
  Phone, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Flame 
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Contact Astro Ankush' }]} />

      {/* SECTION 1: HERO (Full-Screen Dark Maroon with Rotating Mandala) */}
      <section className="relative min-h-[55vh] flex items-center justify-center py-16 lg:py-20 bg-gradient-to-b from-[#1B0505] via-[#2A0808] to-[#08060A] overflow-hidden border-b border-[#E5B84B]/20 text-center">
        {/* Animated Rotating Zodiac Mandala */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none animate-spin-slow">
          <ZodiacWheelSvg className="w-full h-full" />
        </div>

        {/* Ambient Gold Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-[#E5B84B]/15 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08060A]/80 border border-[#E5B84B]/40 text-[#E5B84B] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9A2E]" />
            <span>Direct Spiritual Access</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7ECD3] mb-4">
            Let’s Find Your <span className="gold-gradient-text">Solution Together</span>
          </h1>

          <p className="font-marcellus text-lg sm:text-2xl text-[#E5B84B] mb-4">
            &ldquo;Do not doubt — with faith, results are certain.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-[#C9A96A] max-w-xl mx-auto leading-relaxed">
            Every moment spent in worry drains your life force. Connect directly with Astro Ankush on encrypted WhatsApp or direct telephone.
          </p>

          <SacredDivider withOm className="mt-6" />
        </div>
      </section>

      {/* SECTION 2: TWO BIG CONTACT CARDS (Primary Conversion) */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: WhatsApp (Emerald Green Glow) */}
            <div className="glass-card rounded-2xl p-8 border-2 border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 shadow-2xl hover:shadow-[#25D366]/20 hover:-translate-y-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8 fill-[#25D366] text-[#25D366]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#25D366] px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30">
                    Active & Instant
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A96A] mb-1">
                  Chat with Astro Ankush Now
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3] mb-3">
                  WhatsApp Direct
                </h3>
                <div className="font-bebas text-3xl sm:text-4xl text-[#25D366] tracking-wider mb-4">
                  {CONTACT_INFO.phoneDisplay}
                </div>
                <p className="text-xs text-[#C9A96A] leading-relaxed mb-6">
                  Send your birth details or explain your problem via text or voice note. Get immediate guidance and muhurtha scheduling.
                </p>
              </div>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 group-hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Open WhatsApp Chat →</span>
              </a>
            </div>

            {/* Card 2: Call Directly (Crimson Flame Glow) */}
            <div className="glass-card rounded-2xl p-8 border-2 border-[#C1121F]/40 hover:border-[#C1121F] transition-all duration-300 shadow-2xl hover:shadow-[#C1121F]/20 hover:-translate-y-2 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#C1121F]/20 border border-[#C1121F]/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8 text-[#C1121F] animate-bounce" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B6B] px-3 py-1 rounded-full bg-[#C1121F]/10 border border-[#C1121F]/30">
                    Voice Helpline
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-[#C9A96A] mb-1">
                  Speak with Astro Ankush Directly
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3] mb-3">
                  Direct Phone Call
                </h3>
                <div className="font-bebas text-3xl sm:text-4xl text-[#FF6B6B] tracking-wider mb-4">
                  {CONTACT_INFO.phoneDisplay}
                </div>
                <p className="text-xs text-[#C9A96A] leading-relaxed mb-6">
                  Prefer to talk in person? Dial now to reach our priority spiritual desk. Available 7 days a week from 8:00 AM to 10:00 PM IST.
                </p>
              </div>

              <a
                href={CONTACT_INFO.callUrl}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#8B0000] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C1121F]/30 group-hover:brightness-110 transition-all border border-white/20"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: +91 97797 50799 →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ENQUIRY FORM (Frontend-Only, WhatsApp Redirect) */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <EnquiryForm />
        </div>
      </section>

      {/* SECTION 4: "WHY PEOPLE TRUST US" MINI STRIP */}
      <section className="py-10 bg-[#120C16]/50 border-y border-[#E5B84B]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-[#E5B84B] mb-2" />
              <span className="text-xs font-bold text-[#F7ECD3] uppercase tracking-wider">100% Confidential</span>
              <span className="text-[11px] text-[#C9A96A]">Guaranteed spiritual privacy</span>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-[#FF9A2E] mb-2" />
              <span className="text-xs font-bold text-[#F7ECD3] uppercase tracking-wider">Quick Response</span>
              <span className="text-[11px] text-[#C9A96A]">Fast WhatsApp scheduling</span>
            </div>
            <div className="flex flex-col items-center">
              <Flame className="w-6 h-6 text-[#E5B84B] mb-2" />
              <span className="text-xs font-bold text-[#F7ECD3] uppercase tracking-wider">15+ Years Lineage</span>
              <span className="text-[11px] text-[#C9A96A]">Vedic Tantra authority</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-[#FF9A2E] mb-2" />
              <span className="text-xs font-bold text-[#F7ECD3] uppercase tracking-wider">Worldwide Online</span>
              <span className="text-[11px] text-[#C9A96A]">Global phone & video</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 & 6: CONSULTATION HOURS & SACRED SANCTUARY LOCATION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Consultation Hours */}
            <div className="glass-card p-8 rounded-2xl border border-[#E5B84B]/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#E5B84B]/10 border border-[#E5B84B]/40 flex items-center justify-center text-[#E5B84B]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#F7ECD3]">
                      Consultation Hours
                    </h3>
                    <span className="text-[11px] text-[#C9A96A]">Indian Standard Time (IST)</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#F7ECD3] mt-6">
                  <div className="flex justify-between py-2 border-b border-[#E5B84B]/15">
                    <span className="text-[#C9A96A]">Monday – Sunday</span>
                    <span className="font-bold text-[#E5B84B]">8:00 AM – 10:00 PM IST</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E5B84B]/15">
                    <span className="text-[#C9A96A]">Emergency Critical Cases</span>
                    <span className="font-bold text-[#25D366]">24/7 WhatsApp Hotline</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#E5B84B]/15">
                    <span className="text-[#C9A96A]">International Timezones</span>
                    <span className="text-[#F7ECD3]">Adjusted for US, UK, Canada & Gulf</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-[#1B0505]/60 border border-[#E5B84B]/20 text-xs text-[#C9A96A]">
                <p>
                  <strong className="text-[#E5B84B]">Note for Devotees:</strong> For in-person ashram appointments or Hawan participation, advance booking through WhatsApp is required to prepare the sacred samagri.
                </p>
              </div>
            </div>

            {/* Dark Styled Map / Spiritual Sanctum Embed */}
            <div className="glass-card p-8 rounded-2xl border border-[#E5B84B]/25 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF9A2E]/10 border border-[#FF9A2E]/40 flex items-center justify-center text-[#FF9A2E]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-[#F7ECD3]">
                      Sacred Sanctum & Global Office
                    </h3>
                    <span className="text-[11px] text-[#C9A96A]">Punjab & Haridwar, India</span>
                  </div>
                </div>

                <p className="text-xs text-[#C9A96A] leading-relaxed mb-4">
                  Astro Ankush conducts regular Hawans and spiritual anushthans from sanctified Vedic temple premises. Remote devotees receive photographic and video confirmation of their personal sankalpas.
                </p>
              </div>

              {/* Dark Styled Visual Map Container */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-[#E5B84B]/30 bg-[#050407] flex items-center justify-center">
                {/* Visual Radial Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#E5B84B_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-[#C1121F] border border-white/40 flex items-center justify-center text-white mb-2 shadow-lg animate-pulse">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="font-cinzel text-sm font-bold text-[#F7ECD3]">
                    Astro Ankush Ashram Sanctum
                  </div>
                  <div className="text-[11px] text-[#E5B84B] mt-0.5">
                    Serving Seekers in Over 35 Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-[#1B0505] to-[#250808] border-t border-[#E5B84B]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-3xl font-bold text-[#F7ECD3] mb-3">
            Your Solution is Only One Message Away
          </h2>
          <p className="text-xs sm:text-sm text-[#C9A96A] mb-8">
            Do not let another day slip away in sorrow. Contact Astro Ankush directly now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Message on WhatsApp Now</span>
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="px-8 py-4 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
