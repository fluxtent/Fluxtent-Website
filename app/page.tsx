import { About } from "@/components/About";
import { AppsShowcase } from "@/components/AppsShowcase";
import { Hero } from "@/components/Hero";
import { PageFrame } from "@/components/PageFrame";
import { Button } from "@/components/ui/Button";
import { foundationPillars, projects } from "@/lib/data";

export default function Home() {
  return (
    <PageFrame>
      <div className="relative overflow-x-clip">
        <Hero />
        <About pillars={foundationPillars} />
        <AppsShowcase
          description="Four live products and one in development — each addressing a distinct health challenge through Chrome extensions and web applications."
          eyebrow="Ecosystem"
          id="home-ecosystem"
          projects={projects}
          title="Real products, real impact."
        />

        <section className="section-spacing relative z-10 pt-4">
          <div className="section-shell">
            <div className="rounded-[2rem] border border-[rgba(142,157,211,0.12)] bg-white/58 p-8 backdrop-blur-sm sm:p-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
                  Explore further
                </p>
                <h2 className="font-display balance mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-5xl">
                  Every layer of the foundation, one page at a time.
                </h2>
              </div>
              <div className="mt-8 lg:mt-0 lg:pl-10">
                <p className="pretty text-base leading-7 text-[color:var(--color-muted)]">
                  Discover the philosophy, people, products, and vision behind Fluxtent across
                  dedicated pages designed for clarity.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/foundation">Open Foundation</Button>
                  <Button href="/contact" variant="secondary">
                    Get in Touch
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
