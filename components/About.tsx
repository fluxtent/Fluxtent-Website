"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import type { ContentBlock } from "@/lib/types";

interface AboutProps {
  pillars: ContentBlock[];
}

export function About({ pillars }: AboutProps) {
  const reduceMotion = useReducedMotion();

  const iconPaths = [
    "M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 17h2v1h-2v-1zm0 2h2v1h-2v-1z",
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
  ];

  return (
    <section className="section-spacing relative z-10" id="about">
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent via-[rgba(226,231,255,0.3)] to-transparent" />

      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionIntro
            description="Fluxtent serves as both a professional digital identity and the parent foundation for a family of carefully framed health-related apps. The role of the brand is not just to collect projects, but to give them a coherent philosophy, tone, and sense of purpose."
            eyebrow="Foundation"
            title="A calmer, more intentional way to present health-focused digital products."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: reduceMotion ? 0 : 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <GlassPanel className="relative h-full overflow-hidden p-7 sm:p-8">
                            <div className="absolute right-4 top-4 opacity-[0.07]">
                <svg
                  width="160"
                  height="160"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={iconPaths[0]} />
                </svg>
              </div>

              <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.7)]">
                Why Fluxtent exists
              </p>
              <h3 className="font-display balance mt-5 text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-4xl">
                The foundation brings identity, continuity, and credibility to a
                growing health-tech portfolio.
              </h3>
              <p className="pretty mt-6 max-w-2xl text-base leading-7 text-[color:var(--color-muted)]">
                Rather than presenting each app as a disconnected artifact,
                Fluxtent makes the broader intention visible: thoughtful tools for
                healthier decisions, better routines, and more accessible everyday
                support.
              </p>

                            <div className="mt-8 flex items-center gap-6 rounded-2xl border border-white/60 bg-white/50 px-5 py-4">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                    4
                  </p>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    Health-focused products
                  </p>
                </div>
                <div className="h-8 w-px bg-[rgba(146,160,208,0.22)]" />
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                    1
                  </p>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    Unified brand ecosystem
                  </p>
                </div>
                <div className="h-8 w-px bg-[rgba(146,160,208,0.22)]" />
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-[color:var(--color-foreground)]">
                    ∞
                  </p>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    Commitment to care
                  </p>
                </div>
              </div>
            </GlassPanel>
          </motion.div>

                    <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={reduceMotion ? false : { opacity: 0, x: 32 }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.15 + index * 0.1,
                }}
                viewport={{ once: true, amount: 0.4 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <GlassPanel className="group p-6 transition-all duration-300 hover:shadow-[0_24px_70px_rgba(107,121,181,0.16)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(218,212,255,0.92),rgba(201,229,255,0.85))] shadow-[0_4px_16px_rgba(125,136,242,0.12)] transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="size-5 text-[rgba(44,50,96,0.85)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={iconPaths[index] || iconPaths[0]} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
