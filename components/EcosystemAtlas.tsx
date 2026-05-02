"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import type { AppProject } from "@/lib/types";

interface EcosystemAtlasProps {
  projects: AppProject[];
}

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function EcosystemAtlas({ projects }: EcosystemAtlasProps) {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Product detail</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-4xl">
            What each product is actually for.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
            The product catalog is organized around user problems, not presentation effects.
            Each entry states the audience, the burden, the product response, and the current surface.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          {projects.map((project, index) => (
            <motion.article
              className="professional-card gradient-border-left scroll-mt-24 overflow-hidden p-5 pl-7 sm:p-7 sm:pl-9"
              id={project.slug}
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
              variants={cardFade}
            >
              <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`status-badge ${project.status === "Live" ? "status-badge-live" : "status-badge-dev"}`}
                    >
                      <span className="status-dot" style={{ width: "0.375rem", height: "0.375rem" }} />
                      {project.status}
                    </span>
                    <span className="focus-tag">
                      {project.format}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-semibold text-[var(--color-foreground)]">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
                    {project.audience}
                  </p>

                  <div className="mt-6">
                    <Button
                      href={project.href}
                      rel={project.external ? "noreferrer" : undefined}
                      target={project.external ? "_blank" : undefined}
                      variant={project.external ? "primary" : "secondary"}
                    >
                      {project.linkLabel}
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">Problem</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">Product response</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {project.solution}
                    </p>
                  </div>

                  <div className="border-t border-[var(--color-border)] pt-5">
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">
                      Key capabilities
                    </p>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li className="flex gap-2.5 text-sm leading-6 text-[var(--color-muted)]" key={feature}>
                          <svg className="mt-1 size-4 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
