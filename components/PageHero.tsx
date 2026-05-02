"use client";

import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function PageHero({
  description,
  eyebrow,
  highlights,
  panelItems,
  panelTitle,
  title,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 40%, rgba(206,201,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(164,195,255,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="section-shell relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div>
          <motion.p
            className="eyebrow"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="balance mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-5xl"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            {title}
          </motion.h1>
          <motion.p
            className="pretty mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            {description}
          </motion.p>

          {highlights?.length ? (
            <motion.dl
              className="mt-8 grid max-w-2xl sm:grid-cols-3"
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
            >
              {highlights.map((highlight) => (
                <div
                  className="border-b border-[var(--color-border)] py-5 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pr-6"
                  key={highlight.label}
                >
                  <dt className="text-3xl font-semibold gradient-text">
                    {highlight.value}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-5 text-[var(--color-muted)]">
                    {highlight.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          ) : null}
        </div>

        <motion.aside
          className="professional-card p-5 sm:p-6"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <p className="eyebrow">{panelTitle}</p>
          <div className="mt-4 divide-y divide-[var(--color-border)]">
            {panelItems.map((item) => (
              <div className="py-4" key={item.title}>
                <h2 className="text-base font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
