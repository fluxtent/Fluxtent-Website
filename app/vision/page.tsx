import type { Metadata } from "next";

import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { Vision } from "@/components/Vision";
import { principles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vision",
  description: "Read the design philosophy and product vision guiding the Fluxtent foundation.",
};

export default function VisionPage() {
  return (
    <PageFrame>
      <PageHero
        description="Fluxtent is guided by a simple belief: health technology should not feel cluttered, performative, or emotionally tone-deaf. It should feel composed, clear, and genuinely helpful."
        eyebrow="Vision"
        panelItems={[
          {
            title: "Calm over noise",
            description: "Interfaces should reduce friction and support decision-making rather than compete for attention.",
          },
          {
            title: "Utility over novelty",
            description: "The goal is meaningful usefulness, not decorative cleverness or generic startup language.",
          },
          {
            title: "Craft over volume",
            description: "Every spacing choice, motion choice, and sentence should reinforce trust and care.",
          },
        ]}
        panelTitle="Philosophy"
        title="A design philosophy grounded in meaningful utility."
      />
      <Vision principles={principles} />
    </PageFrame>
  );
}

