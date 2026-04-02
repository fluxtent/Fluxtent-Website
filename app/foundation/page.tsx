import type { Metadata } from "next";

import { About } from "@/components/About";
import { PageFrame } from "@/components/PageFrame";
import { PageHero } from "@/components/PageHero";
import { foundationPillars, heroHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Foundation",
  description: "Explore the Fluxtent foundation, its purpose, and the structure beneath the portfolio.",
};

export default function FoundationPage() {
  return (
    <PageFrame>
      <PageHero
        description="Fluxtent is more than a landing page or product list. It is the structure that gives a growing portfolio of health-focused tools shared language, shared standards, and a more coherent public identity."
        eyebrow="Foundation"
        highlights={heroHighlights}
        panelItems={[
          {
            title: "Role",
            description: "A portfolio foundation beneath a family of health-related digital products.",
          },
          {
            title: "Method",
            description: "Design-first framing with an emphasis on clarity, accessibility, and product maturity.",
          },
          {
            title: "Outcome",
            description: "A more credible and unified way to present ideas, apps, and future health-tech work.",
          },
        ]}
        panelTitle="What Fluxtent does"
        title="The structure beneath the portfolio."
      />
      <About pillars={foundationPillars} />

      <section className="section-spacing relative z-10 pt-2">
        <div className="section-shell grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Intentional framing",
              description:
                "Products are introduced as part of a wider system of thought rather than isolated concept pages.",
            },
            {
              title: "Editorial restraint",
              description:
                "The visual language stays light, spacious, and mature so the work feels credible instead of over-explained.",
            },
            {
              title: "Future-ready expansion",
              description:
                "The foundation is designed to absorb new projects, narratives, and collaborators without losing cohesion.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-6 backdrop-blur-sm"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(82,96,154,0.56)]">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-[color:var(--color-foreground)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}

