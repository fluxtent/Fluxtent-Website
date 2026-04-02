"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
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
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionIntro
            description="Fluxtent serves as both a professional digital identity and the parent foundation for a family of carefully framed health-related apps."
            eyebrow="Foundation"
            title="A calmer, more intentional way to present health-focused digital products."
          />
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="h-full rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-7 backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(72,88,152,0.6)]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#7D88F2]" />
                Why Fluxtent exists
              </div>
              <h3 className="font-display balance mt-5 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-3xl">
                The foundation brings identity, continuity, and credibility to a growing health-tech portfolio.
              </h3>
              <p className="pretty mt-5 max-w-xl text-[15px] leading-7 text-[color:var(--color-muted)]">
                Rather than presenting each app as a disconnected artifact, Fluxtent makes the broader intention visible: thoughtful tools for healthier decisions and better routines.
              </p>

              <div className="mt-7 flex items-center gap-5 rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/60 px-5 py-3.5">
                {[
                  { val: "5", sub: "Health-focused products" },
                  { val: "1", sub: "Unified brand ecosystem" },
                  { val: "∞", sub: "Commitment to care" },
                ].map((stat, i) => (
                  <div key={stat.sub} className="flex items-center gap-5">
                    {i > 0 && <div className="h-7 w-px bg-[rgba(146,160,208,0.18)]" />}
                    <div>
                      <p className="text-xl font-semibold tracking-tight text-[color:var(--color-foreground)]">{stat.val}</p>
                      <p className="text-[11px] text-[color:var(--color-muted)]">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.12 + index * 0.08,
                }}
                viewport={{ once: true, amount: 0.4 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="group rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/55 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/75 hover:shadow-[0_12px_40px_rgba(107,121,181,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(218,212,255,0.85),rgba(201,229,255,0.8))] transition-transform duration-300 group-hover:scale-105">
                      <svg
                        className="size-[18px] text-[rgba(44,50,96,0.8)]"
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
                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[color:var(--color-muted)]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
