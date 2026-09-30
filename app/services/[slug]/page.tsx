import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { SERVICES_DATA, CONTACT_INFO, ServiceItem } from '@/lib/astrology-data';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Star, 
  Flame,
  HelpCircle,
  Clock
} from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) {
    return { title: 'Service Not Found | Astro Ankush' };
  }
  return {
    title: `${service.title} | Astro Ankush - Vedic Astrologer`,
    description: `${service.heroHeadline}. ${service.shortDesc} 100% confidential consultation on WhatsApp & Phone.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_DATA.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  const prefilledWhatsappUrl = `https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20urgently%20need%20remedies%20for%20${encodeURIComponent(
    service.title
  )}.`;

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#1B0505]/90 via-[#08060A] to-[#08060A] border-b border-[#E5B84B]/20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5B84B]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08060A]/80 border border-[#E5B84B]/40 text-[#E5B84B] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#FF9A2E]" />
            <span>Category: {service.category}</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F7ECD3] mb-4 leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="font-marcellus text-lg sm:text-xl text-[#E5B84B] max-w-2xl mx-auto mb-6">
            {service.tagline}
          </p>

          <p className="text-sm sm:text-base text-[#C9A96A] max-w-3xl mx-auto leading-relaxed mb-8">
            {service.shortDesc} Astro Ankush applies authentic Parashara Jyotish diagnostics and sacred Agama Tantra anushthans to dismantle your karmic afflictions.
          </p>

          {/* Quick Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={prefilledWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Consult via WhatsApp</span>
            </a>

            <a
              href={CONTACT_INFO.callUrl}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#C1121F]/20 hover:scale-105 transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Signs You Need This Consultation */}
      <section className="py-16 bg-[#08060A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Astrological Symptom Audit
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
              Signs You Need This Consultation
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.signsYouNeedThis.map((sign, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-xl border border-[#E5B84B]/20 flex items-start gap-3.5"
              >
                <div className="w-6 h-6 rounded-full bg-[#E5B84B]/10 border border-[#E5B84B]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#E5B84B] text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#F7ECD3]/90 leading-relaxed">
                  {sign}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Astro Ankush Solves It */}
      <section className="py-16 bg-[#1B0505]/50 border-y border-[#E5B84B]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              The Vedic Mechanism
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
              How Astro Ankush Solves Your Crisis
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="glass-card p-8 rounded-2xl border border-[#E5B84B]/30 mb-8">
            <h3 className="font-cinzel text-xl font-bold text-[#E5B84B] mb-3">
              {service.howHeSolvesIt.title}
            </h3>
            <p className="text-sm text-[#C9A96A] leading-relaxed mb-6">
              {service.howHeSolvesIt.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F7ECD3] mb-3">
              Core Consecrated Remedies & Rituals:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.howHeSolvesIt.remedies.map((rem, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#08060A]/70 border border-[#E5B84B]/20 flex items-center gap-2.5 text-xs text-[#F7ECD3]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>{rem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Timeline */}
      <section className="py-16 bg-[#08060A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Sacred Progression
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
              Our 4-Step Remedial Journey
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-xl border border-[#E5B84B]/20 relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-bebas text-4xl text-[#E5B84B] tracking-wider mb-2">
                    {step.step}
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#C9A96A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="py-16 bg-gradient-to-b from-[#08060A] to-[#120810] border-t border-[#E5B84B]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              Transformed Destiny
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
              Expected Outcomes & Blessings
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.expectedBenefits.map((benefit, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#1B0505]/60 border border-[#E5B84B]/25 flex items-start gap-3"
              >
                <Sparkles className="w-5 h-5 text-[#FF9A2E] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#F7ECD3]/95 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Testimonials */}
      {service.testimonials.length > 0 && (
        <section className="py-16 bg-[#08060A] border-t border-[#E5B84B]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
                Devotee Experiences
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
                Proven Results in {service.title}
              </h2>
              <SacredDivider withOm />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-[#E5B84B]/25 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#E5B84B] mb-3">
                      {Array.from({ length: t.rating }).map((_, r) => (
                        <Star key={r} className="w-4 h-4 fill-[#E5B84B]" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#F7ECD3]/90 italic leading-relaxed mb-4">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E5B84B]/15">
                    <div className="font-cinzel text-sm font-bold text-[#E5B84B]">
                      {t.name}
                    </div>
                    <div className="text-xs text-[#C9A96A]">{t.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific FAQs */}
      <section className="py-16 bg-[#120C16]/60 border-t border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
              In-Depth Answers
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
              Questions About {service.title}
            </h2>
            <SacredDivider withOm />
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-xl border border-[#E5B84B]/20"
              >
                <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] mb-2 flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#E5B84B] shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#C9A96A] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-[#08060A] border-t border-[#E5B84B]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
                Complementary Solutions
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
                Related Sacred Consultations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="glass-card p-5 rounded-xl border border-[#E5B84B]/20 hover:border-[#E5B84B] transition-colors block group"
                >
                  <span className="text-[10px] font-semibold uppercase text-[#FF9A2E] tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h3 className="font-cinzel text-base font-bold text-[#F7ECD3] group-hover:text-[#E5B84B] transition-colors mb-2 line-clamp-1">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-[#C9A96A] line-clamp-2 mb-3">
                    {rel.shortDesc}
                  </p>
                  <span className="text-xs font-bold text-[#E5B84B] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Service CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1B0505] to-[#250808] border-t border-[#E5B84B]/30 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3] mb-3">
            Do Not Suffer in Silence
          </h2>
          <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
            A single WhatsApp message or direct phone call can initiate the spiritual remedies needed to turn your circumstances around.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={prefilledWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Astro Ankush Directly</span>
            </a>

            <a
              href={CONTACT_INFO.callUrl}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
