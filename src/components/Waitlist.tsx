"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section band-tint" id="waitlist">
      <div className="container">
        <Reveal className="waitlist" y={24}>
          <div className="waitlist-head">
            <span className="eyebrow">Coming to iOS &amp; Android</span>
            <h2>
              Join the
              <br />
              <span className="line2">tribe.</span>
            </h2>
            <p>No public store links yet — early access goes out in waves, straight from the team.</p>
          </div>
          <div className="waitlist-body">
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="confirm"
                  className="wl-confirm"
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.span
                    style={{ display: "inline-flex" }}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                  >
                    <CheckIcon />
                  </motion.span>
                  You&apos;re on the list — we&apos;ll be in touch.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="wl-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <label htmlFor="wlEmail" className="sr-only">
                    Email address
                  </label>
                  <input type="email" id="wlEmail" placeholder="you@email.com" required />
                  <button type="submit" className="btn btn-primary">
                    Notify me
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            <p className="wl-note">
              No spam, one email when we launch. This form is a preview and isn&apos;t wired up
              yet.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
