"use client";

import { motion } from "framer-motion";
import AppMock from "./AppMock";

export default function Hero() {
  return (
    <section className="hero">
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
            <a href="#waitlist" className="btn btn-primary">
              Join the waitlist
            </a>
            <a href="#how" className="btn btn-ghost">
              See how it works
            </a>
          </motion.div>
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <div className="meta">
              <span className="meta-label">Dares</span>
              <span className="meta-value">Take &amp; assign</span>
            </div>
            <div className="meta">
              <span className="meta-label">Validators</span>
              <span className="meta-value">Real review</span>
            </div>
            <div className="meta">
              <span className="meta-label">SlayCards</span>
              <span className="meta-value">Receipts you keep</span>
            </div>
          </motion.div>
        </div>

        <AppMock />
      </div>
    </section>
  );
}
