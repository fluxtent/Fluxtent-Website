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
      "AI-powered personalized allergy detection for food products — scans ingredients instantly and alerts you to hidden allergens tailored to your unique sensitivity profile.",
    longDescription:
      "AllerGuard brings real-time ingredient intelligence to the browser. Built as a Chrome extension, it uses AI to cross-reference food labels against your personal allergen profile, surfacing risks before they reach your plate. It's the kind of quiet, reliable safety net that makes everyday grocery decisions feel less uncertain.",
    motif: "shield",
    accentClass: "from-[#d7d1ff] via-[#cde6ff] to-white",
    status: "Live on Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/allerguard-ai-personalize/bgeahmilohhjaamopmecmbdmbcjcgbff",
    linkLabel: "Install extension",
    external: true,
    focusAreas: ["AI allergen scanning", "Personalized sensitivity profiles", "Real-time ingredient analysis"],
  },
  {
    slug: "tabguard",
    name: "TabGuard",
    description:
      "A browser-native digital wellness companion that helps you reclaim focus by managing tab overload and promoting healthier browsing patterns.",
    longDescription:
      "TabGuard addresses one of modern life's quietest productivity drains: tab clutter. Rather than restricting behavior, it gently surfaces awareness about your browsing patterns and provides tools to set boundaries you actually keep. It's digital wellness without the guilt.",
    motif: "focus",
    accentClass: "from-[#d8ecff] via-[#c9d8ff] to-white",
    status: "Live on Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/tabguard/gmdllffjnafefhnppajkeldbgfndjlln",
    linkLabel: "Install extension",
    external: true,
    focusAreas: ["Tab management", "Focus preservation", "Browsing habit awareness"],
  },
  {
    slug: "medremind",
    name: "MedRemind",
    description:
      "Smart medication tracking that fits into your browser — set persistent reminders, track adherence streaks, and never miss a dose without needing another app.",
    longDescription:
      "MedRemind lives where you already spend your time: the browser. It provides gentle, persistent medication reminders with streak tracking and schedule customization, turning a notoriously hard habit into something you can actually maintain. No app download, no account creation — just reliable care.",
    motif: "pulse",
    accentClass: "from-[#efe6ff] via-[#d8e7ff] to-white",
    status: "Live on Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/medremind/oajgmcmajdcojokefaegpdnnffadhblb",
    linkLabel: "Install extension",
    external: true,
    focusAreas: ["Medication scheduling", "Adherence streaks", "Browser-native reminders"],
  },
  {
    slug: "recall",
    name: "Recall",
    description:
      "A cognitive wellness toolkit for daily memory reinforcement — structured exercises and spaced repetition designed to keep your mind sharp and routines visible.",
    longDescription:
      "Recall reimagines cognitive fitness as something approachable rather than clinical. Through structured exercises, spaced repetition patterns, and daily reinforcement prompts, it helps users maintain sharper thinking and more reliable recall. It's the reflective, introspective entry in the Fluxtent portfolio.",
    motif: "memory",
    accentClass: "from-[#dae0ff] via-[#d7f0ff] to-white",
    status: "In development",
    href: "/ecosystem#recall",
    linkLabel: "View in ecosystem",
    focusAreas: ["Spaced repetition", "Cognitive exercises", "Daily reinforcement"],
  },
  {
    slug: "medbrief-ai",
    name: "MedBrief AI",
    description:
      "A premium AI-powered medical companion delivering conversational healthcare insights, wellness guidance, and emotionally aware support through a polished interface.",
    longDescription:
      "MedBrief AI is the flagship live product of the Fluxtent ecosystem. It delivers healthcare knowledge through natural conversation, featuring saved chat history, multi-topic support, and crisis-aware response pathways. It's the most mature expression of Fluxtent's belief that health technology should feel intelligent and genuinely humane.",
    motif: "brief",
    accentClass: "from-[#d9d4ff] via-[#cadfff] to-white",
    status: "Live web application",
    href: "https://medbriefai.vercel.app/",
    linkLabel: "Launch MedBrief AI",
    external: true,
    focusAreas: ["Conversational AI", "Healthcare knowledge", "Crisis-aware guidance"],
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
