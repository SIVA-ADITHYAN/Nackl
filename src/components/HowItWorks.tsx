import Reveal from "./Reveal";
import { CheckIcon, FlicksIcon, RadarIcon, TraitsIcon } from "./icons";

const STEPS = [
  {
    num: "01",
    title: "Dare",
    body: "Create one, browse by category, or get sent one by a friend or your Tribe.",
    icon: <RadarIcon />,
  },
  {
    num: "02",
    title: "Proof",
    body: "Photo, video, or text evidence. No proof, no credit — that's the whole point.",
    icon: <FlicksIcon />,
  },
  {
    num: "03",
    title: "Validate",
    body: "Real users — not an algorithm — review the proof and confirm it's legit.",
    icon: <CheckIcon />,
  },
  {
    num: "04",
    title: "SlayCard",
    body: "A trophy card gets minted for your feed. Certified, shareable, permanent.",
    icon: <TraitsIcon />,
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
              <div className="step-top">
                <span className="num">{step.num}</span>
                <span className="step-icon">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
