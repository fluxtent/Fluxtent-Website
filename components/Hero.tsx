"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
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
        <motion.div
          className="absolute right-[10%] top-[30%] h-[24rem] w-[24rem] rounded-full opacity-40 blur-[90px]"
          style={{
            y: useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : -60]),
            background: "radial-gradient(circle, rgba(125,136,242,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(125,136,242,0.08)" />

      <div
        className="absolute inset-y-0 -right-[5%] hidden w-[58%] md:block"
        style={{
          zIndex: 2,
          maskImage:
            "radial-gradient(ellipse 80% 80% at 55% 50%, rgba(0,0,0,0.75) 10%, transparent 65%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 55% 50%, rgba(0,0,0,0.75) 10%, transparent 65%)",
        }}
      >
        <div
          className="h-full w-full"
          style={{
            filter:
              "sepia(1) hue-rotate(220deg) saturate(1.8) brightness(1.1) contrast(0.85)",
            opacity: 0.7,
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>

      <motion.div
        className="section-shell relative z-10"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <motion.div
          className="max-w-[42rem]"
          variants={stagger}
          initial="hidden"
          viewport={{ once: true, amount: 0.3 }}
          whileInView="show"
        >
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
            className="font-display balance mt-7 max-w-[38rem] text-[clamp(2.6rem,5.5vw,5.2rem)] leading-[0.92] font-semibold tracking-[-0.045em] text-[color:var(--color-foreground)]"
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
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f6f7ff] to-transparent" />
    </section>
  );
}
