"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { HeroHighlight } from "@/lib/types";

interface PageHeroPanelItem {
  title: string;
  description: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: HeroHighlight[];
  panelTitle: string;
  panelItems: PageHeroPanelItem[];
}

export function PageHero({
  description,
  eyebrow,
  highlights,
  panelItems,
  panelTitle,
  title,
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-12 pt-32 sm:pt-36">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
            {eyebrow}
          </p>
          <h1 className="font-display balance mt-6 max-w-4xl text-[clamp(3rem,6vw,5.4rem)] leading-[0.9] font-semibold tracking-[-0.05em] text-[color:var(--color-foreground)]">
            {title}
          </h1>
          <p className="pretty mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-muted)]">
            {description}
          </p>

          {highlights?.length ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.08 + index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="rounded-2xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-4 backdrop-blur-sm">
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
                      {highlight.value}
                    </p>
                    <p className="mt-2 text-[13px] leading-5 text-[color:var(--color-muted)]">
                      {highlight.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          transition={{ duration: 0.84, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="rounded-[2rem] border border-[rgba(142,157,211,0.12)] bg-white/58 p-6 backdrop-blur-sm sm:p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(72,88,152,0.6)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#7D88F2]" />
              {panelTitle}
            </div>

            <div className="mt-6 space-y-4">
              {panelItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/72 p-5"
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  transition={{
                    duration: 0.68,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.14 + index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(78,94,150,0.58)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-6 text-[color:var(--color-foreground)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

