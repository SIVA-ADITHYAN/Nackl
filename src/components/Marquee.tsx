const DARES = [
  "HOLD PLANK 60 SEC",
  "RUN 1KM",
  "SNAP NATURE CHALLENGE",
  "COLD SHOWER",
  "NO-SCROLL MORNING",
  "CALL YOUR MOM",
  "10 PUSH-UPS NOW",
  "WRITE ONE GRATITUDE",
];

export default function Marquee() {
  const items = [...DARES, ...DARES];
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((dare, i) => (
          <span className="marquee-item" key={i}>
            {dare}
          </span>
        ))}
      </div>
    </div>
  );
}
