'use client';

import React, { useState } from 'react';
import { Send, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

interface EnquiryFormProps {
  defaultCategory?: string;
}

export function EnquiryForm({ defaultCategory = 'Love Problem' }: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(defaultCategory);
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Love Problem',
    'Delayed & Disturbed Marriage',
    'Divorce & Separation Prevention',
    'Childless Couple / Santan Prapti',
    'Janam Kundli Analysis',
    'Authentic Vedic Vashikaran',
    'Career & Job Obstacles',
    'Money & Debt Clearance',
    'Family Feuds & In-Law Discord',
    'Black Magic & Evil Eye Removal',
    'Chronic Illness & Health Healing',
    'Mangal Dosh & Kumbh Vivah',
    'Other Spiritual Guidance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Please enter your Name and Phone Number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    const fullText = `*Pranam Astro Ankush Ji,*%0A%0A` +
      `*Name:* ${encodeURIComponent(name.trim())}%0A` +
      `*Phone:* ${encodeURIComponent(phone.trim())}%0A` +
      (city ? `*Location:* ${encodeURIComponent(city.trim())}%0A` : '') +
      `*Problem Category:* ${encodeURIComponent(category)}%0A` +
      (message ? `*Problem Details:* ${encodeURIComponent(message.trim())}%0A` : '') +
      `%0APlease guide me with authentic Vedic remedies and auspicious timing.`;

    const whatsappLink = `https://wa.me/919779750799?text=${fullText}`;
    window.location.href = whatsappLink;
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-[#E5B84B]/30 relative overflow-hidden shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5B84B]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5B84B] mb-2">
        <Sparkles className="w-4 h-4 text-[#FF9A2E]" />
        <span>Instant Confidential Consultation Request</span>
      </div>

      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] mb-2">
        Share Your Problem in Complete Confidence
      </h3>
      <p className="text-xs text-[#C9A96A] mb-6 leading-relaxed">
        Your enquiry is delivered directly to Astro Ankush on encrypted WhatsApp. No spam, 100% sacred privacy guaranteed.
      </p>

      {errorMessage && (
        <div className="mb-4 p-3 rounded-lg bg-[#C1121F]/20 border border-[#C1121F] text-xs text-[#F7ECD3] flex items-center gap-2">
          <span>⚠️</span>
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-[#F7ECD3] mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-2.5 rounded-lg bg-[#08060A]/80 border border-[#E5B84B]/25 text-[#F7ECD3] text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label className="block text-xs font-medium text-[#F7ECD3] mb-1.5">
            WhatsApp / Mobile Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            className="w-full px-4 py-2.5 rounded-lg bg-[#08060A]/80 border border-[#E5B84B]/25 text-[#F7ECD3] text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-[#F7ECD3] mb-1.5">
            Problem Category *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-[#08060A]/80 border border-[#E5B84B]/25 text-[#F7ECD3] text-sm focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-[#120C16] text-[#F7ECD3]">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* City / Country */}
        <div>
          <label className="block text-xs font-medium text-[#F7ECD3] mb-1.5">
            Your City / Country
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Mumbai, India / London, UK"
            className="w-full px-4 py-2.5 rounded-lg bg-[#08060A]/80 border border-[#E5B84B]/25 text-[#F7ECD3] text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-5">
        <label className="block text-xs font-medium text-[#F7ECD3] mb-1.5">
          Describe Your Situation Briefly (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell Astro Ankush about the obstacles you are facing or what you seek guidance on..."
          className="w-full px-4 py-2.5 rounded-lg bg-[#08060A]/80 border border-[#E5B84B]/25 text-[#F7ECD3] text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[11px] text-[#C9A96A]">
          <ShieldCheck className="w-4 h-4 text-[#25D366] shrink-0" />
          <span>Encrypted transmission. No data stored on server.</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer disabled:opacity-50"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp →'}</span>
        </button>
      </div>
    </form>
  );
}
