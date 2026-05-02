"use client";

import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import type { Principle } from "@/lib/types";

interface VisionProps {
  principles: Principle[];
}

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function Vision({ principles }: VisionProps) {
  return (
    <section className="section-spacing" id="vision">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionIntro
              description="The standard is simple: be specific, be useful, and do not let presentation get in the way of credibility."
              eyebrow="Standards"
              title="Product principles for a serious health portfolio."
            />
            <p
              className="mt-7 border-l-4 pl-5 text-lg font-semibold italic leading-8 text-[var(--color-foreground)]"
              style={{ borderImage: "linear-gradient(180deg, #7D88F2, #A4C3FF) 1" }}
            >
              Fluxtent should communicate care through clarity: what the product does, who it helps,
              where it is available, and why it belongs in the portfolio.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((principle, index) => (
              <motion.article
                className="professional-card p-5 sm:p-6"
                key={principle.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                variants={cardFade}
              >
                <p className="text-sm font-semibold text-[var(--color-accent-dark)]">
                  Standard {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--color-foreground)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {principle.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
