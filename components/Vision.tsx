"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import type { Principle } from "@/lib/types";

interface VisionProps {
  principles: Principle[];
}

const principleIcons = [
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
];

export function Vision({ principles }: VisionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative z-10" id="vision">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionIntro
              description="Fluxtent is guided by the belief that health-oriented products should be approachable, carefully designed, and genuinely helpful."
              eyebrow="Vision"
              title="Meaningful utility, shaped by careful design."
            />

            <div className="mt-7 rounded-2xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-6 backdrop-blur-sm sm:p-7">
              <p className="font-display balance text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[color:var(--color-foreground)]">
                Good product thinking reduces friction, respects attention, and helps
                people make better decisions without spectacle.
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.08 + index * 0.08,
                }}
                viewport={{ once: true, amount: 0.35 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="group rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/55 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/75 hover:shadow-[0_12px_40px_rgba(107,121,181,0.1)] sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,rgba(218,212,255,0.85),rgba(201,229,255,0.8))] transition-transform duration-300 group-hover:scale-105">
                      <svg
                        className="size-4 text-[rgba(44,50,96,0.8)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d={principleIcons[index]} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(82,96,154,0.55)]">
                        Principle 0{index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[color:var(--color-foreground)]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-6 text-[color:var(--color-muted)]">
                        {principle.description}
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
