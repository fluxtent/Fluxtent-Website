export interface NavItem {
  label: string;
  href: string;
  description: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  emphasis: string;
}

export interface AppProject {
  slug: string;
  name: string;
  status: string;
  format: string;
  audience: string;
  description: string;
  problem: string;
  solution: string;
  href: string;
  linkLabel: string;
  external?: boolean;
  focusAreas: string[];
  features: string[];
}

export interface HeroHighlight {
  label: string;
  value: string;
}

export interface ContentBlock {
  title: string;
  description: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
  helper: string;
}
