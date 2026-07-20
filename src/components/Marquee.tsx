const DARES = [
  "Hold plank, 60 sec",
  "Run 1km",
  "Snap a nature shot",
  "Cold shower",
  "No-scroll morning",
  "Call your mom",
  "10 push-ups, now",
  "Write one gratitude",
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
