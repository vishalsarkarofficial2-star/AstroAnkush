import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { TRUST_STATS, CONTACT_INFO } from '@/lib/astrology-data';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Lock, 
  Clock, 
  Heart, 
  Flame, 
  Compass, 
  CheckCircle2, 
  MessageCircle, 
  Phone 
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Astro Ankush | Unwavering Trust, Purity & Results',
  description: 'Discover why thousands of devotees worldwide trust Astro Ankush for authentic Vedic solutions. 100% confidential, scripturally pure, and proven remedies.',
};

export default function WhyChooseUsPage() {
  const trustTiles = [
    {
      icon: <Lock className="w-6 h-6 text-[#E5B84B]" />,
      title: '100% Absolute Confidentiality',
      desc: 'Your identity, horoscope, and sensitive life crises are guarded with an inviolable spiritual seal. No data is stored or shared.'
    },
    {
      icon: <Award className="w-6 h-6 text-[#FF9A2E]" />,
      title: 'Authentic Scriptural Lineage',
      desc: 'All remedies are rooted in Parashara Hora Shastra, Jaimini Sutras, and classical Agama Tantra without superstitions.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E5B84B]" />,
      title: 'Pure Sattvic Methods Only',
      desc: 'We never practice harmful, coercive, or dark black magic. Every sadhana is positive, uplifting, and aligned with cosmic dharma.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF9A2E]" />,
      title: 'Personalized Anushthans',
      desc: 'Astro Ankush performs fire ceremonies and mantra sankalpas himself; no automated generic reports or outsourced pandits.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E5B84B]" />,
      title: 'Swift Worldwide Responsiveness',
      desc: 'Direct encrypted WhatsApp scheduling ensures devotees across India, UK, USA, Canada, and UAE receive prompt appointments.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#FF9A2E]" />,
      title: 'Prashna Kundli Accuracy',
      desc: 'Lacking exact birth time? Our horary Prashna astrology identifies the precise root cause and delivers actionable timing.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E5B84B]" />,
      title: 'Transparent Dakshina',
      desc: 'Complete clarity on consecrated herbs, offerings, and ritual timelines before any remedy is undertaken. No hidden demands.'
    },
    {
      icon: <Flame className="w-6 h-6 text-[#FF9A2E]" />,
      title: 'Ongoing Karmic Follow-Up',
      desc: 'We do not abandon you after one session. Astro Ankush monitors your progress until full peace and stability are achieved.'
    }
  ];

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Why Choose Us' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            The Gold Standard in Vedic Guidance
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Why Thousands of Families Place Their Faith in Astro Ankush
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            In an era of commercialized predictions, Astro Ankush preserves the purity of ancient Himalayan sadhana, delivering accurate forecasts and genuine remedies that change lives.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Animated Stats Row */}
      <section className="py-12 bg-[#1B0505]/40 border-b border-[#E5B84B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {TRUST_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl text-center border border-[#E5B84B]/25"
              >
                <div className="font-bebas text-4xl sm:text-5xl text-[#E5B84B] tracking-wider mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#F7ECD3] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#C9A96A]">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Trust Tiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Our Spiritual Commitments
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#F7ECD3]">
              8 Guarantees of Sincerity & Mastery
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustTiles.map((tile, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl border border-[#E5B84B]/20 hover:border-[#E5B84B]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1B0505] border border-[#E5B84B]/30 flex items-center justify-center mb-4">
                    {tile.icon}
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-[#C9A96A] leading-relaxed">
                    {tile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Promise Box */}
      <section className="py-12 bg-gradient-to-b from-[#08060A] to-[#120810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-10 rounded-2xl border-2 border-[#E5B84B] shadow-2xl relative text-center">
            <div className="w-12 h-12 rounded-full bg-[#E5B84B]/20 border border-[#E5B84B] flex items-center justify-center mx-auto mb-4 text-[#E5B84B]">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-[#E5B84B] mb-3">
              The Sacred Guarantee of Astro Ankush
            </h3>

            <p className="text-sm sm:text-base text-[#F7ECD3]/90 leading-relaxed mb-6">
              &ldquo;I take a solemn vow before Maa Kali: every remedy prescribed by me is performed with utmost Vedic sanctity, unselfish intent, and scriptural fidelity. I do not instill fear, nor do I promise false shortcuts. When you place your trust in this sacred science, you receive the full devotion of my spiritual sadhana until your darkness dissolves.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#E5B84B] uppercase tracking-wider">
              <span>— Astro Ankush</span>
              <span>·</span>
              <span className="text-[#C9A96A]">Tantra-Mantra Sadhak</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1B0505]/70 border-t border-[#E5B84B]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3] mb-3">
            Experience the Transformation Personally
          </h2>
          <p className="text-xs sm:text-sm text-[#C9A96A] mb-8">
            Connect directly via WhatsApp or call to schedule your private consultation session.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Connect on WhatsApp</span>
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="px-8 py-3.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
