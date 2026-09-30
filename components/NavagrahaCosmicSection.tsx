'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Volume2, 
  Check, 
  Copy, 
  RotateCw, 
  ShieldCheck, 
  Flame, 
  Sun, 
  Moon, 
  Zap, 
  Compass, 
  Award,
  ChevronRight,
  Info
} from 'lucide-react';
import { SacredDivider } from './SacredDivider';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CONTACT_INFO } from '@/lib/astrology-data';

export interface NavagrahaPlanet {
  id: string;
  nameEn: string;
  nameSa: string;
  deity: string;
  significance: string;
  governs: string;
  element: string;
  gemstone: string;
  day: string;
  colorScheme: {
    orbit: string;
    glow: string;
    gradient: string;
    badgeBg: string;
    text: string;
    ring: string;
  };
  beejMantra: string;
  mantraCount: string;
  remedyInsight: string;
  iconType: 'sun' | 'moon' | 'mars' | 'mercury' | 'jupiter' | 'venus' | 'saturn' | 'rahu' | 'ketu';
  distancePct: number; // percentage radius for visualization
  orbitSpeed: number; // seconds for full orbit
  startAngle: number; // starting angle in degrees
}

export const NAVAGRAHA_DATA: NavagrahaPlanet[] = [
  {
    id: 'surya',
    nameEn: 'Sun (Surya)',
    nameSa: 'सूर्य देव',
    deity: 'Lord Surya Narayana',
    significance: 'The King of Planets, Atmakaraka (Soul Indicator)',
    governs: 'Willpower, Soul, Father, Vitality, Authority, Government Honors',
    element: 'Agni (Fire)',
    gemstone: 'Manikya (Natural Ruby)',
    day: 'Ravivar (Sunday)',
    colorScheme: {
      orbit: 'rgba(255, 154, 46, 0.4)',
      glow: '#FF9A2E',
      gradient: 'from-[#FF9A2E] via-[#FF5722] to-[#B71C1C]',
      badgeBg: 'bg-[#FF9A2E]/15 text-[#FF9A2E] border-[#FF9A2E]/40',
      text: '#FF9A2E',
      ring: 'border-[#FF9A2E]/60'
    },
    beejMantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
    mantraCount: 'Chant 108 times at sunrise facing East',
    remedyInsight: 'Offer Arghya (water with red flowers & kumkum) to morning Sun, chant Aditya Hridaya Stotram for career elevation and strong health.',
    iconType: 'sun',
    distancePct: 22,
    orbitSpeed: 38,
    startAngle: 0
  },
  {
    id: 'chandra',
    nameEn: 'Moon (Chandra)',
    nameSa: 'चन्द्र देव',
    deity: 'Lord Soma / Shiva',
    significance: 'Mind & Mental Equilibrium, Matrukaraka (Mother Indicator)',
    governs: 'Emotions, Mind, Intuition, Fertility, Liquid Wealth, Inner Peace',
    element: 'Jal (Water)',
    gemstone: 'Moti (Natural South Sea Pearl)',
    day: 'Somvar (Monday)',
    colorScheme: {
      orbit: 'rgba(186, 230, 253, 0.35)',
      glow: '#BAE6FD',
      gradient: 'from-[#FFFFFF] via-[#BAE6FD] to-[#38BDF8]',
      badgeBg: 'bg-[#38BDF8]/15 text-[#BAE6FD] border-[#38BDF8]/40',
      text: '#BAE6FD',
      ring: 'border-[#BAE6FD]/60'
    },
    beejMantra: 'ॐ श्रां श्रीं श्रौं सः चन्द्रमसे नमः',
    mantraCount: 'Chant 108 times on Monday evening',
    remedyInsight: 'Abhishekam to Lord Shiva with raw milk and water on Mondays to eliminate anxiety, depression, and mental turbulence.',
    iconType: 'moon',
    distancePct: 29,
    orbitSpeed: 44,
    startAngle: 40
  },
  {
    id: 'mangala',
    nameEn: 'Mars (Mangala)',
    nameSa: 'मङ्गल देव',
    deity: 'Lord Kartikeya / Hanuman Ji',
    significance: 'Commander-in-Chief, Bhratrukaraka (Courage & Siblings)',
    governs: 'Bravery, Land & Real Estate, Blood Vitality, Passion, Victory in Debates',
    element: 'Tejas (Divine Fire)',
    gemstone: 'Moonga (Red Italian Coral)',
    day: 'Mangalvar (Tuesday)',
    colorScheme: {
      orbit: 'rgba(239, 68, 68, 0.35)',
      glow: '#EF4444',
      gradient: 'from-[#F87171] via-[#DC2626] to-[#7F1D1D]',
      badgeBg: 'bg-[#EF4444]/15 text-[#F87171] border-[#EF4444]/40',
      text: '#EF4444',
      ring: 'border-[#EF4444]/60'
    },
    beejMantra: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः',
    mantraCount: 'Chant 108 times on Tuesday with red asana',
    remedyInsight: 'Recite Hanuman Chalisa or Sundarkand to pacify Mangal Dosha, delay in marriage, and property disputes.',
    iconType: 'mars',
    distancePct: 36,
    orbitSpeed: 50,
    startAngle: 80
  },
  {
    id: 'budha',
    nameEn: 'Mercury (Budha)',
    nameSa: 'बुध देव',
    deity: 'Lord Vishnu Narayana',
    significance: 'Prince of Planets, Gnanakaraka (Intelligence & Commerce)',
    governs: 'Intellect, Sharp Speech, Trade & Commerce, Mathematics, Analysis, Memory',
    element: 'Prithvi (Earth)',
    gemstone: 'Panna (Zambian Emerald)',
    day: 'Budhvar (Wednesday)',
    colorScheme: {
      orbit: 'rgba(16, 185, 129, 0.35)',
      glow: '#10B981',
      gradient: 'from-[#34D399] via-[#059669] to-[#064E3B]',
      badgeBg: 'bg-[#10B981]/15 text-[#34D399] border-[#10B981]/40',
      text: '#10B981',
      ring: 'border-[#10B981]/60'
    },
    beejMantra: 'ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः',
    mantraCount: 'Chant 108 times facing North-East',
    remedyInsight: 'Feed green grass or spinach to sacred cows on Wednesdays and donate green moong dal for rapid business growth.',
    iconType: 'mercury',
    distancePct: 43,
    orbitSpeed: 56,
    startAngle: 120
  },
  {
    id: 'brihaspati',
    nameEn: 'Jupiter (Brihaspati / Guru)',
    nameSa: 'गुरु बृहस्पति',
    deity: 'Lord Shiva / Guru Dev',
    significance: 'The Supreme Preceptor, Dharmakaraka (Wisdom & Fortune)',
    governs: 'Higher Knowledge, Children, Gold, Righteousness, Divine Luck, Marriage',
    element: 'Akash (Ether/Cosmic Space)',
    gemstone: 'Pukhraj (Ceylon Yellow Sapphire)',
    day: 'Guruvar (Thursday)',
    colorScheme: {
      orbit: 'rgba(234, 179, 8, 0.4)',
      glow: '#EAB308',
      gradient: 'from-[#FDE047] via-[#CA8A04] to-[#854D0E]',
      badgeBg: 'bg-[#EAB308]/15 text-[#FDE047] border-[#EAB308]/40',
      text: '#EAB308',
      ring: 'border-[#EAB308]/60'
    },
    beejMantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
    mantraCount: 'Chant 108 times facing North-East with yellow sandalwood',
    remedyInsight: 'Apply pure saffron/turmeric tilak on forehead daily and serve elders or spiritual gurus for auspicious marriage and progeny.',
    iconType: 'jupiter',
    distancePct: 50,
    orbitSpeed: 64,
    startAngle: 160
  },
  {
    id: 'shukra',
    nameEn: 'Venus (Shukra)',
    nameSa: 'शुक्र देव',
    deity: 'Goddess Mahalakshmi',
    significance: 'Master of Aesthetics, Kalatrakaraka (Spouse & Luxury)',
    governs: 'Love, Romantic Bliss, Luxurious Vehicles, Refined Arts, Conjugal Harmony',
    element: 'Jala (Pure Sweet Water)',
    gemstone: 'Heera (Diamond) / Opal',
    day: 'Shukravar (Friday)',
    colorScheme: {
      orbit: 'rgba(244, 114, 182, 0.35)',
      glow: '#F472B6',
      gradient: 'from-[#FBCFE8] via-[#F472B6] to-[#BE185D]',
      badgeBg: 'bg-[#F472B6]/15 text-[#FBCFE8] border-[#F472B6]/40',
      text: '#F472B6',
      ring: 'border-[#F472B6]/60'
    },
    beejMantra: 'ॐ द्रां द्रीं द्रौं सः शुक्राय नमः',
    mantraCount: 'Chant 108 times on Friday evening',
    remedyInsight: 'Recite Sri Suktam and offer white sweets or fragrant white flowers to Goddess Lakshmi for lifelong wealth and marital bliss.',
    iconType: 'venus',
    distancePct: 57,
    orbitSpeed: 70,
    startAngle: 200
  },
  {
    id: 'shani',
    nameEn: 'Saturn (Shani)',
    nameSa: 'शनि देव',
    deity: 'Lord Shani Dev / Mahakaal',
    significance: 'Lord of Justice & Karma, Ayushkaraka (Longevity)',
    governs: 'Karmic Balance, Endurance, Justice, Longevity, Humility, Deep Research',
    element: 'Vayu (Cosmic Air)',
    gemstone: 'Neelam (Natural Blue Sapphire)',
    day: 'Shanivar (Saturday)',
    colorScheme: {
      orbit: 'rgba(99, 102, 241, 0.4)',
      glow: '#6366F1',
      gradient: 'from-[#818CF8] via-[#4F46E5] to-[#1E1B4B]',
      badgeBg: 'bg-[#6366F1]/15 text-[#818CF8] border-[#6366F1]/40',
      text: '#818CF8',
      ring: 'border-[#6366F1]/60'
    },
    beejMantra: 'ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः',
    mantraCount: 'Chant 108 times on Saturday after sunset',
    remedyInsight: 'Light a mustard oil diya under a sacred Peepal tree and chant Dasharatha Shani Stotram to soothe Sade Sati and Dhaiya impacts.',
    iconType: 'saturn',
    distancePct: 64,
    orbitSpeed: 78,
    startAngle: 240
  },
  {
    id: 'rahu',
    nameEn: 'Rahu (North Node)',
    nameSa: 'राहु देव',
    deity: 'Goddess Durga / Kaal Bhairav',
    significance: 'The Shadow Dragon’s Head, Maya & Illusion Master',
    governs: 'Sudden Material Gains, Foreign Settling, Politics, Tech Breakthroughs',
    element: 'Chhaya (Shadow/Etheric)',
    gemstone: 'Gomed (Ceylonese Hessonite Garnet)',
    day: 'Shanivar / Rahu Kaal',
    colorScheme: {
      orbit: 'rgba(168, 85, 247, 0.35)',
      glow: '#A855F7',
      gradient: 'from-[#C084FC] via-[#7E22CE] to-[#3B0764]',
      badgeBg: 'bg-[#A855F7]/15 text-[#C084FC] border-[#A855F7]/40',
      text: '#A855F7',
      ring: 'border-[#A855F7]/60'
    },
    beejMantra: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः',
    mantraCount: 'Chant 108 times during evening or Rahu Kaal',
    remedyInsight: 'Recite Durga Saptashati / Argala Stotram and donate black sesame or blankets to the needy to dissolve illusions and sudden obstacles.',
    iconType: 'rahu',
    distancePct: 71,
    orbitSpeed: 86,
    startAngle: 280
  },
  {
    id: 'ketu',
    nameEn: 'Ketu (South Node)',
    nameSa: 'केतु देव',
    deity: 'Lord Ganesha / Matsya Avatar',
    significance: 'The Dragon’s Tail, Mokshakaraka (Liberation & Occult)',
    governs: 'Spiritual Awakening, Occult Mastery, Detachment, Healing Abilities',
    element: 'Agni-Chhaya (Spiritual Spark)',
    gemstone: 'Lehsuniya (Cat’s Eye Chrysoberyl)',
    day: 'Mangalvar (Tuesday)',
    colorScheme: {
      orbit: 'rgba(251, 146, 60, 0.35)',
      glow: '#FB923C',
      gradient: 'from-[#FDBA74] via-[#EA580C] to-[#7C2D12]',
      badgeBg: 'bg-[#FB923C]/15 text-[#FDBA74] border-[#FB923C]/40',
      text: '#FB923C',
      ring: 'border-[#FB923C]/60'
    },
    beejMantra: 'ॐ स्रां स्रीं स्रौं सः केतवे नमः',
    mantraCount: 'Chant 108 times at dawn or dusk',
    remedyInsight: 'Offer Durva grass to Lord Ganesha on Sankashti Chaturthi and feed street dogs to activate spiritual intuition and protect health.',
    iconType: 'ketu',
    distancePct: 78,
    orbitSpeed: 94,
    startAngle: 320
  }
];

export function NavagrahaCosmicSection() {
  const [selectedPlanet, setSelectedPlanet] = useState<NavagrahaPlanet>(NAVAGRAHA_DATA[0]);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [copiedMantra, setCopiedMantra] = useState<boolean>(false);
  const [isPlayingChant, setIsPlayingChant] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Smooth rotation animation loop (runs only on client in requestAnimationFrame)
  useEffect(() => {
    let animationFrameId: number;
    if (isRotating) {
      const updateRotation = () => {
        setRotationAngle((prev) => (prev + 0.12) % 360);
        animationFrameId = requestAnimationFrame(updateRotation);
      };
      animationFrameId = requestAnimationFrame(updateRotation);
    }
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isRotating]);

  // Copy mantra helper
  const handleCopyMantra = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(selectedPlanet.beejMantra);
      setCopiedMantra(true);
      setTimeout(() => setCopiedMantra(false), 2500);
    }
  };

  // Harmonious meditative harmonic chime generator & original Sanskrit mantra speech synthesis
  const handlePlayChantSound = () => {
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

          // Create warm cosmic chord (Root, Fifth, Octave tuned to 432Hz Om resonance)
          const baseFreq = selectedPlanet?.id === 'surya' ? 432 : 
                           selectedPlanet?.id === 'chandra' ? 528 : 
                           selectedPlanet?.id === 'shani' ? 288 : 396;

          const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2];

          freqs.forEach((f, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = idx === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(f, ctx.currentTime);

            // Bell envelope
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.18 / (idx + 1), ctx.currentTime + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 4.0);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 4.0);
          });
        }

        setIsPlayingChant(true);

        // Speak original Sanskrit Mantra aloud using Web Speech API (hi-IN / sa-IN)
        if ('speechSynthesis' in window && selectedPlanet?.beejMantra) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(selectedPlanet.beejMantra);
          utterance.lang = 'hi-IN';
          utterance.rate = 0.8; // meditative slower chanting pace
          utterance.pitch = 0.85; // deep spiritual resonance
          window.speechSynthesis.speak(utterance);
        }
      }

      setTimeout(() => {
        setIsPlayingChant(false);
      }, 4000);
    } catch {
      setIsPlayingChant(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#050307] via-[#0E0617] to-[#08040A] relative overflow-hidden text-[#F7ECD3]">
      {/* Background Stardust & Deep Cosmic Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Cosmic Purple & Gold Radial Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#3B0764]/25 via-[#E5B84B]/10 to-[#C1121F]/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-[100px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#FF9A2E]/10 rounded-full blur-[100px]" />

        {/* Floating stardust specks */}
        <div className="absolute top-12 left-1/4 w-1.5 h-1.5 rounded-full bg-[#E5B84B] animate-pulse opacity-70" />
        <div className="absolute top-36 right-1/4 w-2 h-2 rounded-full bg-[#BAE6FD] animate-pulse opacity-60" />
        <div className="absolute bottom-24 left-1/3 w-1 h-1 rounded-full bg-[#FF5722] animate-ping opacity-50" />
        <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#E5B84B]/15 via-[#FF9A2E]/15 to-[#E5B84B]/15 border border-[#E5B84B]/35 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B84B] animate-spin" style={{ animationDuration: '6s' }} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B]">
              Vedic Planetary Alignment
            </span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F7ECD3] mb-3 leading-tight">
            Navagraha Mandala & Celestial Influence
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#C9A96A] leading-relaxed">
            The 9 sacred planets of Vedic Astrology govern every vibration of human destiny, health, career, and karmic bonds. Align your planetary vibrations with consecrated Beej Mantras and traditional Tantric remedies.
          </p>

          <SacredDivider withOm />
        </div>

        {/* Main Interactive Stage: Orbital Visualization on Desktop, Interactive Grid on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
          
          {/* LEFT / TOP: The 3D Rotating Cosmic Planetary Mandala */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Control Bar */}
            <div className="flex items-center justify-between w-full max-w-md px-4 py-2 mb-4 rounded-xl bg-[#0B0512]/70 border border-[#E5B84B]/20 backdrop-blur-md">
              <div className="text-xs text-[#C9A96A] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>Cosmic Orbit: <strong className="text-[#F7ECD3]">{isRotating ? 'Active Alignment' : 'Paused'}</strong></span>
              </div>
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className="text-xs text-[#E5B84B] hover:text-[#FF9A2E] flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#E5B84B]/10 border border-[#E5B84B]/30 hover:bg-[#E5B84B]/20 transition-all cursor-pointer"
              >
                <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
                <span>{isRotating ? 'Pause Orbit' : 'Resume Orbit'}</span>
              </button>
            </div>

            {/* Orbit Container */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] flex items-center justify-center select-none">
              
              {/* Outer Cosmic Compass Ring */}
              <div className="absolute inset-0 rounded-full border border-[#E5B84B]/20 border-dashed animate-spin-slow pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-[#8B5CF6]/20 pointer-events-none" />
              <div className="absolute inset-14 rounded-full border border-[#E5B84B]/15 border-dotted pointer-events-none" />
              
              {/* Center 3D Golden Om Symbol */}
              <div className="relative z-20 group cursor-pointer">
                {/* Multi-layer Golden Radiant Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#FF9A2E]/40 via-[#E5B84B]/50 to-[#FF5722]/40 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#2D0F02] via-[#1B0505] to-[#080204] border-2 border-[#E5B84B] shadow-[0_0_35px_rgba(229,184,75,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D6] via-[#E5B84B] to-[#FF9A2E] font-bold drop-shadow-[0_2px_10px_rgba(229,184,75,0.8)]">
                    ॐ
                  </span>
                  {/* Subtle orbiting rim particle */}
                  <div className="absolute inset-0 rounded-full border border-[#E5B84B]/40 animate-ping opacity-30" />
                </div>
              </div>

              {/* 9 Rotating Planetary Nodes */}
              {NAVAGRAHA_DATA.map((planet) => {
                const currentAngle = planet.startAngle + (isRotating ? rotationAngle : 0);
                const angleRad = (currentAngle * Math.PI) / 180;
                // Responsive radius based on screen
                const baseRadius = 145; // pixel radius from center
                const x = Math.round(Math.cos(angleRad) * baseRadius);
                const y = Math.round(Math.sin(angleRad) * baseRadius);

                const isSelected = selectedPlanet.id === planet.id;

                return (
                  <motion.button
                    key={planet.id}
                    type="button"
                    onClick={() => setSelectedPlanet(planet)}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.95 }}
                    suppressHydrationWarning
                    className={`absolute z-30 flex flex-col items-center justify-center p-1 rounded-full cursor-pointer transition-shadow duration-300 ${
                      isSelected
                        ? 'ring-2 ring-offset-2 ring-offset-[#08040A] ring-[#E5B84B] shadow-[0_0_25px_rgba(229,184,75,0.8)]'
                        : 'hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      left: 'calc(50% - 20px)',
                      top: 'calc(50% - 20px)',
                    }}
                    title={`${planet.nameEn} - ${planet.nameSa}`}
                    aria-label={`Select ${planet.nameEn}`}
                  >
                    {/* Planet Sphere Visual */}
                    <div 
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br ${planet.colorScheme.gradient} flex items-center justify-center border border-white/40 shadow-lg relative overflow-hidden`}
                    >
                      {/* Top gloss reflection for 3D sphere illusion */}
                      <div className="absolute top-0.5 left-1 w-3 h-1.5 bg-white/60 rounded-full blur-[0.5px]" />
                      
                      {/* Planetary Identifier Character */}
                      <span className="text-[11px] font-bold text-white font-serif drop-shadow-md">
                        {planet.nameSa.charAt(0)}
                      </span>
                    </div>

                    {/* Planet Name Micro-Pill underneath */}
                    <span 
                      className={`text-[9px] font-semibold mt-1 px-1.5 py-0.5 rounded-md backdrop-blur-md transition-colors ${
                        isSelected 
                          ? 'bg-[#E5B84B] text-black font-bold shadow-md' 
                          : 'bg-[#08040A]/85 text-[#F7ECD3]/90 border border-white/10'
                      }`}
                    >
                      {planet.nameEn.split(' ')[0]}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Click to Select Hint */}
            <p className="text-xs text-[#C9A96A]/75 mt-4 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#E5B84B]" />
              <span>Tap any revolving planet sphere to reveal its cosmic vibrations & mantra</span>
            </p>
          </div>

          {/* RIGHT: High-Impact Glassmorphism Showcase Card for Selected Planet */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlanet.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl p-6 sm:p-8 backdrop-blur-2xl bg-gradient-to-b from-[#1A0A24]/90 via-[#100516]/90 to-[#08020A]/95 border-2 border-[#E5B84B]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Background Radiant Aura matching the planet's celestial hue */}
                <div 
                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ backgroundColor: selectedPlanet.colorScheme.glow }}
                />
                
                {/* Card Top Row: Planet Titles & Badges */}
                <div className="flex items-start justify-between gap-4 mb-6 border-b border-[#E5B84B]/20 pb-5">
                  <div className="flex items-center gap-4">
                    {/* Planet 3D Avatar */}
                    <div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedPlanet.colorScheme.gradient} border-2 border-white/40 shadow-xl flex items-center justify-center relative overflow-hidden shrink-0`}
                    >
                      <div className="absolute top-1 left-1.5 w-5 h-2.5 bg-white/60 rounded-full blur-[0.5px]" />
                      <span className="font-serif text-2xl font-bold text-white drop-shadow-lg">
                        ॐ
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-[#E5B84B]">
                          {selectedPlanet.nameSa}
                        </span>
                        <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${selectedPlanet.colorScheme.badgeBg}`}>
                          {selectedPlanet.day}
                        </span>
                      </div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#F7ECD3]">
                        {selectedPlanet.nameEn}
                      </h3>
                      <p className="text-xs text-[#C9A96A] font-medium">
                        Presiding Deity: <strong className="text-[#F7ECD3]">{selectedPlanet.deity}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Gemstone Tag */}
                  <div className="hidden sm:flex flex-col items-end text-right">
                    <span className="text-[10px] text-[#C9A96A] uppercase tracking-wider">Sacred Gem</span>
                    <span className="text-xs font-bold text-[#E5B84B]">{selectedPlanet.gemstone}</span>
                  </div>
                </div>

                {/* Significance & Governance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-[#E5B84B]/15">
                    <span className="text-[10px] text-[#E5B84B] font-bold uppercase tracking-wider block mb-1">
                      Astrological Karaka
                    </span>
                    <p className="text-xs text-[#F7ECD3]/90 leading-snug">
                      {selectedPlanet.significance}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-[#E5B84B]/15">
                    <span className="text-[10px] text-[#E5B84B] font-bold uppercase tracking-wider block mb-1">
                      Cosmic Governance
                    </span>
                    <p className="text-xs text-[#F7ECD3]/90 leading-snug">
                      {selectedPlanet.governs}
                    </p>
                  </div>
                </div>

                {/* SACRED BEEJ MANTRA BOX WITH COPY & CHANT SOUND */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#200A18]/80 via-[#150510]/80 to-[#250920]/80 border-2 border-[#E5B84B]/40 shadow-inner mb-6 relative group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#FF9A2E]" />
                      <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B]">
                        Sacred Vedic Beej Mantra
                      </span>
                    </div>
                    <span className="text-[11px] text-[#C9A96A]">
                      {selectedPlanet.mantraCount}
                    </span>
                  </div>

                  {/* Mantra Sanskrit Text */}
                  <div className="text-center py-3 px-2">
                    <div className="font-serif text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D6] via-[#E5B84B] to-[#FF9A2E] tracking-wide select-all">
                      {selectedPlanet.beejMantra}
                    </div>
                  </div>

                  {/* Mantra Actions: Copy & Play Chant Bell */}
                  <div className="flex items-center justify-center gap-3 pt-2 border-t border-[#E5B84B]/20">
                    <button
                      type="button"
                      onClick={handleCopyMantra}
                      className="px-3.5 py-1.5 rounded-lg bg-[#E5B84B]/15 hover:bg-[#E5B84B]/25 border border-[#E5B84B]/40 text-xs font-semibold text-[#F7ECD3] flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                    >
                      {copiedMantra ? (
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
                      onClick={handlePlayChantSound}
                      disabled={isPlayingChant}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#FF9A2E] to-[#E5B84B] text-black text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-75"
                    >
                      <Volume2 className={`w-3.5 h-3.5 ${isPlayingChant ? 'animate-bounce' : ''}`} />
                      <span>{isPlayingChant ? 'Chanting Resonating...' : 'Listen 432Hz Tone'}</span>
                    </button>
                  </div>
                </div>

                {/* Practical Remedy Guide */}
                <div className="p-3.5 rounded-xl bg-[#E5B84B]/5 border border-[#E5B84B]/20 mb-6">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#E5B84B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#E5B84B] block mb-0.5">
                        Astro Ankush Recommended Sattvic Remedy:
                      </span>
                      <p className="text-xs text-[#C9A96A] leading-relaxed">
                        {selectedPlanet.remedyInsight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Row: WhatsApp Dosha Consultation CTA */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                  <a
                    href={`https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20want%20to%20consult%20regarding%20my%20${encodeURIComponent(selectedPlanet.nameEn)}%20planetary%20position%20and%20remedies.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-black shrink-0" />
                    <span>Consult Astro Ankush for {selectedPlanet.nameEn.split(' ')[0]} Dosha</span>
                  </a>

                  <div className="text-[11px] text-[#C9A96A] text-center sm:text-right">
                    Element: <strong className="text-[#F7ECD3]">{selectedPlanet.element}</strong>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM HORIZONTAL 9 PLANET SELECTOR BAR */}
        <div className="mt-8 pt-8 border-t border-[#E5B84B]/20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5B84B] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#FF9A2E]" />
              Explore All 9 Navagrahas (नवग्रह)
            </span>
            <span className="text-xs text-[#C9A96A] hidden sm:inline">
              Click to inspect astrological traits and Beej Mantras
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5 sm:gap-3">
            {NAVAGRAHA_DATA.map((planet) => {
              const isSelected = selectedPlanet.id === planet.id;
              return (
                <button
                  key={planet.id}
                  type="button"
                  onClick={() => setSelectedPlanet(planet)}
                  className={`p-2.5 sm:p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#2D0B1E] to-[#12050E] border-2 border-[#E5B84B] shadow-lg shadow-[#E5B84B]/20 scale-105'
                      : 'bg-black/40 hover:bg-black/70 border border-[#E5B84B]/15 hover:border-[#E5B84B]/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${planet.colorScheme.gradient} flex items-center justify-center text-white text-xs font-serif font-bold shadow-md mb-1.5`}>
                    {planet.nameSa.charAt(0)}
                  </div>
                  <span className={`text-[11px] font-bold block ${isSelected ? 'text-[#E5B84B]' : 'text-[#F7ECD3]'}`}>
                    {planet.nameEn.split(' ')[0]}
                  </span>
                  <span className="text-[9px] text-[#C9A96A] font-serif">
                    {planet.nameSa}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
