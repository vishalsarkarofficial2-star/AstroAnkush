import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Astrology Disclaimer | Astro Ankush',
  description: 'Terms of service, astrology disclaimer, and spiritual guidance policies for Astro Ankush.',
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Terms & Disclaimer' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#F7ECD3] mb-4 text-center">
          Terms of Service & Astrology Disclaimer
        </h1>
        <p className="text-xs text-[#E5B84B] text-center mb-8 uppercase tracking-widest">
          Astro Ankush Vedic Guidance & Spiritual Remedies
        </p>

        <SacredDivider withOm />

        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-[#E5B84B]/20 text-xs sm:text-sm text-[#C9A96A] space-y-6 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              1. Spiritual Nature of Vedic Astrology
            </h2>
            <p>
              Vedic Astrology (Jyotish Shastra) is an ancient predictive science and spiritual discipline based on planetary calculations, karmic patterns, and scriptural interpretations. While Astro Ankush applies rigorous classical methods and decades of sadhana to attain high accuracy, outcomes are subject to individual karma, divine will, and personal free will.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              2. Not a Replacement for Professional Advice
            </h2>
            <p className="text-[#F7ECD3]">
              Astrological consultations and spiritual remedies provided by Astro Ankush are not intended to replace licensed medical, psychiatric, financial, or legal counsel. Seekers suffering from severe medical illnesses or clinical psychological disorders must seek certified healthcare professionals.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              3. Dakshina & Samagri Contributions
            </h2>
            <p>
              Any Dakshina (financial offering) received is utilized to procure sacred herbs, pure cow ghee, bhojpatra, and consecrated materials for temple hawan ceremonies, as well as to maintain the ashram sanctuary and free annadanam initiatives. Dakshina is non-refundable once rituals and mantra anushthans have commenced.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              4. Code of Respect
            </h2>
            <p>
              Devotees and seekers are expected to approach consultations with sincerity, mutual respect, and faith in the Vedic traditions. Astro Ankush reserves the right to decline consultations to individuals seeking harmful, unethical, or illegal practices.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              5. Governing Law
            </h2>
            <p>
              All interactions and spiritual services shall be governed in accordance with the customary spiritual laws of Sanatana Dharma and the jurisdictional laws of India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
