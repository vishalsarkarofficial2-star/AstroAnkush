'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICES_DATA, CONTACT_INFO } from '@/lib/astrology-data';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Sparkles 
} from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigation link clicks (handled directly on link handlers)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services', isDropdown: true },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08060A]/90 backdrop-blur-md border-b border-[#E5B84B]/20 shadow-lg shadow-black/60'
            : 'bg-[#08060A]/40 backdrop-blur-sm border-b border-[#E5B84B]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Wordmark & Sacred Motif */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5B84B] rounded"
          >
            <div className="w-10 h-10 rounded-full border border-[#E5B84B]/60 bg-gradient-to-br from-[#1B0505] to-[#08060A] flex items-center justify-center shadow-md shadow-[#E5B84B]/10 group-hover:border-[#E5B84B] transition-colors">
              {/* Sacred Trishul / Om Symbol */}
              <span className="text-[#E5B84B] font-serif text-xl font-bold leading-none select-none">
                ॐ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#F7ECD3] group-hover:text-[#E5B84B] transition-colors">
                ASTRO ANKUSH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#C9A96A] -mt-1 font-medium">
                Vedic Astrologer & Tantra Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((item) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        pathname.startsWith('/services')
                          ? 'text-[#E5B84B]'
                          : 'text-[#F7ECD3]/85 hover:text-[#E5B84B]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 opacity-75 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-[540px] p-4 bg-[#120C16] border border-[#E5B84B]/30 rounded-xl shadow-2xl backdrop-blur-xl transition-all duration-200 ${
                        servicesOpen
                          ? 'opacity-100 visible translate-y-1'
                          : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E5B84B]/15">
                        <span className="text-xs font-semibold tracking-wider uppercase text-[#E5B84B] flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#FF9A2E]" />
                          12 Sacred Vedic Solutions
                        </span>
                        <Link
                          href="/services"
                          className="text-xs text-[#C9A96A] hover:text-[#F7ECD3] transition-colors"
                        >
                          View All Services →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {SERVICES_DATA.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="p-2 rounded-lg hover:bg-[#25152B]/60 transition-colors flex flex-col group/item border border-transparent hover:border-[#E5B84B]/20"
                          >
                            <span className="text-xs font-semibold text-[#F7ECD3] group-hover/item:text-[#E5B84B] transition-colors line-clamp-1">
                              {srv.title}
                            </span>
                            <span className="text-[11px] text-[#C9A96A] line-clamp-1">
                              {srv.shortDesc}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#E5B84B]'
                      : 'text-[#F7ECD3]/85 hover:text-[#E5B84B]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30 rounded-lg hover:bg-[#25D366]/20 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="relative group overflow-hidden px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#E5B84B] via-[#FF9A2E] to-[#E5B84B] text-[#08060A] text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-[#E5B84B]/25 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                Consult Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded bg-gradient-to-r from-[#E5B84B] to-[#FF9A2E] text-[#08060A]"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#E5B84B]/30 text-[#E5B84B] hover:bg-[#1B0505] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 lg:hidden bg-[#08060A]/95 backdrop-blur-xl border-b border-[#E5B84B]/20 flex flex-col justify-between overflow-y-auto p-6 pb-28">
          <div className="flex flex-col gap-3">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-[#C9A96A] pb-2 border-b border-[#E5B84B]/15">
              Sacred Navigation
            </div>

            {navLinks.map((item) => (
              <div key={item.label} className="border-b border-[#E5B84B]/10 pb-2">
                {item.isDropdown ? (
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between text-base font-medium text-[#F7ECD3] py-1"
                    >
                      <span className={pathname.startsWith('/services') ? 'text-[#E5B84B]' : ''}>
                        All 12 Services
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#E5B84B] transition-transform ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="mt-2 pl-3 grid grid-cols-1 gap-2 border-l-2 border-[#E5B84B]/30">
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-[#E5B84B] py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          → Services Overview
                        </Link>
                        {SERVICES_DATA.map((srv) => (
                          <Link
                            key={srv.slug}
                            href={`/services/${srv.slug}`}
                            className="text-xs text-[#F7ECD3]/80 hover:text-[#E5B84B] py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            • {srv.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block text-base font-medium py-1 ${
                      pathname === item.href ? 'text-[#E5B84B]' : 'text-[#F7ECD3]/85'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Quick Connect Mobile Buttons */}
          <div className="mt-8 pt-4 border-t border-[#E5B84B]/20 flex flex-col gap-3">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-black font-semibold text-sm shadow-md"
            >
              <WhatsAppIcon className="w-5 h-5 fill-black shrink-0" />
              Chat on WhatsApp (+91 97797 50799)
            </a>
            <a
              href={CONTACT_INFO.callUrl}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#C1121F] text-white font-semibold text-sm shadow-md"
            >
              <Phone className="w-5 h-5" />
              Direct Call Astro Ankush
            </a>
          </div>
        </div>
      )}
    </>
  );
}
