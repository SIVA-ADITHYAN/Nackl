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
        <ol className="tribe-index">
          {TRIBES.map((tribe, i) => (
            <Reveal as="li" key={tribe} delay={i * 0.05} y={10}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              {tribe}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
