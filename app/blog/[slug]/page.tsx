import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SacredDivider } from '@/components/SacredDivider';
import { BLOG_POSTS, CONTACT_INFO } from '@/lib/astrology-data';
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Article Not Found | Astro Ankush' };
  }
  return {
    title: `${post.title} | Astro Ankush`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col bg-[#08060A] text-[#F7ECD3] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-[#E5B84B] uppercase tracking-wider mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#C9A96A] mb-4">
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

        {/* Title */}
        <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F7ECD3] mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-[#E5B84B] leading-relaxed mb-8 italic">
          {post.excerpt}
        </p>

        <SacredDivider withOm className="my-8" />

        {/* Article Content */}
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-[#E5B84B]/20 text-[#F7ECD3]/90 leading-relaxed text-sm sm:text-base space-y-6">
          <div className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-[#C9A96A]/95">
            {post.content}
          </div>
        </div>

        {/* Author Box */}
        <div className="glass-card p-6 rounded-2xl border border-[#E5B84B]/30 mt-10 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B0505] to-[#08060A] border-2 border-[#E5B84B] flex items-center justify-center text-xl font-bold font-serif text-[#E5B84B] shrink-0">
            ॐ
          </div>
          <div>
            <div className="font-cinzel text-lg font-bold text-[#F7ECD3]">
              Written by Astro Ankush
            </div>
            <div className="text-xs text-[#E5B84B] mb-2 font-medium">
              Vedic Astrologer & Tantra-Mantra Specialist
            </div>
            <p className="text-xs text-[#C9A96A] leading-relaxed">
              Practicing ancient Himalayan Jyotish and Agama Tantra with over 15 years of dedicated sadhana. Dedicated to uplifting distressed souls worldwide.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center glass-card p-8 rounded-2xl border-2 border-[#E5B84B]/40">
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
            Need Personal Astrological Remedies?
          </h3>
          <p className="text-xs sm:text-sm text-[#C9A96A] mb-6">
            Get your horoscope diagnosed directly by Astro Ankush with 100% confidential consultation on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="px-8 py-3.5 rounded-xl bg-[#C1121F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
