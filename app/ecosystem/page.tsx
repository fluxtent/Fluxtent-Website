import type { Metadata } from "next";

import { AppsShowcase } from "@/components/AppsShowcase";
import { EcosystemAtlas } from "@/components/EcosystemAtlas";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Explore the Fluxtent ecosystem, including core projects and the live MedBrief AI experience.",
};

export default function EcosystemPage() {
  return (
    <PageFrame>
      <PageHero
        description="The Fluxtent ecosystem is designed as a connected family of health-focused product ideas, each with its own role, interface mood, and everyday use case. MedBrief AI now joins that portfolio as a live external experience."
        eyebrow="Ecosystem"
        panelItems={[
          {
            title: "Original apps",
            description: "AllerGuard, TabGuard, MedRemind, and Recall represent the internal Fluxtent product family.",
          },
          {
            title: "Live experience",
            description: "MedBrief AI expands the portfolio with a published conversational health-support product.",
          },
          {
            title: "Shared standard",
            description: "Every entry is framed through the same lens: calm clarity, meaningful utility, and respectful design.",
          },
        ]}
        panelTitle="Portfolio composition"
        title="A connected portfolio of health-oriented products and experiences."
      />
      <AppsShowcase projects={projects} />
      <EcosystemAtlas projects={projects} />
    </PageFrame>
  );
}

