'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/astrology-data';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 inset-x-4 z-40 pointer-events-none flex items-center justify-between max-w-7xl mx-auto">
      {/* Call Button (Bottom Left on Mobile/Tablet) */}
      <div className="pointer-events-auto">
        <a
          href={CONTACT_INFO.callUrl}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#C1121F] to-[#8B0000] text-white shadow-xl shadow-[#C1121F]/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 animate-pulse-red"
          aria-label="Call Astro Ankush directly"
        >
          <Phone className="w-5 h-5 animate-bounce" />
          <span className="hidden sm:inline font-bold text-xs tracking-wider uppercase">
            Call Now
          </span>
        </a>
      </div>

      {/* WhatsApp Button (Bottom Right) */}
      <div className="pointer-events-auto">
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-black shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/30 animate-pulse-green"
          aria-label="Chat with Astro Ankush on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 fill-black shrink-0" />
          <span className="hidden sm:inline font-bold text-xs tracking-wider uppercase">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
