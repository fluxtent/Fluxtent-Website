import type { Metadata } from "next";

import { Contact } from "@/components/Contact";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { contactLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Fluxtent at fluxtent@gmail.com.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <PageHero
        description="The contact surface stays simple: direct email for portfolio conversations, product questions, collaboration, and future opportunities."
        eyebrow="Contact"
        panelItems={[
          {
            title: "Primary channel",
            description: "Email is the current source of truth for reaching Fluxtent.",
          },
          {
            title: "Best fit",
            description: "Product questions, collaboration, portfolio review, and future ecosystem ideas.",
          },
          {
            title: "Current address",
            description: contactLinks[0].helper,
          },
        ]}
        panelTitle="Reach out"
        title="A direct contact path for Fluxtent."
      />
      <Contact contactLinks={contactLinks} />
    </PageFrame>
  );
}
