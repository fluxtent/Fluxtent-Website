import { About } from "@/components/About";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Hero } from "@/components/Hero";
import { PageFrame } from "@/components/PageFrame";
import { RouteShowcase } from "@/components/RouteShowcase";
import { Button } from "@/components/ui/Button";
import { foundationPillars, heroHighlights, navItems, projects } from "@/lib/data";

export default function Home() {
  return (
    <PageFrame showScrollIntro>
      <div className="relative overflow-x-clip">
        <Hero heroHighlights={heroHighlights} />
        <RouteShowcase items={navItems} />
        <About pillars={foundationPillars} />
        <AppsShowcase
          description="Fluxtent brings together original health-related apps and linked experiences under a single portfolio identity, including the live MedBrief AI product."
          eyebrow="Featured ecosystem"
          id="home-ecosystem"
          projects={projects}
          title="A portfolio built as a connected brand system."
        />

        <section className="section-spacing relative z-10 pt-4">
          <div className="section-shell">
            <div className="rounded-[2rem] border border-[rgba(142,157,211,0.12)] bg-white/58 p-8 backdrop-blur-sm sm:p-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
                  Closing note
                </p>
                <h2 className="font-display balance mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-5xl">
                  A more complete foundation, now with room for every part of the story.
                </h2>
              </div>
              <div className="mt-8 lg:mt-0 lg:pl-10">
                <p className="pretty text-base leading-7 text-[color:var(--color-muted)]">
                  Explore the full multi-page site to see the foundation, founders, ecosystem,
                  vision, and contact experience as distinct parts of the Fluxtent brand.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/foundation">Open Foundation</Button>
                  <Button href="/contact" variant="secondary">
                    Contact Fluxtent
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
