"use client";

import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import type { ContentBlock } from "@/lib/types";

interface AboutProps {
  pillars: ContentBlock[];
}

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function About({ pillars }: AboutProps) {
  return (
    <section className="section-spacing" id="about">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            description="The site should make Fluxtent feel like a serious product foundation: clear enough for users, credible enough for collaborators, and structured enough to grow."
            eyebrow="Foundation"
            title="A professional home for a connected product portfolio."
          />

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <motion.article
                className="professional-card p-5 sm:p-6"
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                variants={cardFade}
              >
                <div className="flex gap-4">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7D88F2 0%, #A4C3FF 100%)" }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
