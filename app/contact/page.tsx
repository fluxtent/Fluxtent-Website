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
        description="Fluxtent is still growing deliberately, but the line of contact is already open. Reach out about the foundation, the portfolio, or future opportunities to build and collaborate."
        eyebrow="Contact"
        panelItems={[
          {
            title: "Primary channel",
            description: "Email remains the cleanest way to start a conversation with the Fluxtent foundation.",
          },
          {
            title: "Current scope",
            description: "Portfolio conversations, product discussions, collaboration, and future ecosystem ideas.",
          },
          {
            title: "What comes next",
            description: "Additional socials and contact surfaces can be layered in later without changing the site structure.",
          },
        ]}
        panelTitle="Reach out"
        title="A minimal contact surface, designed to stay elegant."
      />
      <Contact contactLinks={contactLinks} />
    </PageFrame>
  );
}
