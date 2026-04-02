"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import type { AppProject } from "@/lib/types";

interface EcosystemAtlasProps {
  projects: AppProject[];
}

export function EcosystemAtlas({ projects }: EcosystemAtlasProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative z-10 pt-4">
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
            Project atlas
          </p>
          <h2 className="font-display balance mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-5xl">
            Each product carries a distinct role inside the Fluxtent portfolio.
          </h2>
        </motion.div>

        <div className="mt-10 space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="grid gap-5 rounded-[2rem] border border-[rgba(142,157,211,0.12)] bg-white/58 p-6 backdrop-blur-sm lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:p-7"
              id={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.78,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : 0.06 + index * 0.06,
              }}
              viewport={{ once: true, amount: 0.15 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(82,96,154,0.56)]">
                  {project.status}
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)]">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.focusAreas.map((focus) => (
                    <div
                      key={focus}
                      className="rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/72 px-4 py-4 text-sm text-[color:var(--color-foreground)]"
                    >
                      {focus}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button
                    href={project.href}
                    rel={project.external ? "noreferrer" : undefined}
                    target={project.external ? "_blank" : undefined}
                  >
                    {project.linkLabel}
                  </Button>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    {project.external
                      ? "Live external experience"
                      : "Anchored inside the Fluxtent ecosystem page"}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
