import React from 'react';
import Link from 'next/link';
import { SERVICES_DATA, CONTACT_INFO } from '@/lib/astrology-data';
import { Phone, Clock, ShieldCheck, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SacredDivider } from './SacredDivider';

export function Footer() {
  const topServices = SERVICES_DATA.slice(0, 6);

  return (
    <footer className="w-full bg-[#050407] border-t border-[#E5B84B]/20 text-[#F7ECD3] pt-16 pb-12 relative overflow-hidden">
      {/* Subtle radial warmth glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#E5B84B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#E5B84B]/15">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#E5B84B]/60 bg-gradient-to-br from-[#1B0505] to-[#08060A] flex items-center justify-center">
                <span className="text-[#E5B84B] font-serif text-xl font-bold leading-none select-none">
                  ॐ
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg font-bold tracking-wider text-[#F7ECD3]">
                  ASTRO ANKUSH
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#C9A96A] -mt-1 font-medium">
                  Vedic Astrologer & Tantra Specialist
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#C9A96A] leading-relaxed mt-2">
              By the divine grace of Maa Kali and Lord Shiva, Astro Ankush offers authentic Vedic astrology, Prashna Kundli remedies, and Agama Tantra sadhana to restore peace, love, health, and prosperity in your life.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E5B84B]/90 mt-1">
              <ShieldCheck className="w-4 h-4 text-[#FF9A2E]" />
              <span>100% Confidential & Sacred Spiritual Guidance</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-[#E5B84B] font-bold">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#C9A96A]">
              <li>
                <Link href="/" className="hover:text-[#E5B84B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5B84B] transition-colors">
                  About Astro Ankush
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#E5B84B] transition-colors">
                  All 12 Vedic Services
                </Link>
              </li>
              <li>
                <Link href="/why-us" className="hover:text-[#E5B84B] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#E5B84B] transition-colors">
                  Devotee Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E5B84B] transition-colors">
                  Puja & Ritual Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#E5B84B] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E5B84B] transition-colors">
                  Spiritual Astrology Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Vedic Services */}
          <div className="flex flex-col gap-3">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-[#E5B84B] font-bold">
              Featured Solutions
            </h3>
            <ul className="flex flex-col gap-2 text-xs text-[#C9A96A]">
              {topServices.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-[#E5B84B] transition-colors line-clamp-1"
                  >
                    • {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#E5B84B] font-medium hover:underline inline-block mt-1"
                >
                  View All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="flex flex-col gap-3">
            <h3 className="font-cinzel text-sm uppercase tracking-wider text-[#E5B84B] font-bold">
              Direct Contact
            </h3>
            <div className="flex flex-col gap-3 text-xs text-[#C9A96A]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C1121F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#F7ECD3]/60 uppercase">Direct Helpline</div>
                  <a
                    href={CONTACT_INFO.callUrl}
                    className="text-sm font-semibold text-[#F7ECD3] hover:text-[#E5B84B] transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#F7ECD3]/60 uppercase">Instant WhatsApp</div>
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#25D366] hover:underline"
                  >
                    Chat With Astro Ankush
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5B84B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-[#F7ECD3]/60 uppercase">Consultation Hours</div>
                  <p className="text-xs text-[#F7ECD3]/90">{CONTACT_INFO.hours}</p>
                  <p className="text-[11px] text-[#C9A96A]">{CONTACT_INFO.availability}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/30 transition-colors"
                >
                  WhatsApp Now
                </a>
                <a
                  href={CONTACT_INFO.callUrl}
                  className="px-3 py-1.5 rounded bg-[#C1121F]/20 border border-[#C1121F]/40 text-[#F7ECD3] text-xs font-medium hover:bg-[#C1121F]/30 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Mantra Strip */}
        <div className="py-6 text-center">
          <SacredDivider withOm={false} className="my-2" />
          <p className="font-serif text-base sm:text-lg tracking-widest text-[#E5B84B] font-semibold">
            {CONTACT_INFO.mantras}
          </p>
          <SacredDivider withOm={false} className="my-2" />
        </div>

        {/* Astrology Disclaimer & Legal */}
        <div className="pt-4 flex flex-col items-center gap-3 text-center text-[11px] text-[#C9A96A]/75">
          <p className="max-w-4xl leading-relaxed">
            <span className="font-semibold text-[#E5B84B]">Astrology & Spiritual Disclaimer:</span> Vedic Astrology and spiritual remedies are traditional ancient belief systems based on faith, cosmic observations, and Vedic scriptures. Results and timings vary according to individual karmic influences, dedication, and cosmic alignments. Astrology consultations are not a substitute for professional legal, medical, or psychiatric advice.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#C9A96A] mt-2">
            <Link href="/privacy" className="hover:text-[#E5B84B] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#E5B84B] transition-colors">
              Terms & Disclaimer
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#E5B84B] transition-colors">
              Contact & Support
            </Link>
          </div>

          <div className="text-xs text-[#F7ECD3]/60 mt-1">
            Copyright © 2026 Astro Ankush. All Rights Reserved. Designed with reverence for Vedic Wisdom.
          </div>
        </div>
      </div>
    </footer>
  );
}
