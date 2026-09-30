'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShieldCheck, Send, CheckCircle2, Lock, Calendar, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { SERVICES_DATA, CONTACT_INFO } from '@/lib/astrology-data';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function EnquiryModal({ isOpen, onClose, defaultService }: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState(defaultService || SERVICES_DATA[0].title);
  const [dob, setDob] = useState('');
  const [city, setCity] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsSubmitted(false);
    setValidationError('');
    onClose();
  };

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setValidationError('Please enter your full name and phone/WhatsApp number.');
      return;
    }
    setValidationError('');
    setIsSubmitted(true);

    const messageContent =
      `*Pranam Astro Ankush Ji,*%0A%0A` +
      `*Sacred Consultation & Service Enquiry:*%0A` +
      `• *Name:* ${encodeURIComponent(name.trim())}%0A` +
      `• *Phone:* ${encodeURIComponent(phone.trim())}%0A` +
      `• *Required Service:* ${encodeURIComponent(serviceRequired)}%0A` +
      (dob ? `• *Birth Date:* ${encodeURIComponent(dob)}%0A` : '') +
      (city ? `• *City / Place:* ${encodeURIComponent(city.trim())}%0A` : '') +
      (problemDescription ? `• *Problem Details:* ${encodeURIComponent(problemDescription.trim())}%0A` : '') +
      `%0A_Please diagnose my horoscope and suggest authentic Vedic remedies._`;

    const whatsappUrl = `https://wa.me/919779750799?text=${messageContent}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0" 
        onClick={handleClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#140812] via-[#0E0610] to-[#08060A] border-2 border-[#E5B84B]/40 rounded-2xl shadow-2xl shadow-black p-5 sm:p-8 z-10 text-[#F7ECD3] my-8 overflow-hidden">
        {/* Glow ambient background effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#E5B84B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C1121F]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1B0505] border border-[#E5B84B]/40 text-[#E5B84B] hover:text-white hover:bg-[#C1121F] transition-all cursor-pointer z-20"
          aria-label="Close Enquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="py-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1B0505] to-[#08060A] border-2 border-[#25D366] flex items-center justify-center text-3xl mb-4 text-[#25D366]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-cinzel text-2xl font-bold text-[#F7ECD3] mb-2">
              Pranam, {name}!
            </h3>
            <p className="text-sm text-[#E5B84B] mb-2 font-medium">
              Your Enquiry for <span className="font-bold underline">{serviceRequired}</span> is Prepared.
            </p>
            <p className="text-xs text-[#C9A96A] max-w-md mx-auto mb-6 leading-relaxed">
              Connecting you directly to Astro Ankush on encrypted WhatsApp for personal horoscope diagnosis and consecrated remedy guidance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-4 h-4 fill-black shrink-0" />
                <span>Open WhatsApp Now</span>
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-3 rounded-xl border border-[#E5B84B]/40 text-[#F7ECD3] text-xs font-semibold hover:bg-[#E5B84B]/10 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Enquiry Form */
          <>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B0505] border border-[#E5B84B]/40 text-[#FF9A2E] text-[11px] font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Services Required • Confidential Enquiry</span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3] leading-snug">
                Consult Astro Ankush for Remedies
              </h2>
              <p className="text-xs sm:text-sm text-[#C9A96A] mt-1 leading-relaxed">
                Select your required service and describe your situation. 100% sacred privacy &amp; strict confidentiality guaranteed.
              </p>
            </div>

            {validationError && (
              <div className="mb-4 p-3 rounded-lg bg-[#C1121F]/20 border border-[#C1121F] text-xs text-[#F7ECD3] flex items-center gap-2">
                <span>⚠️</span>
                <span>{validationError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#F7ECD3] mb-1">
                    Your Full Name <span className="text-[#FF9A2E]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs sm:text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F7ECD3] mb-1">
                    Phone / WhatsApp Number <span className="text-[#FF9A2E]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs sm:text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Services Required Dropdown */}
              <div>
                <label className="block text-xs font-medium text-[#F7ECD3] mb-1">
                  Services Required <span className="text-[#FF9A2E]">*</span>
                </label>
                <select
                  value={serviceRequired}
                  onChange={(e) => setServiceRequired(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs sm:text-sm focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.slug} value={srv.title} className="bg-[#140812] text-[#F7ECD3]">
                      {srv.title} — ({srv.category})
                    </option>
                  ))}
                  <option value="Other Vedic Guidance" className="bg-[#140812] text-[#F7ECD3]">
                    Other Vedic Consultation / Prashna Kundli
                  </option>
                </select>
              </div>

              {/* Row 3: Optional Date of Birth & Place */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-[#C9A96A] mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E5B84B]" />
                    <span>Birth Date (Optional for Kundli)</span>
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs focus:outline-none focus:border-[#E5B84B] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C9A96A] mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E5B84B]" />
                    <span>Current City / State</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Delhi, Punjab, Mumbai, USA"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] transition-all"
                  />
                </div>
              </div>

              {/* Row 4: Problem Details */}
              <div>
                <label className="block text-xs font-medium text-[#F7ECD3] mb-1">
                  Describe Your Problem or Question (Optional)
                </label>
                <textarea
                  rows={3}
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  placeholder="Share details of your situation, delay in marriage, love heartbreak, or negative energy symptoms..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08060A] border border-[#E5B84B]/30 text-[#F7ECD3] text-xs sm:text-sm placeholder-[#C9A96A]/40 focus:outline-none focus:border-[#E5B84B] focus:ring-1 focus:ring-[#E5B84B] transition-all resize-none"
                />
              </div>

              {/* Security note & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-[#C9A96A]">
                  <Lock className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>100% Confidential • Direct encrypted consultation</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#E5B84B] via-[#FF9A2E] to-[#E5B84B] text-[#08060A] font-cinzel font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#E5B84B]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#08060A]" />
                  <span>Submit Sacred Enquiry</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
