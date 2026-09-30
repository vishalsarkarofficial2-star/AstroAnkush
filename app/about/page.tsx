import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { CONTACT_INFO } from '@/lib/astrology-data';
import { 
  Sparkles, 
  Flame, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Heart, 
  Clock, 
  Compass, 
  MessageCircle, 
  Phone,
  CheckCircle2
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Astro Ankush | Real Vedic Astrologer & Tantra-Mantra Sadhak',
  description: 'Learn the sacred journey, guru-shishya lineage, and spiritual philosophy of Astro Ankush. Dedicated to uplifting distressed souls through genuine Vedic astrology.',
};

export default function AboutPage() {
  const timelineMilestones = [
    {
      year: '2008',
      title: 'Initiation into Sacred Gurukul Parampara',
      desc: 'Formally accepted by venerable Tantrik masters in Haridwar and Kamakhya, undergoing rigorous Sanskrit grammar, Parashara Jyotish, and mantra sadhana.'
    },
    {
      year: '2012',
      title: 'Mastery in Prashna Kundli & Agama Shastra',
      desc: 'Spent 4 years decoding ancient palm leaf manuscripts, astrological time-horary charts (Prashna), and consecration rituals for divine Yantras.'
    },
    {
      year: '2017',
      title: 'Global Outreach & Remote Sankalpa Sadhana',
      desc: 'Extended astrological counseling to NRI communities in the UK, USA, Canada, and UAE, proving that sacred vibrations transcend geographical borders.'
    },
    {
      year: '2022',
      title: 'Establishment of Maa Kali Sewa Ashram',
      desc: 'Consecrated a dedicated sanctuary for regular Navchandi Yagyas, Mahamrityunjaya jaap, and free annadanam (sacred food distribution) for the needy.'
    },
    {
      year: 'Present',
      title: '18,500+ Lives Restored Worldwide',
      desc: 'Continuing full-time personal consultations, dissolving deep karmic knots, and defending devotees from sorrow and dark energies.'
    }
  ];

  const trustBadges = [
    { title: 'Vedic Jyotish Ratna', desc: 'Certified in Parashari & Jaimini classical astrology systems' },
    { title: 'Agama Tantra Sadhak', desc: 'Initiated in sacred Kamakhya and Maa Kali protective rites' },
    { title: 'Prashna Shastra Master', desc: 'Accurate instant answers even without exact birth time' },
    { title: 'Global Discretion Certified', desc: '100% confidential and secure consultation protocols' }
  ];

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'About Astro Ankush' }]} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-[#E5B84B]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5B84B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B0505] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo with Divine Gold Aura */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#E5B84B]/60 shadow-2xl">
                <Image
                  src="/images/astro_ankush_hero_1790706946426.png"
                  alt="Astro Ankush seated in spiritual attire with rudraksha beads"
                  fill
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 inset-x-4 text-center">
                  <span className="font-cinzel text-lg font-bold text-[#E5B84B]">
                    Astro Ankush
                  </span>
                  <p className="text-xs text-[#F7ECD3]/80">
                    Spiritual Guide & Tantra-Mantra Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* Right Intro Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2">
                Spiritual Journey & Lineage
              </span>
              <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-5 leading-tight">
                Devoted to Guiding Souls through the Sacred Light of Jyotish
              </h1>
              <p className="font-marcellus text-lg text-[#E5B84B] mb-4">
                &ldquo;Astrology is not superstition; it is the divine mathematics of karma and time.&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#C9A96A] leading-relaxed mb-4">
                Astro Ankush was born into a family steeped in Sanatana Dharma traditions. Guided by deep inner calling from an early age, he sought the tutelage of authentic gurus who preserved ancient Himalayan oral traditions of Jyotish and Agama Tantra.
              </p>
              <p className="text-sm text-[#F7ECD3]/85 leading-relaxed mb-6">
                Over the past 15 years, he has dedicated his waking hours to diagnosing the root causes of distress—be it chronic delays in wedlock, venomous household disputes, unexpected financial downfalls, or malicious dark interference. Every ritual he conducts is strictly sattvic, respectful, and grounded in ancient Vedic scriptures.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Book Consultation</span>
                </a>
                <a
                  href={CONTACT_INFO.callUrl}
                  className="px-6 py-3 rounded-lg bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-[#08060A] to-[#120810] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Core Principles
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#F7ECD3]">
              Mission & Sacred Philosophy
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl border border-[#E5B84B]/30 relative">
              <div className="w-12 h-12 rounded-xl bg-[#1B0505] border border-[#E5B84B]/40 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-[#E5B84B]" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#F7ECD3] mb-3">
                Our Divine Mission
              </h3>
              <p className="text-sm text-[#C9A96A] leading-relaxed">
                To illuminate paths shrouded in despair through the unblemished wisdom of Vedic Jyotish. We exist to empower individuals with practical, karmic remedies that dismantle suffering, reconcile broken relationships, and awaken individual spiritual resilience without exploiting fear.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-[#E5B84B]/30 relative">
              <div className="w-12 h-12 rounded-xl bg-[#1B0505] border border-[#E5B84B]/40 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-[#FF9A2E]" />
              </div>
              <h3 className="font-cinzel text-xl font-bold text-[#F7ECD3] mb-3">
                Our Sacred Vision
              </h3>
              <p className="text-sm text-[#C9A96A] leading-relaxed">
                A world where seekers do not wander in hopelessness when confronted by life’s storms. By bridging traditional temple rituals, Prashna astrology, and empathetic human guidance, we envision restoring peace and joy in every home that calls upon Maa Kali’s grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-[#08060A] border-t border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Decades of Devotion
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#F7ECD3]">
              Spiritual Milestones & Journey
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="relative border-l-2 border-[#E5B84B]/40 ml-4 sm:ml-32 space-y-10">
            {timelineMilestones.map((item, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Node Glow */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#1B0505] border-2 border-[#E5B84B] group-hover:bg-[#E5B84B] transition-colors" />

                {/* Floating Year badge on sm screen */}
                <div className="sm:absolute sm:-left-32 sm:top-1 font-bebas text-2xl text-[#E5B84B] tracking-wider">
                  {item.year}
                </div>

                <div className="glass-card p-6 rounded-xl border border-[#E5B84B]/20">
                  <h3 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C9A96A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust Badges */}
      <section className="py-20 bg-[#1B0505]/60 border-t border-[#E5B84B]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Authority & Reverence
            </span>
            <h2 className="font-cinzel text-3xl font-bold text-[#F7ECD3]">
              Scriptural Credentials & Recognitions
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl border border-[#E5B84B]/25 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#E5B84B]/10 border border-[#E5B84B]/40 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-[#E5B84B]" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] mb-2">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#C9A96A] leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final About CTA */}
      <section className="py-16 bg-[#08060A] border-t border-[#E5B84B]/20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3] mb-3">
            Speak Directly with Astro Ankush
          </h2>
          <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
            No intermediaries. Direct, compassionate analysis of your situation with guaranteed secrecy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              Chat on WhatsApp Now
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg border border-[#E5B84B] text-[#E5B84B] font-bold text-xs uppercase tracking-wider hover:bg-[#E5B84B] hover:text-black transition-colors"
            >
              Visit Contact Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
