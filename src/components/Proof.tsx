import Reveal from "./Reveal";
import { CameraIcon, CheckIcon } from "./icons";

const STATS = [
  { value: "100%", label: "Peer-verified proof" },
  { value: "0", label: "Fake it options" },
  { value: "∞", label: "Ways to show up" },
];

export default function Proof() {
  return (
    <section className="section" id="proof">
      <div className="container proof-mechanic">
        <Reveal className="proof-shot" y={20}>
          <span className="proof-shot-media">
            <CameraIcon />
          </span>
          <span className="proof-shot-tag">
            <CheckIcon />
            Validated proof
          </span>
        </Reveal>
        <Reveal className="proof-copy" y={20} delay={0.1}>
          <span className="eyebrow">The trust mechanic</span>
          <h2>
            Anyone can claim a win.
            <br />
            <span className="line2">Few can prove it.</span>
          </h2>
          <p className="lead">
            Nackl flips self-improvement on its head. Instead of trusting yourself to be honest,
            your Tribe holds you to it. Every proof is reviewed by real Validators — so a
            completed Dare actually means something.
          </p>
          <div className="stat-row">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
