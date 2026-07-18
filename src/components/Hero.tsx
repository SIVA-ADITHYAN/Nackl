"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

export default function Hero() {
  return (
    <section className="hero">
      <div className="orb hero-orb-a" />
      <div className="orb hero-orb-b" />
      <div className="container hero-grid">
        <div>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proof-based accountability
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Talk is cheap.
            <br />
            <span className="line2">Proof isn&apos;t.</span>
          </motion.h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Nackl turns self-improvement into something you can&apos;t fake. Take a Dare, post the
            receipts, get Validated by real people — not your own word for it.
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <motion.a
              href="#waitlist"
              className="btn btn-lime"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Join the waitlist
            </motion.a>
            <motion.a
              href="#how"
              className="btn btn-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              See how it works
            </motion.a>
          </motion.div>
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <span>
              <strong>Dares</strong> — take &amp; assign
            </span>
            <span>
              <strong>Validators</strong> — real review
            </span>
            <span>
              <strong>SlayCards</strong> — receipts you keep
            </span>
          </motion.div>
        </div>

        <div className="fan-stage">
          <TiltCard
            className="proof-card card-a"
            baseRotate={-9}
            floatRange={12}
            floatDuration={4.6}
            delay={0.3}
          >
            <div className="shot" />
            <div className="cap">Plank — 60 sec</div>
            <div className="who">@keenan · +9 validators</div>
            <div className="stamp">
              <span>VALIDATED</span>
            </div>
          </TiltCard>
          <TiltCard
            className="proof-card card-b"
            baseRotate={4}
            floatRange={14}
            floatDuration={5.2}
            delay={0.42}
          >
            <div className="shot" />
            <div className="cap">Ran 1km at dawn</div>
            <div className="who">@ria · +14 validators</div>
          </TiltCard>
          <TiltCard
            className="proof-card card-c"
            baseRotate={11}
            floatRange={10}
            floatDuration={4.9}
            delay={0.54}
          >
            <div className="shot" />
            <div className="cap">Snap Nature Challenge</div>
            <div className="who">@dev · +6 validators</div>
            <div className="stamp">
              <span>VALIDATED</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
