"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";


export function AnimatedPaths() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothedScroll = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    restDelta: 0.001
  });

  const drawA = useTransform(smoothedScroll, [0, 1], [0.08, 1]);
  const drawB = useTransform(smoothedScroll, [0, 1], [0.12, 1]);
  const drawC = useTransform(smoothedScroll, [0, 1], [0.16, 1]);

  const layer1Y = useTransform(smoothedScroll, [0, 1], [0, reduceMotion ? 0 : 250]);
  const layer2Y = useTransform(smoothedScroll, [0, 1], [0, reduceMotion ? 0 : -150]);
  const layer3Y = useTransform(smoothedScroll, [0, 1], [0, reduceMotion ? 0 : 180]);

  const mainOpacity = useTransform(smoothedScroll, [0, 0.2, 0.8, 1], [0.35, 0.75, 0.65, 0.3]);

  const glow1Y = useTransform(smoothedScroll, [0, 1], [0, reduceMotion ? 0 : -200]);
  const glow2Y = useTransform(smoothedScroll, [0, 1], [0, reduceMotion ? 0 : 320]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block"
    >
            <motion.div
        className="absolute -left-48 top-[12%] h-[32rem] w-[32rem] rounded-full blur-3xl"
        style={{
          y: glow1Y,
          background: "radial-gradient(circle, rgba(218,212,255,0.45) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -right-32 top-[38%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          y: glow2Y,
          background: "radial-gradient(circle, rgba(193,220,255,0.4) 0%, transparent 70%)",
        }}
      />

            <motion.div
        className="absolute inset-0"
        style={{ opacity: mainOpacity, y: layer1Y }}
      >
                <svg
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 5800"
        >
          <defs>
            <linearGradient id="helix-a" x1="720" y1="0" x2="720" y2="5800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CDC8FF" stopOpacity="0.95" />
              <stop offset="0.25" stopColor="#9DBDFF" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#B5AFFF" stopOpacity="0.7" />
              <stop offset="0.75" stopColor="#9DBDFF" stopOpacity="0.6" />
              <stop offset="1" stopColor="#CDC8FF" stopOpacity="0.2" />
            </linearGradient>
            <filter id="helix-glow" x="-50%" y="-10%" width="200%" height="120%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

                    {reduceMotion ? (
            <path
              d="M720 0
                 C520 200, 920 400, 720 600
                 C520 800, 920 1000, 720 1200
                 C520 1400, 920 1600, 720 1800
                 C520 2000, 920 2200, 720 2400
                 C520 2600, 920 2800, 720 3000
                 C520 3200, 920 3400, 720 3600
                 C520 3800, 920 4000, 720 4200
                 C520 4400, 920 4600, 720 4800
                 C520 5000, 920 5200, 720 5400
                 C520 5600, 720 5700, 720 5800"
              stroke="url(#helix-a)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#helix-glow)"
            />
          ) : (
            <motion.path
              d="M720 0
                 C520 200, 920 400, 720 600
                 C520 800, 920 1000, 720 1200
                 C520 1400, 920 1600, 720 1800
                 C520 2000, 920 2200, 720 2400
                 C520 2600, 920 2800, 720 3000
                 C520 3200, 920 3400, 720 3600
                 C520 3800, 920 4000, 720 4200
                 C520 4400, 920 4600, 720 4800
                 C520 5000, 920 5200, 720 5400
                 C520 5600, 720 5700, 720 5800"
              stroke="url(#helix-a)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#helix-glow)"
              style={{ pathLength: drawA }}
            />
          )}

                    {reduceMotion ? (
            <path
              d="M720 0
                 C920 200, 520 400, 720 600
                 C920 800, 520 1000, 720 1200
                 C920 1400, 520 1600, 720 1800
                 C920 2000, 520 2200, 720 2400
                 C920 2600, 520 2800, 720 3000
                 C920 3200, 520 3400, 720 3600
                 C920 3800, 520 4000, 720 4200
                 C920 4400, 520 4600, 720 4800
                 C920 5000, 520 5200, 720 5400
                 C920 5600, 720 5700, 720 5800"
              stroke="url(#helix-a)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          ) : (
            <motion.path
              d="M720 0
                 C920 200, 520 400, 720 600
                 C920 800, 520 1000, 720 1200
                 C920 1400, 520 1600, 720 1800
                 C920 2000, 520 2200, 720 2400
                 C920 2600, 520 2800, 720 3000
                 C920 3200, 520 3400, 720 3600
                 C920 3800, 520 4000, 720 4200
                 C920 4400, 520 4600, 720 4800
                 C920 5000, 520 5200, 720 5400
                 C920 5600, 720 5700, 720 5800"
              stroke="url(#helix-a)"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.5"
              style={{ pathLength: drawB }}
            />
          )}

                    {reduceMotion ? null : [600, 1200, 1800, 2400, 3000, 3600, 4200, 4800].map((cy, i) => {
            const threshold = cy / 5800;
            const linkScale = useTransform(scrollYProgress, [threshold - 0.1, threshold], [0, 1]);
            const linkOpacity = useTransform(scrollYProgress, [threshold - 0.1, threshold], [0, 0.45]);

            return (
              <motion.line
                key={`cross-${i}`}
                x1={720 - 90}
                y1={cy - 20}
                x2={720 + 90}
                y2={cy + 20}
                stroke="url(#helix-a)"
                strokeWidth="0.8"
                strokeLinecap="round"
                style={{ scaleX: linkScale, opacity: linkOpacity, transformOrigin: "center" }}
              />
            );
          })}
        </svg>
      </motion.div>

            <motion.div
        className="absolute inset-0"
        style={{ opacity: mainOpacity, y: layer2Y }}
      >
        <svg
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 5800"
        >
          <defs>
            <linearGradient id="helix-b" x1="400" y1="0" x2="400" y2="5800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B5AFFF" stopOpacity="0.5" />
              <stop offset="0.5" stopColor="#8FB4FF" stopOpacity="0.4" />
              <stop offset="1" stopColor="#CDC8FF" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {reduceMotion ? null : (
            <motion.path
              d="M340 100
                 C180 350, 500 500, 340 750
                 C180 1000, 500 1150, 340 1400
                 C180 1650, 500 1800, 340 2050
                 C180 2300, 500 2450, 340 2700
                 C180 2950, 500 3100, 340 3350
                 C180 3600, 500 3750, 340 4000
                 C180 4250, 500 4400, 340 4650
                 C180 4900, 340 5100, 340 5300"
              stroke="url(#helix-b)"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ pathLength: drawC }}
            />
          )}
        </svg>
      </motion.div>

            <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.35, y: layer3Y }}
      >
        <svg
          className="h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 5800"
        >
          <defs>
            <linearGradient id="helix-c" x1="1100" y1="200" x2="1100" y2="5600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9DBDFF" stopOpacity="0.55" />
              <stop offset="0.5" stopColor="#CDC8FF" stopOpacity="0.4" />
              <stop offset="1" stopColor="#9DBDFF" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {reduceMotion ? null : (
            <motion.path
              d="M1100 200
                 C1260 450, 940 600, 1100 850
                 C1260 1100, 940 1250, 1100 1500
                 C1260 1750, 940 1900, 1100 2150
                 C1260 2400, 940 2550, 1100 2800
                 C1260 3050, 940 3200, 1100 3450
                 C1260 3700, 940 3850, 1100 4100
                 C1260 4350, 940 4500, 1100 4750
                 C1260 5000, 1100 5200, 1100 5400"
              stroke="url(#helix-c)"
              strokeWidth="1.2"
              strokeLinecap="round"
              style={{ pathLength: drawB }}
            />
          )}
        </svg>
      </motion.div>
    </div>
  );
}
