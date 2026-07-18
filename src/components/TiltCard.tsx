"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

export default function TiltCard({
  children,
  className = "",
  baseRotate = 0,
  floatRange = 0,
  floatDuration = 5,
  delay = 0,
  hoverLift = 8,
  hoverScale = 1.04,
  tiltMax = 10,
  style,
}: {
  children: ReactNode;
  className?: string;
  baseRotate?: number;
  /** px of continuous idle float; 0 disables and switches to a scroll-triggered reveal instead */
  floatRange?: number;
  floatDuration?: number;
  delay?: number;
  hoverLift?: number;
  hoverScale?: number;
  tiltMax?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [tiltMax, -tiltMax]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-tiltMax, tiltMax]), {
    stiffness: 220,
    damping: 22,
  });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  const entranceProps = floatRange
    ? {
        initial: { opacity: 0, scale: 0.9, y: 30, rotate: baseRotate - 6 },
        animate: {
          opacity: 1,
          scale: 1,
          rotate: [baseRotate, baseRotate + 2, baseRotate],
          y: [0, -floatRange, 0],
        },
        transition: {
          opacity: { duration: 0.6, delay },
          scale: { duration: 0.6, delay },
          rotate: { duration: floatDuration, delay, repeat: Infinity, ease: "easeInOut" },
          y: { duration: floatDuration, delay, repeat: Infinity, ease: "easeInOut" },
        },
      }
    : {
        initial: { opacity: 0, y: 24, rotate: baseRotate },
        whileInView: { opacity: 1, y: 0, rotate: baseRotate },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: hoverScale, y: -hoverLift, zIndex: 10 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...entranceProps}
    >
      {children}
    </motion.div>
  );
}
