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
  name: string;
  location: string;
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  /** tailwind classes controlling the editorial grid placement */
  span: string;
  aspect: string;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "Modern Residence",
    location: "Kochi",
    category: "Residential",
    year: "2025",
    image: "images/project-1.jpg",
    imageAlt: "Modern residence exterior with clean lines",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
  },
  {
    index: "02",
    name: "Luxury Villa",
    location: "Kozhikode",
    category: "Residential",
    year: "2024",
    image: "images/project-2.jpg",
    imageAlt: "Luxury villa with landscaped foreground",
    span: "md:col-span-4 md:col-start-9 md:mt-40",
    aspect: "aspect-[3/4]",
  },
  {
    index: "03",
    name: "Contemporary Interior",
    location: "Bengaluru",
    category: "Interior",
    year: "2025",
    image: "images/project-3.jpg",
    imageAlt: "Contemporary living room with designer furniture",
    span: "md:col-span-5 md:col-start-2 md:-mt-16",
    aspect: "aspect-[4/5]",
  },
  {
    index: "04",
    name: "Minimal Residence",
    location: "Thrissur",
    category: "Residential",
    year: "2023",
    image: "images/project-4.jpg",
    imageAlt: "Minimal residence facade in daylight",
    span: "md:col-span-6 md:col-start-7",
    aspect: "aspect-[16/11]",
  },
  {
    index: "05",
    name: "Premium Commercial Space",
    location: "Kochi",
    category: "Commercial",
    year: "2024",
    image: "images/project-5.jpg",
    imageAlt: "Premium commercial office interior",
    span: "md:col-span-8 md:col-start-3",
    aspect: "aspect-[21/10]",
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
