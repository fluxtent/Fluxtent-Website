"use client";

import { motion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import type { Founder } from "@/lib/types";

interface FoundersProps {
  founders: Founder[];
}

const cardFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function Founders({ founders }: FoundersProps) {
  const initials = founders.map((founder) =>
    founder.name
      .split(" ")
      .map((name) => name[0])
      .join(""),
  );

  return (
    <section className="section-spacing" id="founders">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionIntro
              description="The founder section is written like a professional team profile: direct responsibilities, shared product judgment, and no inflated founder mythology."
              eyebrow="Founders"
              title="Two builders responsible for the portfolio."
            />
            <blockquote className="mt-7 border-l-4 pl-5 text-xl font-semibold italic leading-8 text-[var(--color-foreground)]" style={{ borderImage: "linear-gradient(180deg, #7D88F2, #A4C3FF) 1" }}>
              Health tools should be easier to understand, easier to trust, and easier to use.
            </blockquote>
          </div>

          <div className="grid gap-4">
            {founders.map((founder, index) => (
              <motion.article
                className="professional-card p-5 sm:p-6"
                key={founder.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                variants={cardFade}
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div
                    className="flex size-14 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7D88F2 0%, #A4C3FF 100%)" }}
                  >
                    {initials[index]}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[var(--color-accent-dark)]">
                      {founder.role}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--color-foreground)]">
                      {founder.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {founder.bio}
                    </p>
                    <p className="mt-4 border-t border-[var(--color-border)] pt-4 text-sm font-semibold leading-6 text-[var(--color-foreground)]">
                      {founder.emphasis}
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
