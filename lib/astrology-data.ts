import { asset } from '@/lib/asset';

export interface ServiceItem {
  slug: string;
  title: string;
  category: 'Love' | 'Marriage' | 'Career' | 'Money' | 'Family' | 'Health' | 'Protection';
  shortDesc: string;
  tagline: string;
  icon: string;
  heroHeadline: string;
  signsYouNeedThis: string[];
  howHeSolvesIt: {
    title: string;
    description: string;
    remedies: string[];
  };
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  expectedBenefits: string[];
  faqs: {
    q: string;
    a: string;
  }[];
  testimonials: {
    name: string;
    city: string;
    quote: string;
    issue: string;
    rating: number;
  }[];
  relatedSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'love-problem',
    title: 'Love Problem Solution',
    category: 'Love',
    shortDesc: 'Reunite with your lost love, dissolve misunderstandings, and reignite unconditional intimacy.',
    tagline: 'Mend Broken Hearts through Sacred Shukra & Kamakhya Sadhana',
    icon: 'Heart',
    heroHeadline: 'Bring Back Your True Love with Authentic Vedic Remedies',
    signsYouNeedThis: [
      'Sudden emotional detachment or unexplainable silent treatment from partner',
      'Breakup caused by external interference or third-party manipulation',
      'Lost spark, frequent heated arguments, and mutual resentment',
      'Partner refuses to communicate or commit despite years of relationship',
      'Unresolved past grief blocking emotional reunification'
    ],
    howHeSolvesIt: {
      title: 'Planetary Alignment & Mohini Vashikaran Mantras',
      description: 'Astro Ankush conducts a deep horoscope comparison (Kundli Milan) examining the 5th house of romance and the 7th house of commitment. By pacifying malefic Rahu or Saturn afflictions and energizing Venus (Shukra), natural attraction and heartfelt warmth are revived.',
      remedies: [
        'Energized Kamdev-Rati Yantra prana pratishtha',
        'Custom Shukra Beej Mantra chanting protocol (21 days)',
        'Rose quartz & natural ruby graha balancing',
        'Special Friday Lakshmi-Narayan samput path'
      ]
    },
    processSteps: [
      { step: '01', title: 'Kundli Diagnostic', description: 'Deep analysis of both birth charts, Venus positions, and planetary transits.' },
      { step: '02', title: 'Root Cause Isolation', description: 'Detecting if discord is karmic, planetary dosha, or external negative energy.' },
      { step: '03', title: 'Sacred Rituals & Yantras', description: 'Execution of consecrated Vedic hawan and dispatching charged yantra.' },
      { step: '04', title: 'Follow-Up & Healing', description: 'Guiding personalized behavior mantras until emotional harmony returns.' }
    ],
    expectedBenefits: [
      'Dissolution of ego clashes and misunderstandings',
      'Renewed affection, respect, and mutual loyalty',
      'Restoration of direct communication and honest dialogue',
      'Spiritual shield guarding the couple from malicious third parties'
    ],
    faqs: [
      { q: 'How soon can I see changes in my partner’s behavior?', a: 'Clients typically observe visible positive shifts in temperament and communication within 7 to 21 days following the ritual and remedy practice.' },
      { q: 'Is this remedy safe and karmically pure?', a: 'Yes. Astro Ankush works strictly through sattvic Vedic prayers, Venus pacification, and benign astrological remedies that never harm anyone.' },
      { q: 'Do I need my partner’s birth chart details?', a: 'Date, time, and place of birth are ideal. If exact birth time is missing, palmistry and Prashna Kundli (horary astrology) are employed.' }
    ],
    testimonials: [
      { name: 'Rohit Verma', city: 'Delhi', issue: '8-Month Painful Breakup', rating: 5, quote: 'My fiancée broke off our engagement after misunderstandings. Astro Ankush identified a strong Rahu transit on my 7th house. Within 14 days of the yantra puja, she initiated contact herself!' },
      { name: 'Pooja Nair', city: 'Bangalore', issue: 'Silent Treatment & Distance', rating: 5, quote: 'We were on the verge of walking away. Ankush ji provided simple yet profound remedies. Our mutual tenderness and warmth returned miraculously.' }
    ],
    relatedSlugs: ['marriage-problem', 'vashikaran', 'kundli-analysis']
  },
  {
    slug: 'marriage-problem',
    title: 'Delayed & Disturbed Marriage',
    category: 'Marriage',
    shortDesc: 'Overcome marriage delays, resolve partner opposition, and restore peace in marital life.',
    tagline: 'Eliminate 7th House Doshas & Mangal Afflictions',
    icon: 'Sparkles',
    heroHeadline: 'Vedic Solutions for Timely, Auspicious & Joyful Marriage',
    signsYouNeedThis: [
      'Proposals break off repeatedly at final negotiation stages',
      'Late marriage age despite good education, career, and family background',
      'Parental or societal opposition to love or inter-caste marriage',
      'Frequent in-law friction and loss of intimacy immediately post-wedding',
      'Severe planetary combinations in the 7th or 8th bhava'
    ],
    howHeSolvesIt: {
      title: 'Guru-Brihaspati Grace & Navamsha Alignment',
      description: 'By assessing the D-9 Navamsha chart and 7th house lord, Astro Ankush applies precise remedies to invoke Jupiter’s benefic gaze, clearing karmic barriers and harmonizing prospective matches.',
      remedies: [
        'Katyayani Vrata & Devi Gauri Pooja for swift marriage',
        'Brihaspati (Jupiter) Peetambara Beej Mantra invocation',
        'Consecrated Yellow Sapphire (Pukhraj) gemstone recommendation',
        'Special Shani-Mangal pacification Hawan'
      ]
    },
    processSteps: [
      { step: '01', title: 'Navamsha Audit', description: 'Examining D-1 and D-9 charts for Vivah doshas.' },
      { step: '02', title: 'Obstacle Eradication', description: 'Pacifying delays caused by Saturn, Mars, or retrograde lords.' },
      { step: '03', title: 'Auspicious Timing (Muhurtha)', description: 'Identifying upcoming dasha windows most fertile for marriage.' },
      { step: '04', title: 'Marital Harmony Mantras', description: 'Sustained blessings for long-term domestic prosperity.' }
    ],
    expectedBenefits: [
      'Clear path for proposals to materialize smoothly',
      'Resolution of family resistance in love marriages',
      'Deepening trust, loyalty, and companionship between spouses',
      'Auspicious astrological timing for wedlock'
    ],
    faqs: [
      { q: 'Can inter-caste love marriages get parental approval through astrology?', a: 'Yes. Graha shanti remedies for the 4th house of family peace and 9th house of elders have repeatedly helped families soften stance and give heartfelt blessings.' },
      { q: 'What is the significance of the 7th house in marriage delay?', a: 'The 7th house governs marriage. Malefic aspects of Saturn, Rahu, or afflicted Venus/Jupiter stall suitable alliances. Rectification remedies clear these obstacles.' }
    ],
    testimonials: [
      { name: 'Dr. Ananya Sen', city: 'Kolkata', issue: '6-Year Delay in Marriage', rating: 5, quote: 'I was 34 and every matrimonial match failed at the last step. Astro Ankush pinpointed Saturn’s aspect on my Lagna lord. Exactly 3 months after his remedies, I got happily wed!' },
      { name: 'Sameer & Preeti', city: 'Mumbai', issue: 'Inter-Caste Family Opposition', rating: 5, quote: 'Both families were adamant against our alliance. Ankush ji conducted Gauri-Shankar pujan. Within weeks, both parents agreed with full happiness.' }
    ],
    relatedSlugs: ['love-problem', 'mangal-dosh', 'divorce-problem']
  },
  {
    slug: 'divorce-problem',
    title: 'Divorce & Separation Prevention',
    category: 'Marriage',
    shortDesc: 'Halt legal proceedings, neutralize bitter disputes, and protect your sacred marital bond.',
    tagline: 'Save Your Sacred Union from Premature Severance',
    icon: 'Shield',
    heroHeadline: 'Restore Spousal Bond & Stop Legal Separation',
    signsYouNeedThis: [
      'One spouse has filed or threatened divorce proceedings',
      'Constant suspicion, emotional abuse, or stubborn refusal to compromise',
      'External relatives provoking and fueling legal conflicts',
      'Estrangement or living in separate households for months',
      'Loss of mutual respect, affection, and commitment'
    ],
    howHeSolvesIt: {
      title: 'Ardhanarishwara Pooja & 8th House Cleansing',
      description: 'The 8th house determines longevity of marital life (Mangalya Sthana). Astro Ankush implements potent Ardhanarishwara and Shiva-Parvati stotras to heal fractured communication, dismantle ego barriers, and dissolve external hostility.',
      remedies: [
        'Ardhanarishwara Mahastotram special 41-day anushthan',
        'Energized Shiva-Shakti Rudraksha combination',
        'Krodha Nivaran and Manasa Shanti Hawan',
        'Vedic counseling with customized day-to-day astrological rituals'
      ]
    },
    processSteps: [
      { step: '01', title: 'Crisis Evaluation', description: 'Urgent assessment of ongoing dashas causing severe friction.' },
      { step: '02', title: 'Tantric Defense', description: 'Neutralizing negative whispers, third-party malice, or psychic interference.' },
      { step: '03', title: 'Heart Softening Sadhana', description: 'Activating natural empathy and shared memories in the estranged partner.' },
      { step: '04', title: 'Reconciliation Protocol', description: 'Step-by-step guidance on safe re-entry into dialogue.' }
    ],
    expectedBenefits: [
      'Sudden de-escalation of courtroom or family hostility',
      'Willingness of the partner to pause divorce discussions and talk',
      'Elimination of venomous external instigators',
      'Renewed sanctity and companionship under one roof'
    ],
    faqs: [
      { q: 'Is it possible to save a marriage if court notices have already been served?', a: 'Yes. Numerous clients came to us with active court dates. Astrological intervention shifts the psychological currents of both parties, making amicable out-of-court withdrawal possible.' },
      { q: 'What if my partner refuses to participate in remedies?', a: 'You can perform individual karmic remedies and proxy sankalpa pujas on their behalf without their physical presence.' }
    ],
    testimonials: [
      { name: 'Rajesh K.', city: 'Chandigarh', issue: 'Court Divorce Case Pending', rating: 5, quote: 'We were one hearing away from decree absolute. Astro Ankush gave me a specific daily sankalpam and conducted a Shanti hawan. My wife broke down in court, requested mediation, and we are reunited today.' }
    ],
    relatedSlugs: ['marriage-problem', 'family-disputes', 'kundli-analysis']
  },
  {
    slug: 'baby-problem',
    title: 'Childless Couples / Santan Prapti',
    category: 'Family',
    shortDesc: 'Vedic astrological diagnosis for fertility delays, Putra/Putri Dosha, and Santan Sukh.',
    tagline: 'Invoke Divine Blessings for Healthy Child Conception',
    icon: 'Baby',
    heroHeadline: 'Overcome Conception Delays with Vedic Astrology & Santan Gopal Mantras',
    signsYouNeedThis: [
      'Unexplained medical infertility despite clear diagnostic test reports',
      'Repeated IVF cycle failures or recurrent pregnancy complications',
      'Severe affliction in 5th house (Santan Bhava) by Rahu, Ketu, or Saturn',
      'Presence of Putra Dosha or Pitra Rin obstructing family lineage',
      'Emotional exhaustion and sadness over childlessness'
    ],
    howHeSolvesIt: {
      title: 'Santan Gopal Yagya & 5th House Purification',
      description: 'In Vedic Jyotish, the 5th house and Jupiter (Putrakaraka) oversee fertility and progeny. Astro Ankush performs comprehensive Santan Gopal Yagya, Pitra Dosh shanti, and planetary corrections to unlock the gateway to motherhood and fatherhood.',
      remedies: [
        'Santan Gopal Mantra 1,25,000 japa anushthan with sacred hawan',
        'Pitra Rin and Nag Dosha nivaran at sacred confluence',
        'Consolidated Laddu Gopal Seva protocol for home altar',
        'Dietary and spiritual garbh dharan astrological calendar'
      ]
    },
    processSteps: [
      { step: '01', title: 'Progeny Chart Audit', description: 'Analyzing Saptamsha (D-7) charts of both husband and wife.' },
      { step: '02', title: 'Dosha Dissolution', description: 'Removing Rahu-Ketu naga doshas or ancestors’ unfulfilled karmic debt.' },
      { step: '03', title: 'Gopal Yagya Execution', description: 'Performing sacred fire ceremony with consecrated prasad dispatched.' },
      { step: '04', title: 'Auspicious Conception Muhurtha', description: 'Calculating celestial windows optimal for fertile conception.' }
    ],
    expectedBenefits: [
      'Spiritual clarity and reduction of bodily tension',
      'Supportive planetary conditions for medical/natural conception',
      'Protection of unborn child from evil eye and malefic transits',
      'Joyous arrival of newborn into the family'
    ],
    faqs: [
      { q: 'Can astrology support IVF treatments?', a: 'Absolutely. We calculate the exact auspicious Muhurtha for embryo transfer and hormonal cycles, which significantly enhances medical success rates.' }
    ],
    testimonials: [
      { name: 'Meenakshi & Suresh', city: 'Hyderabad', issue: '8 Years of Childlessness & 3 IVF Failures', rating: 5, quote: 'Doctors had given up on us. Astro Ankush ji found severe Pitra Rin on my 5th lord. After performing the prescribed anushthan, our fourth IVF was successful. We were blessed with a healthy baby boy!' }
    ],
    relatedSlugs: ['kundli-analysis', 'family-disputes', 'health-problem']
  },
  {
    slug: 'kundli-analysis',
    title: 'Comprehensive Janam Kundli',
    category: 'Career',
    shortDesc: 'Precise life horoscope reading detailing career, health, finances, marriage, and doshas.',
    tagline: 'Decode Your Soul’s Cosmic Blueprint & Destiny',
    icon: 'BookOpen',
    heroHeadline: 'In-Depth Vedic Horoscope & Accurate Dasha Forecasting',
    signsYouNeedThis: [
      'Feeling confused about career path, business launch, or life direction',
      'Desire to know exact upcoming favorable and challenging periods (Mahadasha)',
      'Need validation before making major financial investments or property buys',
      'Curiosity regarding hidden talents, spiritual destiny, and karmic debts',
      'Seeking exact gemstone, color, and planetary remedy recommendations'
    ],
    howHeSolvesIt: {
      title: 'Parashari & Jaimini Multi-Tiered System',
      description: 'Astro Ankush combines ancient Parashara Jyotish, Jaimini Sutras, and planetary shadbala metrics to construct an exhaustive 360-degree report of your life across all 12 houses.',
      remedies: [
        'Complete 12-house Vedic birth chart reading report',
        'Mahadasha and Antardasha timeline breakdown (next 5-10 years)',
        'Authentic gemstone & metal prescription with wearing rituals',
        'Life dosha check: Kaal Sarp, Manglik, Pitra, Sade Sati'
      ]
    },
    processSteps: [
      { step: '01', title: 'Data Verification', description: 'Rectification of birth time using major past life events.' },
      { step: '02', title: '16 Divisional Charts', description: 'Checking D-9 (marriage), D-10 (career), D-12 (parents), and D-60 (karma).' },
      { step: '03', title: 'Direct Voice / Video Consultation', description: 'One-on-one session addressing your top burning questions.' },
      { step: '04', title: 'Written Remedial Manual', description: 'Comprehensive guide to mantras, charities, and gemstones.' }
    ],
    expectedBenefits: [
      'Unshakable clarity about your true calling and timing',
      'Preventive alerts for upcoming vulnerable health or monetary cycles',
      'Strategic timing for job shifts, business expansions, and relocations',
      'Peace of mind knowing your cosmic strengths and protections'
    ],
    faqs: [
      { q: 'What details are needed for Janam Kundli?', a: 'Your date of birth, exact time of birth, and place (city/country) of birth. If birth time is approximate, we perform birth time rectification.' }
    ],
    testimonials: [
      { name: 'Vikram Singhania', city: 'London', issue: 'Career Pivot Dilemma', rating: 5, quote: 'Astro Ankush accurately predicted the exact month my venture capital funding would close. His Kundli roadmap is my annual operating manual.' }
    ],
    relatedSlugs: ['career-problem', 'money-problem', 'mangal-dosh']
  },
  {
    slug: 'vashikaran',
    title: 'Authentic Vedic Vashikaran',
    category: 'Protection',
    shortDesc: 'Ancient positive attraction sadhana to sway minds with pure intentions and ethical harmony.',
    tagline: 'Sacred Sattvic Influence Rooted in Ancient Agama Tantra',
    icon: 'Flame',
    heroHeadline: 'Safe, Ethical & Authentic Vedic Vashikaran Solutions',
    signsYouNeedThis: [
      'Someone dear has fallen into destructive company or addictions',
      'Stubborn boss or business partner unjustly obstructing rightful dues',
      'Estranged spouse influenced by manipulative third parties',
      'Child refusing to listen to caring parents and ruining future',
      'Need to soften an obstinate opponent for peaceful reconciliation'
    ],
    howHeSolvesIt: {
      title: 'Akarshana & Sammohan Vedic Chants',
      description: 'Contrary to common misconceptions, real Vedic Vashikaran is an art of positive telepathic attraction practiced through Vedic stotras. Astro Ankush uses purely sattvic vibrations to evoke goodwill, mutual understanding, and warmth.',
      remedies: [
        'Mohini & Kamakhya Beej Mantra energization',
        'Customized Bhojpatra Yantra preparation on auspicious muhurtha',
        'Tilak preparation using sacred ashes and natural essences',
        'Daily directional sankalpa recitation'
      ]
    },
    processSteps: [
      { step: '01', title: 'Ethical Scrutiny', description: 'Strict verification that your motive is noble and protective, not harmful.' },
      { step: '02', title: 'Yantra Consecration', description: 'Inscribing Bhojpatra with ashtagandha ink during Shukla Paksha.' },
      { step: '03', title: 'Prana Pratishtha', description: 'Infusing life force through 21,000 sanctified mantra recitations.' },
      { step: '04', title: 'Application Guidance', description: 'Instructions on wearing or keeping the energized yantra.' }
    ],
    expectedBenefits: [
      'Rapid softening of harsh or rigid attitudes',
      'Receptivity to dialogue, empathy, and positive agreements',
      'Freedom from toxic outside influences',
      'Harmonious relationships at home and in business dealings'
    ],
    faqs: [
      { q: 'Can Vashikaran backfire or cause harm?', a: 'No, because Astro Ankush performs exclusively sattvic (white, positive) spiritual kriyas that harmonize energies rather than coercing with dark forces.' },
      { q: 'Is it confidential?', a: '100% confidential. Your name, identity, and personal matters are kept under strict spiritual discretion.' }
    ],
    testimonials: [
      { name: 'Sunita Sharma', city: 'Jaipur', issue: 'Son Influenced by Toxic Friends', rating: 5, quote: 'My teenage son was getting misled and becoming aggressive. Ankush ji prepared a protective yantra for his study desk. His behavior transformed completely within 3 weeks.' }
    ],
    relatedSlugs: ['love-problem', 'black-magic-removal', 'family-disputes']
  },
  {
    slug: 'career-problem',
    title: 'Career & Job Obstacles',
    category: 'Career',
    shortDesc: 'Unlock promotions, resolve office politics, find stable employment, and thrive professionally.',
    tagline: 'Empower 10th House (Karma Bhava) & Surya Strength',
    icon: 'Briefcase',
    heroHeadline: 'Accelerate Career Growth, Promotion & Professional Authority',
    signsYouNeedThis: [
      'Repeatedly passed over for promotions despite outstanding appraisals',
      'Toxic office politics, jealous superiors, or sudden job insecurity',
      'Prolonged unemployment or inability to crack competitive examinations',
      'Desire to transition from corporate job to profitable independent business',
      'Sun or Saturn combust / debiliated in the 10th karma sthana'
    ],
    howHeSolvesIt: {
      title: 'Dasamsha (D-10) Activation & Surya Sadhana',
      description: 'The 10th house and the Sun (Surya) command leadership, status, and recognition. Astro Ankush strengthens weak karakas through solar mantras, Aditya Hridaya Stotra, and metal energies.',
      remedies: [
        'Surya Arghya and Aditya Hridaya Stotra anushthan',
        'Energized Manikya (Ruby) or Blue Sapphire as per Lagna suitability',
        'Shani-Rahu Nivaran for eliminating workplace conspiracies',
        'Kuber-Vishnu energization for steady salary and bonus flow'
      ]
    },
    processSteps: [
      { step: '01', title: 'Karma House Diagnostic', description: 'Evaluating 10th and 6th houses in D-1 and D-10 Dasamsha.' },
      { step: '02', title: 'Workplace Toxicity Shield', description: 'Defusing jealousy and secret enemies through Shatru Vinashak mantras.' },
      { step: '03', title: 'Interview & Promotion Timing', description: 'Pinpointing high-probability calendar weeks for interviews or requests.' },
      { step: '04', title: 'Remedy Activation', description: 'Wearing energized ring or carrying yantra to critical meetings.' }
    ],
    expectedBenefits: [
      'Swift recognition of your competence by higher management',
      'Protection against backstabbing and conspiratorial colleagues',
      'Multiple interview call-backs and lucrative offer letters',
      'Long-term stability and leadership prominence'
    ],
    faqs: [
      { q: 'Can astrology help me crack government or civil service exams?', a: 'Yes. Success in government exams strongly depends on Sun, Mars, and 10th house strength. Specific solar remedies elevate focus and examination fortune.' }
    ],
    testimonials: [
      { name: 'Abhishek Roy', city: 'Pune', issue: 'Stagnant in Same Role for 5 Years', rating: 5, quote: 'I was continuously ignored for leadership. Astro Ankush pointed out my combust 10th lord and prescribed a Surya yantra and daily ritual. Within 2 months, I landed a VP role at a multinational!' }
    ],
    relatedSlugs: ['money-problem', 'kundli-analysis', 'vashikaran']
  },
  {
    slug: 'money-problem',
    title: 'Wealth & Debt Clearance',
    category: 'Money',
    shortDesc: 'Eliminate chronic debts, unlock stuck funds, and invite continuous financial abundance.',
    tagline: 'Awaken Mahalakshmi & Kuber Grace on 2nd & 11th Bhavas',
    icon: 'Coins',
    heroHeadline: 'Dhan Prapti, Business Growth & Freedom from Debt',
    signsYouNeedThis: [
      'Money slips away unexpectedly; expenses constantly outpace earnings',
      'Huge blocked payments from clients or debtors who refuse to pay',
      'Stifling loan burdens, EMI interest traps, and bankruptcy worries',
      'Business turnover stagnating despite rigorous marketing efforts',
      'Daridra Yoga or afflicted 2nd (wealth) and 11th (gains) houses'
    ],
    howHeSolvesIt: {
      title: 'Kuber Anushthan & Kanakadhara Stotra Sadhana',
      description: 'Wealth is governed by Venus, Jupiter, and Mercury. Astro Ankush diagnoses whether poverty yogas or vastu defects are draining your aura, applying high-frequency wealth-attracting tantras.',
      remedies: [
        'Kanakadhara Stotra and Sri Suktam 16-day deep sadhana',
        'Consecrated Ashta Lakshmi Yantra installation at cash vault/safe',
        'Runamochaka Mangala Stotra for swift debt clearance',
        'Directional Vastu alignment for office cash counter'
      ]
    },
    processSteps: [
      { step: '01', title: 'Dhana Yoga Audit', description: 'Assessing 2nd, 5th, 9th, and 11th house lords.' },
      { step: '02', title: 'Debt Node Dissolution', description: 'Calming Mars and Saturn which create relentless loan pressure.' },
      { step: '03', title: 'Sri Yantra Pratishtha', description: 'Installing a high-density parad (mercury) or copper Sri Yantra.' },
      { step: '04', title: 'Cash Flow Protection', description: 'Remedies guarding against theft, fraudulent partners, or sudden losses.' }
    ],
    expectedBenefits: [
      'Recovery of long-lost stuck money and pending debts',
      'Multiplication of income streams and unexpected opportunities',
      'Rapid liquidation of loans and credit card liabilities',
      'Sustained household and enterprise financial security'
    ],
    faqs: [
      { q: 'How does Sri Yantra help in money attraction?', a: 'The Sri Yantra is the geometric matrix of cosmic abundance. When energized properly with 1,008 Sri Suktam repetitions, it radiates frequencies that attract prosperous transactions.' }
    ],
    testimonials: [
      { name: 'Kewal Ram', city: 'Surat', issue: '₹65 Lakhs Stuck with Textile Buyers', rating: 5, quote: 'Buyers had vanished without paying. After Astro Ankush ji did the Runamochaka Hawan and sent the energized Kuber Yantra, 80% of buyers settled accounts voluntarily within 45 days!' }
    ],
    relatedSlugs: ['career-problem', 'kundli-analysis', 'black-magic-removal']
  },
  {
    slug: 'family-disputes',
    title: 'Family Feuds & In-Law Discord',
    category: 'Family',
    shortDesc: 'Soothe bitter household tensions, property disagreements, and restore domestic bliss.',
    tagline: 'Harmonize 4th House (Matru/Sukha Bhava) & Graha Shanti',
    icon: 'Users',
    heroHeadline: 'Transform Hostile Family Clashes into Peace & Respect',
    signsYouNeedThis: [
      'Brothers or relatives locked in bitter ancestral property disputes',
      'Severe misunderstandings between mother-in-law and daughter-in-law',
      'Daily screaming matches, loss of mental tranquility inside the house',
      'Estrangement between parents and grown children',
      'Vastu doshas or Rahu interference triggering unprovoked anger'
    ],
    howHeSolvesIt: {
      title: 'Griha Shanti & Vastu-Jyotish Alignment',
      description: 'The 4th house rules peace of mind and domestic harmony. When Rahu, Ketu, or Mars afflict this house, family members turn on each other. Astro Ankush clears psychic smog from the home and aligns planetary energies.',
      remedies: [
        'Maha Sudarshana Hawan for clearing negative domestic energy',
        'Vastu Pyramids and sacred Gomati Chakra placement',
        'Gayatri & Shanti Path for calming family temperaments',
        'Special pacification for ancestral property reconciliation'
      ]
    },
    processSteps: [
      { step: '01', title: 'Home Energy & Chart Diagnostic', description: 'Checking 4th house and planetary layout of key family members.' },
      { step: '02', title: 'Negative Vibration Sweep', description: 'Neutralizing residual hostility or jealous curses on the household.' },
      { step: '03', title: 'Griha Pravesh & Shanti Mantras', description: 'Consecrating holy water and grains to sprinkle across the house.' },
      { step: '04', title: 'Harmonious Communication Rules', description: 'Spiritual guidance on managing conversations without triggering ego.' }
    ],
    expectedBenefits: [
      'Immediate reduction in shouting, slamming doors, and hostility',
      'Reconciliation of generational and in-law differences',
      'Amicable resolution of disputed inheritance and property matters',
      'A loving, serene atmosphere when returning home every evening'
    ],
    faqs: [
      { q: 'Do all family members have to attend the puja?', a: 'No. The head of the house or any devoted family member can take the sankalpa on behalf of the entire home.' }
    ],
    testimonials: [
      { name: 'Kavita Agrawal', city: 'Indore', issue: 'Bitter In-Law Friction & Breakdown', rating: 5, quote: 'My home felt like a battleground for 3 years. Ankush ji identified an afflicted Moon-Rahu conjunction. After the Griha Shanti rituals, genuine warmth returned. We now live peacefully under one roof.' }
    ],
    relatedSlugs: ['divorce-problem', 'marriage-problem', 'baby-problem']
  },
  {
    slug: 'black-magic-removal',
    title: 'Black Magic, Evil Eye & Buri Nazar',
    category: 'Protection',
    shortDesc: 'Shatter dark curses, psychic attacks, mysterious health declines, and evil eye afflictions.',
    tagline: 'Invincible Shield of Maa Kali & Bhairava Kavach',
    icon: 'Eye',
    heroHeadline: 'Absolute Protection & Complete Elimination of Dark Energies',
    signsYouNeedThis: [
      'Sudden string of catastrophes with no rational or scientific explanation',
      'Severe heaviness in chest, suffocation, or recurring nightmares at 3 AM',
      'Thriving business or healthy family suddenly collapsed overnight',
      'Pets agitated, plants dying, or strange smells and sounds inside home',
      'Medical tests completely normal despite debilitating chronic exhaustion'
    ],
    howHeSolvesIt: {
      title: 'Maa Kali Ugra Sadhana & Sudarshana Kavach',
      description: 'Astro Ankush is a master Tantra specialist empowered by Maa Kali. He cuts through malicious tantric spells, envious drishti (evil eye), and malevolent spirit attachments, returning negative karma back to its sender.',
      remedies: [
        'Maa Kali Dhumavati Ugra Homa and coconut sacrifice',
        'Consecrated Ashtadhatu Bhairava Kavach amulet for wearing',
        'Tantric Raksha Bandhan thread energization',
        'Purification of house corners with holy mustard seeds and camphor'
      ]
    },
    processSteps: [
      { step: '01', title: 'Aura & Spiritual Scan', description: 'Detecting presence of entity attachment, drishti, or tantric binding.' },
      { step: '02', title: 'Immediate Shielding', description: 'Erecting psychic armor around client and family to stop further drainage.' },
      { step: '03', title: 'Destruction of Spell', description: 'Full nocturnal Kali hawan to break and neutralize dark sorcery.' },
      { step: '04', title: 'Permanent Fortification', description: 'Providing lifelong protective kavach that repels all future attacks.' }
    ],
    expectedBenefits: [
      'Immediate lifting of severe mental fog, depression, and chest weight',
      'Return of sound, peaceful sleep without disturbing nightmares',
      'Revival of frozen businesses and blocked life opportunities',
      'Impenetrable spiritual shield for yourself and future generations'
    ],
    faqs: [
      { q: 'How can I confirm if I am actually affected by black magic?', a: 'Astro Ankush performs a specific Prashna Kundli and aura reading that reveals whether your issues are purely physical, psychological, or caused by external negative spells.' },
      { q: 'Can this be removed remotely for someone overseas?', a: 'Yes. Tantric energy is non-local and transcends physical distance. Using photographic prana prateek, Ankush ji performs rituals for clients worldwide.' }
    ],
    testimonials: [
      { name: 'Gurpreet Singh', city: 'Toronto', issue: 'Sudden Financial & Physical Collapse', rating: 5, quote: 'Within 3 months, I lost my business, suffered weird physical pains, and doctors found nothing. Astro Ankush performed remote Kali hawan. Within 48 hours, the crushing heaviness vanished. I got my life back!' }
    ],
    relatedSlugs: ['vashikaran', 'health-problem', 'kundli-analysis']
  },
  {
    slug: 'health-problem',
    title: 'Chronic Illness & Spiritual Healing',
    category: 'Health',
    shortDesc: 'Pacify Rog Karaka planets, 6th/8th house afflictions, and invoke Mahamrityunjaya longevity.',
    tagline: 'Restore Vital Prana with Mahamrityunjaya Sadhana',
    icon: 'Activity',
    heroHeadline: 'Vedic Astrological Healing for Body, Mind & Vital Life Force',
    signsYouNeedThis: [
      'Chronic ailments that defy diagnosis or fail to respond to medications',
      'Mental anxiety, panic attacks, depression, or sleepless insomnia',
      'Frequent accidents, surgeries, or close brushes with mortality',
      'Afflicted 6th house (diseases), 8th house (longevity), or Maraka dashas',
      'Family history of hereditary illnesses or weak immune constitution'
    ],
    howHeSolvesIt: {
      title: 'Ayur-Jyotish & Lord Dhanvantari Blessings',
      description: 'Astrology and Ayurveda share the same Vedic origin. Astro Ankush decodes the tri-dosha balance (Vata, Pitta, Kapha) and planetary causes of disease, invoking Lord Shiva’s Mahamrityunjaya grace for longevity and healing.',
      remedies: [
        'Mahamrityunjaya Jaap (1,25,000 counts) with Amrit Kalash Hawan',
        'Lord Dhanvantari Arogya Yagya for medical recovery',
        'Natural Ayurvedic gemstone therapy to fortify physical vitality',
        'Tula Daan (weighing charity) to cancel critical planetary debits'
      ]
    },
    processSteps: [
      { step: '01', title: 'Medical Horoscope Analysis', description: 'Examining Lagna lord (vitality), Sun (soul/bones), Moon (mind/fluids).' },
      { step: '02', title: 'Maraka Dasha Rectification', description: 'Pacifying death-inflicting or disease-accelerating planetary periods.' },
      { step: '03', title: 'Healing Yagya Consecration', description: 'Directing energized healing vibrations to the patient.' },
      { step: '04', title: 'Ongoing Vitality Maintenance', description: 'Dietary guidance aligned with personal astrological elements.' }
    ],
    expectedBenefits: [
      'Enhanced response to doctor-prescribed medications and surgeries',
      'Calming of deep-seated anxiety, fears, and restless thoughts',
      'Renewal of physical stamina, restful sleep, and positive outlook',
      'Neutralization of dangerous Maraka and accident yogas'
    ],
    faqs: [
      { q: 'Does astrological healing replace medical treatment?', a: 'Never. Astrological remedies work synergistically with modern medicine by removing spiritual and karmic impediments so that medical treatments can act effectively.' }
    ],
    testimonials: [
      { name: 'Dr. Shalini Mehta', city: 'Ahmedabad', issue: 'Unexplained Chronic Fatigue & Panic', rating: 5, quote: 'Even as a medical professional, I could not cure my own chronic exhaustion. Astro Ankush uncovered a severe Moon-Ketu eclipse in my 6th house. After his Mahamrityunjaya anushthan, my energy returned 100%.' }
    ],
    relatedSlugs: ['kundli-analysis', 'black-magic-removal', 'family-disputes']
  },
  {
    slug: 'mangal-dosh',
    title: 'Mangalik Dosh & Kumbh Vivah',
    category: 'Marriage',
    shortDesc: 'Neutralize severe Mars afflictions, prevent spouse mortality yogas, and ensure blissful wedlock.',
    tagline: 'Pacify Aggressive Mangal Energy through Vedic Rituals',
    icon: 'Sun',
    heroHeadline: 'Permanent Mangal Dosh Nivaran & Kumbh Vivah Ceremonies',
    signsYouNeedThis: [
      'Mars placed in 1st, 4th, 7th, 8th, or 12th house from Lagna, Moon, or Venus',
      'Astrologers have warned of severe risk or untimely tragedy to future partner',
      'Fierce uncontrollable temper leading to violent verbal outbursts with lover',
      'Repeatedly cancelled wedding plans at the eleven-and-a-half hour mark',
      'High-magnitude Anshik or Purna Mangalik dosha in birth horoscope'
    ],
    howHeSolvesIt: {
      title: 'Kumbh / Ark Vivah & Angaraka Stotra Sadhana',
      description: 'Mangal Dosh represents untamed fiery martial energy. Astro Ankush performs authentic Kumbh Vivah (marriage with sacred consecrated clay pot) or Ark Vivah, transferring the negative martial wrath before the human marriage takes place.',
      remedies: [
        'Authentic Vedic Kumbh Vivah / Vishnu Pratima Vivah ceremony',
        'Bhauma (Mars) Beej Mantra 40,000 japa anushthan',
        'Consecrated Red Coral (Moonga) or natural cat’s eye guidance',
        'Hanuman Vadvanal Stotra daily kavach recitation'
      ]
    },
    processSteps: [
      { step: '01', title: 'Dosha Severity Audit', description: 'Determining if Mangal Dosh is cancelled (Bhanga) or requires full kriya.' },
      { step: '02', title: 'Kumbh Vivah Preparation', description: 'Arranging Vedic samagri, holy water, and sanctified pot/statue.' },
      { step: '03', title: 'Sacred Ritual Execution', description: 'Performing complete Vedic rituals by Astro Ankush personally.' },
      { step: '04', title: 'Post-Ritual Certificate & Blessings', description: 'Clear green signal for smooth human wedding celebration.' }
    ],
    expectedBenefits: [
      'Total neutralization of threat to future spouse’s health and longevity',
      'Sudden removal of obstacles in match-making and wedding approvals',
      'Control over impulsive anger, aggression, and ego battles',
      'Lifelong marital peace, mutual respect, and prosperity'
    ],
    faqs: [
      { q: 'Is Kumbh Vivah mandatory for all Manglik individuals?', a: 'No. In nearly 40% of horoscopes, Mangal Dosh gets automatically neutralized by Jupiter’s aspect or opposite partner charts. Astro Ankush verifies this before prescribing Kumbh Vivah.' },
      { q: 'Can this ceremony be performed for both men and women?', a: 'Yes. For women, Kumbh or Vishnu Vivah is performed; for men, Ark Vivah (with sacred Calotropis tree) is conducted with strict Vedic authenticity.' }
    ],
    testimonials: [
      { name: 'Priya & Varun', city: 'Nagpur', issue: 'High Manglik Dosh Threat', rating: 5, quote: 'Pandits had terrified our parents saying our marriage would end in tragedy. Astro Ankush personally conducted our Kumbh Vivah and Mars pacification. We are celebrating our 4th peaceful anniversary with a baby daughter!' }
    ],
    relatedSlugs: ['marriage-problem', 'love-problem', 'kundli-analysis']
  }
];

export const TRUST_STATS = [
  { value: '18,500+', label: 'Horoscopes Analyzed', sub: 'Decades of Kundli mastery' },
  { value: '15+ Years', label: 'Vedic Experience', sub: 'Agama Tantra lineage' },
  { value: '99.4%', label: 'Client Satisfaction', sub: 'Verified worldwide reviews' }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Rohit Verma',
    city: 'New Delhi, India',
    problem: 'Love & Relationship',
    quote: 'My fiancée broke off our engagement after misunderstandings. Astro Ankush identified a strong Rahu transit on my 7th house. Within 14 days of the yantra puja, she initiated contact herself and we are now happily married.',
    rating: 5,
    date: 'February 2026'
  },
  {
    name: 'Gurpreet Singh',
    city: 'Toronto, Canada',
    problem: 'Black Magic & Heavy Energy',
    quote: 'Within 3 months, I lost my business, suffered weird physical pains, and doctors found nothing. Astro Ankush performed remote Kali hawan. Within 48 hours, the crushing heaviness vanished. I got my life back!',
    rating: 5,
    date: 'January 2026'
  },
  {
    name: 'Dr. Ananya Sen',
    city: 'Kolkata, India',
    problem: 'Marriage Delay',
    quote: 'I was 34 and every matrimonial match failed at the last step. Astro Ankush pinpointed Saturn’s aspect on my Lagna lord. Exactly 3 months after his remedies, I got happily wed into a loving family.',
    rating: 5,
    date: 'December 2025'
  },
  {
    name: 'Kewal Ram',
    city: 'Surat, India',
    problem: 'Money & Debt Recovery',
    quote: 'Buyers had vanished without paying ₹65 Lakhs in textile goods. After Ankush ji did the Runamochaka Hawan and sent the energized Kuber Yantra, 80% of buyers settled accounts voluntarily within 45 days.',
    rating: 5,
    date: 'November 2025'
  },
  {
    name: 'Meenakshi & Suresh',
    city: 'Hyderabad, India',
    problem: 'Childless Couple / Santan Sukh',
    quote: 'Doctors had given up on us after 8 years of marriage and 3 failed IVFs. Astro Ankush found severe Pitra Rin on my 5th lord. After performing the prescribed anushthan, our fourth IVF was successful. We were blessed with a healthy boy!',
    rating: 5,
    date: 'October 2025'
  },
  {
    name: 'Abhishek Roy',
    city: 'Pune, India',
    problem: 'Career & Office Politics',
    quote: 'I was continuously passed over for promotions. Astro Ankush pointed out my combust 10th lord and prescribed a Surya yantra and daily ritual. Within 2 months, I landed a VP role at a multinational company!',
    rating: 5,
    date: 'September 2025'
  },
  {
    name: 'Sunita Sharma',
    city: 'Jaipur, India',
    problem: 'Vashikaran & Family Protection',
    quote: 'My teenage son was getting misled by bad company and becoming aggressive. Ankush ji prepared a protective yantra for his study desk. His behavior transformed completely into a calm, focused student within 3 weeks.',
    rating: 5,
    date: 'August 2025'
  },
  {
    name: 'Rajesh K.',
    city: 'Chandigarh, India',
    problem: 'Divorce Prevention',
    quote: 'We were one hearing away from divorce decree. Astro Ankush gave me a specific daily sankalpam and conducted a Shanti hawan. My wife requested mediation, and we are reunited today living in complete harmony.',
    rating: 5,
    date: 'July 2025'
  },
  {
    name: 'Vikram Singhania',
    city: 'London, UK',
    problem: 'Business Astrology & Kundli',
    quote: 'Astro Ankush accurately predicted the exact month my venture capital funding would close. His Kundli roadmap is my annual operating manual for every major contract and expansion.',
    rating: 5,
    date: 'June 2025'
  },
  {
    name: 'Priya & Varun',
    city: 'Nagpur, India',
    problem: 'Severe Manglik Dosh',
    quote: 'Pandits had terrified our parents saying our marriage would end in tragedy. Astro Ankush personally conducted our Kumbh Vivah and Mars pacification. We are celebrating our 4th peaceful anniversary with a baby daughter!',
    rating: 5,
    date: 'May 2025'
  },
  {
    name: 'Kavita Agrawal',
    city: 'Indore, India',
    problem: 'In-Law Discord & Family Peace',
    quote: 'My home felt like a battleground for 3 years. Ankush ji identified an afflicted Moon-Rahu conjunction. After the Griha Shanti rituals, genuine warmth returned. We now live peacefully under one roof.',
    rating: 5,
    date: 'April 2025'
  },
  {
    name: 'Dr. Shalini Mehta',
    city: 'Ahmedabad, India',
    problem: 'Spiritual Health Healing',
    quote: 'Even as a medical professional, I could not cure my own chronic exhaustion. Astro Ankush uncovered a severe Moon-Ketu eclipse in my 6th house. After his Mahamrityunjaya anushthan, my vitality returned 100%.',
    rating: 5,
    date: 'March 2025'
  },
  {
    name: 'Harpreet Dhillon',
    city: 'Melbourne, Australia',
    problem: 'Spousal Estrangement',
    quote: 'My husband had moved to a rental apartment and refused to speak. Astro Ankush performed distant Gauri-Shankar sadhana. In 20 days, my husband returned home apologizing for his coldness. Forever grateful!',
    rating: 5,
    date: 'February 2025'
  },
  {
    name: 'Amitabh Joshi',
    city: 'Dubai, UAE',
    problem: 'Business Black Magic Attack',
    quote: 'A rival business owner had planted negative energies in our warehouse. Ankush ji detected it through video consultation and provided a fierce Bhairava Raksha Yantra. Our revenue doubled within 60 days.',
    rating: 5,
    date: 'January 2025'
  },
  {
    name: 'Sonal & Deepak',
    city: 'Lucknow, India',
    problem: 'Inter-Caste Marriage Approval',
    quote: 'Both sets of parents were staunchly against our union. Astro Ankush performed Jupiter-Venus shanti. Within a month, both families sat down, ate together, and fixed our wedding date with smiles.',
    rating: 5,
    date: 'December 2024'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Maha Rudrabhishek & Hawan Kund',
    category: 'Hawan & Yagya',
    desc: 'Purifying sanctified copper hawan kund with sacred samagri, pure desi ghee, and continuous Vedic hymns.',
    image: asset('/images/vishal.jpeg')
  },
  {
    id: 2,
    title: 'Astro Ankush at Holy Altar',
    category: 'Guru Darshan',
    desc: 'Astro Ankush performing sacred morning prayers and consecrated sankalpa for global devotees.',
    image: asset('/images/astro_ankush_about.jpg')
  },
  {
    id: 3,
    title: 'Ancient Palm Leaf & Kundli Analysis',
    category: 'Vedic Scriptures',
    desc: 'Horoscope computation using authentic Sanskrit manuscripts, navratna gemstones, and brass astrolabes.',
    image: asset('/images/vedic_kundli_manuscript.jpg')
  },
  {
    id: 4,
    title: 'Astro Ankush Divine Portrait',
    category: 'Sanctuary',
    desc: 'Astro Ankush seated in traditional silk attire with sacred rudraksha mala, Shiva lingam, and glowing diyas.',
    image: asset('/images/astro_ankush_hero.jpg')
  },
  {
    id: 5,
    title: 'Navgraha Shanti Mahapujan',
    category: 'Hawan & Yagya',
    desc: 'Aligning all nine celestial planets through consecrated wood offerings and medicinal herbs.',
    image: asset('/images/vedic_hawan_ritual.jpg')
  },
  {
    id: 6,
    title: 'Tantra & Mantra Sadhana Sanctum',
    category: 'Spiritual Sadhana',
    desc: 'Deep nocturnal meditation invoking divine grace of Maa Kali for eliminating distress and curses.',
    image: asset('/images/astro_ankush_about.jpg')
  }
];

export const FAQ_CATEGORIES = [
  {
    id: 'general',
    name: 'General',
    items: [
      {
        q: 'Who is Astro Ankush and what is his spiritual lineage in India?',
        a: 'Astro Ankush is an acclaimed Indian Vedic Astrologer, Prashna Kundli expert, and certified Tantra-Mantra specialist with over 15 years of dedicated sadhana under traditional guru-shishya parampara in Haridwar, Varanasi, and Kamakhya. He is empowered in Parashari Jyotish, Agama Tantra, and Maa Kali worship.'
      },
      {
        q: 'How does astrology provide solutions to real-life crises?',
        a: 'Your birth chart (Janam Kundli) is a cosmic mirror of karmic balances and planetary cycles. By identifying afflicted planets (like malefic Rahu, Saturn, or retrograde Venus) and balancing them through mantras, yantras, and Vedic fire rituals, negative karmic blocks dissolve, paving the way for harmony and success.'
      },
      {
        q: 'Which Indian cities and states do you provide astrological consultations across?',
        a: 'Astro Ankush provides dedicated consultations and Vedic solutions across all states in India — including Delhi NCR, Mumbai, Bangalore, Kolkata, Hyderabad, Chennai, Ahmedabad, Pune, Jaipur, Chandigarh, Lucknow, Patna, and all major towns. Consultations and remote sankalpa rituals are conducted directly via Phone Call and WhatsApp (+91 97797 50799).'
      }
    ]
  },
  {
    id: 'consultation',
    name: 'Consultation & Process',
    items: [
      {
        q: 'What details do I need to provide for a consultation?',
        a: 'Please provide your Full Name, Date of Birth, exact Time of Birth, and Place of Birth (City & State). If you do not know your exact birth time, Astro Ankush uses Prashna Kundli (Horary Astrology) and Palmistry to analyze your situation.'
      },
      {
        q: 'In which Indian languages are consultations conducted?',
        a: 'Consultations are conducted comfortably in Hindi and English (along with regional guidance in Punjabi and Bengali), making it effortless for individuals and families across India to explain their personal concerns.'
      },
      {
        q: 'How do I book an urgent session with Astro Ankush from anywhere in India?',
        a: 'Simply click the WhatsApp button (+91 97797 50799) or tap Call Now. Our coordinator will immediately review your inquiry and schedule an early consultation slot, often on the very same day.'
      },
      {
        q: 'How long does a consultation session typically last?',
        a: 'A focused consultation typically lasts 25 to 45 minutes, giving ample time to analyze your horoscope, diagnose root problems, answer all your questions, and prescribe clear step-by-step remedies.'
      }
    ]
  },
  {
    id: 'privacy',
    name: 'Privacy & Discretion',
    items: [
      {
        q: 'Will my personal details and family matters remain 100% confidential?',
        a: 'Yes, absolutely. We hold an inviolable code of spiritual and professional privacy. No details, birth charts, chat logs, or personal photographs are ever shared with third parties, family members, or public platforms.'
      },
      {
        q: 'Do you keep records or recordings of our consultations?',
        a: 'No. All consultation notes and charts are strictly private and kept secure. Once your remedies and rituals conclude, your data remains safely confidential under Astro Ankush’s sole oversight.'
      }
    ]
  },
  {
    id: 'payments',
    name: 'Remedies & Pan-India Delivery',
    items: [
      {
        q: 'How is the Dakshina (fee) for rituals and remedies determined?',
        a: 'Dakshina depends on the specific Vedic rituals, consecrated samagri (herbs, pure cow ghee, sacred offerings), and number of days (e.g., 7 days, 21 days, or 41 days) required for the anushthan. Astro Ankush will clearly outline everything beforehand with complete transparency.'
      },
      {
        q: 'How are consecrated yantras and protective kavach delivered across India?',
        a: 'Energized Bhojpatra Yantras, Rudraksha malas, and consecrated Kavach amulets are securely couriered across India via express Speed Post / BlueDart / DTDC delivery with real-time tracking shared on WhatsApp.'
      }
    ]
  },
  {
    id: 'results',
    name: 'Results & Expectations',
    items: [
      {
        q: 'How soon can I expect results after the remedies are completed?',
        a: 'While spiritual timing depends on individual karmic complexity, most clients report noticeable energetic shifts, behavioral softening, or breakthroughs within 7 to 21 days of concluding the prescribed Vedic remedies.'
      },
      {
        q: 'Do I need to travel or do complicated pujas at home myself?',
        a: 'No travel is required. The heavy spiritual anushthans, mantra recitations, and hawan ceremonies are performed by Astro Ankush personally with proper Vedic sankalpa on your behalf. You are only given simple daily mantras or mindful practices that take 5-10 minutes at home.'
      },
      {
        q: 'What if previous astrologers failed to solve my problem?',
        a: 'Many clients come to Astro Ankush after disappointing experiences with inexperienced practitioners. Ankush ji delves into deep divisional charts (D-9, D-10, D-60) and identifies hidden doshas or energetic curses that standard astrologers frequently overlook.'
      }
    ]
  }
];

export const BLOG_POSTS = [
  {
    slug: 'signs-of-negative-energy-in-home',
    title: '7 Subtle Signs Your Home is Affected by Negative Energy & Evil Eye',
    category: 'Spiritual Protection',
    readTime: '6 min read',
    date: 'September 2026',
    excerpt: 'Frequent sickness, sudden financial drains, unprovoked family hostility, or heavy chest suffocation? Discover how ancient Vedic scriptures diagnose and banish negative energies.',
    content: `
### Is Your Living Space Carrying Unseen Spiritual Weights?

Every home possesses an energetic field known in Vedic science as the **Vastu Purusha Mandala**. When malefic planetary transits align with malicious human intent (Drishti / Buri Nazar) or unaddressed ancestral grief, the energy inside a residence can turn stagnant and oppressive.

#### 1. Frequent Sickness Despite Normal Medical Reports
If family members experience revolving bouts of chronic fatigue, headaches, or gastrointestinal distress where doctors find no physiological cause, this strongly points to energetic drainage.

#### 2. The Atmosphere of Sudden Discord
You enter your house feeling relaxed, but within five minutes of stepping inside, trivial matters ignite screaming arguments. The 4th house of your family's collective aura is under psychic strain.

#### 3. Persistent Financial Leaks (Dhana Nasha)
No matter how much wealth is earned, funds vanish through unexpected vehicle breakdowns, legal notices, or household repairs.

#### 4. Unnatural Behavior of Plants and Pets
Holy basil (Tulsi) withers repeatedly despite proper watering and sunlight. Dogs growl at empty corners, especially during the Brahma Muhurtha (3:00 AM – 4:30 AM).

#### 5. Persistent Heavy Odors or Chilling Drafts
Unexplained metallic, sour, or rotting smells that disappear as quickly as they appear are classical hallmarks of lower-frequency astral clutter.

### How Astro Ankush Cleanses and Fortifies Your Space
- **Maha Sudarshana Hawan**: Consecrated sacred fire ceremony dispelling residual curses.
- **Ashtadhatu Sri Yantra Installation**: Establishes an energetic vortex of pure Sattva.
- **Gomati Chakra & Camphor Rituals**: Sealed purification of all directional thresholds.
    `
  },
  {
    slug: 'why-love-marriages-face-delay-vedic-astrology',
    title: 'Why Do Love Marriages Face Obstacles? A Deep Vedic Astrology Analysis',
    category: 'Vedic Astrology',
    readTime: '8 min read',
    date: 'August 2026',
    excerpt: 'Understand the hidden cosmic mechanics behind parental opposition, communication breakdowns, and delayed wedding dates—and how Gauri-Shankar sadhana melts all barriers.',
    content: `
### The Cosmic Triangle: 5th House, 7th House, and Navamsha

In Vedic astrology, falling in love and sealing that love in lawful matrimony are governed by two distinct cosmic departments:
- **The 5th House (Prem Bhava)**: Governs passionate attraction, courtship, affection, and mutual fascination.
- **The 7th House (Vivah Bhava)**: Governs long-term legality, societal recognition, shared vows, and family acceptance.
- **The 9th House (Dharma & Pitrus)**: Governs parental approval, elders' blessings, and traditional lineage.

#### Why Do Couples Who Love Deeply Struggle to Wed?
When the 5th lord is radiant but the 7th lord is afflicted by retrograde Saturn (Shani), malefic Rahu, or afflicted Mars, the relationship flourishes in private but collapses whenever marriage discussions surface with parents.

#### Planetary Culprits in Marital Obstacles:
1. **Rahu in 7th or 8th House**: Breeds sudden misunderstandings, gossip among relatives, and groundless suspicion.
2. **Combust or Debilitated Venus (Shukra)**: Weakens the magnetic bond, causing partners to doubt their long-term compatibility.
3. **Severe Mangal Dosh (Mars affliction)**: Ignites ego clashes and stubbornness between the couple or their respective fathers.

### Remedial Path of Astro Ankush
Through individualized **Gauri-Shankar Anushthan** and **Katyayani Vrata**, the stubborn resistance of parents naturally dissolves into warm blessings, allowing love to consummate into a lifelong marriage.
    `
  },
  {
    slug: 'mangal-dosh-myths-facts-remedies',
    title: 'Mangal Dosh: Dispelling Terrifying Myths with Authentic Scriptural Truth',
    category: 'Dosha Nivaran',
    readTime: '7 min read',
    date: 'July 2026',
    excerpt: 'Are you terrified by astrologers telling you your marriage is doomed due to Mangal Dosh? Learn the exact rules of dosha cancellation and the sacred Kumbh Vivah process.',
    content: `
### The Most Feared Yet Misunderstood Dosha in Indian Astrology

Mangal Dosh (Kuja Dosha) occurs when the fiery planet Mars occupies the 1st, 4th, 7th, 8th, or 12th house in a person’s Janam Kundli. For centuries, uninformed practitioners have used this placement to terrify prospective brides, grooms, and their anxious parents.

#### Myth 1: "Every Manglik Person Must Marry Another Manglik"
**Truth**: This is entirely false. Ancient classical treatises, including *Brihat Parashara Hora Shastra*, explicitly state that over 40% of Mangal Doshas are automatically cancelled (Mangal Dosha Bhanga) by the presence of a strong Jupiter aspect, Saturn's counter-position, or specific zodiac sign dignities.

#### Myth 2: "Mangal Dosh Inevitably Leads to Spouse's Untimely Death"
**Truth**: Mars represents fiery drive, passion, and ambition. Unfavorable placements merely indicate high emotional friction and fiery temperaments. When balanced through proper remedies, such couples often enjoy the most devoted and resilient marriages.

### The Sacred Kumbh Vivah Ritual
If a chart genuinely possesses uncancelled high-degree Mangal Dosh, Astro Ankush performs the Vedic **Kumbh Vivah** (sacred nuptial ceremony with a sanctified clay pot or Vishnu idol). This holy ritual absorbs the harsh martial heat, ensuring that the human wedding occurs under absolute peace and divine protection.
    `
  }
];

export const CONTACT_INFO = {
  phone: '+91 97797 50799',
  phoneDisplay: '+91 97797 50799',
  whatsappUrl: 'https://wa.me/919779750799?text=Namaste%20Astro%20Ankush%20ji%2C%20I%20need%20help%20with%20my%20problem.',
  callUrl: 'tel:+919779750799',
  hours: 'Mon – Sun: 8:00 AM – 10:00 PM IST',
  availability: 'Online Consultations Available Worldwide',
  email: 'consult@astroankush.com',
  mantras: '|| Jai Maa Kali || || Om Namah Shivaya ||'
};
