'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { GALLERY_ITEMS, CONTACT_INFO } from '@/lib/astrology-data';
import { X, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIdx(index);
  const closeLightbox = () => setSelectedIdx(null);

  const prevImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === 0 ? GALLERY_ITEMS.length - 1 : selectedIdx - 1);
  };

  const nextImage = () => {
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === GALLERY_ITEMS.length - 1 ? 0 : selectedIdx + 1);
  };

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Sanctuary Gallery' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            Sacred Darshan & Hawan
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Vedic Rituals, Pujas & Sanctum Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            Witness the sanctified flames of ancient hawan yagyas, sacred manuscripts, and spiritual sadhana conducted with deep devotion by Astro Ankush.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="glass-card rounded-2xl overflow-hidden border border-[#E5B84B]/25 group cursor-pointer hover:border-[#E5B84B] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08060A] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-[#08060A]/80 border border-[#E5B84B]/40 text-[10px] font-bold uppercase tracking-wider text-[#E5B84B]">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-cinzel text-lg font-bold text-[#F7ECD3] group-hover:text-[#E5B84B] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C9A96A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA at Bottom */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl border border-[#E5B84B]/30 max-w-3xl mx-auto">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
              Request a Sacred Hawan or Puja in Your Name
            </h3>
            <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
              Astro Ankush conducts personalized Hawan ceremonies with pure Vedic samagri and distant sankalpa for health, marriage, and obstacle removal.
            </p>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-50 bg-[#08060A]/95 backdrop-blur-xl flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full border border-[#E5B84B] text-[#E5B84B] hover:bg-[#E5B84B] hover:text-black transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full border border-[#E5B84B]/40 text-[#E5B84B] hover:bg-[#1B0505] transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full border border-[#E5B84B]/40 text-[#E5B84B] hover:bg-[#1B0505] transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-h-[75vh] rounded-2xl overflow-hidden border border-[#E5B84B]/50 shadow-2xl">
              <Image
                src={GALLERY_ITEMS[selectedIdx].image}
                alt={GALLERY_ITEMS[selectedIdx].title}
                fill
                referrerPolicy="no-referrer"
                className="object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-[11px] font-bold text-[#FF9A2E] uppercase tracking-wider">
                {GALLERY_ITEMS[selectedIdx].category}
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#F7ECD3] mt-1">
                {GALLERY_ITEMS[selectedIdx].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C9A96A] max-w-xl mx-auto mt-1">
                {GALLERY_ITEMS[selectedIdx].desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
