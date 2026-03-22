import type {
  AppProject,
  ContactLink,
  ContentBlock,
  Founder,
  HeroHighlight,
  NavItem,
  Principle,
} from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "Foundation", href: "#about" },
  { label: "Founders", href: "#founders" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights: HeroHighlight[] = [
  { value: "4", label: "health-focused products" },
  { value: "2", label: "founders shaping the foundation" },
  { value: "1", label: "clear brand ecosystem" },
];

export const foundationPillars: ContentBlock[] = [
  {
    title: "Thoughtful product framing",
    description:
      "Each Fluxtent product begins with a real point of friction in daily health routines, then gets refined into something approachable, calm, and useful.",
  },
  {
    title: "Accessible, human-centered design",
    description:
      "The foundation is built around clarity, legibility, and practical guidance so technology feels supportive rather than overwhelming.",
  },
  {
    title: "Connected brand stewardship",
    description:
      "Fluxtent acts as both a professional identity and a parent structure, tying individual apps into a cohesive, credible health-tech story.",
  },
];

export const founders: Founder[] = [
  {
    name: "Arnav Singh",
    role: "Co-founder · Product builder",
    bio: "Arnav approaches Fluxtent through the lens of crafted digital experiences: turning complex health-related needs into interfaces that feel clear, modern, and dependable. His focus sits at the intersection of design quality, product structure, and practical usefulness.",
    emphasis: "Designing for clarity without losing ambition.",
  },
  {
    name: "Varun Puttagunta",
    role: "Co-founder · Systems-minded creator",
    bio: "Varun helps shape Fluxtent as a foundation for tools that feel intentional from concept to interaction. His perspective brings a steady product rigor to the ecosystem, keeping each idea grounded in everyday relevance and meaningful support.",
    emphasis: "Building health technology that feels approachable and real.",
  },
];

export const projects: AppProject[] = [
  {
    slug: "allerguard",
    name: "AllerGuard",
    description:
      "Allergy-aware support for clearer food and health decisions, designed to help users navigate uncertainty with more confidence and less friction.",
    motif: "shield",
    accentClass: "from-[#d7d1ff] via-[#cde6ff] to-white",
    status: "Allergy-aware decision support",
  },
  {
    slug: "tabguard",
    name: "TabGuard",
    description:
      "A healthier digital habit companion focused on safer, more intentional screen-use patterns and better day-to-day attention management.",
    motif: "focus",
    accentClass: "from-[#d8ecff] via-[#c9d8ff] to-white",
    status: "Focus and screen-use support",
  },
  {
    slug: "medremind",
    name: "MedRemind",
    description:
      "Medication reminder and adherence support designed to reduce missed steps and make consistency feel simpler, steadier, and more humane.",
    motif: "pulse",
    accentClass: "from-[#efe6ff] via-[#d8e7ff] to-white",
    status: "Medication adherence support",
  },
  {
    slug: "recall",
    name: "Recall",
    description:
      "Memory support and cognitive assistance for daily reinforcement, helping thoughtful routines stay visible, repeatable, and easier to retain.",
    motif: "memory",
    accentClass: "from-[#dae0ff] via-[#d7f0ff] to-white",
    status: "Memory and cognitive support",
  },
];

export const principles: Principle[] = [
  {
    title: "Useful by default",
    description:
      "Fluxtent favors meaningful function over novelty, with products designed to help people act on information rather than simply admire it.",
  },
  {
    title: "Calm, clear interfaces",
    description:
      "Health-related tools carry emotional weight. The design language stays composed, legible, and supportive so the experience feels trustworthy.",
  },
  {
    title: "Care through craft",
    description:
      "Details matter: motion, spacing, tone, and interaction all reinforce the sense that these products are made deliberately and with respect for the user.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email Fluxtent",
    href: "mailto:fluxtent@gmail.com",
    helper: "fluxtent@gmail.com",
  },
];

