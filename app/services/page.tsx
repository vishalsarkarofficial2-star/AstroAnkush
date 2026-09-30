'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SERVICES_DATA, CONTACT_INFO, ServiceItem } from '@/lib/astrology-data';
import { 
  Heart, 
  Briefcase, 
  Coins, 
  Activity, 
  Eye, 
  Users, 
  Baby, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Phone,
  Flame,
  Sun,
  Shield
} from 'lucide-react';

export default function ServicesOverviewPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Love', 'Marriage', 'Career', 'Money', 'Family', 'Health', 'Protection'];

  const filteredServices = activeCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-5 h-5 text-[#E5B84B]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#E5B84B]" />;
      case 'Coins': return <Coins className="w-5 h-5 text-[#E5B84B]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#E5B84B]" />;
      case 'Eye': return <Eye className="w-5 h-5 text-[#E5B84B]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#E5B84B]" />;
      case 'Baby': return <Baby className="w-5 h-5 text-[#E5B84B]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#E5B84B]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#E5B84B]" />;
      case 'Sun': return <Sun className="w-5 h-5 text-[#E5B84B]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#E5B84B]" />;
      default: return <Sparkles className="w-5 h-5 text-[#E5B84B]" />;
    }
  };

  const getServiceImage = (slug: string) => {
    switch (slug) {
      case 'love-problem':
        return '/images/love_problem_remedy.jpg';
      case 'divorce-problem':
      case 'family-disputes':
      case 'family-dispute':
      case 'husband-wife-dispute':
        return '/images/divorce_prevention_remedy.jpg';
      case 'baby-problem':
      case 'childless-couples':
      case 'santan-prapti':
        return '/images/santan_prapti_gopal.jpg';
      case 'vashikaran':
        return '/images/vashikaran_sadhana.jpg';
      case 'black-magic-removal':
      case 'black-magic':
      case 'evil-eye':
        return '/images/black_magic_removal.jpg';
      case 'kundli-analysis':
      case 'gemstone':
        return '/images/vedic_kundli_manuscript.jpg';
      case 'marriage-problem':
      case 'mangal-dosh':
      case 'inter-caste-marriage':
        return '/images/marriage_manglik_remedy.jpg';
      case 'career-problem':
      case 'career-business':
      case 'money-problem':
      case 'financial-crisis':
        return '/images/career_business_growth.jpg';
      default:
        return '/images/vedic_hawan_ritual.jpg';
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Services Overview' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E5B84B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            Authentic Jyotish & Tantra Solutions
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Our 12 Sacred Vedic Services
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            Every ritual, mantra, and yantra is consecrated under exact cosmic muhurthas by Astro Ankush to dissolve obstacles in love, wedlock, finances, and well-being.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Interactive Category Filter Tabs (Zero-pill discipline with clean segmented buttons) */}
      <section className="py-8 bg-[#120C16]/50 border-b border-[#E5B84B]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-2 no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A] shadow-md shadow-[#E5B84B]/20'
                      : 'bg-[#1B0505]/70 text-[#C9A96A] border border-[#E5B84B]/20 hover:text-[#F7ECD3] hover:border-[#E5B84B]/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grid of 12 Services */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.slug}
                className="group relative rounded-2xl p-7 flex flex-col justify-between backdrop-blur-xl bg-gradient-to-b from-[#180912]/80 via-[#0E060A]/85 to-[#050306]/90 border border-[#E5B84B]/25 hover:border-[#E5B84B]/60 shadow-xl shadow-black/60 hover:shadow-[0_12px_35px_rgba(229,184,75,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Top Radiant Gold Accent Glow on Hover */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#E5B84B]/15 rounded-full blur-2xl group-hover:bg-[#E5B84B]/25 transition-all pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E5B84B]/40 to-transparent group-hover:via-[#E5B84B] transition-all" />

                <div>
                  {/* Related Image Thumbnail with Sacred Vignette */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 border border-[#E5B84B]/30 group-hover:border-[#E5B84B]/70 transition-all shadow-md">
                    <Image
                      src={getServiceImage(srv.slug)}
                      alt={srv.title}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E060A]/90 via-[#0E060A]/25 to-transparent" />
                    
                    {/* Top Floating Badge & Icon */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#0E060A]/85 backdrop-blur-md border border-[#E5B84B]/50 flex items-center justify-center shadow-md">
                        {getServiceIcon(srv.icon)}
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0E060A]/85 backdrop-blur-md border border-[#E5B84B]/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9A2E] animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF9A2E]">
                          {srv.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h2 className="font-cinzel text-xl font-bold text-[#F7ECD3] mb-2 group-hover:text-[#E5B84B] transition-colors">
                    {srv.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#C9A96A] leading-relaxed mb-5">
                    {srv.shortDesc}
                  </p>

                  <div className="mb-6 space-y-1.5 text-xs text-[#F7ECD3]/80">
                    <div className="font-semibold text-[#E5B84B] text-[11px] uppercase tracking-wider mb-2">
                      Key Remedial Focus:
                    </div>
                    {srv.signsYouNeedThis.slice(0, 2).map((sign, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-[#FF9A2E] shrink-0">✦</span>
                        <span className="line-clamp-1">{sign}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5B84B]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#E5B84B] flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF9A2E]" />
                  </Link>

                  <a
                    href={`https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20want%20to%20consult%20about%20${encodeURIComponent(srv.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[11px] text-[#25D366] font-semibold flex items-center gap-1.5 transition-all shadow-sm shadow-[#25D366]/10 active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Help CTA */}
          <div className="mt-16 glass-card p-8 rounded-2xl border border-[#E5B84B]/30 text-center max-w-3xl mx-auto">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
              Unsure Which Astrological Remedy Fits Your Situation?
            </h3>
            <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
              Connect directly on WhatsApp. Astro Ankush will assess your horoscope or problem description and recommend the exact Vedic course of action.
            </p>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-[#25D366]/20"
            >
              <WhatsAppIcon className="w-4 h-4 fill-black" />
              <span>Ask Astro Ankush on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
