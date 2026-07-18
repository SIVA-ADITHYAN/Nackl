import Reveal from "./Reveal";

const TRIBES = [
  "Freedom Fitness",
  "Future Techies",
  "Elite Uni",
  "Borchelle University",
  "Daily Challengers",
  "Dare Creators",
];

export default function Tribes() {
  return (
    <section className="section" id="tribes">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Real tribes, already forming</span>
          <h2>Find your people, not just a leaderboard.</h2>
          <p>
            Tribes lean campus- and community-style — more like a group hub than a generic
            &quot;team&quot; tab.
          </p>
        </Reveal>
        <div className="chips">
          {TRIBES.map((tribe, i) => (
            <Reveal className="chip" key={tribe} delay={i * 0.06} y={10}>
              {tribe}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
