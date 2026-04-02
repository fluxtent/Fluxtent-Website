import type { Metadata } from "next";

import { Founders } from "@/components/Founders";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { founders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founders",
  description: "Meet the founders behind Fluxtent: Arnav Singh and Varun Puttagunta.",
};

export default function FoundersPage() {
  return (
    <PageFrame>
      <PageHero
        description="Fluxtent is led by two builders with a shared interest in careful interfaces, credible product storytelling, and digital tools that feel genuinely useful in health-related contexts."
        eyebrow="Founders"
        panelItems={[
          {
            title: "Arnav Singh",
            description: "Brings a design-forward product instinct centered on clarity, tone, and interface quality.",
          },
          {
            title: "Varun Puttagunta",
            description: "Shapes the foundation with a systems-minded eye for cohesion, relevance, and product rigor.",
          },
          {
            title: "Shared direction",
            description: "Founder-led craftsmanship with a clear commitment to thoughtful, accessible health technology.",
          },
        ]}
        panelTitle="Builder profiles"
        title="The people shaping the Fluxtent foundation."
      />
      <Founders founders={founders} />
    </PageFrame>
  );
}

