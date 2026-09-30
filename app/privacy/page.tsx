import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Astro Ankush',
  description: 'Our sacred pledge of 100% confidential astrological consultations and strict data discretion.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#F7ECD3] mb-4 text-center">
          Privacy Policy & Sacred Discretion
        </h1>
        <p className="text-xs text-[#E5B84B] text-center mb-8 uppercase tracking-widest">
          Effective Date: January 2025 • Astro Ankush Sanctuary
        </p>

        <SacredDivider withOm />

        <div className="glass-card p-8 sm:p-10 rounded-2xl border border-[#E5B84B]/20 text-xs sm:text-sm text-[#C9A96A] space-y-6 leading-relaxed">
          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              1. Our Spiritual Code of Confidentiality
            </h2>
            <p>
              At Astro Ankush, we consider your trust sacred. Any information you disclose during your consultation—including your birth date, birth time, photographs, family concerns, marital challenges, or financial crises—remains strictly between you and Astro Ankush personally.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              2. Information Collected
            </h2>
            <p>
              We only collect information voluntarily provided by you via WhatsApp or telephone for the sole purpose of constructing and analyzing your Janam Kundli (horoscope) or calculating Prashna charts. This may include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-[#F7ECD3]/85">
              <li>Full Name</li>
              <li>Date of Birth, Time of Birth, Place of Birth</li>
              <li>Brief summary of your inquiry or problem</li>
              <li>Shipping address solely for physical energized yantras or kavach amulets</li>
            </ul>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              3. No Commercial Selling or Data Mining
            </h2>
            <p>
              We do not sell, rent, monetize, or disclose your contact details or personal disclosures to any commercial entity, marketing agency, advertising network, or third party under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              4. Encrypted WhatsApp Communications
            </h2>
            <p>
              Our primary consultation medium is WhatsApp, which employs end-to-end encryption. Your messages, voice notes, and images cannot be intercepted by outside parties.
            </p>
          </section>

          <section>
            <h2 className="font-cinzel text-lg font-bold text-[#F7ECD3] mb-2">
              5. Right to Erasure
            </h2>
            <p>
              Upon conclusion of your astrological consultation and remedy execution, you may request the immediate deletion of your chat history and birth details from our device records by messaging us directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
