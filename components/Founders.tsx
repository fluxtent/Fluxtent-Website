"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { GlassPanel } from "@/components/ui/GlassPanel";
import type { Founder } from "@/lib/types";

interface FoundersProps {
  founders: Founder[];
}

export function Founders({ founders }: FoundersProps) {
  const reduceMotion = useReducedMotion();

  const avatarGradients = [
    "linear-gradient(135deg, #CDC8FF 0%, #9DBDFF 50%, #B5AFFF 100%)",
    "linear-gradient(135deg, #9DBDFF 0%, #CDC8FF 50%, #7D88F2 100%)",
  ];
  const initials = founders.map((f) =>
    f.name
      .split(" ")
      .map((n) => n[0])
      .join("")
  );

  return (
    <section className="section-spacing relative z-10" id="founders">
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent via-[rgba(213,222,255,0.25)] to-transparent" />

      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
                    <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionIntro
              description="Fluxtent is shaped by two builders who care about product clarity, visual restraint, and digital tools that feel genuinely supportive."
              eyebrow="Founders"
              title="A foundation built with editorial care and product discipline."
            />

            <GlassPanel className="relative mt-8 overflow-hidden p-7">
              <div className="shimmer-border absolute inset-x-0 top-0 h-px" />
              <svg
                className="absolute right-3 bottom-3 size-20 text-[rgba(125,136,242,0.06)]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p className="font-display balance relative text-[1.9rem] leading-[1.05] font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-[2.1rem]">
                The goal is not to make health tools louder. It is to make them
                clearer, calmer, and more useful.
              </p>
            </GlassPanel>
          </motion.div>

                    <div className="space-y-6">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.1 + index * 0.12,
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassPanel className="group relative overflow-hidden p-7 transition-all duration-300 hover:shadow-[0_28px_80px_rgba(107,121,181,0.18)] sm:p-8">
                                    <div className="absolute inset-y-0 left-0 w-[3px] rounded-full bg-[linear-gradient(180deg,rgba(169,181,255,0),rgba(125,136,242,0.6),rgba(157,189,255,0.6),rgba(169,181,255,0))] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="absolute right-[-3rem] top-[-2rem] h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(198,214,255,0.35),transparent)] transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-7">
                                        <div className="shrink-0">
                      <div
                        className="flex size-[4.5rem] items-center justify-center rounded-2xl text-2xl font-bold text-white shadow-[0_8px_24px_rgba(125,136,242,0.2)] transition-transform duration-300 group-hover:scale-105"
                        style={{
                          background: avatarGradients[index],
                        }}
                      >
                        {initials[index]}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-xs font-semibold tracking-[0.24em] text-[rgba(84,96,148,0.65)]">
                          0{index + 1}
                        </p>
                        <div className="h-px flex-1 bg-[rgba(146,160,208,0.15)]" />
                      </div>
                      <h3 className="mt-3 font-display text-3xl leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
                        {founder.name}
                      </h3>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[rgba(80,94,150,0.72)]">
                        {founder.role}
                      </p>

                      <p className="pretty mt-5 text-base leading-7 text-[color:var(--color-muted)]">
                        {founder.bio}
                      </p>

                      <div className="mt-5 rounded-2xl border border-white/70 bg-white/60 px-5 py-3.5 transition-colors duration-300 group-hover:bg-white/80">
                        <p className="text-sm font-semibold tracking-[-0.01em] text-[color:var(--color-foreground)]">
                          &ldquo;{founder.emphasis}&rdquo;
                        </p>
                      </div>
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
