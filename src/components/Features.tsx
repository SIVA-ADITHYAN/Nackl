import TiltCard from "./TiltCard";
import Reveal from "./Reveal";
import {
  AiIcon,
  FlicksIcon,
  HomieIcon,
  HypeIcon,
  RadarIcon,
  StreaksIcon,
  TraitsIcon,
  TribesIcon,
} from "./icons";
import type { ReactNode } from "react";

const FEATURES: {
  span: "c-span2" | "c-span1";
  accent?: boolean;
  icon: ReactNode;
  title: string;
  body: string;
  tag: string;
}[] = [
  {
    span: "c-span2",
    accent: true,
    icon: <TribesIcon />,
    title: "Tribes",
    body: "Group hubs with invite/approval membership, polls, a shared proof feed, and full chat — reactions, pin, reply, forward, mute.",
    tag: "Community · Chat · Shared dares",
  },
  {
    span: "c-span1",
    icon: <RadarIcon />,
    title: "Radar",
    body: "Find nearby Dares, plus a full DM system for coordinating with people around you.",
    tag: "Location · Messaging",
  },
  {
    span: "c-span1",
    icon: <HypeIcon />,
    title: "HypeShouts",
    body: "Cheer someone on, or send a HypeKnock to poke a friend into finally doing the Dare.",
    tag: "Reactions · Pokes",
  },
  {
    span: "c-span2",
    icon: <FlicksIcon />,
    title: "Flicks & Nacks",
    body: "Lightweight, story-style camera posts for the in-between moments: OneShot, Gratitude, MicroWin, SmilesGiven.",
    tag: "OneShot · Gratitude · MicroWin",
  },
  {
    span: "c-span1",
    icon: <TraitsIcon />,
    title: "Traits",
    body: "Card-based personality and skill tags, earned from your actual Dare history — not a quiz.",
    tag: "Profile cards",
  },
  {
    span: "c-span1",
    icon: <StreaksIcon />,
    title: "Streaks & Points",
    body: "Login streaks, proof streaks, and life points that track consistency, not vanity metrics.",
    tag: "Streaks · Life points",
  },
  {
    span: "c-span1",
    icon: <HomieIcon />,
    title: "My Homie",
    body: "Pair up with a buddy for duo accountability — same Dares, mutual pressure, shared wins.",
    tag: "Duo system",
  },
  {
    span: "c-span1",
    icon: <AiIcon />,
    title: "AI Dare Generator",
    body: "An assist service that can generate, refine, and sanity-check new Dares on demand.",
    tag: "Generate · Refine",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">What&apos;s inside</span>
          <h2>More than a to-do list with witnesses.</h2>
          <p>
            Nackl is a full community layer around accountability — group hubs, discovery,
            personality cards, and a duo system for when solo isn&apos;t enough.
          </p>
        </Reveal>

        <div className="bento">
          {FEATURES.map((f, i) => (
            <TiltCard
              key={f.title}
              className={`cell ${f.span} ${f.accent ? "accent" : ""}`}
              delay={i * 0.07}
              tiltMax={5}
              hoverLift={6}
              hoverScale={1.02}
            >
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <span className="tag">{f.tag}</span>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
