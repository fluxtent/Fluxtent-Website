"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import type { NavItem } from "@/lib/types";

interface RouteShowcaseProps {
  items: NavItem[];
}

export function RouteShowcase({ items }: RouteShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-spacing relative z-10">
      <div className="section-shell">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.68)]">
            Navigate the foundation
          </p>
          <h2 className="font-display balance mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-[color:var(--color-foreground)] sm:text-5xl">
            A multi-page portfolio, shaped with more room to breathe.
          </h2>
          <p className="pretty mt-5 max-w-2xl text-base leading-7 text-[color:var(--color-muted)] sm:text-lg">
            Each page carries a different part of the Fluxtent story, from the foundation itself to
            the products, philosophy, and people behind it.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {items.map((item, index) => (
            <motion.div
              key={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.72,
                ease: [0.22, 1, 0.36, 1],
                delay: reduceMotion ? 0 : 0.08 + index * 0.06,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Link
                className="group flex h-full flex-col justify-between rounded-3xl border border-[rgba(142,157,211,0.12)] bg-white/55 p-5 backdrop-blur-sm transition duration-300 hover:bg-white/72 hover:shadow-[0_20px_55px_rgba(107,121,181,0.12)]"
                href={item.href}
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgba(82,96,154,0.56)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[color:var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[color:var(--color-foreground)]">
                  <span>Open page</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

