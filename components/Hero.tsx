"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import type { HeroHighlight } from "@/lib/types";

interface HeroProps {
  heroHighlights: HeroHighlight[];
}


export function Hero({ heroHighlights }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, reduceMotion ? 0 : 140]
  );
  const orbitY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, reduceMotion ? 0 : 90]
  );
  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, reduceMotion ? 1 : 0.97]
  );
  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.25],
    [1, reduceMotion ? 1 : 0.6]
  );

  const stagger: import("framer-motion").Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };
  const fadeUp: import("framer-motion").Variants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-36"
      id="top"
    >
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
          className="absolute -left-32 top-[5%] h-[36rem] w-[36rem] rounded-full opacity-80 blur-[100px]"
          style={{
            y: ambientY,
            background:
              "radial-gradient(circle, rgba(201,191,255,0.55) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute -right-24 top-[12%] h-[30rem] w-[30rem] rounded-full opacity-75 blur-[90px]"
          style={{
            y: orbitY,
            background:
              "radial-gradient(circle, rgba(157,189,255,0.5) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute left-[35%] bottom-[5%] h-[22rem] w-[22rem] rounded-full opacity-40 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(181,175,255,0.5) 0%, transparent 70%)",
          }}
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }
          }
          transition={
            reduceMotion
              ? undefined
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />

                <motion.svg
          aria-hidden="true"
          className="absolute inset-x-0 top-[4%] hidden h-[38rem] w-full md:block"
          fill="none"
          preserveAspectRatio="none"
          style={{ y: ambientY }}
          viewBox="0 0 1440 600"
        >
          <defs>
            <linearGradient
              id="hero-ribbon-main"
              x1="100"
              y1="50"
              x2="1340"
              y2="550"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CDC8FF" stopOpacity="0.95" />
              <stop offset="0.35" stopColor="#9DBDFF" stopOpacity="0.75" />
              <stop offset="0.7" stopColor="#B5AFFF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#cde7ff" stopOpacity="0.15" />
            </linearGradient>
            <filter id="hero-glow">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

                    <motion.path
            animate={{ pathLength: 1, opacity: 0.82 }}
            d="M80 420C200 340 350 120 540 140C680 155 780 340 950 330C1080 322 1180 240 1360 130"
            initial={{
              opacity: reduceMotion ? 0.82 : 0.15,
              pathLength: reduceMotion ? 1 : 0.05,
            }}
            stroke="url(#hero-ribbon-main)"
            strokeLinecap="round"
            strokeWidth="2.5"
            filter="url(#hero-glow)"
            transition={{
              duration: reduceMotion ? 0.2 : 2.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

                    <motion.path
            animate={{ pathLength: 1, opacity: 0.45 }}
            d="M480 55C650 80 720 240 890 275C1010 300 1120 255 1300 100"
            initial={{
              opacity: reduceMotion ? 0.45 : 0.08,
              pathLength: reduceMotion ? 1 : 0.15,
            }}
            stroke="url(#hero-ribbon-main)"
            strokeLinecap="round"
            strokeWidth="1.5"
            transition={{
              duration: reduceMotion ? 0.2 : 2.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          />

                    <motion.path
            animate={{ pathLength: 1, opacity: 0.25 }}
            d="M150 500C320 430 440 310 620 330C780 348 850 430 1050 420C1180 414 1250 350 1380 280"
            initial={{
              opacity: reduceMotion ? 0.25 : 0.05,
              pathLength: reduceMotion ? 1 : 0.2,
            }}
            stroke="url(#hero-ribbon-main)"
            strokeLinecap="round"
            strokeWidth="1"
            transition={{
              duration: reduceMotion ? 0.2 : 2.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35,
            }}
          />

                    {[
            { cx: 540, cy: 140 },
            { cx: 950, cy: 330 },
            { cx: 890, cy: 275 },
          ].map((node, idx) => (
            <motion.circle
              key={idx}
              cx={node.cx}
              cy={node.cy}
              r={idx === 0 ? 6 : 4}
              fill="rgba(255,255,255,0.92)"
              stroke="url(#hero-ribbon-main)"
              strokeWidth="1.2"
              animate={{
                opacity: [0.35, 0.8, 0.35],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4.5 + idx,
                ease: "easeInOut",
                repeat: Infinity,
                delay: idx * 0.6,
              }}
            />
          ))}
        </motion.svg>
      </div>

            <motion.div
        className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
                <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.72)]"
          >
            Founder-led health-tech foundation
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-7 flex max-w-max rounded-full border border-white/70 bg-white/65 px-4 py-2.5 shadow-[0_14px_42px_rgba(111,124,175,0.14)] backdrop-blur-lg"
          >
            <div className="relative flex h-10 w-[170px] items-center justify-center overflow-hidden sm:h-12 sm:w-[196px]">
              <Image
                alt="Fluxtent"
                className="absolute w-[170px] max-w-none object-contain sm:w-[196px]"
                height={196}
                priority
                src="/fluxtent-logo.png"
                width={196}
              />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display balance mt-8 max-w-[34rem] text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-[color:var(--color-foreground)]"
          >
            A portfolio foundation for{" "}
            <span className="gradient-text">thoughtful</span> health technology.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="pretty mt-7 max-w-2xl text-lg leading-8 text-[color:var(--color-muted)] sm:text-xl"
          >
            Fluxtent is a portfolio foundation by{" "}
            <strong className="font-semibold text-[color:var(--color-foreground)]">
              Arnav Singh
            </strong>{" "}
            and{" "}
            <strong className="font-semibold text-[color:var(--color-foreground)]">
              Varun Puttagunta
            </strong>
            , built to showcase clear, accessible digital tools that support
            healthier and more intentional everyday living.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button
              href="#ecosystem"
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
            <Button href="#about" variant="secondary">
              View Foundation
            </Button>
          </motion.div>

                    <motion.div
            variants={fadeUp}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {heroHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : 0.5 + index * 0.1,
                }}
                viewport={{ once: true, amount: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GlassPanel className="h-full p-5 transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(107,121,181,0.18)]">
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
                    {highlight.value}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
                    {highlight.label}
                  </p>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

                <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 36, y: 20 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: reduceMotion ? 0 : 0.25,
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
        >
          <GlassPanel className="relative overflow-hidden p-7 sm:p-8">
                        <div className="shimmer-border absolute inset-x-0 top-0 h-px" />
                        <div className="absolute right-[-10%] top-[-12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(196,214,255,0.46),transparent)]" />

            <p className="eyebrow text-xs font-semibold text-[rgba(72,88,152,0.7)]">
              Brand architecture
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  label: "Identity",
                  text: "A credible digital home for founder-led health product thinking.",
                },
                {
                  label: "Ecosystem",
                  text: "AllerGuard, TabGuard, MedRemind, and Recall as one connected body of work.",
                },
                {
                  label: "Principle",
                  text: "Health technology should feel calm, intelligent, and built with real human care.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/70 bg-white/60 p-5 transition-all duration-300 hover:bg-white/80 hover:shadow-[0_12px_36px_rgba(120,133,191,0.12)]"
                  initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: reduceMotion ? 0 : 0.5 + i * 0.12,
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgba(78,94,150,0.7)]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[color:var(--color-foreground)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>
      </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f6f7ff] to-transparent" />
    </section>
  );
}
