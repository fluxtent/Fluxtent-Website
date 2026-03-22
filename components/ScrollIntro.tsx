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


    const drawComplexPath = useTransform(scrollYProgress, [0, 0.45], [0.2, 1]);
  const dashOffsetComplex = useTransform(scrollYProgress, [0.45, 0.7], [0, 1000]); // They retract/collapse later
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.8, 1, 0.3, 0]);

    const text1Y = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, -50, -100]);
  const text1Op = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);

    const text2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.5], [50, 0, -100]);
  const text2Op = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.45, 0.55], [0, 1, 1, 0, 0]);
  const text2Scale = useTransform(scrollYProgress, [0.25, 0.4], [0.95, 1.05]);

    const text3Y = useTransform(scrollYProgress, [0.45, 0.55, 0.7], [50, 0, -100]);
  const text3Op = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.65, 0.75], [0, 1, 1, 0, 0]);
  const text3Scale = useTransform(scrollYProgress, [0.45, 0.6], [0.95, 1.05]);

    const text4Y = useTransform(scrollYProgress, [0.65, 0.75, 0.9], [50, 0, -100]);
  const text4Op = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.9, 1], [0, 1, 1, 0, 0]);
  const text4Scale = useTransform(scrollYProgress, [0.65, 0.85], [0.9, 1]);

    const coreScale = useTransform(scrollYProgress, [0.6, 0.8, 0.95], [0, 1.5, 3]);
  const coreOpacity = useTransform(scrollYProgress, [0.55, 0.7, 0.85, 1], [0, 1, 1, 0]);
  const bloomOpacity = useTransform(scrollYProgress, [0.65, 0.8, 0.95, 1], [0, 1, 0.5, 0]);

    const sceneOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  if (reduceMotion) return null;

  return (
    <section 
      ref={containerRef} 
      className="relative z-[100] h-[450vh] w-full"
    >
      <motion.div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#f8f9ff]"
        style={{ opacity: sceneOpacity }}
      >
        
                <motion.div 
          className="absolute inset-x-0 top-0 h-[60vh] w-full blur-[100px]"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(125,136,242,0.2) 0%, transparent 60%)",
            opacity: gridOpacity,
            scaleY: useTransform(scrollYProgress, [0, 0.5], [1, 2]),
          }}
        />

        <motion.div 
          className="absolute bottom-0 left-[-20%] h-[80vh] w-[80vh] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(157,189,255,0.4) 0%, transparent 70%)",
            y: useTransform(scrollYProgress, [0, 1], [0, -400]),
            opacity: gridOpacity,
          }}
        />

                <svg 
          className="absolute inset-0 h-full w-full pointer-events-none" 
          preserveAspectRatio="xMidYMid slice" 
          viewBox="0 0 1440 900"
        >
          <defs>
            <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A58CF" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#7D88F2" stopOpacity="1"/>
              <stop offset="100%" stopColor="#A8B4FC" stopOpacity="0.9"/>
            </linearGradient>

            <radialGradient id="bloom-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
              <stop offset="40%" stopColor="#7D88F2" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4A58CF" stopOpacity="0"/>
            </radialGradient>

            <filter id="ultra-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

                    <motion.g style={{ opacity: gridOpacity }}>
            <line x1="0" y1="450" x2="1440" y2="450" stroke="rgba(125, 136, 242, 0.25)" strokeWidth="1.5" strokeDasharray="6 12" />
            <line x1="720" y1="0" x2="720" y2="900" stroke="rgba(125, 136, 242, 0.25)" strokeWidth="1.5" strokeDasharray="6 12" />
            <circle cx="720" cy="450" r="225" fill="none" stroke="rgba(125, 136, 242, 0.15)" strokeWidth="2" />
            <circle cx="720" cy="450" r="450" fill="none" stroke="rgba(125, 136, 242, 0.1)" strokeWidth="2" />
          </motion.g>

                    <g>
                        <motion.path 
              d="M720 450 C950 200, 1200 100, 1440 50"
              fill="none" stroke="url(#path-grad)" strokeWidth="8" strokeLinecap="round" filter="url(#ultra-glow)"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />
            <motion.path 
              d="M720 450 Q 1000 300, 1300 400 T 1500 200"
              fill="none" stroke="url(#path-grad)" strokeWidth="5" strokeLinecap="round"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />

                        <motion.path 
              d="M720 450 C450 700, 200 800, 0 850"
              fill="none" stroke="url(#path-grad)" strokeWidth="9" strokeLinecap="round" filter="url(#ultra-glow)"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />
            <motion.path 
              d="M720 450 Q 400 600, 200 450 T -100 600"
              fill="none" stroke="url(#path-grad)" strokeWidth="4" strokeLinecap="round"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />

                        <motion.path 
              d="M720 450 C900 650, 1100 850, 1440 900"
              fill="none" stroke="url(#path-grad)" strokeWidth="6" strokeLinecap="round"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />

                        <motion.path 
              d="M720 450 C500 250, 300 100, 0 50"
              fill="none" stroke="url(#path-grad)" strokeWidth="8" strokeLinecap="round" filter="url(#ultra-glow)"
              style={{ pathLength: drawComplexPath, opacity: gridOpacity }}
            />
          </g>

                    <motion.g style={{ opacity: coreOpacity, scale: coreScale, transformOrigin: "720px 450px" }}>
                        <motion.circle 
              cx="720" cy="450" r="100" 
              fill="url(#bloom-grad)" 
              style={{ opacity: bloomOpacity }}
              filter="url(#ultra-glow)"
            />
                        <path 
              d="M710 400 C740 400, 750 420, 750 440 L710 440 Z"
              fill="url(#path-grad)"
              stroke="rgba(255,255,255,0.8)"
              strokeWidth="2"
            />
            <path 
              d="M690 410 C690 420, 720 450, 720 490 L690 470 Z"
              fill="#9DBDFF"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="1"
            />
            <circle cx="720" cy="450" r="30" stroke="rgba(125,136,242,0.6)" strokeWidth="2" fill="none" />
            <circle cx="720" cy="450" r="45" stroke="rgba(125,136,242,0.3)" strokeWidth="1.5" fill="none" strokeDasharray="3 6" />
          </motion.g>

        </svg>

                <div className="absolute inset-x-0 h-full flex flex-col items-center justify-center pointer-events-none">
          
          <motion.div 
            className="absolute flex flex-col items-center text-center px-6"
            style={{ y: text1Y, opacity: text1Op, scale: text1Scale }}
          >
            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
              Digital health is <span className="text-[rgba(125,136,242,0.85)]">fractured.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1.2rem,2vw,1.6rem)] text-[rgba(86,101,168,0.85)] font-medium leading-relaxed">
              Countless apps, scattered data, and overwhelming interfaces create friction where there should be care.
            </p>
          </motion.div>

          <motion.div 
            className="absolute flex flex-col items-center text-center px-6"
            style={{ y: text2Y, opacity: text2Op, scale: text2Scale }}
          >
            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)] bg-white/40 backdrop-blur-md px-8 py-4 rounded-[3rem] border border-white/50 shadow-2xl">
              Information everywhere.<br/>Clarity nowhere.
            </h1>
          </motion.div>

          <motion.div 
            className="absolute flex flex-col items-center text-center px-6"
            style={{ y: text3Y, opacity: text3Op, scale: text3Scale }}
          >
            <h1 className="font-display text-[clamp(2.8rem,8vw,6rem)] leading-none font-semibold tracking-[-0.04em] text-[color:var(--color-foreground)]">
              We are building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9DBDFF] to-[#7D88F2]">thread.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-[clamp(1.2rem,2vw,1.6rem)] text-[rgba(86,101,168,0.85)] font-medium leading-relaxed">
              Thoughtful design connecting the ecosystem into one coherent standard.
            </p>
          </motion.div>

          <motion.div 
            className="absolute flex flex-col items-center text-center px-6"
            style={{ y: text4Y, opacity: text4Op, scale: text4Scale }}
          >
            <div className="flex flex-col items-center gap-6">
              <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-none font-bold tracking-[-0.05em] text-transparent bg-clip-text bg-[linear-gradient(135deg,#5e6ad2_0%,#9DBDFF_100%)]">
                Fluxtent.
              </h1>
              <p className="text-xl uppercase tracking-[0.4em] font-semibold text-[rgba(125,136,242,0.7)]">
                The Foundation
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
