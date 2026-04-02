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
  description: string;
  longDescription: string;
  motif: string;
  accentClass: string;
  status: string;
  href: string;
  linkLabel: string;
  external?: boolean;
  focusAreas: string[];
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
