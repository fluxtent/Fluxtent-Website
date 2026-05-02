import { About } from "@/components/About";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Hero } from "@/components/Hero";
import { PageFrame } from "@/components/PageFrame";
import { Button } from "@/components/ui/Button";
import { foundationPillars, projects } from "@/lib/data";

export default function Home() {
  return (
    <PageFrame>
      <Hero />
      <About pillars={foundationPillars} />
      <AppsShowcase
        description="Four products are live now, and one is in development. The portfolio spans allergen safety, tab overload, medication adherence, conversational health guidance, and memory reinforcement."
        eyebrow="Product portfolio"
        id="home-ecosystem"
        projects={projects}
        title="A clear product family, not a generic showcase."
      />

      <section className="section-spacing">
        <div className="section-shell">
          <div className="professional-card relative overflow-hidden grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Subtle gradient accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "linear-gradient(90deg, #CEC9FF, #A4C3FF, #7D88F2)" }}
            />
            <div>
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)]">
                See the complete product breakdown.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                The ecosystem page goes deeper into the problem, audience, and core capability
                behind each Fluxtent product.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/ecosystem">Open products</Button>
              <Button href="/contact" variant="secondary">
                Contact Fluxtent
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
