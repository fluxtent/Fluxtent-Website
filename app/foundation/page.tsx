import type { Metadata } from "next";

import { About } from "@/components/About";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { foundationPillars, heroHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Foundation",
  description: "How Fluxtent organizes a growing portfolio of health-focused digital products.",
};

export default function FoundationPage() {
  return (
    <PageFrame>
      <PageHero
        description="Fluxtent gives a growing set of health-focused tools one public identity, one product standard, and one place to explain why the work belongs together."
        eyebrow="Foundation"
        highlights={heroHighlights}
        panelItems={[
          {
            title: "Role",
            description: "A portfolio foundation for browser and web products in health-adjacent categories.",
          },
          {
            title: "Method",
            description: "Concrete product positioning, straightforward copy, and a restrained design system.",
          },
          {
            title: "Outcome",
            description: "A site that makes the work easier to understand, evaluate, and expand.",
          },
        ]}
        panelTitle="Operating model"
        title="The structure behind the Fluxtent portfolio."
      />
      <About pillars={foundationPillars} />

      <section className="section-spacing bg-white">
        <div className="section-shell">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Product context",
                description:
                  "Every product page and card should answer what it is, who it helps, where it is available, and why it matters.",
              },
              {
                title: "Portfolio credibility",
                description:
                  "The site should make live products feel trustworthy without pretending the foundation is larger than it is.",
              },
              {
                title: "Expansion path",
                description:
                  "The architecture leaves room for product pages, screenshots, reviews, updates, and a Recall waitlist later.",
              },
            ].map((item) => (
              <article className="professional-card p-5 sm:p-6" key={item.title}>
                <h2 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
