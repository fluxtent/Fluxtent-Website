"use client";

import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function HelixRung({
  cy,
  progress,
}: {
  cy: number;
  progress: MotionValue<number>;
}) {
  const threshold = cy / 5800;
  const opacity = useTransform(progress, [threshold - 0.08, threshold], [0, 0.3]);

  return (
    <motion.line
      x1={720 - 80}
      y1={cy - 15}
      x2={720 + 80}
      y2={cy + 15}
      stroke="url(#bg-helix-a)"
      strokeWidth="0.6"
      strokeLinecap="round"
      style={{ opacity }}
    />
  );
}

export function AnimatedPaths() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothed = useSpring(scrollYProgress, { stiffness: 35, damping: 20, restDelta: 0.001 });

  const drawA = useTransform(smoothed, [0, 1], [0.05, 1]);
  const drawB = useTransform(smoothed, [0, 1], [0.1, 1]);
  const drawC = useTransform(smoothed, [0, 1], [0.15, 1]);

  const layer1Y = useTransform(smoothed, [0, 1], [0, reduceMotion ? 0 : 200]);
  const layer2Y = useTransform(smoothed, [0, 1], [0, reduceMotion ? 0 : -120]);

  const mainOp = useTransform(smoothed, [0, 0.15, 0.8, 1], [0.25, 0.6, 0.5, 0.2]);

  const glow1Y = useTransform(smoothed, [0, 1], [0, reduceMotion ? 0 : -180]);
  const glow2Y = useTransform(smoothed, [0, 1], [0, reduceMotion ? 0 : 280]);

  if (reduceMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden md:block">
      <motion.div
        className="absolute -left-40 top-[10%] h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          y: glow1Y,
          background: "radial-gradient(circle, rgba(218,212,255,0.35) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -right-28 top-[35%] h-[24rem] w-[24rem] rounded-full blur-3xl"
        style={{
          y: glow2Y,
          background: "radial-gradient(circle, rgba(193,220,255,0.3) 0%, transparent 70%)",
        }}
      />

      <motion.div className="absolute inset-0" style={{ opacity: mainOp, y: layer1Y }}>
        <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 5800">
          <defs>
            <linearGradient id="bg-helix-a" x1="720" y1="0" x2="720" y2="5800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CDC8FF" stopOpacity="0.7" />
              <stop offset="0.3" stopColor="#9DBDFF" stopOpacity="0.5" />
              <stop offset="0.6" stopColor="#B5AFFF" stopOpacity="0.4" />
              <stop offset="1" stopColor="#CDC8FF" stopOpacity="0.15" />
            </linearGradient>
            <filter id="bg-glow">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          <motion.path
            d="M720 0 C520 200,920 400,720 600 C520 800,920 1000,720 1200 C520 1400,920 1600,720 1800 C520 2000,920 2200,720 2400 C520 2600,920 2800,720 3000 C520 3200,920 3400,720 3600 C520 3800,920 4000,720 4200 C520 4400,920 4600,720 4800 C520 5000,920 5200,720 5400 C520 5600,720 5700,720 5800"
            stroke="url(#bg-helix-a)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#bg-glow)"
            style={{ pathLength: drawA }}
          />

          <motion.path
            d="M720 0 C920 200,520 400,720 600 C920 800,520 1000,720 1200 C920 1400,520 1600,720 1800 C920 2000,520 2200,720 2400 C920 2600,520 2800,720 3000 C920 3200,520 3400,720 3600 C920 3800,520 4000,720 4200 C920 4400,520 4600,720 4800 C920 5000,520 5200,720 5400 C920 5600,720 5700,720 5800"
            stroke="url(#bg-helix-a)"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
            style={{ pathLength: drawB }}
          />

          {[600, 1200, 1800, 2400, 3000, 3600, 4200, 4800].map((cy, i) => (
            <HelixRung key={`rung-${i}`} cy={cy} progress={scrollYProgress} />
          ))}
        </svg>
      </motion.div>

      <motion.div className="absolute inset-0" style={{ opacity: 0.3, y: layer2Y }}>
        <svg className="h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 5800">
          <defs>
            <linearGradient id="bg-helix-b" x1="350" y1="0" x2="350" y2="5800" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B5AFFF" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#8FB4FF" stopOpacity="0.3" />
              <stop offset="1" stopColor="#CDC8FF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.path
            d="M350 100 C190 350,510 500,350 750 C190 1000,510 1150,350 1400 C190 1650,510 1800,350 2050 C190 2300,510 2450,350 2700 C190 2950,510 3100,350 3350 C190 3600,510 3750,350 4000 C190 4250,510 4400,350 4650 C190 4900,350 5100,350 5300"
            stroke="url(#bg-helix-b)"
            strokeWidth="1.2"
            strokeLinecap="round"
            style={{ pathLength: drawC }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
