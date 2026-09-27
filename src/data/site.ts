/**
 * ==============================================================================
 * SYS INTERIORS — SINGLE SOURCE OF TRUTH (BUSINESS DATA ARCHITECTURE)
 * ==============================================================================
 * HARD REQUIREMENT: All editable business copy, contact details, services,
 * brand attributes, WhatsApp messaging templates, and metadata reside here.
 * Components must consume from this file and NEVER hardcode business information.
 *
 * ANTI-HALLUCINATION POLICY:
 * 1. Zero fake reviews / testimonials.
 * 2. Zero fake completed projects or fabricated client names.
 * 3. Zero fake addresses, fake emails, fake awards or fake statistics.
 * 4. Missing data is represented as null/empty and handled gracefully in the UI.
 * ==============================================================================
 */

export interface ContactData {
  phoneRaw: string;
  phoneDisplay: string;
  telLink: string;
  whatsappNumber: string;
  email: string | null;
  address: string | null;
  territory: string;
  consultationHours: string;
}

export interface FounderData {
  name: string;
  role: string;
  philosophy: string[];
  image: string | null;
  directDeskPhone: string;
}

export interface ServiceSubItem {
  id: string;
  name: string;
}

export interface ServiceCategory {
  id: string;
  index: string;
  cluster: "Window Solutions" | "Interior Finishes" | "Space Solutions" | "Customized Solutions";
  clusterBadge: string;
  clusterAccent: "crimson" | "sapphire";
  title: string;
  tagline: string;
  description: string;
  image: string;
  subcategories: ServiceSubItem[];
  whatsappMessage: string;
}

export interface AudienceCategory {
  id: "residential" | "commercial";
  title: string;
  tag: string;
  tagAccent: "crimson" | "sapphire";
  description: string;
  subSectors: string[];
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface WhyPillar {
  index: string;
  title: string;
  description: string;
  accent: "crimson" | "sapphire";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  location: string;
  serviceCategory: string;
  coverImage: string;
  description: string;
  isReal: boolean;
}

export interface ReviewRecord {
  id: string;
  author: string;
  roleOrLocation: string;
  service: string;
  quote: string;
  rating: number;
  isReal: boolean;
}

export interface SiteNavigationItem {
  label: string;
  href: string;
}

export const siteData = {
  brand: {
    name: "SYS Interiors",
    primaryTagline: "DESIGNING SPACES • DEFINING LIFESTYLES",
    secondaryTagline: "DESIGN | BUILD | TRANSFORM",
    tertiaryPhrase: "Transforming Spaces...",
    heroSubtitle:
      "Curtains, blinds, wallpapers, flooring and customized interior solutions designed to transform the way your space feels.",
    logo: "/images/logo.svg",
    logoHorizontal: "/images/logo-horizontal.svg",
    logoBadge: "/images/logo-badge.svg",
    logoExact: "/images/logo-exact.png",
    logoUploaded: "/images/logo-uploaded.png",
    heroImage: "/images/hero-curtains.jpg",
    heroSlides: [
      {
        id: "curtains",
        label: "Curtains & Sheers",
        title: "Floor-to-Ceiling Drapery & Double Tracks",
        subtitle: "Bespoke Residential Window Craft",
        tag: "Turnkey Styling",
        accent: "sapphire",
        image: "/images/hero-curtains.jpg",
        whatsappMessage: "Hi SYS Interiors, I'm interested in Curtains & Drapery for my space.",
      },
      {
        id: "blinds",
        label: "Motorized Blinds",
        title: "Motorized Zebra & Automated Roller Shading",
        subtitle: "Precision Daylight & Privacy Calibration",
        tag: "Motorized Systems",
        accent: "crimson",
        image: "/images/hero-blinds.jpg",
        whatsappMessage: "Hi SYS Interiors, I'm interested in Motorized Blinds for my space.",
      },
      {
        id: "flooring",
        label: "Herringbone Flooring",
        title: "Tactile Oak Herringbone Wooden Floors",
        subtitle: "Natural Parquet Timber Craft",
        tag: "Surface Foundation",
        accent: "sapphire",
        image: "/images/hero-flooring.jpg",
        whatsappMessage: "Hi SYS Interiors, I'm interested in Wooden Flooring for my property.",
      },
      {
        id: "wallpapers",
        label: "3D Wallpapers",
        title: "Dimensional Sculpted Wall Coverings",
        subtitle: "Bespoke 3D Geometric Relief Styling",
        tag: "Architectural Walls",
        accent: "crimson",
        image: "/images/hero-wallpaper.jpg",
        whatsappMessage: "Hi SYS Interiors, I'm interested in 3D Wallpapers for my space.",
      },
    ],
  },

  contact: {
    phoneRaw: "+919391057602",
    phoneDisplay: "+91 9391057602",
    telLink: "tel:+919391057602",
    whatsappNumber: "919391057602",
    email: null, // Graceful omission: No verified official email published
    address: null, // Graceful omission: No verified physical showroom address published
    territory:
      "Habsiguda & Secunderabad • Serving Jubilee Hills, Banjara Hills, Gachibowli, Madhapur, Hitec City, Uppal, Kondapur & all Hyderabad.",
    consultationHours: "Mon – Sat: 9:30 AM – 8:00 PM • Sundays by appointment",
  } satisfies ContactData,

  founder: {
    name: "Yogender",
    role: "Founder & Lead Consultant",
    philosophy: [
      "At SYS Interiors, we believe an interior is completed not merely by major structural walls, but by the sensitive finishes that interact with light, touch, and movement every day.",
      "We personally oversee design consultations, physical swatch selections, and installation standards to ensure that every home and commercial facility receives genuine materials, architectural precision, and lasting service.",
    ],
    image: null, // DO NOT invent a fake headshot. Rendered via clean architectural typographic insignia.
    directDeskPhone: "+91 9391057602",
  } satisfies FounderData,

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Spaces", href: "#spaces" },
    { label: "Why SYS", href: "#why-sys" },
    { label: "Process", href: "#process" },
    { label: "Founder", href: "#founder" },
    { label: "Contact", href: "#contact" },
  ] satisfies SiteNavigationItem[],

  visualHook: {
    tag: "Atmospheric Nuance",
    headline: "Every space has its own character.",
    description:
      "Light filtering softly through tailored sheer folds, whisper-quiet motorization, the tactile grain of timber underfoot, and walls given sculpted depth.",
    slides: [
      {
        title: "Translucent Sheers",
        image: "/images/curtains-sheer.webp",
      },
      {
        title: "Motorized Blinds",
        image: "/images/blinds-motorized.webp",
      },
      {
        title: "Herringbone Wood",
        image: "/images/flooring-wood.webp",
      },
      {
        title: "Architectural Murals",
        image: "/images/kitchen-wallpaper.webp",
      },
      {
        title: "Bespoke Millwork",
        image: "/images/hero.webp",
      },
    ],
  },

  /**
   * VERIFIED BUSINESS SERVICES
   * Only services supplied from real business materials.
   */
  services: [
    {
      id: "window-solutions",
      index: "01",
      cluster: "Window Solutions",
      clusterBadge: "01 • Light & Privacy",
      clusterAccent: "crimson",
      title: "Window Solutions",
      tagline: "Control light, privacy and atmosphere with window solutions tailored to your space.",
      description:
        "Control daylight, soften glare, and command privacy with bespoke motorization, acoustic fabrics, and solar protection. Custom measured and calibrated to your window architecture.",
      image: "/images/curtains-sheer.webp",
      whatsappMessage:
        "Hi SYS Interiors, I would like to enquire about your Window Solutions (Curtains, Blinds and Sun Control Films).",
      subcategories: [
        // Curtains
        { id: "window-curtains", name: "Window Curtains" },
        { id: "sheer-curtains", name: "Sheer Curtains" },
        { id: "blackout-curtains", name: "Blackout Curtains" },
        { id: "hall-curtains", name: "Hall Curtains" },
        { id: "bedroom-curtains", name: "Bedroom Curtains" },
        { id: "double-curtains", name: "Double Curtains" },
        // Blinds
        { id: "zebra-blinds", name: "Zebra Blinds" },
        { id: "vertical-blinds", name: "Vertical Blinds" },
        { id: "roller-blinds", name: "Roller Blinds" },
        { id: "horizontal-blinds", name: "Horizontal Blinds" },
        { id: "wooden-blinds", name: "Wooden Blinds" },
        { id: "roman-blinds", name: "Roman Blinds" },
        { id: "venetian-blinds", name: "Venetian Blinds" },
        { id: "bamboo-blinds", name: "Bamboo Blinds" },
        { id: "silver-blinds", name: "Silver Blinds" },
        { id: "up-down-blinds", name: "Up & Down Blinds" },
        { id: "motorized-roller-blackout", name: "Motorized Roller Blackout Blinds" },
        { id: "motorized-roman", name: "Motorized Roman Blinds" },
        // Sun Control Films
        { id: "3m-film", name: "3M Sun Control Films" },
        { id: "garware-film", name: "Garware Sun Control Films" },
        { id: "frosted-film", name: "Frosted Films" },
      ],
    },
    {
      id: "interior-finishes",
      index: "02",
      cluster: "Interior Finishes",
      clusterBadge: "02 • Tactile Depth",
      clusterAccent: "sapphire",
      title: "Interior Finishes",
      tagline: "Bring warmth, natural texture, and geometric depth underfoot and across every wall.",
      description:
        "Give your interiors a refined foundation with scratch-resistant wooden flooring, high-durability vinyl, wall-to-wall carpets, and customized 3D dimension wallpapers tailored to room geometry.",
      image: "/images/flooring-wood.webp",
      whatsappMessage:
        "Hi SYS Interiors, I would like to explore Wall and Floor Finishes (Wallpapers & Flooring) for my property.",
      subcategories: [
        // Wallpapers
        { id: "3d-wallpapers", name: "3D Wallpapers" },
        { id: "customized-wallpapers", name: "Customized Wallpapers" },
        { id: "regular-wallpapers", name: "Regular Wallpapers" },
        // Flooring
        { id: "vinyl-flooring", name: "Vinyl Flooring" },
        { id: "wooden-flooring", name: "Wooden Flooring" },
        { id: "wall-to-wall-carpet", name: "Wall-to-Wall Carpet" },
      ],
    },
    {
      id: "space-solutions",
      index: "03",
      cluster: "Space Solutions",
      clusterBadge: "03 • Structural Form",
      clusterAccent: "crimson",
      title: "Space Solutions",
      tagline: "Precision-engineered partitions, culinary cabinetry, and modern architectural frameworks.",
      description:
        "Modern aluminium partitions, slim-profile glass dividers, aluminium kitchens, wardrobes, and ergonomic modular kitchens configured for clean functionality and enduring durability.",
      image: "/images/kitchen-wallpaper.webp",
      whatsappMessage:
        "Hi SYS Interiors, I'd like to discuss Space Solutions (Aluminium Partitions & Modular Kitchens).",
      subcategories: [
        // Aluminium Works
        { id: "aluminium-partitions", name: "Aluminium Partitions" },
        { id: "aluminium-kitchens-wardrobes", name: "Aluminium Kitchens & Wardrobes" },
        { id: "aluminium-works", name: "Aluminium Works" },
        // Modular Kitchens
        { id: "modular-kitchens", name: "Modular Kitchens" },
      ],
    },
    {
      id: "customized-solutions",
      index: "04",
      cluster: "Customized Solutions",
      clusterBadge: "04 • Bespoke Craft",
      clusterAccent: "sapphire",
      title: "Customized Solutions",
      tagline: "Bespoke interior treatments designed around your specific requirement.",
      description:
        "Tailored manufacturing and made-to-measure interior elements built around the unique structural dimensions, lighting requirements, and design aesthetic of your space.",
      image: "/images/blinds-motorized.webp",
      whatsappMessage:
        "Hi SYS Interiors, I'd like to discuss Customized Interior Solutions tailored to my space.",
      subcategories: [
        { id: "customized-products", name: "Customized Products" },
        { id: "customized-interior-solutions", name: "Customized Interior Solutions" },
      ],
    },
  ] satisfies ServiceCategory[],

  /**
   * VERIFIED AUDIENCES
   * Only audience categories present in supplied business material.
   */
  audiences: [
    {
      id: "residential",
      title: "Residential Interiors",
      tag: "Sanctuaries of Quiet Comfort",
      tagAccent: "crimson",
      description:
        "We shape homes that breathe tranquility. Through measured light control, sumptuous curtain draping, seamless wooden flooring, and ergonomically tailored modular kitchens, we bring thoughtful luxury into everyday domestic life.",
      subSectors: ["Homes", "Apartments", "Living Spaces", "Bedrooms"],
      features: [
        "Complete bedroom blackout & ambient sheer layering",
        "Moisture-resistant modular kitchens & customized joinery",
        "Scratch-resistant wooden & luxury vinyl floor installations",
        "Custom feature wallpapers tailored to wall dimensions",
      ],
      ctaLabel: "Book Home Consultation",
      whatsappMessage:
        "Hi SYS Interiors, I would like to consult on Residential Interior solutions for my home.",
    },
    {
      id: "commercial",
      title: "Commercial & Corporate",
      tag: "High-Traffic Architectural Performance",
      tagAccent: "sapphire",
      description:
        "We outfit office towers, medical clinics, executive boardrooms, and hospitality suites. Engineered for heat reflection, glare attenuation, acoustic clarity, and heavy footfall without compromising clean lines.",
      subSectors: ["Offices", "Commercial Spaces", "Hospitals", "Hotels"],
      features: [
        "3M & Garware heat-rejection films for architectural facades",
        "Acoustic aluminium modular partitions & privacy glass",
        "Heavy-duty commercial carpet tiles & anti-static flooring",
        "Centralized motorized roller shades for conference halls",
      ],
      ctaLabel: "Request Commercial RFP / Site Visit",
      whatsappMessage:
        "Hi SYS Interiors, I would like to request a Commercial Project Estimate / Site Visit.",
    },
  ] satisfies AudienceCategory[],

  /**
   * THE STUDIO STANDARD (WHY SYS)
   */
  whyUs: [
    {
      index: "01",
      title: "Premium Material Standards",
      description:
        "Sourced directly from authentic brand distributors: 3M solar films, Garware, premium imported textiles, and certified high-density timber.",
      accent: "crimson",
    },
    {
      index: "02",
      title: "In-House Installation Mastery",
      description:
        "Clean-room execution, laser-guided track alignment, and seamless handover by experienced in-house technicians—never outsourced.",
      accent: "sapphire",
    },
    {
      index: "03",
      title: "Customized Precision",
      description:
        "Millimeter-precise tailoring for non-standard apertures, custom valances, hidden curtain tracks, and tailored joinery.",
      accent: "crimson",
    },
    {
      index: "04",
      title: "Modern Design & Maintenance",
      description:
        "Thoughtfully selected for everyday practicality: scratch-resistant floor coatings, washable fabrics, and enduring hardware.",
      accent: "sapphire",
    },
  ] satisfies WhyPillar[],

  /**
   * DISCIPLINED 4-STAGE PROCESS
   */
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "On-site laser measurements, daylight assessment, and spatial requirement mapping across your residence or office.",
    },
    {
      step: "02",
      title: "Select",
      description:
        "Explore physical curated swatches, tactile fabric weaves, timber grains, 3M film specs, and blind hardware in person.",
    },
    {
      step: "03",
      title: "Customize",
      description:
        "Precision factory tailoring, custom track programming, and millwork fabricated to exact millimeter tolerances.",
    },
    {
      step: "04",
      title: "Install",
      description:
        "Meticulous on-site installation by in-house technicians, clean vacuum handover, and rigorous final inspection.",
    },
  ] satisfies ProcessStep[],

  /**
   * PROJECT PORTFOLIO DATA
   * Strict anti-hallucination requirement:
   * Keep array empty [] until verified customer project photography is formally supplied.
   * The UI cleanly renders proof highlights and contextual consultation prompts.
   */
  projects: [] as ProjectRecord[],

  /**
   * REVIEWS DATA
   * Strict anti-hallucination requirement:
   * Keep array empty [] until real reviews are supplied.
   * DO NOT invent fake customer names, fake stars, or fake testimonials.
   */
  reviews: [] as ReviewRecord[],

  whatsapp: {
    baseNumber: "919391057602",
    defaultMessage:
      "Hi SYS Interiors, I'm interested in your interior solutions. I'd like to discuss my requirement.",
    serviceMessages: {
      curtains:
        "Hi SYS Interiors, I'm interested in Curtains (Sheer / Blackout / Window) and would like to discuss options.",
      blinds:
        "Hi SYS Interiors, I'm interested in Blinds (Motorized / Roller / Zebra) for my space.",
      wallpapers:
        "Hi SYS Interiors, I would like to explore 3D and Customized Wallpapers for my space.",
      flooring:
        "Hi SYS Interiors, I would like to explore Wooden and Vinyl Flooring for my property.",
      sunControl:
        "Hi SYS Interiors, I'm interested in 3M and Garware Sun Control Films for my windows.",
      aluminium:
        "Hi SYS Interiors, I'd like to discuss Aluminium Partitions and Works for my property.",
      modularKitchens:
        "Hi SYS Interiors, I'm interested in exploring Modular Kitchen solutions.",
      customized:
        "Hi SYS Interiors, I'm interested in Customized Interior Solutions for my space.",
      founder:
        "Hello Yogender, I would like to consult with you directly regarding SYS Interiors solutions.",
      quote:
        "Hi SYS Interiors, I love your portfolio and would like to request an on-site measurement & quote.",
    },
  },

  seo: {
    title: "SYS Interiors | Curtains, Blinds, Wallpapers & Interior Solutions",
    description:
      "SYS Interiors provides premium window curtains, motorized blinds, 3D wallpapers, wooden flooring, sun control films and customized interior solutions in Hyderabad.",
    siteUrl: "https://sysinteriors.in",
    keywords: [
      "SYS Interiors",
      "curtains Hyderabad",
      "blinds Hyderabad",
      "motorized blinds",
      "zebra blinds",
      "roller blinds",
      "wooden flooring Hyderabad",
      "vinyl flooring",
      "3D wallpapers",
      "sun control films 3M Garware",
      "aluminium partitions",
      "modular kitchens",
      "customized interior solutions Hyderabad",
      "Yogender SYS Interiors",
    ],
    locale: "en_IN",
    ogImage: "/images/hero.webp",
  },
} as const;

export type SiteData = typeof siteData;
