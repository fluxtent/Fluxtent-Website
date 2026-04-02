"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
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
    f.name.split(" ").map((n) => n[0]).join("")
  );

  return (
    <section className="section-spacing relative z-10" id="founders">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <SectionIntro
              description="Fluxtent is shaped by two builders who care about product clarity, visual restraint, and digital tools that feel genuinely supportive."
              eyebrow="Founders"
              title="A foundation built with editorial care and product discipline."
            />

            <div className="mt-7 rounded-2xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-6 backdrop-blur-sm">
              <p className="font-display balance text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-[1.85rem]">
                &ldquo;The goal is not to make health tools louder. It is to make them
                clearer, calmer, and more useful.&rdquo;
              </p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.08 + index * 0.1,
                }}
                viewport={{ once: true, amount: 0.25 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="group rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/75 hover:shadow-[0_16px_50px_rgba(107,121,181,0.1)] sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                    <div className="shrink-0">
                      <div
                        className="flex size-16 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-[0_6px_20px_rgba(125,136,242,0.18)] transition-transform duration-300 group-hover:scale-105"
                        style={{ background: avatarGradients[index] }}
                      >
                        {initials[index]}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-[11px] font-semibold tracking-[0.2em] text-[rgba(84,96,148,0.55)]">
                          0{index + 1}
                        </p>
                        <div className="h-px flex-1 bg-[rgba(146,160,208,0.12)]" />
                      </div>
                      <h3 className="mt-2.5 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-[color:var(--color-foreground)]">
                        {founder.name}
                      </h3>
                      <p className="mt-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-[rgba(80,94,150,0.65)]">
                        {founder.role}
                      </p>
                      <p className="pretty mt-4 text-[14px] leading-6 text-[color:var(--color-muted)]">
                        {founder.bio}
                      </p>
                      <div className="mt-4 rounded-xl border border-[rgba(142,157,211,0.08)] bg-white/60 px-4 py-3 transition-colors duration-300 group-hover:bg-white/80">
                        <p className="text-[13px] font-semibold text-[color:var(--color-foreground)]">
                          &ldquo;{founder.emphasis}&rdquo;
                        </p>
                      </div>
                    </div>
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
