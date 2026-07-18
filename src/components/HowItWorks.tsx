"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Dare",
    body: "Create one, browse by category, or get sent one by a friend or your Tribe.",
  },
  {
    num: "02",
    title: "Proof",
    body: "Photo, video, or text evidence. No proof, no credit — that's the whole point.",
  },
  {
    num: "03",
    title: "Validate",
    body: "Real users — not an algorithm — review the proof and confirm it's legit.",
  },
  {
    num: "04",
    title: "SlayCard",
    body: "A trophy card gets minted for your feed. Certified, shareable, permanent.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">The loop</span>
          <h2>Four steps. Zero room to fake it.</h2>
          <p>
            Every Dare runs through the same accountability loop — from claiming it to owning the
            receipt.
          </p>
        </Reveal>
        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal className="step" key={step.num} delay={i * 0.1}>
              <motion.span
                className="num"
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                {step.num}
              </motion.span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
