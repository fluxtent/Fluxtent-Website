"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ScrollIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const drawHeartbeat = useTransform(scrollYProgress, [0, 0.35], [0.15, 1]);
  const drawDna1 = useTransform(scrollYProgress, [0.05, 0.5], [0.1, 1]);
  const drawDna2 = useTransform(scrollYProgress, [0.1, 0.55], [0.1, 1]);
  const drawMolecule = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
  const drawSpine = useTransform(scrollYProgress, [0, 0.65], [0.05, 1]);

  const gridOp = useTransform(scrollYProgress, [0, 0.15, 0.75, 1], [0.7, 0.9, 0.4, 0]);
  const nodeScale = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const nodeOp = useTransform(scrollYProgress, [0.25, 0.5, 0.85, 1], [0, 1, 1, 0]);

  const t1Y = useTransform(scrollYProgress, [0, 0.12, 0.28], [0, -30, -100]);
  const t1Op = useTransform(scrollYProgress, [0, 0.12, 0.24], [1, 1, 0]);

  const t2Y = useTransform(scrollYProgress, [0.22, 0.34, 0.48], [60, 0, -80]);
  const t2Op = useTransform(scrollYProgress, [0.2, 0.3, 0.42, 0.5], [0, 1, 1, 0]);

  const t3Y = useTransform(scrollYProgress, [0.44, 0.56, 0.7], [60, 0, -80]);
  const t3Op = useTransform(scrollYProgress, [0.42, 0.52, 0.64, 0.72], [0, 1, 1, 0]);

  const t4Y = useTransform(scrollYProgress, [0.66, 0.78, 0.92], [60, 0, -40]);
  const t4Op = useTransform(scrollYProgress, [0.64, 0.74, 0.88, 0.96], [0, 1, 1, 0]);

  const sceneOp = useTransform(scrollYProgress, [0.88, 1], [1, 0]);

  if (reduceMotion) return null;

  return (
    <section ref={containerRef} className="relative z-[100] h-[500vh] w-full">
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-[#f8f9ff]"
        style={{ opacity: sceneOp }}
      >
        <motion.div
          className="absolute inset-x-0 top-0 h-[50vh] w-full blur-[120px]"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(125,136,242,0.18) 0%, transparent 65%)",
            opacity: gridOp,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-[-10%] h-[60vh] w-[60vh] rounded-full blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(157,189,255,0.3) 0%, transparent 70%)",
            opacity: gridOp,
          }}
        />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="si-heartbeat" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#7D88F2" stopOpacity="0" />
              <stop offset="20%" stopColor="#7D88F2" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#5E6AD2" stopOpacity="1" />
              <stop offset="80%" stopColor="#9DBDFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#9DBDFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="si-dna" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#CDC8FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#7D88F2" stopOpacity="1" />
              <stop offset="100%" stopColor="#9DBDFF" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="si-mol" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5E6AD2" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9DBDFF" stopOpacity="0.6" />
            </linearGradient>
            <filter id="si-glow">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="si-glow-sm">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <motion.g style={{ opacity: gridOp }}>
            <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(125,136,242,0.12)" strokeWidth="1" strokeDasharray="8 16" />
            <line x1="720" y1="0" x2="720" y2="900" stroke="rgba(125,136,242,0.12)" strokeWidth="1" strokeDasharray="8 16" />
            <circle cx="720" cy="450" r="200" fill="none" stroke="rgba(125,136,242,0.08)" strokeWidth="1" />
            <circle cx="720" cy="450" r="350" fill="none" stroke="rgba(125,136,242,0.05)" strokeWidth="1" />
          </motion.g>

          <motion.path
            d="M0 450 L320 450 L360 450 L380 420 L400 500 L420 350 L440 550 L460 300 L480 600 L500 380 L520 470 L540 440 L560 450 L1440 450"
            fill="none"
            stroke="url(#si-heartbeat)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#si-glow)"
            style={{ pathLength: drawHeartbeat, opacity: gridOp }}
          />

          <motion.path
            d="M620 120 C650 180,680 240,660 300 C640 360,700 420,720 480 C740 540,680 600,660 660 C640 720,680 780,720 840"
            fill="none"
            stroke="url(#si-dna)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#si-glow-sm)"
            style={{ pathLength: drawDna1, opacity: gridOp }}
          />
          <motion.path
            d="M820 120 C790 180,760 240,780 300 C800 360,740 420,720 480 C700 540,760 600,780 660 C800 720,760 780,720 840"
            fill="none"
            stroke="url(#si-dna)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#si-glow-sm)"
            style={{ pathLength: drawDna2, opacity: gridOp }}
          />

          {[200, 320, 440, 560, 680, 800].map((cy, i) => {
            const leftX = 620 + (i % 2 === 0 ? 40 : -20);
            const rightX = 820 - (i % 2 === 0 ? 40 : -20);
            return (
              <motion.line
                key={`rung-${i}`}
                x1={leftX}
                y1={cy}
                x2={rightX}
                y2={cy}
                stroke="url(#si-dna)"
                strokeWidth="1"
                strokeDasharray="4 6"
                style={{ pathLength: drawMolecule, opacity: nodeOp }}
              />
            );
          })}

          <motion.path
            d="M720 50 L720 850"
            fill="none"
            stroke="rgba(125,136,242,0.15)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{ pathLength: drawSpine }}
          />

          <motion.g style={{ opacity: nodeOp, scale: nodeScale, transformOrigin: "200px 300px" }}>
            <circle cx="200" cy="300" r="8" fill="rgba(125,136,242,0.15)" />
            <circle cx="200" cy="300" r="4" fill="#7D88F2" />
            <line x1="200" y1="300" x2="300" y2="380" stroke="url(#si-mol)" strokeWidth="1.5" />
            <circle cx="300" cy="380" r="6" fill="rgba(125,136,242,0.12)" />
            <circle cx="300" cy="380" r="3" fill="#7D88F2" />
            <line x1="300" y1="380" x2="250" y2="480" stroke="url(#si-mol)" strokeWidth="1.5" />
            <circle cx="250" cy="480" r="5" fill="rgba(125,136,242,0.1)" />
            <circle cx="250" cy="480" r="2.5" fill="#9DBDFF" />
          </motion.g>

          <motion.g style={{ opacity: nodeOp, scale: nodeScale, transformOrigin: "1240px 320px" }}>
            <circle cx="1240" cy="320" r="7" fill="rgba(157,189,255,0.15)" />
            <circle cx="1240" cy="320" r="3.5" fill="#9DBDFF" />
            <line x1="1240" y1="320" x2="1160" y2="420" stroke="url(#si-mol)" strokeWidth="1.5" />
            <circle cx="1160" cy="420" r="5" fill="rgba(157,189,255,0.12)" />
            <circle cx="1160" cy="420" r="2.5" fill="#7D88F2" />
            <line x1="1160" y1="420" x2="1200" y2="520" stroke="url(#si-mol)" strokeWidth="1.5" />
            <circle cx="1200" cy="520" r="6" fill="rgba(125,136,242,0.1)" />
            <circle cx="1200" cy="520" r="3" fill="#5E6AD2" />
          </motion.g>

          <motion.g style={{ opacity: nodeOp, scale: nodeScale, transformOrigin: "720px 450px" }}>
            <circle cx="720" cy="450" r="24" fill="none" stroke="rgba(125,136,242,0.3)" strokeWidth="1.5" strokeDasharray="4 6">
              <animate attributeName="r" values="24;28;24" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="720" cy="450" r="12" fill="rgba(125,136,242,0.08)" />
            <circle cx="720" cy="450" r="5" fill="#7D88F2">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
          </motion.g>
        </svg>

        <div className="pointer-events-none absolute inset-x-0 flex h-full flex-col items-center justify-center">
          <motion.div
            className="absolute flex max-w-3xl flex-col items-center px-6 text-center"
            style={{ y: t1Y, opacity: t1Op }}
          >
            <p className="eyebrow mb-4 text-xs font-semibold text-[rgba(125,136,242,0.7)]">The Problem</p>
            <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[color:var(--color-foreground)]">
              Digital health is <span className="text-[#7D88F2]">fragmented.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[rgba(86,101,168,0.8)]">
              Countless apps, scattered data, and overwhelming interfaces create friction where there should be care.
            </p>
          </motion.div>

          <motion.div
            className="absolute flex max-w-3xl flex-col items-center px-6 text-center"
            style={{ y: t2Y, opacity: t2Op }}
          >
            <p className="eyebrow mb-4 text-xs font-semibold text-[rgba(125,136,242,0.7)]">The Reality</p>
            <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[color:var(--color-foreground)]">
              Information everywhere.<br />
              <span className="text-[#5E6AD2]">Clarity nowhere.</span>
            </h1>
          </motion.div>

          <motion.div
            className="absolute flex max-w-3xl flex-col items-center px-6 text-center"
            style={{ y: t3Y, opacity: t3Op }}
          >
            <p className="eyebrow mb-4 text-xs font-semibold text-[rgba(125,136,242,0.7)]">The Mission</p>
            <h1 className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[color:var(--color-foreground)]">
              We are building the{" "}
              <span className="bg-gradient-to-r from-[#7D88F2] to-[#9DBDFF] bg-clip-text text-transparent">
                connective tissue.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[rgba(86,101,168,0.8)]">
              A foundation uniting health technology through thoughtful design and shared purpose.
            </p>
          </motion.div>

          <motion.div
            className="absolute flex max-w-3xl flex-col items-center px-6 text-center"
            style={{ y: t4Y, opacity: t4Op }}
          >
            <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.05em] bg-[linear-gradient(135deg,#5e6ad2,#7D88F2,#9DBDFF)] bg-clip-text text-transparent">
              Fluxtent
            </h1>
            <div className="mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#7D88F2] to-transparent" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-[rgba(125,136,242,0.65)]">
              Thoughtful Health Technology
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
