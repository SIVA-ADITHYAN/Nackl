"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { CheckIcon, HypeIcon } from "./icons";

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

        <div className="phone-mock">
          <motion.div
            className="phone-frame"
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="phone-topbar">
              <span className="pill pill-light">🔥 Day 12 streak</span>
              <span className="pill pill-lime">Active Dare</span>
            </div>
            <div className="phone-shot" />
            <div className="phone-caption">
              <span className="dare-label">Dare</span>
              <strong>Hold plank · 60 sec</strong>
            </div>
          </motion.div>
          <TiltCard
            className="float-badge badge-validated"
            baseRotate={-4}
            floatRange={10}
            floatDuration={4.6}
            delay={0.5}
          >
            <CheckIcon />
            <div>
              <span className="fb-title">Proof validated</span>
              <span className="fb-sub">@sarah confirmed it&apos;s legit</span>
            </div>
          </TiltCard>
          <TiltCard
            className="float-badge badge-hype"
            baseRotate={3}
            floatRange={12}
            floatDuration={5.4}
            delay={0.66}
          >
            <HypeIcon />
            <div>
              <span className="fb-title">Hypeshout</span>
              <span className="fb-sub">+340 people hyped you</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
