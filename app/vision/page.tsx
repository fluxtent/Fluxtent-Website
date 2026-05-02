import type { Metadata } from "next";

import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { Vision } from "@/components/Vision";
import { principles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Standards",
  description: "The product and design standards guiding the Fluxtent portfolio.",
};

export default function VisionPage() {
  return (
    <PageFrame>
      <PageHero
        description="The standards page replaces vague brand philosophy with practical expectations for product clarity, user value, and trust."
        eyebrow="Standards"
        panelItems={[
          {
            title: "Specificity",
            description: "Each product must state the user burden it addresses and the surface where it is available.",
          },
          {
            title: "Readability",
            description: "Typography, spacing, and hierarchy should make product information easy to scan.",
          },
          {
            title: "Restraint",
            description: "The site should avoid decorative complexity that distracts from the work.",
          },
        ]}
        panelTitle="Design standard"
        title="Professional presentation without inflated language."
      />
      <Vision principles={principles} />
    </PageFrame>
  );
}
