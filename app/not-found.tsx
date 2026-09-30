'use client';

import React from 'react';
import Link from 'next/link';
import { SacredDivider } from '@/components/SacredDivider';
import { CONTACT_INFO } from '@/lib/astrology-data';
import { MessageCircle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-[#08060A] text-[#F7ECD3] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C1121F]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sacred Motif */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-[#1B0505] border-2 border-[#E5B84B] flex items-center justify-center shadow-xl shadow-[#E5B84B]/20">
          <span className="font-serif text-3xl text-[#E5B84B] select-none">
            ॐ
          </span>
        </div>
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-[#FF9A2E] mb-2">
        Cosmic Disconnect • Error 404
      </span>

      <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
        The Celestial Path Is Veiled
      </h1>

      <p className="text-sm sm:text-base text-[#C9A96A] max-w-md mx-auto leading-relaxed mb-6">
        The coordinates you seek do not align with any known planetary constellation. Return to the sanctuary or reach out directly for guidance.
      </p>

      <SacredDivider withOm className="mb-8" />

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>

        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>WhatsApp Astro Ankush</span>
        </a>
      </div>
    </div>
  );
}
