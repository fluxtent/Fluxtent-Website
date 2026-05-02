"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import type { ContactLink } from "@/lib/types";

interface ContactProps {
  contactLinks: ContactLink[];
}

export function Contact({ contactLinks }: ContactProps) {
  const primaryContact = contactLinks[0];

  return (
    <section className="section-spacing" id="contact">
      <div className="section-shell">
        <motion.div
          className="professional-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--color-foreground)] sm:text-4xl">
              Start with a direct email.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              Reach out about the Fluxtent portfolio, product questions, collaboration, or future
              opportunities around the health technology ecosystem.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-sm font-semibold text-[var(--color-foreground)]">Primary channel</p>
            <a
              className="mt-2 block break-words text-2xl font-semibold text-[var(--color-accent-dark)] transition-colors duration-200 hover:text-[var(--color-accent)] sm:text-3xl"
              href={primaryContact.href}
            >
              {primaryContact.helper}
            </a>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Email keeps the contact surface simple while the portfolio continues to grow.
            </p>
            <div className="mt-5">
              <Button href={primaryContact.href}>{primaryContact.label}</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
