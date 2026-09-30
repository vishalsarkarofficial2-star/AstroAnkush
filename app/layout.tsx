import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { InstantNavigationPreloader } from '@/components/InstantNavigationPreloader';

export const metadata: Metadata = {
  metadataBase: new URL('https://astroankush.com'),
  title: 'Astro Ankush | Authentic Vedic Astrologer & Tantra-Mantra Specialist',
  description:
    'By the Grace of Maa Kali, Every Crisis Shall Pass. Consult Astro Ankush for guaranteed Vedic remedies for love problems, marriage delays, divorce prevention, career growth, black magic removal & financial prosperity.',
  keywords: [
    'Astro Ankush',
    'Vedic Astrologer',
    'Tantra Mantra Specialist',
    'Love Problem Solution',
    'Marriage Problem Astrologer',
    'Divorce Problem Solution',
    'Janam Kundli Reading',
    'Vashikaran Specialist',
    'Black Magic Removal',
    'Manglik Dosh Nivaran'
  ],
  authors: [{ name: 'Astro Ankush' }],
  openGraph: {
    title: 'Astro Ankush | Authentic Vedic Astrologer & Tantra-Mantra Specialist',
    description:
      'By the Grace of Maa Kali, Every Crisis Shall Pass. 100% confidential Vedic astrological remedies for all life challenges.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Astro Ankush',
    images: [
      {
        url: '/images/astro_ankush_hero.jpg',
        width: 1200,
        height: 1600,
        alt: 'Astro Ankush - Vedic Astrologer & Tantra Specialist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Astro Ankush | Vedic Astrologer & Tantra-Mantra Specialist',
    description:
      'By the Grace of Maa Kali, Every Crisis Shall Pass. Instant WhatsApp & Phone consultation.',
    images: ['/images/astro_ankush_hero.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'ProfessionalService'],
    name: 'Astro Ankush',
    description:
      'Vedic Astrologer & Tantra-Mantra Specialist offering authentic remedies for love, marriage, divorce, money, health, and family problems.',
    image: 'https://astroankush.com/images/astro_ankush_hero.jpg',
    telephone: '+919779750799',
    openingHours: 'Mo-Su 08:00-22:00',
    priceRange: '₹₹',
    knowsAbout: [
      'Vedic Astrology',
      'Kundli Analysis',
      'Tantra Mantra Sadhana',
      'Vashikaran Remedies',
      'Navgrah Shanti',
      'Mangal Dosh Nivaran'
    ],
    areaServed: 'Worldwide'
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#08060A] text-[#F7ECD3] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeNextDevBadges() {
                  var els = document.querySelectorAll('nextjs-portal, #nextjs-dev-indicators, [data-nextjs-dev-overlay], [data-nextjs-toast]');
                  for (var i = 0; i < els.length; i++) {
                    els[i].remove();
                  }
                }
                if (typeof window !== 'undefined') {
                  window.addEventListener('DOMContentLoaded', removeNextDevBadges);
                  setInterval(removeNextDevBadges, 800);
                }
              })();
            `
          }}
        />
        <InstantNavigationPreloader />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
