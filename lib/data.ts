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
    description: "How Fluxtent organizes the product portfolio and shared standards.",
  },
  {
    label: "Products",
    href: "/ecosystem",
    description: "The live Chrome extensions, web app, and product in development.",
  },
  {
    label: "Founders",
    href: "/founders",
    description: "The people responsible for the Fluxtent portfolio.",
  },
  {
    label: "Standards",
    href: "/vision",
    description: "The product and design principles behind Fluxtent.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Reach the Fluxtent team.",
  },
];

export const heroHighlights: HeroHighlight[] = [
  { value: "4", label: "live products" },
  { value: "3", label: "Chrome extensions" },
  { value: "5", label: "health and wellness areas" },
];

export const foundationPillars: ContentBlock[] = [
  {
    title: "One portfolio, not scattered projects",
    description:
      "Fluxtent gives each product a clear place in a shared health technology ecosystem instead of making every app explain itself from zero.",
  },
  {
    title: "Practical product standards",
    description:
      "The foundation prioritizes legible interfaces, direct user value, accessible language, and product pages that make adoption decisions easier.",
  },
  {
    title: "Room to expand cleanly",
    description:
      "New tools, updates, collaborators, and deeper product pages can be added without rebuilding the brand story each time.",
  },
];

export const founders: Founder[] = [
  {
    name: "Arnav Singh",
    role: "Co-founder, product and interface",
    bio: "Arnav focuses on turning health-related product ideas into usable digital experiences with clear structure, readable screens, and credible presentation.",
    emphasis: "Make the product understandable before making it impressive.",
  },
  {
    name: "Varun Puttagunta",
    role: "Co-founder, systems and portfolio",
    bio: "Varun helps keep the portfolio coherent across products, use cases, and roadmap decisions so Fluxtent reads as a connected body of work.",
    emphasis: "Build the system around real use cases, not around decoration.",
  },
];

export const projects: AppProject[] = [
  {
    slug: "allerguard",
    name: "AllerGuard",
    status: "Live",
    format: "Chrome extension",
    audience: "People managing food allergies and sensitivities while shopping or researching products online.",
    description:
      "Personalized allergen detection for food product pages, built to surface ingredient risks before a purchase decision.",
    problem:
      "Ingredient labels can be long, inconsistent, and hard to evaluate quickly. Hidden allergen names make online grocery decisions especially risky for people with sensitivities.",
    solution:
      "AllerGuard checks product ingredients against a user's allergen profile and flags possible risks directly in the browsing workflow.",
    href: "https://chromewebstore.google.com/detail/allerguard-ai-personalize/bgeahmilohhjaamopmecmbdmbcjcgbff",
    linkLabel: "Install AllerGuard",
    external: true,
    focusAreas: ["Allergen safety", "Ingredient scanning", "Personalization"],
    features: [
      "Real-time ingredient analysis",
      "Personal allergen profiles",
      "Hidden allergen detection",
      "Browser-native alerts",
    ],
  },
  {
    slug: "tabguard",
    name: "TabGuard",
    status: "Live",
    format: "Chrome extension",
    audience: "Students, builders, and knowledge workers who want healthier browsing patterns without hard blocking.",
    description:
      "A digital wellness extension for reducing tab overload and making browser behavior easier to manage.",
    problem:
      "Too many open tabs create constant context switching, visual clutter, and unresolved mental loops throughout the workday.",
    solution:
      "TabGuard acts as an awareness layer for tab behavior and helps users set boundaries without punitive blocking.",
    href: "https://chromewebstore.google.com/detail/tabguard/gmdllffjnafefhnppajkeldbgfndjlln",
    linkLabel: "Install TabGuard",
    external: true,
    focusAreas: ["Digital wellness", "Focus", "Browsing habits"],
    features: [
      "Tab count and age awareness",
      "Configurable browsing boundaries",
      "Focus-preserving prompts",
      "Supportive, non-punitive tone",
    ],
  },
  {
    slug: "medremind",
    name: "MedRemind",
    status: "Live",
    format: "Chrome extension",
    audience: "People who want medication reminders inside the browser instead of another standalone app.",
    description:
      "Medication reminders and adherence streaks that live where many users already spend their day: the browser.",
    problem:
      "Medication adherence often breaks down because reminders are separated from the user's actual daily digital environment.",
    solution:
      "MedRemind brings schedule reminders, streak tracking, and simple medication routines into a lightweight browser extension.",
    href: "https://chromewebstore.google.com/detail/medremind/oajgmcmajdcojokefaegpdnnffadhblb",
    linkLabel: "Install MedRemind",
    external: true,
    focusAreas: ["Medication adherence", "Reminders", "Routine support"],
    features: [
      "Browser-native notifications",
      "Custom medication schedules",
      "Adherence streak tracking",
      "Local-first reminder workflow",
    ],
  },
  {
    slug: "medbrief-ai",
    name: "MedBrief AI",
    status: "Live",
    format: "Web application",
    audience: "Users looking for a conversational way to understand health and wellness questions.",
    description:
      "A conversational healthcare companion for asking health questions, revisiting prior chats, and receiving context-aware guidance.",
    problem:
      "Online health information is abundant but difficult to interpret, often mixing useful guidance with low-quality or alarming content.",
    solution:
      "MedBrief AI provides a chat-based interface for health information with saved history, multi-topic support, and crisis-aware response pathways.",
    href: "https://medbriefai.vercel.app/",
    linkLabel: "Launch MedBrief AI",
    external: true,
    focusAreas: ["Conversational AI", "Health guidance", "Crisis-aware support"],
    features: [
      "Natural language health conversations",
      "Saved chat history",
      "Multi-topic support",
      "Crisis-aware response pathways",
    ],
  },
  {
    slug: "recall",
    name: "Recall",
    status: "In development",
    format: "Cognitive wellness product",
    audience: "People interested in daily memory reinforcement and cognitive routine support.",
    description:
      "A cognitive wellness toolkit using structured exercises and spaced repetition to support memory and recall habits.",
    problem:
      "Cognitive wellness tools often feel either overly clinical or overly gamified, leaving little room for a focused daily practice.",
    solution:
      "Recall is being designed as a calmer memory-support product grounded in spaced repetition and structured reinforcement.",
    href: "/ecosystem#recall",
    linkLabel: "View Recall status",
    focusAreas: ["Cognitive wellness", "Spaced repetition", "Daily practice"],
    features: [
      "Structured memory exercises",
      "Spaced repetition patterns",
      "Daily reinforcement prompts",
      "Development roadmap in progress",
    ],
  },
];

export const principles: Principle[] = [
  {
    title: "Start with a real user burden",
    description:
      "Every Fluxtent product should map to a specific source of friction: ingredient risk, tab overload, medication routines, confusing health information, or memory practice.",
  },
  {
    title: "Make the interface readable under pressure",
    description:
      "Health-adjacent decisions often happen when people are tired, distracted, or worried. Screens should be direct, calm, and easy to scan.",
  },
  {
    title: "Earn trust through restraint",
    description:
      "The site and products should avoid inflated claims, decorative complexity, and generic startup language. Credibility comes from specificity.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email Fluxtent",
    href: "mailto:fluxtent@gmail.com",
    helper: "fluxtent@gmail.com",
  },
];
