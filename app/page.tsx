'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  SERVICES_DATA, 
  TRUST_STATS, 
  TESTIMONIALS_DATA, 
  GALLERY_ITEMS, 
  FAQ_CATEGORIES, 
  CONTACT_INFO 
} from '@/lib/astrology-data';
import { ZodiacWheelSvg } from '@/components/ZodiacWheelSvg';
import { SacredDivider } from '@/components/SacredDivider';
import { EnquiryModal } from '@/components/EnquiryModal';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { NavagrahaCosmicSection } from '@/components/NavagrahaCosmicSection';
import { NakshatraCosmicSection } from '@/components/NakshatraCosmicSection';
import { 
  Phone, 
  MessageCircle, 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  Star, 
  Clock, 
  Award,
  Heart,
  Briefcase,
  Coins,
  Activity,
  Eye,
  Users,
  Baby,
  BookOpen,
  Shield
} from 'lucide-react';

const AUTO_FEATURES = [
  { label: 'VEDIC ASTROLOGY', href: '/services', color: 'text-[#E5B84B]' },
  { label: 'KUNDLI ANALYSIS', href: '/services/kundli-analysis', color: 'text-[#FF9A2E]' },
  { label: 'VASHIKARAN SADHANA', href: '/services/vashikaran', color: 'text-[#E5B84B]' },
  { label: 'BLACK MAGIC REMOVAL', href: '/services/black-magic', color: 'text-[#FF9A2E]' },
  { label: 'LOVE PROBLEM SOLUTION', href: '/services/love-problem', color: 'text-[#E5B84B]' },
  { label: 'MARRIAGE PROBLEM REMEDY', href: '/services/marriage-problem', color: 'text-[#FF9A2E]' },
  { label: 'DIVORCE PREVENTION', href: '/services/divorce-problem', color: 'text-[#E5B84B]' },
  { label: 'CAREER & PROMOTION', href: '/services/career-growth', color: 'text-[#FF9A2E]' },
  { label: 'MONEY & DEBT RELIEF', href: '/services/debt-relief', color: 'text-[#E5B84B]' },
  { label: 'MANGAL DOSH NIVARAN', href: '/services/mangal-dosh', color: 'text-[#FF9A2E]' },
  { label: 'SANTAN PRAPTI YAGYA', href: '/services/santan-prapti', color: 'text-[#E5B84B]' },
  { label: '100% CONFIDENTIAL REMEDIES', href: '/why-us', color: 'text-[#FF9A2E]' },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredTestimonials = TESTIMONIALS_DATA.slice(0, 3);
  const featuredGallery = GALLERY_ITEMS.slice(0, 3);
  const previewFaqs = FAQ_CATEGORIES.flatMap((cat) => cat?.items ?? []).slice(0, 5);

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
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: HERO (Full-Screen, Cinematic) */}
      <section className="relative min-h-[92vh] flex items-center justify-center py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-[#08060A] via-[#120810] to-[#08060A] overflow-hidden">
        {/* Divine Maa Kali Shadow / Silhouette Backdrop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Mobile-Optimized Portrait Silhouette (Vivid, Centered & Attractive) */}
          <div className="block sm:hidden relative w-full h-full min-h-[750px]">
            <Image
              src="/images/kali_mobile_bg.jpg"
              alt="Divine Maa Kali spiritual silhouette and shadow aura background mobile view"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-top opacity-60 mix-blend-screen scale-100"
            />
            {/* Mobile scrim: keeps top aura visible while protecting text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#08060A]/40 via-[#08060A]/70 to-[#08060A]" />
          </div>

          {/* Desktop/Tablet Panoramic Landscape Silhouette */}
          <div className="hidden sm:block relative w-full h-full">
            <Image
              src="/images/kali_shadow_bg.jpg"
              alt="Divine Maa Kali spiritual silhouette and shadow aura background"
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-center opacity-35 mix-blend-screen scale-105"
            />
            {/* Desktop Vignette gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#08060A]/85 via-transparent to-[#08060A]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08060A]/90 via-transparent to-[#08060A]/80" />
          </div>
        </div>

        {/* Animated Background Zodiac Wheel */}
        <div className="absolute -right-24 md:right-10 top-1/2 -translate-y-1/2 w-[480px] sm:w-[650px] lg:w-[850px] h-[480px] sm:h-[650px] lg:h-[850px] opacity-20 pointer-events-none animate-spin-slow z-[1]">
          <ZodiacWheelSvg className="w-full h-full" />
        </div>

        {/* Ambient Radial Golden Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5B84B]/10 rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FF9A2E]/10 rounded-full blur-[120px] pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B0505]/90 border border-[#E5B84B]/40 text-[#E5B84B] text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm shadow-[#E5B84B]/10">
                <span className="text-[#FF9A2E]">★</span>
                <span>Real Astrologer • Tantra-Mantra Specialist</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-5 text-[#F7ECD3]">
                By the Grace of <span className="gold-gradient-text">Maa Kali</span>, Every Crisis Shall Pass
              </h1>

              {/* Sub-headline */}
              <p className="font-marcellus text-lg sm:text-xl lg:text-2xl text-[#E5B84B] mb-4 font-normal">
                Whatever your problem may be… the solution is certain.
              </p>

              <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl leading-relaxed mb-8">
                Break free from heartbreak, marriage delay, divorce threats, chronic debts, and negative energies. Experience genuine Vedic Jyotish, Janam Kundli analysis, and consecrated Agama remedies that bring profound, lasting relief.
              </p>

              {/* Two High-Converting CTAs: WhatsApp & Call Now */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8">
                {/* WhatsApp CTA */}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-black font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-[#25D366]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 animate-pulse-green w-full sm:w-auto cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-black shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Call CTA */}
                <a
                  href={CONTACT_INFO.callUrl}
                  className="px-6 py-4 rounded-xl bg-gradient-to-r from-[#C1121F] to-[#990000] text-white font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-[#C1121F]/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/20 animate-flame w-full sm:w-auto cursor-pointer"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  <span>Call Now: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Trust Metadata Strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#C9A96A] pt-4 border-t border-[#E5B84B]/15">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B84B]" />
                  100% Confidential
                </span>
                <span aria-hidden="true" className="text-[#E5B84B]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B84B]" />
                  Accurate & Effective
                </span>
                <span aria-hidden="true" className="text-[#E5B84B]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B84B]" />
                  15+ Years Experience
                </span>
                <span aria-hidden="true" className="text-[#E5B84B]/40">·</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5B84B]" />
                  One Permanent Solution
                </span>
              </div>
            </div>

            {/* Right Side: Astro Ankush Hero Image with Golden Aura & Floating Loop */}
            <div className="lg:col-span-5 relative flex items-center justify-center w-full mt-8 lg:mt-0">
              {/* Backlight Aura Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9A2E]/30 via-[#E5B84B]/20 to-transparent rounded-3xl blur-2xl transform scale-105 pointer-events-none" />

              {/* Image Frame Container (Responsive for all device screens) */}
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[440px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#E5B84B]/60 shadow-2xl shadow-black group animate-float mx-auto">
                <Image
                  src="/images/astro_ankush_hero_1790706946426.png"
                  alt="Astro Ankush - Renowned Vedic Astrologer & Tantra-Mantra Sadhak"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 440px"
                  referrerPolicy="no-referrer"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette & bottom contrast scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060A]/90 via-[#08060A]/20 to-transparent pointer-events-none" />

                {/* Overlay Badge at Bottom of Image */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-[#08060A]/80 backdrop-blur-md border border-[#E5B84B]/30 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#F7ECD3] font-cinzel">Astro Ankush</div>
                    <div className="text-[10px] text-[#E5B84B] font-medium tracking-wide">
                      Tantra-Mantra Sadhak & Jyotish Acharya
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#E5B84B]/10 border border-[#E5B84B]/40 flex items-center justify-center text-[#E5B84B]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#E5B84B]/70 hover:text-[#E5B84B] transition-colors pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#E5B84B]" />
        </div>
      </section>

      {/* SECTION 2: TRUST BAR (Auto-Rotating Continuous Marquee with Rounded Features) */}
      <section className="w-full bg-gradient-to-r from-[#120505] via-[#1B0505] to-[#120505] border-y border-[#E5B84B]/40 py-3.5 sm:py-4 overflow-hidden relative shadow-inner">
        {/* Soft edge fade masks for smooth infinite flow */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#08060A] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#08060A] to-transparent z-10" />

        <div className="flex w-max animate-marquee space-x-6 sm:space-x-8 text-xs sm:text-sm font-semibold tracking-wider uppercase items-center">
          {[1, 2].map((pass) => (
            <div key={pass} className="flex items-center space-x-6 sm:space-x-8 shrink-0">
              {AUTO_FEATURES.map((item, idx) => (
                <Link
                  key={`${pass}-${idx}`}
                  href={item.href}
                  className="group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2A0909]/70 border border-[#E5B84B]/35 hover:border-[#E5B84B] hover:bg-[#3D0E0E] hover:scale-105 transition-all shrink-0 cursor-pointer shadow-sm hover:shadow-[#E5B84B]/20"
                >
                  <span className="text-[#FF9A2E] text-xs group-hover:scale-125 transition-transform select-none">
                    ✦
                  </span>
                  <span className={`font-cinzel text-xs sm:text-sm font-bold tracking-wider ${item.color} group-hover:text-[#FFF3D6] transition-colors`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: ABOUT PREVIEW */}
      <section className="py-20 bg-[#08060A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Thumbnail with Gold Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#E5B84B]/40 shadow-2xl">
                <Image
                  src="/images/vishal.jpeg"
                  alt="Astro Ankush performing sacred Vedic hawan ritual"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-[#E5B84B] flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#FF9A2E]" />
                  Sacred Hawan Kund & Vedic Rituals
                </div>
              </div>
            </div>

            {/* Right Intro */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2">
                Divine Lineage & Mastery
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#F7ECD3] mb-4">
                Meet Astro Ankush — Healer of Destinies
              </h2>
              <p className="text-sm sm:text-base text-[#C9A96A] leading-relaxed mb-4">
                For more than 15 years, Astro Ankush has practiced the deepest realms of Vedic Jyotish, Prashna Kundli, and sacred Agama Tantra under the direct guidance of revered spiritual gurus. With unshakable devotion to Maa Kali and Lord Shiva, he diagnoses the hidden planetary roots of your sorrow and prescribes powerful, sattvic remedies.
              </p>
              <p className="text-sm text-[#F7ECD3]/85 leading-relaxed mb-6">
                Whether you face a crushing breakup, an impending divorce, financial stagnation, or the invisible grip of dark energies, know that every suffering has an astrological key.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E5B84B] text-[#E5B84B] hover:bg-[#E5B84B] hover:text-[#08060A] text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                <span>Read Full Biography & Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED SERVICES (6 CARDS) */}
      <section className="py-20 bg-gradient-to-b from-[#08060A] via-[#120810] to-[#08060A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Sacred Astrological Solutions
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F7ECD3] mb-4">
              Vedic Remedies for Life’s Deepest Crises
            </h2>
            <p className="text-xs sm:text-sm text-[#C9A96A]">
              Every solution is personalized based on your Janam Kundli, planetary dashas, and traditional Agama Tantra wisdom.
            </p>
            <SacredDivider withOm />
          </div>

          {/* Grid of 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredServices.map((srv) => (
              <div
                key={srv.slug}
                className="group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between backdrop-blur-xl bg-gradient-to-b from-[#180912]/80 via-[#0E060A]/85 to-[#050306]/90 border border-[#E5B84B]/25 hover:border-[#E5B84B]/60 shadow-xl shadow-black/60 hover:shadow-[0_12px_35px_rgba(229,184,75,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
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

                  {/* Title */}
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#F7ECD3] mb-2 group-hover:text-[#E5B84B] transition-colors leading-snug">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#C9A96A] leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-[#E5B84B]/15 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#E5B84B] flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF9A2E] group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <a
                    href={`https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20need%20help%20with%20${encodeURIComponent(srv.title)}.`}
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

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#E5B84B]/20 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore All 12 Vedic Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4.5: INTERACTIVE NAVAGRAHA (9 PLANETS) COSMIC MANDALA */}
      <NavagrahaCosmicSection />

      {/* SECTION 4.8: MYSTICAL NAKSHATRA (27 LUNAR MANSIONS) CONSTELLATION MANDALA */}
      <NakshatraCosmicSection />

      {/* SECTION 5: WHY CHOOSE US PREVIEW */}
      <section className="py-16 sm:py-20 bg-[#1B0505]/70 border-y border-[#E5B84B]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Purity, Tradition & Results
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#F7ECD3] mb-3 sm:mb-4 leading-tight">
              Why Thousands Worldwide Trust Astro Ankush
            </h2>
            <p className="text-xs sm:text-sm text-[#C9A96A] max-w-xl mx-auto">
              Authentic Himalayan Vedic guidance, 100% confidential consultations, and time-tested spiritual remedies.
            </p>
            <SacredDivider withOm />
          </div>

          {/* Stats Row (Optimized for Mobile, Tablet & Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-4xl mx-auto">
            {TRUST_STATS.map((stat, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-5 sm:p-6 text-center backdrop-blur-xl bg-gradient-to-b from-[#180912]/80 via-[#0E060A]/85 to-[#050306]/90 border border-[#E5B84B]/25 hover:border-[#E5B84B]/60 shadow-lg shadow-black/60 transition-all duration-300"
              >
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#E5B84B]/60 to-transparent" />
                <div className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#E5B84B] tracking-wider mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#F7ECD3] mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#C9A96A]">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* 4 Core Pillars (Mobile-Optimized Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#08060A]/80 border border-[#E5B84B]/20 flex flex-col items-start hover:border-[#E5B84B]/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#E5B84B]/10 border border-[#E5B84B]/30 flex items-center justify-center mb-3 text-[#E5B84B]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F7ECD3] mb-1.5">100% Confidential</h3>
              <p className="text-xs text-[#C9A96A] leading-relaxed">
                Your personal details, charts, and private issues remain sacred and strictly secret.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#08060A]/80 border border-[#E5B84B]/20 flex flex-col items-start hover:border-[#E5B84B]/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FF9A2E]/10 border border-[#FF9A2E]/30 flex items-center justify-center mb-3 text-[#FF9A2E]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F7ECD3] mb-1.5">Authentic Vedic Roots</h3>
              <p className="text-xs text-[#C9A96A] leading-relaxed">
                Remedies adhere strictly to Parashara, Jaimini, and Agama scriptures without gimmickry.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#08060A]/80 border border-[#E5B84B]/20 flex flex-col items-start hover:border-[#E5B84B]/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#E5B84B]/10 border border-[#E5B84B]/30 flex items-center justify-center mb-3 text-[#E5B84B]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F7ECD3] mb-1.5">Guaranteed Sincerity</h3>
              <p className="text-xs text-[#C9A96A] leading-relaxed">
                Direct attention from Astro Ankush personally, not automated reports or call center assistants.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#08060A]/80 border border-[#E5B84B]/20 flex flex-col items-start hover:border-[#E5B84B]/50 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-[#FF9A2E]/10 border border-[#FF9A2E]/30 flex items-center justify-center mb-3 text-[#FF9A2E]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#F7ECD3] mb-1.5">Rapid Worldwide Support</h3>
              <p className="text-xs text-[#C9A96A] leading-relaxed">
                Dedicated WhatsApp scheduling for clients in India, USA, UK, Canada, UAE & Australia.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/why-us"
              className="text-xs font-bold text-[#E5B84B] uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore All Trust Factors & Spiritual Guarantee</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS PREVIEW */}
      <section className="py-20 bg-[#08060A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Voices of Faith
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F7ECD3] mb-4">
              Real Lives Restored by Divine Grace
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between border border-[#E5B84B]/25"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5B84B] mb-4">
                    {Array.from({ length: t.rating }).map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-[#E5B84B]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#F7ECD3]/90 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5B84B]/15">
                  <div className="font-bold text-sm text-[#E5B84B] font-cinzel">{t.name}</div>
                  <div className="text-xs text-[#C9A96A]">{t.city}</div>
                  <div className="text-[11px] text-[#FF9A2E] mt-0.5 font-medium">Issue: {t.problem}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#E5B84B]/60 text-[#E5B84B] hover:bg-[#E5B84B] hover:text-[#08060A] text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Read All 20+ Devotee Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: GALLERY PREVIEW */}
      <section className="py-20 bg-gradient-to-b from-[#08060A] to-[#120810] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Spiritual Sanctum
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F7ECD3] mb-4">
              Sacred Hawan, Puja & Rituals
            </h2>
            <p className="text-xs sm:text-sm text-[#C9A96A]">
              Authentic glimpses of holy fire ceremonies, sanctified offerings, and astrological consultations.
            </p>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5B84B]/30 shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060A]/90 via-[#08060A]/30 to-transparent" />
                <div className="absolute bottom-4 inset-x-4">
                  <span className="text-[10px] uppercase font-semibold text-[#FF9A2E] tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="text-xs font-bold text-[#E5B84B] uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Full Visual Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ PREVIEW */}
      <section className="py-20 bg-[#08060A] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Clear Guidance
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F7ECD3] mb-4">
              Frequently Asked Questions
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="flex flex-col gap-4">
            {previewFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl border border-[#E5B84B]/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-medium text-[#F7ECD3] hover:text-[#E5B84B] transition-colors"
                >
                  <span className="font-cinzel text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E5B84B] shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#C9A96A] leading-relaxed border-t border-[#E5B84B]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-xs font-bold text-[#E5B84B] uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
            >
              <span>See All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#1B0505] via-[#2A0808] to-[#1B0505] border-t border-[#E5B84B]/30 relative overflow-hidden text-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5B84B]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF9A2E] mb-3 block">
            Sacred Promise & Hope
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            &ldquo;Do Not Doubt — With Faith, Results Are Certain.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed mb-8">
            Take the first step toward reclaiming your joy, peace, and destiny. Astro Ankush is waiting to hear your problem and guide you with divine grace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 fill-black shrink-0" />
              <span>Chat on WhatsApp Now</span>
            </a>

            <a
              href={CONTACT_INFO.callUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C1121F] text-white font-bold text-sm tracking-wide flex items-center justify-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              <span>Call Directly: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Required Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
}
