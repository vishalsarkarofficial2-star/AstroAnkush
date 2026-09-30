'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { TESTIMONIALS_DATA, CONTACT_INFO } from '@/lib/astrology-data';
import { Star, MessageCircle, Phone, Sparkles, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Love & Relationship', 'Marriage Delay', 'Money & Debt Recovery', 'Black Magic & Heavy Energy', 'Divorce Prevention'];

  const filteredTestimonials = filter === 'All'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.problem.toLowerCase().includes(filter.toLowerCase()) || filter.toLowerCase().includes(t.problem.toLowerCase()));

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            Devotee Testimonials & Proof
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Real Stories of Restored Hope & Joy
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            Read unedited feedback from real clients across India, Canada, United Kingdom, USA, Australia, and UAE whose lives were transformed by the remedies of Astro Ankush.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Filter Tabs (Interactive segmented buttons per anti-slop rules) */}
      <section className="py-6 bg-[#120C16]/50 border-b border-[#E5B84B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A] shadow-md'
                      : 'bg-[#1B0505]/70 text-[#C9A96A] border border-[#E5B84B]/20 hover:text-[#F7ECD3]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Masonry-Style Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-[#E5B84B]/20 hover:border-[#E5B84B]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#E5B84B]">
                      {Array.from({ length: t.rating }).map((_, r) => (
                        <Star key={r} className="w-4 h-4 fill-[#E5B84B]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#E5B84B]/30" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#F7ECD3]/90 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5B84B]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5B84B] to-[#FF9A2E] text-[#08060A] font-bold font-cinzel flex items-center justify-center text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-cinzel text-sm font-bold text-[#E5B84B]">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-[#C9A96A]">{t.city}</div>
                    <div className="text-[10px] text-[#FF9A2E] mt-0.5 font-medium">
                      {t.problem} • {t.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Bottom Call to Action */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl border border-[#E5B84B]/30 max-w-3xl mx-auto">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
              Your Turn for a Miracle
            </h3>
            <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
              Do not let despair dictate your tomorrow. Take refuge in ancient Vedic guidance today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Consult on WhatsApp</span>
              </a>
              <a
                href={CONTACT_INFO.callUrl}
                className="px-8 py-3.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
