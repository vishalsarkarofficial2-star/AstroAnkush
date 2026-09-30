import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { BLOG_POSTS, CONTACT_INFO } from '@/lib/astrology-data';
import { BookOpen, Clock, Calendar, ArrowRight, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spiritual Astrology Blog | Astro Ankush',
  description: 'Deep Vedic astrological insights, dosha nivaran guidelines, and spiritual wisdom by Astro Ankush.',
};

export default function BlogPage() {
  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog & Articles' }]} />

      {/* Hero */}
      <section className="relative py-16 lg:py-20 text-center border-b border-[#E5B84B]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] mb-2 block">
            Vedic Wisdom & Discourses
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-[#F7ECD3] mb-4">
            Spiritual Astrology Insights
          </h1>
          <p className="text-sm sm:text-base text-[#C9A96A] max-w-2xl mx-auto leading-relaxed">
            Delve into authentic scriptural secrets behind doshas, planetary transit influences, sacred mantras, and positive tantra remedies written by Astro Ankush.
          </p>
          <SacredDivider withOm />
        </div>
      </section>

      {/* Blog Cards */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="glass-card rounded-2xl p-7 sm:p-8 border border-[#E5B84B]/25 hover:border-[#E5B84B] transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#C9A96A] mb-3">
                  <span className="font-bold text-[#FF9A2E] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] group-hover:text-[#E5B84B] transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#C9A96A] leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#E5B84B]/15">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#E5B84B] uppercase tracking-wider flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="text-[11px] text-[#C9A96A]">
                    By Astro Ankush
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA at Bottom */}
          <div className="mt-16 text-center glass-card p-8 rounded-2xl border border-[#E5B84B]/30">
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
              Have a Specific Astrological Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
              Connect directly on WhatsApp to get your Janam Kundli personally evaluated.
            </p>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Ask Astro Ankush on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
