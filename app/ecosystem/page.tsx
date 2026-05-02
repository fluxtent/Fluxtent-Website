import type { Metadata } from "next";

import { AppsShowcase } from "@/components/AppsShowcase";
import { EcosystemAtlas } from "@/components/EcosystemAtlas";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Fluxtent products across allergen safety, digital wellness, medication adherence, AI health guidance, and cognitive wellness.",
};

export default function EcosystemPage() {
  return (
    <PageFrame>
      <PageHero
        description="The Fluxtent portfolio includes three live Chrome extensions, one live web application, and one cognitive wellness product in development."
        eyebrow="Products"
        panelItems={[
          {
            title: "Chrome extensions",
            description: "AllerGuard, TabGuard, and MedRemind are live on the Chrome Web Store.",
          },
          {
            title: "Web application",
            description: "MedBrief AI is available as a live conversational health guidance app.",
          },
          {
            title: "In development",
            description: "Recall is being built as a cognitive wellness and memory reinforcement product.",
          },
        ]}
        panelTitle="Portfolio composition"
        title="Five products, five distinct user problems."
      />
      <AppsShowcase
        description="Browse the current product family by status, format, and focus area. Live products link directly to their public surfaces."
        eyebrow="Catalog"
        projects={projects}
        title="The full Fluxtent product portfolio."
      />
      <EcosystemAtlas projects={projects} />
    </PageFrame>
  );
}
