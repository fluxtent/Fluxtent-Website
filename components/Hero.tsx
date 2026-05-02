"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { heroHighlights, projects } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient mesh background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 15% 40%, rgba(206,201,255,0.22) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 85% 25%, rgba(164,195,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 50% 90%, rgba(125,136,242,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="section-shell relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <Image
              alt="Fluxtent"
              height={506}
              priority
              src="/fluxtent-logo.png"
              width={494}
              className="h-auto w-44"
            />
          </motion.div>

          <motion.p
            className="eyebrow mt-10"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Founder-led health product portfolio
          </motion.p>

          <motion.h1
            className="balance mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <span className="gradient-text">Health tools</span>{" "}
            <span className="text-[var(--color-foreground)]">for concrete everyday decisions.</span>
          </motion.h1>

          <motion.p
            className="pretty mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            Fluxtent is a portfolio built by Arnav Singh and Varun Puttagunta. It
            brings together browser extensions and web products for allergen safety,
            digital wellness, medication adherence, AI health guidance, and cognitive fitness.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            <Button href="/ecosystem">View products</Button>
            <Button href="/foundation" variant="secondary">
              How Fluxtent works
            </Button>
          </motion.div>

          <motion.dl
            className="mt-10 grid max-w-2xl gap-0 sm:grid-cols-3"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
          >
            {heroHighlights.map((highlight, i) => (
              <div
                key={highlight.label}
                className="border-b border-[var(--color-border)] py-5 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:pr-6"
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
        </div>

        <motion.aside
          className="professional-card p-6 sm:p-7"
          aria-label="Fluxtent portfolio snapshot"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
        >
          <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-4">
            <div>
              <p className="eyebrow">Portfolio snapshot</p>
              <h2 className="mt-2 text-2xl font-semibold text-[var(--color-foreground)]">
                Products with real surfaces
              </h2>
            </div>
            <span
              className="rounded-xl px-3 py-1.5 text-sm font-semibold text-[var(--color-accent-dark)]"
              style={{ background: "rgba(125,136,242,0.08)" }}
            >
              2026
            </span>
          </div>

          <div className="divide-y divide-[var(--color-border)]">
            {projects.map((project) => (
              <Link
                key={project.slug}
                className="group grid gap-2 py-4 transition-all duration-200 sm:grid-cols-[1fr_auto]"
                href={`/ecosystem#${project.slug}`}
              >
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="status-dot" />
                    <h3 className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent-dark)] transition-colors duration-200">
                      {project.name}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-left sm:text-right">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-foreground)]">
                      {project.status}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-muted)]">{project.format}</p>
                  </div>
                  <svg
                    className="size-4 text-[var(--color-muted)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
