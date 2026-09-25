export interface HeroSlide {
  image: string;
  name: string;
  location: string;
  year: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  { image: "images/hero.jpg", name: "Modern Residence", location: "Kochi", year: "2025" },
  { image: "images/featured.jpg", name: "Villa Aurelia", location: "Kozhikode", year: "2024" },
  { image: "images/project-3.jpg", name: "Contemporary Interior", location: "Bengaluru", year: "2025" },
  { image: "images/project-2.jpg", name: "Luxury Villa", location: "Kozhikode", year: "2024" },
];

export const IMAGES = {
  hero: "images/hero.jpg",
  about: "images/about.jpg",
  interiorsMain: "images/interiors-main.jpg",
  interiorsAlt: "images/interiors-alt.jpg",
  cta: "images/cta.jpg",
  featured: "images/featured.jpg",
};

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Interiors", href: "/interiors" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  index: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    index: "01",
    name: "Architecture",
    description:
      "Site, light and climate studied first — then drawn with precision.",
    image: "images/service-architecture.jpg",
    imageAlt: "Minimal white concrete architecture",
  },
  {
    index: "02",
    name: "Construction",
    description:
      "Our own engineers on site. Honest materials, exact execution.",
    image: "images/service-construction.jpg",
    imageAlt: "Concrete facade detail of a modern building",
  },
  {
    index: "03",
    name: "Interior Design",
    description:
      "Material, proportion and light — composed around daily ritual.",
    image: "images/service-interior.jpg",
    imageAlt: "Elegant luxury living room interior",
  },
  {
    index: "04",
    name: "Turnkey Projects",
    description:
      "One contract, one team — from first sketch to final handover.",
    image: "images/service-turnkey.jpg",
    imageAlt: "Modern residence exterior at dusk",
  },
];

export interface Project {
  index: string;
  /** URL slug for the case-study page, e.g. "modern-residence" */
  slug: string;
  name: string;
  location: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  /** tailwind classes controlling the editorial grid placement */
  span: string;
  aspect: string;
  /** Case-study page content */
  overview: string;
  scope: string[];
  gallery: { src: string; alt: string }[];
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    slug: "modern-residence",
    name: "Modern Residence",
    location: "Kochi",
    category: "Residential",
    year: "2025",
    image: "images/project-1.jpg",
    imageAlt: "Modern residence exterior with clean lines",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    overview:
      "A crisp, light-filled family home on a compact urban plot in Kochi. The design keeps the massing simple — clean volumes, deep overhangs and full-height glazing — while the interiors open onto a central courtyard that pulls daylight and breeze through every room.",
    scope: ["Architectural design", "Structural engineering", "Turnkey construction", "Landscape"],
    gallery: [
      { src: "images/project-1.jpg", alt: "Modern residence exterior with clean lines" },
      { src: "images/interiors-main.jpg", alt: "Open living space with natural light" },
      { src: "images/interiors-alt.jpg", alt: "Detail of interior finishes" },
    ],
  },
  {
    index: "02",
    slug: "luxury-villa",
    name: "Luxury Villa",
    location: "Kozhikode",
    category: "Residential",
    year: "2024",
    image: "images/project-2.jpg",
    imageAlt: "Luxury villa with landscaped foreground",
    span: "md:col-span-4 md:col-start-9 md:mt-40",
    aspect: "aspect-[3/4]",
    overview:
      "A resort-scale private villa in Kozhikode organised around water and landscape. Double-height living spaces, a floating staircase and stone-and-timber material palette give the home a calm, grounded luxury — built to host large family gatherings without losing intimacy.",
    scope: ["Architectural design", "Interior design", "Turnkey construction", "Landscape & pool"],
    gallery: [
      { src: "images/project-2.jpg", alt: "Luxury villa with landscaped foreground" },
      { src: "images/featured.jpg", alt: "Villa exterior at dusk" },
      { src: "images/interiors-main.jpg", alt: "Double-height living space" },
    ],
  },
  {
    index: "03",
    slug: "contemporary-interior",
    name: "Contemporary Interior",
    location: "Bengaluru",
    category: "Interior",
    year: "2025",
    image: "images/project-3.jpg",
    imageAlt: "Contemporary living room with designer furniture",
    span: "md:col-span-5 md:col-start-2 md:-mt-16",
    aspect: "aspect-[4/5]",
    overview:
      "A full-home interior for a young family in Bengaluru — warm minimalism with oak, boucle and brushed brass. Bespoke joinery hides storage through the living zones, and layered lighting lets the same rooms shift from workday bright to evening soft.",
    scope: ["Space planning", "Custom furniture", "Lighting design", "Turnkey fit-out"],
    gallery: [
      { src: "images/project-3.jpg", alt: "Contemporary living room with designer furniture" },
      { src: "images/interiors-alt.jpg", alt: "Bedroom in warm neutral tones" },
      { src: "images/interiors-main.jpg", alt: "Dining area with bespoke joinery" },
    ],
  },
  {
    index: "04",
    slug: "minimal-residence",
    name: "Minimal Residence",
    location: "Thrissur",
    category: "Residential",
    year: "2023",
    image: "images/project-4.jpg",
    imageAlt: "Minimal residence facade in daylight",
    span: "md:col-span-6 md:col-start-7",
    aspect: "aspect-[16/11]",
    overview:
      "Restraint as a design principle. This Thrissur home strips the facade to plaster, timber screens and glass — no ornament, only proportion. Inside, a restrained palette and flush detailing keep the focus on light, volume and the family's daily rituals.",
    scope: ["Architectural design", "Structural engineering", "Turnkey construction"],
    gallery: [
      { src: "images/project-4.jpg", alt: "Minimal residence facade in daylight" },
      { src: "images/hero.jpg", alt: "Facade detail with timber screens" },
      { src: "images/interiors-main.jpg", alt: "Minimal living interior" },
    ],
  },
  {
    index: "05",
    slug: "premium-commercial-space",
    name: "Premium Commercial Space",
    location: "Kochi",
    category: "Commercial",
    year: "2024",
    image: "images/project-5.jpg",
    imageAlt: "Premium commercial office interior",
    span: "md:col-span-8 md:col-start-3",
    aspect: "aspect-[21/10]",
    overview:
      "A 12,000 sq.ft corporate office in Kochi designed for a hybrid workforce — neighbourhood work zones, acoustic pods, a town-hall stair and biophilic breakout terraces. Delivered as a single turnkey contract, from core-and-shell adaptation to furniture and branding.",
    scope: ["Workplace strategy", "Interior design", "MEP coordination", "Turnkey fit-out"],
    gallery: [
      { src: "images/project-5.jpg", alt: "Premium commercial office interior" },
      { src: "images/project-3.jpg", alt: "Work lounge with designer furniture" },
      { src: "images/interiors-alt.jpg", alt: "Meeting suite interior" },
    ],
  },
];

export const FEATURED_PROJECT = {
  eyebrow: "Project feature",
  name: "Villa Aurelia",
  meta: "Residential · 4,200 sq.ft · Calicut · 2026",
  image: IMAGES.featured,
  imageAlt: "Villa Aurelia exterior at dusk",
  stats: [
    { label: "Typology", value: "Residential" },
    { label: "Area", value: "4,200 sq.ft" },
    { label: "Location", value: "Calicut" },
    { label: "Year", value: "2026" },
  ],
};

export const INTERIOR_CATEGORIES = [
  "Living Spaces",
  "Bedrooms",
  "Kitchens",
  "Dining",
  "Office",
  "Hospitality",
];

export interface Principle {
  index: string;
  title: string;
  description: string;
}

export const PRINCIPLES: Principle[] = [
  {
    index: "01",
    title: "Thoughtful Design",
    description:
      "Every plan begins with how you live — orientation, light, ventilation and movement studied before a single line is drawn.",
  },
  {
    index: "02",
    title: "Quality Craftsmanship",
    description:
      "Our own engineers and craftsmen execute the work. Materials are specified honestly and finished to be touched, not just seen.",
  },
  {
    index: "03",
    title: "Transparent Process",
    description:
      "Open budgets, documented stages and a single point of contact. You always know what is happening, what it costs and what comes next.",
  },
  {
    index: "04",
    title: "Attention to Detail",
    description:
      "Shadow gaps, stone joints, handle heights — the quiet decisions that separate a building from a space that feels inevitable.",
  },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understanding your vision, site and aspirations.",
  },
  {
    index: "02",
    title: "Design",
    description: "Concept, architecture & interiors developed together.",
  },
  {
    index: "03",
    title: "Develop",
    description: "Detailed drawings, estimates & planning approvals.",
  },
  {
    index: "04",
    title: "Build",
    description: "Construction & execution with strict supervision.",
  },
  {
    index: "05",
    title: "Deliver",
    description: "Final finishing, snag resolution & handover.",
  },
];

export interface Testimonial {
  quote: string;
  client: string;
  project: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They read the site before they drew a single line — the light, the trees, the way the rain moves across the plot. The house feels like it was always meant to be here.",
    client: "Anjali & Rohan Menon",
    project: "Modern Residence · Kochi",
  },
  {
    quote:
      "They understood our home better than we did. The light, the materials, the quiet corners — it feels like it was always meant to be this way.",
    client: "Dr. Suresh Nair",
    project: "Luxury Villa · Kozhikode",
  },
  {
    quote:
      "Transparent budgets, weekly updates, zero surprises. As a first-time builder, that honesty mattered more than anything.",
    client: "Priya Krishnan",
    project: "Minimal Residence · Thrissur",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 12, suffix: "+", label: "Years of Practice" },
  { value: 48, suffix: "", label: "Projects Delivered" },
  { value: 9, suffix: "", label: "Cities" },
  { value: 3, suffix: "", label: "Disciplines" },
];

export const CONTACT = {
  studio: "Kerala, India",
  email: "hello@example.com",
  phone: "+91 XXXXX XXXXX",
};

export const PROJECT_TYPES = [
  "Residential — New Build",
  "Residential — Renovation",
  "Interior Design",
  "Commercial Space",
  "Turnkey Project",
  "Other",
];

export const BUDGET_RANGES = [
  "Under ₹25 Lakh",
  "₹25 – ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 – ₹2 Crore",
  "₹2 Crore+",
  "To be discussed",
];
