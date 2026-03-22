"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import type { AppProject } from "@/lib/types";
import { cn } from "@/lib/utils";

interface AppsShowcaseProps {
  projects: AppProject[];
}


function ProjectMotif({ motif }: { motif: string }) {
  const size = "size-16";

  switch (motif) {
    case "shield":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="shield-g" x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D9D1FF" />
              <stop offset="1" stopColor="#CDE8FF" />
            </linearGradient>
          </defs>
          <path
            d="M32 8L50 15V30C50 41 43 50 32 54C21 50 14 41 14 30V15L32 8Z"
            fill="url(#shield-g)"
            stroke="rgba(57,67,120,0.2)"
            strokeWidth="1.5"
          />
          <path
            d="M24 32L29 37L40 26"
            stroke="#34406B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle cx="32" cy="32" r="18" stroke="rgba(57,67,120,0.08)" strokeWidth="1" strokeDasharray="3 4" />
        </svg>
      );
    case "focus":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="focus-g" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#D4ECFF" />
              <stop offset="1" stopColor="#D8D3FF" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" fill="url(#focus-g)" r="20" />
          <circle cx="32" cy="32" r="12" stroke="#35406C" strokeWidth="1.8" />
          <circle cx="32" cy="32" r="4" fill="#35406C" opacity="0.3" />
          <path d="M32 6V16M32 48V58M58 32H48M16 32H6" stroke="#35406C" strokeLinecap="round" strokeWidth="1.8" />
          <path d="M32 10V14M32 50V54M54 32H50M14 32H10" stroke="#35406C" strokeLinecap="round" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    case "pulse":
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="pulse-g" x1="8" y1="14" x2="56" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#EEE5FF" />
              <stop offset="1" stopColor="#D3E8FF" />
            </linearGradient>
          </defs>
          <rect fill="url(#pulse-g)" height="36" rx="18" width="48" x="8" y="14" stroke="rgba(57,67,120,0.2)" strokeWidth="1.5" />
          <path
            d="M14 32H22L26 22L32 42L38 28L41 32H50"
            stroke="#35406C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle cx="50" cy="32" r="2.5" fill="#35406C" opacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg aria-hidden="true" className={size} fill="none" viewBox="0 0 64 64">
          <defs>
            <linearGradient id="memory-g" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DCE0FF" />
              <stop offset="1" stopColor="#D5F2FF" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" fill="url(#memory-g)" r="10" />
          <circle cx="46" cy="18" fill="url(#memory-g)" r="7" />
          <circle cx="34" cy="44" fill="url(#memory-g)" r="12" />
          <path
            d="M25 26L30 38M41 23L36 35"
            stroke="#35406C"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <circle cx="20" cy="20" r="3" stroke="#35406C" strokeWidth="1" opacity="0.4" />
          <circle cx="46" cy="18" r="2" stroke="#35406C" strokeWidth="1" opacity="0.4" />
          <circle cx="34" cy="44" r="4" stroke="#35406C" strokeWidth="1" opacity="0.4" />
        </svg>
      );
  }
}

export function AppsShowcase({ projects }: AppsShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative z-10" id="ecosystem">
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent via-[rgba(218,225,255,0.28)] to-transparent" />

      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionIntro
            description="Each app under Fluxtent is framed as part of a coordinated health-tech ecosystem: distinct in purpose, consistent in design intent, and grounded in everyday usefulness."
            eyebrow="Ecosystem"
            title="Four products, one shared standard of care and clarity."
          />
        </motion.div>

        <div className="relative mt-14">
                    <motion.svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[4%] top-6 hidden h-[26rem] w-[92%] md:block"
            fill="none"
            initial={reduceMotion ? false : { opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: reduceMotion ? 0 : 0.2,
            }}
            viewBox="0 0 1120 400"
            viewport={{ once: true, amount: 0.15 }}
            whileInView={{ opacity: 1 }}
          >
            <defs>
              <linearGradient id="app-arc-g" x1="50" y1="40" x2="1070" y2="360" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CDC8FF" stopOpacity="0.85" />
                <stop offset="0.5" stopColor="#9DBDFF" stopOpacity="0.6" />
                <stop offset="1" stopColor="#d6ecff" stopOpacity="0.12" />
              </linearGradient>
            </defs>
                        <motion.path
              d="M60 280C180 140 320 150 470 240C640 350 780 355 1060 120"
              initial={{
                pathLength: reduceMotion ? 1 : 0.1,
                opacity: reduceMotion ? 0.5 : 0.05,
              }}
              stroke="url(#app-arc-g)"
              strokeLinecap="round"
              strokeWidth="2"
              transition={{
                duration: reduceMotion ? 0.2 : 2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ pathLength: 1, opacity: 0.65 }}
            />
                        <motion.path
              d="M100 80C230 10 400 25 570 140C700 225 830 220 1000 55"
              initial={{
                pathLength: reduceMotion ? 1 : 0.15,
                opacity: reduceMotion ? 0.3 : 0.03,
              }}
              stroke="url(#app-arc-g)"
              strokeLinecap="round"
              strokeWidth="1.2"
              transition={{
                duration: reduceMotion ? 0.2 : 2.2,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
            />
          </motion.svg>

                    <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.88,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.1 + index * 0.1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassPanel className="group relative h-full overflow-hidden p-7 transition-all duration-400 hover:shadow-[0_36px_100px_rgba(107,121,181,0.2)] sm:p-8">
                                    <div
                    className={cn(
                      "absolute inset-x-4 top-3 h-40 rounded-full bg-gradient-to-br opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      project.accentClass
                    )}
                  />
                                    <div className="shimmer-border absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex rounded-full border border-white/80 bg-white/76 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgba(70,84,140,0.72)] shadow-[0_2px_8px_rgba(125,136,242,0.06)]">
                          {project.status}
                        </span>
                        <h3 className="mt-5 font-display text-3xl leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-[2.2rem]">
                          {project.name}
                        </h3>
                      </div>
                      <div className="rounded-2xl border border-white/80 bg-white/74 p-3 shadow-[0_10px_28px_rgba(120,133,191,0.12)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_16px_42px_rgba(120,133,191,0.18)]">
                        <ProjectMotif motif={project.motif} />
                      </div>
                    </div>

                    <p className="pretty mt-6 flex-1 text-base leading-7 text-[color:var(--color-muted)]">
                      {project.description}
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[rgba(54,65,109,0.78)]">
                      <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(151,165,224,0.7),rgba(151,165,224,0))]" />
                      <span className="flex items-center gap-2">
                        <span className="inline-block size-1.5 rounded-full bg-[rgba(125,136,242,0.6)]" />
                        Part of the Fluxtent ecosystem
                      </span>
                    </div>
                  </div>
                </GlassPanel>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
