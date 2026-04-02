"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { HeroHighlight } from "@/lib/types";

interface HeroProps {
  heroHighlights: HeroHighlight[];
}

export function Hero({ heroHighlights }: HeroProps) {
  const heroLogoImageWidth = 166;
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : 120]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, reduceMotion ? 1 : 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, reduceMotion ? 1 : 0.7]);

  const stagger: import("framer-motion").Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUp: import("framer-motion").Variants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20 sm:pt-32" id="top">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-[5%] h-[32rem] w-[32rem] rounded-full opacity-70 blur-[100px]"
          style={{
            y: ambientY,
            background: "radial-gradient(circle, rgba(201,191,255,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute -right-24 top-[12%] h-[28rem] w-[28rem] rounded-full opacity-60 blur-[90px]"
          style={{
            y: useTransform(scrollYProgress, [0, 0.25], [0, reduceMotion ? 0 : 80]),
            background: "radial-gradient(circle, rgba(157,189,255,0.45) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        className="section-shell grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <motion.div variants={stagger} initial="hidden" viewport={{ once: true, amount: 0.3 }} whileInView="show">
          <motion.div className="flex items-center gap-3" variants={fadeUp}>
            <div className="h-px w-8 bg-gradient-to-r from-[#7D88F2] to-transparent" />
            <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.65)]">
              Founder-led health-tech foundation
            </p>
          </motion.div>

          <motion.div
            className="mt-6 inline-flex items-center rounded-[1.85rem] border border-[rgba(255,255,255,0.84)] bg-white/76 px-[0.94rem] py-[0.58rem] shadow-[0_14px_36px_rgba(111,124,175,0.1)] backdrop-blur-xl"
            variants={fadeUp}
          >
            <div className="relative flex h-[2.22rem] w-[8.45rem] items-center justify-center overflow-hidden sm:h-[2.24rem] sm:w-[8.58rem]">
              <Image
                alt="Fluxtent"
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                height={506}
                priority
                src="/fluxtent-logo.png"
                sizes={`${heroLogoImageWidth}px`}
                width={494}
                style={{ width: heroLogoImageWidth, height: "auto" }}
              />
            </div>
          </motion.div>

          <motion.h1
            className="font-display balance mt-7 max-w-[32rem] text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-[color:var(--color-foreground)]"
            variants={fadeUp}
          >
            A portfolio foundation for <span className="gradient-text">thoughtful</span> health
            technology.
          </motion.h1>

          <motion.p
            className="pretty mt-6 max-w-xl text-[1.05rem] leading-7 text-[color:var(--color-muted)]"
            variants={fadeUp}
          >
            Fluxtent is a portfolio foundation by{" "}
            <strong className="font-semibold text-[color:var(--color-foreground)]">Arnav Singh</strong>{" "}
            and{" "}
            <strong className="font-semibold text-[color:var(--color-foreground)]">
              Varun Puttagunta
            </strong>
            , built to showcase clear, accessible digital tools that support healthier and more
            intentional everyday living.
          </motion.p>

          <motion.div className="mt-8 flex flex-wrap gap-3" variants={fadeUp}>
            <Button
              href="/ecosystem"
              icon={
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M3.75 8H12.25M12.25 8L8.75 4.5M12.25 8L8.75 11.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              }
            >
              Explore Projects
            </Button>
            <Button href="/foundation" variant="secondary">
              View Foundation
            </Button>
          </motion.div>

          <motion.div className="mt-10 grid gap-3 sm:grid-cols-3" variants={fadeUp}>
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.4 + index * 0.08,
                }}
                viewport={{ once: true, amount: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="rounded-2xl border border-[rgba(142,157,211,0.15)] bg-white/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(107,121,181,0.12)]">
                  <div className="text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
                    {highlight.value}
                  </div>
                  <p className="mt-1.5 text-[13px] leading-5 text-[color:var(--color-muted)]">
                    {highlight.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 30 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="rounded-3xl border border-[rgba(142,157,211,0.15)] bg-white/60 p-6 shadow-[0_24px_80px_rgba(116,130,185,0.1)] backdrop-blur-lg sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(72,88,152,0.6)]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#7D88F2]" />
              Brand Architecture
            </div>

            <div className="mt-6 space-y-4">
              {[
                {
                  label: "Identity",
                  text: "A credible digital home for founder-led health product thinking.",
                },
                {
                  label: "Ecosystem",
                  text: "AllerGuard, TabGuard, MedRemind, Recall, and MedBrief AI as one connected body of work.",
                },
                {
                  label: "Principle",
                  text: "Health technology should feel calm, intelligent, and built with real human care.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="group rounded-2xl border border-[rgba(142,157,211,0.1)] bg-white/70 p-5 transition-all duration-300 hover:bg-white/90 hover:shadow-[0_8px_28px_rgba(120,133,191,0.1)]"
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.4 + i * 0.1,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(78,94,150,0.6)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[15px] font-semibold leading-snug tracking-[-0.02em] text-[color:var(--color-foreground)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6f7ff] to-transparent" />
    </section>
  );
}
