"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/Button";
import type { ContactLink } from "@/lib/types";

interface ContactProps {
  contactLinks: ContactLink[];
}

export function Contact({ contactLinks }: ContactProps) {
  const reduceMotion = useReducedMotion();
  const primaryContact = contactLinks[0];

  return (
    <section className="section-spacing relative z-10 pb-24 sm:pb-32" id="contact">
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-8 backdrop-blur-sm sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionIntro
                description="Fluxtent is growing deliberately. If you want to connect about the foundation, its products, or future collaboration, the conversation starts here."
                eyebrow="Contact"
                title="A minimal close, with room for the foundation to keep expanding."
              />

              <div className="space-y-4">
                <motion.div
                  className="group rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/70 p-5 transition-all duration-300 hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(117,131,191,0.1)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.15,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(82,96,154,0.6)]">
                    Primary contact
                  </p>
                  <p className="mt-3 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-[color:var(--color-foreground)] sm:text-3xl">
                    {primaryContact.helper}
                  </p>
                  <p className="mt-3 text-[13px] leading-6 text-[color:var(--color-muted)]">
                    Additional social links and contact surfaces will layer in as the
                    foundation grows.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.25,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Button
                    href={primaryContact.href}
                    icon={
                      <svg className="size-4" fill="none" viewBox="0 0 16 16">
                        <path
                          d="M2.5 4.5L8 8.5L13.5 4.5"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.4"
                        />
                        <rect
                          x="2"
                          y="3"
                          width="12"
                          height="10"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.4"
                        />
                      </svg>
                    }
                  >
                    {primaryContact.label}
                  </Button>
                  <span className="rounded-full border border-[rgba(142,157,211,0.15)] bg-white/60 px-4 py-2.5 text-[13px] text-[color:var(--color-muted)]">
                    More contact surfaces coming soon
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
