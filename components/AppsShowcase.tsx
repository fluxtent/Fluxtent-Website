"use client";

import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/Button";
import type { AppProject } from "@/lib/types";

interface AppsShowcaseProps {
  projects: AppProject[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function AppsShowcase({
  projects,
  eyebrow = "Products",
  title = "Five products with specific jobs to do.",
  description = "Each product solves a defined health or wellness problem and has a clear format, status, and user role inside the portfolio.",
  id = "ecosystem",
}: AppsShowcaseProps) {
  return (
    <section className="section-spacing" id={id}>
      <div className="section-shell">
        <SectionIntro description={description} eyebrow={eyebrow} title={title} />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              className="professional-card professional-card-interactive flex h-full flex-col p-5 sm:p-6"
              key={project.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={index}
              variants={cardFade}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`status-badge ${project.status === "Live" ? "status-badge-live" : "status-badge-dev"}`}
                  >
                    <span className="status-dot" style={{ width: "0.375rem", height: "0.375rem" }} />
                    {project.status}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--color-foreground)]">
                    {project.name}
                  </h3>
                </div>
                <span className="focus-tag mt-1">
                  {project.format}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                {project.description}
              </p>

              <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                <p className="text-xs font-semibold text-[var(--color-foreground)]">Focus</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {project.focusAreas.map((area) => (
                    <span key={area} className="focus-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <Button
                  className="w-full"
                  href={project.href}
                  rel={project.external ? "noreferrer" : undefined}
                  target={project.external ? "_blank" : undefined}
                  variant={project.external ? "primary" : "secondary"}
                >
                  {project.linkLabel}
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
