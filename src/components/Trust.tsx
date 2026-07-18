import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

const ROWS = [
  ["LOCATION DATA", "VISIBLE"],
  ["PROOF MEDIA", "VISIBLE"],
  ["USAGE ANALYTICS", "VISIBLE"],
  ["THIRD-PARTY SHARING", "VISIBLE"],
  ["YOUR CONTROL", "FULL"],
];

const CHECKS = [
  "See every data point collected, in plain language",
  "Know why it's collected, not just that it is",
  "Control it from Settings — no support ticket needed",
];

export default function Trust() {
  return (
    <section className="section" id="privacy">
      <div className="container">
        <Reveal className="trust" y={32}>
          <div className="trust-grid">
            <div>
              <span className="eyebrow">Transparency dashboard</span>
              <h2>We show our work. Most apps don&apos;t.</h2>
              <p className="lead">
                Verification only means something if the app doing the verifying is honest too.
                Nackl ships a Transparency Dashboard so you can see exactly what&apos;s tracked —
                no digging through a privacy policy required.
              </p>
              <ul className="checklist">
                {CHECKS.map((c, i) => (
                  <Reveal key={c} as="li" delay={0.1 + i * 0.1} y={12}>
                    <CheckIcon /> {c}
                  </Reveal>
                ))}
              </ul>
            </div>
            <div className="receipt">
              {ROWS.map(([label, value], i) => (
                <Reveal key={label} delay={0.1 + i * 0.08} y={8}>
                  <div className="row">
                    <span>{label}</span>
                    <b>{value}</b>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
