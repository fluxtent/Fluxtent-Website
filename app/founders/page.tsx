import type { Metadata } from "next";

import { Founders } from "@/components/Founders";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { founders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Founders",
  description: "Meet Arnav Singh and Varun Puttagunta, the founders behind Fluxtent.",
};

export default function FoundersPage() {
  return (
    <PageFrame>
      <PageHero
        description="Fluxtent is founder-led, so the site needs to communicate who is responsible for the product judgment behind the portfolio without slipping into overproduced biography copy."
        eyebrow="Founders"
        panelItems={[
          {
            title: "Arnav Singh",
            description: "Product and interface focus across the Fluxtent website and product surfaces.",
          },
          {
            title: "Varun Puttagunta",
            description: "Systems and portfolio focus across product positioning, coherence, and roadmap thinking.",
          },
          {
            title: "Shared responsibility",
            description: "Keep the work concrete, useful, and presented with professional discipline.",
          },
        ]}
        panelTitle="Team profile"
        title="The people accountable for the work."
      />
      <Founders founders={founders} />
    </PageFrame>
  );
}
