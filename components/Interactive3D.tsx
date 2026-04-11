"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function Interactive3D() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden"
      id="immersive"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f3d] via-[#252b55] to-[#1d2248]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-[8%] h-[36rem] w-[36rem] rounded-full opacity-60 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(125,136,242,0.35) 0%, transparent 70%)",
          }}
          animate={
            reduceMotion
              ? {}
              : { y: [0, -20, 0], scale: [1, 1.04, 1] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-[5%] h-[30rem] w-[30rem] rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(157,189,255,0.3) 0%, transparent 70%)",
          }}
          animate={
            reduceMotion
              ? {}
              : { y: [0, 16, 0], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute left-[25%] top-[35%] h-[28rem] w-[28rem] rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(205,200,255,0.25) 0%, transparent 70%)",
          }}
          animate={
            reduceMotion
              ? {}
              : { y: [0, -12, 0] }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,136,242,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(125,136,242,0.07) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(0,0,0,0.5), transparent 80%)",
        }}
      />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#7D88F2"
      />

      <div className="absolute inset-y-0 right-0 hidden w-[55%] md:block">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="h-full w-full"
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="section-shell">
          <div className="max-w-xl py-24 md:py-0">
            <motion.div
              className="flex items-center gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="h-px w-8 bg-gradient-to-r from-[#7D88F2] to-transparent" />
              <p className="eyebrow text-xs font-semibold text-[rgba(157,189,255,0.7)]">
                Introducing Fluxtent
              </p>
            </motion.div>

            <motion.h1
              className="font-display mt-7 text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.05em]"
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="bg-[linear-gradient(135deg,#CDC8FF,#7D88F2_40%,#9DBDFF)] bg-clip-text text-transparent">
                Where care
              </span>
              <br />
              <span className="bg-[linear-gradient(135deg,#9DBDFF,#CDC8FF_60%,#7D88F2)] bg-clip-text text-transparent">
                meets craft.
              </span>
            </motion.h1>

            <motion.div
              className="mt-5 h-px w-20 bg-gradient-to-r from-[#7D88F2] via-[#9DBDFF] to-transparent"
              initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
            />

            <motion.p
              className="pretty mt-6 max-w-md text-[1.05rem] leading-7 text-[rgba(200,210,240,0.65)]"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A portfolio foundation for health technology that puts people
              first — built by founders who believe digital tools should feel
              calm, clear, and genuinely useful.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-6"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {[
                { value: "5", label: "Products" },
                { value: "2", label: "Founders" },
                { value: "1", label: "Ecosystem" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <div className="h-6 w-px bg-[rgba(125,136,242,0.2)]" />
                  )}
                  <div>
                    <p className="text-2xl font-semibold tracking-tight text-[rgba(205,200,255,0.9)]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-[rgba(157,189,255,0.45)]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[rgba(157,189,255,0.4)]">
          Scroll
        </span>
        <motion.div
          className="h-8 w-[1.5px] rounded-full bg-gradient-to-b from-[rgba(125,136,242,0.5)] to-transparent"
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f7ff] to-transparent" />
    </section>
  );
}
