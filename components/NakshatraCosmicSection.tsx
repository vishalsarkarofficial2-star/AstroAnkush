'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Volume2, 
  Compass, 
  Flame, 
  ShieldCheck, 
  Moon, 
  Sun,
  Eye,
  Star,
  ChevronRight,
  Info
} from 'lucide-react';
import { SacredDivider } from './SacredDivider';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/astrology-data';

export interface NakshatraItem {
  id: string;
  nameEn: string;
  nameSa: string;
  rulingPlanet: string;
  deity: string;
  symbol: string;
  symbolGlyph: string;
  element: string;
  gana: 'Deva (Divine)' | 'Manushya (Human)' | 'Rakshasa (Fierce)';
  favorableFor: string;
  dailyMantraSa: string;
  dailyMantraMeaning: string;
  starCount: number;
  coordinates: { x: number; y: number }[]; // 0 to 100 percentage coordinates for drawing constellation lines
}

export const FEATURED_NAKSHATRAS: NakshatraItem[] = [
  {
    id: 'ashwini',
    nameEn: 'Ashwini (1st Nakshatra)',
    nameSa: 'अश्विनी',
    rulingPlanet: 'Ketu (केतु)',
    deity: 'Ashwini Kumaras (Divine Healers)',
    symbol: 'Horse’s Head (Speed, Vitality & Rejuvenation)',
    symbolGlyph: '🐎',
    element: 'Prithvi (Earth)',
    gana: 'Deva (Divine)',
    favorableFor: 'Initiating medical treatments, starting swift journeys, new ventures, and spiritual healing.',
    dailyMantraSa: 'ॐ अश्विनीकुमाराभ्यां नमः',
    dailyMantraMeaning: 'Salutations to the divine twin physicians, grantors of boundless vitality and swift healing.',
    starCount: 3,
    coordinates: [
      { x: 30, y: 40 },
      { x: 48, y: 25 },
      { x: 72, y: 55 },
      { x: 50, y: 75 },
      { x: 30, y: 40 }
    ]
  },
  {
    id: 'rohini',
    nameEn: 'Rohini (4th Nakshatra)',
    nameSa: 'रोहिणी',
    rulingPlanet: 'Chandra / Moon (चन्द्र)',
    deity: 'Lord Brahma (Creator of the Cosmos)',
    symbol: 'Cart / Chariot (Fertility, Luxury & Growth)',
    symbolGlyph: '🛒',
    element: 'Prithvi (Earth)',
    gana: 'Manushya (Human)',
    favorableFor: 'Marriage rituals, agricultural seeds, purchasing jewelry, artistic creations, and housewarming.',
    dailyMantraSa: 'ॐ ब्रह्मणे नमः | ॐ रोहिण्यै नमः',
    dailyMantraMeaning: 'Salutations to the creative energy of Lord Brahma and Rohini, fountainhead of cosmic beauty.',
    starCount: 5,
    coordinates: [
      { x: 25, y: 65 },
      { x: 45, y: 35 },
      { x: 75, y: 30 },
      { x: 80, y: 60 },
      { x: 50, y: 80 },
      { x: 25, y: 65 }
    ]
  },
  {
    id: 'mrigashira',
    nameEn: 'Mrigashira (5th Nakshatra)',
    nameSa: 'मृगशिरा',
    rulingPlanet: 'Mangala / Mars (मंगल)',
    deity: 'Soma (Chandra / Nectar of Immortality)',
    symbol: 'Deer’s Head (Curiosity, Searching & Agility)',
    symbolGlyph: '🦌',
    element: 'Prithvi (Earth)',
    gana: 'Deva (Divine)',
    favorableFor: 'Travel, exploration, research, learning occult sciences, romance, and spiritual sadhana.',
    dailyMantraSa: 'ॐ सोमाय नमः | ॐ मृगशिरसे नमः',
    dailyMantraMeaning: 'Salutations to the divine nectar of Soma, bestowing peace of mind and illuminating intellect.',
    starCount: 4,
    coordinates: [
      { x: 35, y: 25 },
      { x: 65, y: 25 },
      { x: 75, y: 65 },
      { x: 25, y: 65 },
      { x: 35, y: 25 }
    ]
  },
  {
    id: 'ardra',
    nameEn: 'Ardra (6th Nakshatra)',
    nameSa: 'आर्द्रा',
    rulingPlanet: 'Rahu (राहु)',
    deity: 'Rudra (Fierce Storm Form of Shiva)',
    symbol: 'Teardrop / Diamond (Transformation & Destruction of Ego)',
    symbolGlyph: '💎',
    element: 'Jala (Water)',
    gana: 'Manushya (Human)',
    favorableFor: 'Overcoming obstacles, dismantling toxic ties, deep occult research, and transformative remedies.',
    dailyMantraSa: 'ॐ रुद्राय नमः | ॐ आर्द्रायै नमः',
    dailyMantraMeaning: 'Salutations to Lord Rudra, who washes away all karmic impurities with the rain of grace.',
    starCount: 1,
    coordinates: [
      { x: 50, y: 15 },
      { x: 75, y: 50 },
      { x: 50, y: 85 },
      { x: 25, y: 50 },
      { x: 50, y: 15 }
    ]
  },
  {
    id: 'magha',
    nameEn: 'Magha (10th Nakshatra)',
    nameSa: 'मघा',
    rulingPlanet: 'Ketu (केतु)',
    deity: 'Pitrus (Revered Ancestors)',
    symbol: 'Royal Throne / Palanquin (Authority & Lineage)',
    symbolGlyph: '👑',
    element: 'Agni (Fire)',
    gana: 'Rakshasa (Fierce)',
    favorableFor: 'Ancestral Tarpanam, coronation, assuming leadership roles, historical research, and ceremonies.',
    dailyMantraSa: 'ॐ पितृभ्यो नमः | ॐ मघायै नमः',
    dailyMantraMeaning: 'Salutations to the divine ancestors whose blessing guards our lineage and grants prosperity.',
    starCount: 5,
    coordinates: [
      { x: 20, y: 40 },
      { x: 50, y: 20 },
      { x: 80, y: 40 },
      { x: 65, y: 75 },
      { x: 35, y: 75 },
      { x: 20, y: 40 }
    ]
  },
  {
    id: 'chitra',
    nameEn: 'Chitra (14th Nakshatra)',
    nameSa: 'चित्रा',
    rulingPlanet: 'Mangala / Mars (मंगल)',
    deity: 'Tvashtar / Vishwakarma (Cosmic Architect)',
    symbol: 'Brilliant Pearl / Sparkling Gemstone (Mastery of Design)',
    symbolGlyph: '✨',
    element: 'Agni (Fire)',
    gana: 'Rakshasa (Fierce)',
    favorableFor: 'Architectural blueprints, jewelry crafting, interior design, artistic performances, and repairs.',
    dailyMantraSa: 'ॐ विश्वकर्मणे नमः | ॐ चित्रायै नमः',
    dailyMantraMeaning: 'Salutations to Vishwakarma, builder of celestial worlds and master of all supreme arts.',
    starCount: 1,
    coordinates: [
      { x: 50, y: 20 },
      { x: 80, y: 35 },
      { x: 70, y: 80 },
      { x: 30, y: 80 },
      { x: 20, y: 35 },
      { x: 50, y: 20 }
    ]
  },
  {
    id: 'anuradha',
    nameEn: 'Anuradha (17th Nakshatra)',
    nameSa: 'अनुराधा',
    rulingPlanet: 'Shani / Saturn (शनि)',
    deity: 'Mitra (God of Divine Friendship & Light)',
    symbol: 'Lotus Flower / Staff (Devotion & Loyalty)',
    symbolGlyph: '🪷',
    element: 'Agni (Fire)',
    gana: 'Deva (Divine)',
    favorableFor: 'Forming strategic alliances, spiritual initiation, meditation retreats, traveling abroad, and reconciliation.',
    dailyMantraSa: 'ॐ मित्राय नमः | ॐ अनुराधायै नमः',
    dailyMantraMeaning: 'Salutations to Mitra Dev, guardian of harmonious bonds, truth, and eternal friendships.',
    starCount: 4,
    coordinates: [
      { x: 30, y: 30 },
      { x: 70, y: 30 },
      { x: 80, y: 70 },
      { x: 50, y: 85 },
      { x: 20, y: 70 },
      { x: 30, y: 30 }
    ]
  },
  {
    id: 'shravana',
    nameEn: 'Shravana (22nd Nakshatra)',
    nameSa: 'श्रवण',
    rulingPlanet: 'Chandra / Moon (चन्द्र)',
    deity: 'Lord Maha Vishnu & Goddess Saraswati',
    symbol: 'Ear / 3 Footprints (Listening, Wisdom & Learning)',
    symbolGlyph: '👂',
    element: 'Vayu (Air)',
    gana: 'Deva (Divine)',
    favorableFor: 'Acquiring sacred knowledge, mantra chanting, listening to scriptures, university studies, and spiritual initiation.',
    dailyMantraSa: 'ॐ विष्णवे नमः | ॐ श्रवणाय नमः',
    dailyMantraMeaning: 'Salutations to Lord Vishnu, the all-pervading preserver and bestower of supreme cosmic wisdom.',
    starCount: 3,
    coordinates: [
      { x: 50, y: 20 },
      { x: 75, y: 45 },
      { x: 50, y: 80 },
      { x: 25, y: 45 },
      { x: 50, y: 20 }
    ]
  },
  {
    id: 'revati',
    nameEn: 'Revati (27th Nakshatra)',
    nameSa: 'रेवती',
    rulingPlanet: 'Budha / Mercury (बुध)',
    deity: 'Pushan (Protector of Flocks & Wayfarers)',
    symbol: 'Pair of Fish / Drum (Prosperity & Spiritual Completion)',
    symbolGlyph: '🐟',
    element: 'Akash (Ether)',
    gana: 'Deva (Divine)',
    favorableFor: 'Beginning voyages, financial transactions, adoption of pets, charitable feeding, and spiritual liberation.',
    dailyMantraSa: 'ॐ पूष्णे नमः | ॐ रेवत्यै नमः',
    dailyMantraMeaning: 'Salutations to Pushan, nourisher of souls and safe guide across all earthly and spiritual journeys.',
    starCount: 32,
    coordinates: [
      { x: 20, y: 50 },
      { x: 40, y: 25 },
      { x: 65, y: 25 },
      { x: 80, y: 50 },
      { x: 65, y: 75 },
      { x: 40, y: 75 },
      { x: 20, y: 50 }
    ]
  }
];

export function NakshatraCosmicSection() {
  const [activeNakshatra, setActiveNakshatra] = useState<NakshatraItem>(FEATURED_NAKSHATRAS[1]); // Default Rohini
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleCopyMantra = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(activeNakshatra.dailyMantraSa);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handlePlayTone = () => {
    try {
      if (typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          if (!audioContextRef.current) {
            audioContextRef.current = new AudioCtx();
          }
          const ctx = audioContextRef.current;
          if (ctx.state === 'suspended') {
            ctx.resume();
          }

          // Deep meditative cosmic singing bowl tone tuned to 528Hz (Love/DNA transformation) and 432Hz
          const baseFreq = 528;
          const freqs = [baseFreq, baseFreq * 1.334, baseFreq * 1.5, baseFreq * 2];

          freqs.forEach((f, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = i === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(f, ctx.currentTime);

            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.12 / (i + 1), ctx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.0);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 4.0);
          });
        }

        setIsAudioPlaying(true);

        // Speak original Sanskrit Nakshatra Mantra aloud using Web Speech API
        if ('speechSynthesis' in window && activeNakshatra?.dailyMantraSa) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(activeNakshatra.dailyMantraSa);
          utterance.lang = 'hi-IN';
          utterance.rate = 0.8;
          utterance.pitch = 0.85;
          window.speechSynthesis.speak(utterance);
        }
      }

      setTimeout(() => {
        setIsAudioPlaying(false);
      }, 4000);
    } catch {
      setIsAudioPlaying(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#0B0C10] relative overflow-hidden text-[#F7ECD3] border-t border-[#E5B84B]/20">
      
      {/* Background Starfield & Deep Night Sky Nebula */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Cyan & Radiant Gold Ambient Light */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#06B6D4]/15 via-[#38BDF8]/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-[#E5B84B]/15 via-[#FF9A2E]/10 to-transparent rounded-full blur-[120px]" />

        {/* Scattered twinkling stardust */}
        <div className="absolute top-12 left-1/6 w-1 h-1 rounded-full bg-white animate-ping opacity-60" />
        <div className="absolute top-40 right-1/5 w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse opacity-80" />
        <div className="absolute bottom-24 left-1/3 w-1 h-1 rounded-full bg-[#E5B84B] animate-pulse opacity-70" />
        <div className="absolute top-2/3 right-1/6 w-2 h-2 rounded-full bg-white/80 animate-pulse opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#06B6D4]/20 via-[#E5B84B]/20 to-[#06B6D4]/20 border border-[#06B6D4]/40 shadow-sm mb-3">
            <Star className="w-3.5 h-3.5 text-[#38BDF8] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              27 Vedic Lunar Mansions
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F7ECD3] mb-3 leading-tight">
            Sacred Nakshatra & Daily Vedic Chants
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#C9A96A] leading-relaxed">
            In Vedic Jyotish, your birth Nakshatra (Janma Tara) governs subconscious instincts, karmic blueprints, and relationship destiny. Explore the constellation shapes and activate their divine power.
          </p>

          <SacredDivider withOm />
        </div>

        {/* Top Nakshatra Horizontal Selector Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start lg:justify-center">
          {FEATURED_NAKSHATRAS.map((nakshatra) => {
            const isSelected = activeNakshatra.id === nakshatra.id;
            return (
              <button
                key={nakshatra.id}
                type="button"
                onClick={() => setActiveNakshatra(nakshatra)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#06B6D4]/25 via-[#E5B84B]/20 to-[#06B6D4]/25 border-2 border-[#38BDF8] text-[#F7ECD3] shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-105'
                    : 'bg-[#151922]/80 hover:bg-[#1C2230] border border-white/10 text-[#C9A96A] hover:text-[#F7ECD3]'
                }`}
              >
                <span className="text-sm">{nakshatra.symbolGlyph}</span>
                <span className="font-cinzel">{nakshatra.nameEn.split(' ')[0]}</span>
                <span className="font-serif text-[11px] text-[#E5B84B]">({nakshatra.nameSa})</span>
              </button>
            );
          })}
        </div>

        {/* Main Stage Grid: Interactive Celestial Star Map (Left) + Sleek Dark-Mode Mantra Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Central Glowing Sri Yantra & Interactive Constellation Mandala */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Constellation Canvas Frame */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl p-6 bg-gradient-to-b from-[#10141E]/95 via-[#0C0F17]/95 to-[#06080D]/95 border-2 border-[#06B6D4]/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center overflow-hidden group">
              
              {/* Central Glowing Sacred Sri Yantra Sacred Geometry Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-700">
                <svg viewBox="0 0 200 200" className="w-[85%] h-[85%] animate-spin-slow text-[#E5B84B]" style={{ animationDuration: '60s' }}>
                  <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#38BDF8" strokeWidth="0.75" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <polygon points="100,10 180,150 20,150" fill="none" stroke="#E5B84B" strokeWidth="0.8" />
                  <polygon points="100,190 20,50 180,50" fill="none" stroke="#38BDF8" strokeWidth="0.8" />
                  <polygon points="100,30 160,140 40,140" fill="none" stroke="#E5B84B" strokeWidth="0.5" />
                  <polygon points="100,170 40,60 160,60" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Dynamic Constellation SVG Lines */}
              <svg 
                className="w-full h-full relative z-20 overflow-visible"
                viewBox="0 0 100 100"
              >
                {/* SVG Filter for Star Glow */}
                <defs>
                  <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Animated Connecting Lines */}
                <polyline
                  points={activeNakshatra.coordinates.map(pt => `${pt.x},${pt.y}`).join(' ')}
                  fill="none"
                  stroke="url(#constellationGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="3,2"
                  className="animate-pulse"
                />

                <linearGradient id="constellationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#E5B84B" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
                </linearGradient>

                {/* Constellation Star Nodes */}
                {activeNakshatra.coordinates.map((pt, i) => {
                  const isHovered = hoveredStar === i;
                  return (
                    <g 
                      key={i}
                      onMouseEnter={() => setHoveredStar(i)}
                      onMouseLeave={() => setHoveredStar(null)}
                      className="cursor-pointer"
                    >
                      {/* Outer Radiant Star Ripple */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? "5" : "3"}
                        fill="#38BDF8"
                        fillOpacity={isHovered ? "0.6" : "0.3"}
                        className="transition-all duration-300 animate-ping"
                      />
                      
                      {/* Core Star */}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isHovered ? "3.2" : "2"}
                        fill={isHovered ? "#FFF" : "#E5B84B"}
                        filter="url(#glowGold)"
                        className="transition-all duration-300"
                      />

                      {/* Star Index / Coordinate Tooltip */}
                      {isHovered && (
                        <text
                          x={pt.x + 3}
                          y={pt.y - 3}
                          fill="#FFF"
                          fontSize="3.5"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          Star #{i + 1}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Glowing Bindu / Mandala Focal Point */}
              <div className="absolute z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#06B6D4]/30 via-[#E5B84B]/30 to-transparent border border-[#38BDF8]/60 blur-xs flex items-center justify-center pointer-events-none">
                <span className="font-serif text-lg text-[#E5B84B] font-bold drop-shadow-[0_0_10px_rgba(229,184,75,0.8)]">
                  ॐ
                </span>
              </div>

              {/* Constellation Name Tag at bottom corner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-black/70 backdrop-blur-md border border-[#06B6D4]/30">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{activeNakshatra.symbolGlyph}</span>
                  <div>
                    <span className="text-xs font-bold text-[#F7ECD3] font-cinzel block">
                      {activeNakshatra.nameEn}
                    </span>
                    <span className="text-[10px] text-[#38BDF8]">
                      Symbol: {activeNakshatra.symbol}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-[#C9A96A] block">Lord / Planet</span>
                  <span className="text-xs font-bold text-[#E5B84B]">{activeNakshatra.rulingPlanet}</span>
                </div>
              </div>

            </div>

            {/* Hint text */}
            <p className="text-xs text-[#C9A96A]/80 mt-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Hover over constellation star nodes to illuminate Vedic stellar coordinates</span>
            </p>
          </div>

          {/* RIGHT: Modern Dark-Mode Card with Glowing Golden Border & Sanskrit Daily Mantra */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNakshatra.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-gradient-to-b from-[#141A26]/95 via-[#0D121B]/95 to-[#080B10]/98 border-2 border-[#E5B84B]/40 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Radiant Golden Rim Light */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E5B84B] to-transparent shadow-[0_0_15px_#E5B84B]" />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#06B6D4]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/40 text-[11px] font-bold text-[#38BDF8]">
                    <Moon className="w-3.5 h-3.5" />
                    <span>Daily Nakshatra Sadhana</span>
                  </div>

                  <span className="text-[11px] font-bold text-[#E5B84B] px-2.5 py-0.5 rounded-md bg-[#E5B84B]/10 border border-[#E5B84B]/30">
                    Gana: {activeNakshatra.gana}
                  </span>
                </div>

                {/* Nakshatra Title */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F7ECD3]">
                      {activeNakshatra.nameEn.split(' ')[0]}
                    </h3>
                    <span className="font-serif text-xl font-bold text-[#E5B84B]">
                      ({activeNakshatra.nameSa})
                    </span>
                  </div>
                  <p className="text-xs text-[#C9A96A] mt-1">
                    Presiding Deity: <strong className="text-[#F7ECD3]">{activeNakshatra.deity}</strong>
                  </p>
                </div>

                {/* SANSKRIT DAILY MANTRA BOX WITH GLOWING GOLD BORDER */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1E1910]/90 via-[#14120B]/90 to-[#0A0A06]/95 border-2 border-[#E5B84B] shadow-[0_0_20px_rgba(229,184,75,0.2)] mb-5 relative group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E5B84B]">
                      <Flame className="w-3.5 h-3.5 text-[#FF9A2E]" />
                      <span>Daily Mantra (दैनिक मन्त्र)</span>
                    </div>
                    <span className="text-[10px] text-[#38BDF8]">Chant 21 or 108 Times</span>
                  </div>

                  {/* Mantra in Devanagari */}
                  <div className="py-3 text-center">
                    <div className="font-serif text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E5B84B] to-[#FF9A2E] tracking-wide select-all leading-relaxed drop-shadow-sm">
                      {activeNakshatra.dailyMantraSa}
                    </div>
                    <p className="text-xs text-[#C9A96A] mt-2 italic leading-snug">
                      &ldquo;{activeNakshatra.dailyMantraMeaning}&rdquo;
                    </p>
                  </div>

                  {/* Actions: Copy & Listen Singing Bowl Tone */}
                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-[#E5B84B]/20">
                    <button
                      type="button"
                      onClick={handleCopyMantra}
                      className="px-3.5 py-1.5 rounded-lg bg-[#E5B84B]/15 hover:bg-[#E5B84B]/25 border border-[#E5B84B]/40 text-xs font-semibold text-[#F7ECD3] flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#25D366]" />
                          <span className="text-[#25D366]">Mantra Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#E5B84B]" />
                          <span>Copy Mantra</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handlePlayTone}
                      disabled={isAudioPlaying}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#06B6D4] to-[#38BDF8] text-black text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-75"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isAudioPlaying ? 'animate-bounce' : ''}`} />
                      <span>{isAudioPlaying ? 'Resonating 528Hz...' : '528Hz Sound'}</span>
                    </button>
                  </div>
                </div>

                {/* Auspicious Activities in this Nakshatra */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] block mb-1">
                    ✦ Highly Auspicious Undertakings:
                  </span>
                  <p className="text-xs text-[#C9A96A] leading-relaxed">
                    {activeNakshatra.favorableFor}
                  </p>
                </div>

                {/* Astro Ankush WhatsApp Nakshatra Shanti CTA */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20want%20to%20know%20about%20my%20birth%20Nakshatra%20${encodeURIComponent(activeNakshatra.nameEn)}%20and%20remedies.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black shrink-0" />
                    <span>Get {activeNakshatra.nameEn.split(' ')[0]} Janma Tara Report</span>
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
