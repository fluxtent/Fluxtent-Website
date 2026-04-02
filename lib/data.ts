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
  {
    label: "Foundation",
    href: "/foundation",
    description: "The structure, product framing, and philosophy beneath the Fluxtent portfolio.",
  },
  {
    label: "Founders",
    href: "/founders",
    description: "Editorial portraits of Arnav Singh and Varun Puttagunta as the builders behind Fluxtent.",
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    description: "A connected view of Fluxtent's health-focused apps and linked product experiences.",
  },
  {
    label: "Vision",
    href: "/vision",
    description: "The design philosophy guiding Fluxtent's approach to health-oriented digital products.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "A direct, minimal way to connect with the Fluxtent foundation.",
  },
];

export const heroHighlights: HeroHighlight[] = [
  { value: "5", label: "health-focused products and experiences" },
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
    longDescription:
      "AllerGuard frames allergy awareness as a calm decision-making experience. The concept is centered on helping users interpret ingredients, reduce uncertainty, and make food-health choices with more confidence in everyday settings.",
    motif: "shield",
    accentClass: "from-[#d7d1ff] via-[#cde6ff] to-white",
    status: "Allergy-aware decision support",
    href: "/ecosystem#allerguard",
    linkLabel: "View in ecosystem",
    focusAreas: ["Food-health clarity", "Safer ingredient awareness", "Lower-friction decision support"],
  },
  {
    slug: "tabguard",
    name: "TabGuard",
    description:
      "A healthier digital habit companion focused on safer, more intentional screen-use patterns and better day-to-day attention management.",
    longDescription:
      "TabGuard explores healthier screen routines through gentle intervention rather than guilt-driven restriction. Its place in the Fluxtent ecosystem is to make digital behavior feel more visible, intentional, and easier to rebalance.",
    motif: "focus",
    accentClass: "from-[#d8ecff] via-[#c9d8ff] to-white",
    status: "Focus and screen-use support",
    href: "/ecosystem#tabguard",
    linkLabel: "View in ecosystem",
    focusAreas: ["Digital habit support", "Attention stewardship", "Safer screen-use patterns"],
  },
  {
    slug: "medremind",
    name: "MedRemind",
    description:
      "Medication reminder and adherence support designed to reduce missed steps and make consistency feel simpler, steadier, and more humane.",
    longDescription:
      "MedRemind is positioned around consistency and reassurance. Rather than treating adherence as a cold logistics problem, the product concept emphasizes steadiness, reduced friction, and a more humane relationship with routine care.",
    motif: "pulse",
    accentClass: "from-[#efe6ff] via-[#d8e7ff] to-white",
    status: "Medication adherence support",
    href: "/ecosystem#medremind",
    linkLabel: "View in ecosystem",
    focusAreas: ["Medication reminders", "Routine reinforcement", "Calm adherence support"],
  },
  {
    slug: "recall",
    name: "Recall",
    description:
      "Memory support and cognitive assistance for daily reinforcement, helping thoughtful routines stay visible, repeatable, and easier to retain.",
    longDescription:
      "Recall focuses on cognitive reinforcement and memory support in a way that feels approachable instead of clinical. Within Fluxtent, it represents a more reflective side of the portfolio: products that strengthen day-to-day recall through clear, repeatable structure.",
    motif: "memory",
    accentClass: "from-[#dae0ff] via-[#d7f0ff] to-white",
    status: "Memory and cognitive support",
    href: "/ecosystem#recall",
    linkLabel: "View in ecosystem",
    focusAreas: ["Cognitive assistance", "Memory reinforcement", "Daily recall structure"],
  },
  {
    slug: "medbrief-ai",
    name: "MedBrief AI",
    description:
      "An intelligent medical companion for healthcare insights, wellness guidance, and thoughtful conversation presented through a polished AI interface.",
    longDescription:
      "MedBrief AI extends the portfolio with a live conversational experience. Based on the published site, it is positioned as a premium intelligent assistant for healthcare insights, wellness guidance, and emotionally aware conversation, with features such as saved chats and crisis support pathways.",
    motif: "brief",
    accentClass: "from-[#d9d4ff] via-[#cadfff] to-white",
    status: "Intelligent medical companion",
    href: "https://medbriefai.vercel.app/",
    linkLabel: "Visit live product",
    external: true,
    focusAreas: ["Healthcare insights", "Wellness guidance", "Thoughtful AI conversation"],
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
