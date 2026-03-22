"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionIntro } from "@/components/SectionIntro";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import type { ContactLink } from "@/lib/types";

interface ContactProps {
  contactLinks: ContactLink[];
}

export function Contact({ contactLinks }: ContactProps) {
  const reduceMotion = useReducedMotion();
  const primaryContact = contactLinks[0];

  return (
    <section className="section-spacing relative z-10 pb-24 sm:pb-32" id="contact">
            <div className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-gradient-to-b from-transparent via-[rgba(218,225,255,0.25)] to-transparent" />

      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.22 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GlassPanel className="relative overflow-hidden p-8 sm:p-10 lg:p-14">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(198,214,255,0.3),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(205,200,255,0.2),transparent)]" />
                        <div className="shimmer-border absolute inset-x-0 top-0 h-px" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <SectionIntro
                description="Fluxtent is growing deliberately. If you want to connect about the foundation, its products, or future collaboration, the conversation starts here."
                eyebrow="Contact"
                title="A minimal close, with room for the foundation to keep expanding."
              />

              <div className="space-y-5">
                <motion.div
                  className="group rounded-[1.75rem] border border-white/75 bg-white/70 p-6 shadow-[0_18px_50px_rgba(117,131,191,0.12)] transition-all duration-300 hover:bg-white/85 hover:shadow-[0_24px_65px_rgba(117,131,191,0.18)]"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.2,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[rgba(82,96,154,0.7)]">
                    Primary contact
                  </p>
                  <p className="mt-4 font-display text-3xl leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-[2.5rem]">
                    {primaryContact.helper}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[color:var(--color-muted)]">
                    Additional social links and contact surfaces will layer in as the
                    foundation grows — designed to integrate without changing the
                    closing experience.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.35,
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
                  <span className="rounded-full border border-[rgba(142,157,211,0.24)] bg-white/58 px-4 py-3 text-sm text-[color:var(--color-muted)]">
                    More contact surfaces coming soon
                  </span>
                </motion.div>
              </div>
            </div>
          </GlassPanel>
        </motion.div>

                <motion.div
          className="mt-12 text-center"
          initial={reduceMotion ? false : { opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.3,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-sm text-[color:var(--color-muted)]">
            &copy; {new Date().getFullYear()} Fluxtent. Built with intention by
            Arnav Singh and Varun Puttagunta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
