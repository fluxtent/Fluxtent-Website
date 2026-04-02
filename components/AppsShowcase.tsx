"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/Button";
import type { AppProject } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AppsShowcaseProps {
  projects: AppProject[];
  eyebrow?: string;
  title?: string;
  description?: string;
  id?: string;
}

function ProjectMotif({ motif }: { motif: string }) {
  const size = "size-14";

  switch (motif) {
    case "shield":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="shield-g" x1="14" x2="50" y1="10" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D9D1FF" />
              <stop offset="1" stopColor="#CDE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M32 8L50 15V30C50 41 43 50 32 54C21 50 14 41 14 30V15L32 8Z"
            fill="url(#shield-g)"
            stroke="rgba(57,67,120,0.15)"
            strokeWidth="1.5"
          />
          <path d="M24 32L29 37L40 26" stroke="#34406B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "focus":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="focus-g" x1="12" x2="52" y1="12" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4ECFF" />
              <stop offset="1" stopColor="#D8D3FF" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" fill="url(#focus-g)" r="20" />
          <circle cx="32" cy="32" r="12" stroke="#35406C" strokeWidth="1.8" />
          <circle cx="32" cy="32" r="4" fill="#35406C" opacity="0.3" />
          <path d="M32 6V16M32 48V58M58 32H48M16 32H6" stroke="#35406C" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
    case "pulse":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="pulse-g" x1="8" x2="56" y1="14" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEE5FF" />
              <stop offset="1" stopColor="#D3E8FF" />
            </linearGradient>
          </defs>
          <rect
            fill="url(#pulse-g)"
            height="36"
            rx="18"
            stroke="rgba(57,67,120,0.15)"
            strokeWidth="1.5"
            width="48"
            x="8"
            y="14"
          />
          <path d="M14 32H22L26 22L32 42L38 28L41 32H50" stroke="#35406C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      );
    case "brief":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="brief-g" x1="10" x2="54" y1="10" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D7D3FF" />
              <stop offset="1" stopColor="#CAE2FF" />
            </linearGradient>
          </defs>
          <rect
            x="12"
            y="10"
            width="40"
            height="44"
            rx="12"
            fill="url(#brief-g)"
            stroke="rgba(57,67,120,0.15)"
            strokeWidth="1.5"
          />
          <path d="M23 24H41M23 32H41M23 40H34" stroke="#35406C" strokeLinecap="round" strokeWidth="2" />
          <circle cx="43" cy="42" r="6" fill="white" fillOpacity="0.72" stroke="#35406C" strokeWidth="1.5" />
          <path d="M43 39.5V44.5M40.5 42H45.5" stroke="#35406C" strokeLinecap="round" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="memory-g" x1="12" x2="52" y1="12" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DCE0FF" />
              <stop offset="1" stopColor="#D5F2FF" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" fill="url(#memory-g)" r="10" />
          <circle cx="46" cy="18" fill="url(#memory-g)" r="7" />
          <circle cx="34" cy="44" fill="url(#memory-g)" r="12" />
          <path d="M25 26L30 38M41 23L36 35" stroke="#35406C" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      );
  }
}

export function AppsShowcase({
  projects,
  eyebrow = "Ecosystem",
  title = "Five products, one shared standard of care and clarity.",
  description = "Each product under Fluxtent is framed as part of a coordinated health-tech ecosystem: distinct in purpose, consistent in design intent.",
  id = "ecosystem",
}: AppsShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative z-10" id={id}>
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionIntro description={description} eyebrow={eyebrow} title={title} />
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : 0.08 + index * 0.08,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-6 backdrop-blur-sm transition-all duration-400 hover:bg-white/75 hover:shadow-[0_20px_60px_rgba(107,121,181,0.12)] sm:p-7">
                <div
                  className={cn(
                    "absolute inset-x-6 top-4 h-32 rounded-full bg-gradient-to-br opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-75",
                    project.accentClass
                  )}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-[rgba(142,157,211,0.12)] bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[rgba(70,84,140,0.65)]">
                        {project.status}
                      </span>
                      <h3 className="mt-4 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-[1.85rem]">
                        {project.name}
                      </h3>
                    </div>
                    <div className="rounded-xl border border-[rgba(142,157,211,0.1)] bg-white/70 p-2.5 transition-transform duration-300 group-hover:scale-105">
                      <ProjectMotif motif={project.motif} />
                    </div>
                  </div>

                  <p className="pretty mt-5 flex-1 text-[14px] leading-6 text-[color:var(--color-muted)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <Button
                      className="px-4 py-2 text-[12px]"
                      href={project.href}
                      rel={project.external ? "noreferrer" : undefined}
                      target={project.external ? "_blank" : undefined}
                      variant="secondary"
                    >
                      {project.linkLabel}
                    </Button>
                    <div className="flex items-center gap-2.5 text-[12px] font-medium text-[rgba(54,65,109,0.65)]">
                      <span className="h-px w-8 bg-gradient-to-r from-[rgba(151,165,224,0.5)] to-transparent" />
                      <span className="flex items-center gap-1.5">
                        <span className="inline-block size-1 rounded-full bg-[#7D88F2]" />
                        Fluxtent ecosystem
                      </span>
                    </div>
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
