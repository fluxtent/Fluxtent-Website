import type { Metadata } from "next";

import { AppsShowcase } from "@/components/AppsShowcase";
import { EcosystemAtlas } from "@/components/EcosystemAtlas";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Explore the Fluxtent ecosystem — four live Chrome extensions, one web application, and a unified vision for thoughtful health technology.",
};

export default function EcosystemPage() {
  return (
    <PageFrame>
      <PageHero
        description="From AI-powered allergen detection to medication adherence and digital wellness, each Fluxtent product addresses a specific gap in everyday health management. Most are already live and available for installation."
        eyebrow="Ecosystem"
        panelItems={[
          {
            title: "Chrome extensions",
            description: "AllerGuard, TabGuard, and MedRemind are live on the Chrome Web Store, ready for immediate use.",
          },
          {
            title: "Web application",
            description: "MedBrief AI runs as a full-stack conversational health companion at medbriefai.vercel.app.",
          },
          {
            title: "In progress",
            description: "Recall is actively under development as a cognitive wellness toolkit with spaced repetition.",
          },
        ]}
        panelTitle="Portfolio composition"
        title="Five products addressing five distinct health challenges."
      />
      <AppsShowcase
        description="Each product operates independently while sharing Fluxtent's core commitment to calm interfaces, meaningful utility, and thoughtful design. Click through to install or explore."
        eyebrow="Product catalog"
        projects={projects}
        title="Browse the full Fluxtent product family."
      />
      <EcosystemAtlas projects={projects} />
    </PageFrame>
  );
}
