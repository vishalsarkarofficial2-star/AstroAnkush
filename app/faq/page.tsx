'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { FAQ_CATEGORIES, CONTACT_INFO } from '@/lib/astrology-data';
import { ChevronDown, MessageCircle, Phone, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const currentCategory = FAQ_CATEGORIES.find((c) => c.id === activeTab) || FAQ_CATEGORIES[0];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setOpenAccordion(0);
  };

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            Clear Answers & Guidance
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            Find detailed answers about our consultation process, privacy safeguards, Vedic remedies, and what to expect during your spiritual journey with Astro Ankush.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Category Tabs (Segmented control) */}
      <section className="py-6 bg-[#120C16]/50 border-b border-[#E5B84B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-1 no-scrollbar">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A] shadow-md font-bold'
                      : 'bg-[#1B0505]/70 text-[#C9A96A] border border-[#E5B84B]/20 hover:text-[#F7ECD3]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {currentCategory.items.map((item, idx) => {
              const isOpen = openAccordion === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl border border-[#E5B84B]/25 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-base font-semibold text-[#F7ECD3] hover:text-[#E5B84B] transition-colors"
                  >
                    <span className="font-cinzel text-base sm:text-lg flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#E5B84B] shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E5B84B] shrink-0 transition-transform duration-200 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#C9A96A] leading-relaxed border-t border-[#E5B84B]/10 pl-14">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl border border-[#E5B84B]/30">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
              Still Have Questions or Need Personal Clarity?
            </h3>
            <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
              Our coordinator is active on WhatsApp to answer questions regarding booking, fees, and remedies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Ask on WhatsApp</span>
              </a>
              <a
                href={CONTACT_INFO.callUrl}
                className="px-8 py-3.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
