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

const LEAD = {
  icon: <TribesIcon />,
  title: "Tribes",
  body: "Group hubs with invite/approval membership, polls, a shared proof feed, and full chat — reactions, pin, reply, forward, mute. More like a community hub than a generic team tab.",
  tag: "Community · Chat · Shared dares",
};

const SUPPORTING: { icon: ReactNode; title: string; body: string; tag: string }[] = [
  {
    icon: <RadarIcon />,
    title: "Radar",
    body: "Find nearby Dares, plus a full DM system for coordinating with people around you.",
    tag: "Location · Messaging",
  },
  {
    icon: <HypeIcon />,
    title: "HypeShouts",
    body: "Cheer someone on, or send a HypeKnock to poke a friend into finally doing the Dare.",
    tag: "Reactions · Pokes",
  },
  {
    icon: <FlicksIcon />,
    title: "Flicks & Nacks",
    body: "Lightweight, story-style camera posts: OneShot, Gratitude, MicroWin, SmilesGiven.",
    tag: "OneShot · Gratitude",
  },
  {
    icon: <TraitsIcon />,
    title: "Traits",
    body: "Card-based personality and skill tags, earned from your actual Dare history — not a quiz.",
    tag: "Profile cards",
  },
  {
    icon: <StreaksIcon />,
    title: "Streaks & Points",
    body: "Login streaks, proof streaks, and life points that track consistency, not vanity metrics.",
    tag: "Streaks · Life points",
  },
  {
    icon: <HomieIcon />,
    title: "My Homie",
    body: "Pair up with a buddy for duo accountability — same Dares, mutual pressure, shared wins.",
    tag: "Duo system",
  },
  {
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

        <Reveal className="feature-lead">
          {LEAD.icon}
          <div>
            <h3>{LEAD.title}</h3>
            <p>{LEAD.body}</p>
            <span className="tag-line">{LEAD.tag}</span>
          </div>
        </Reveal>

        <div className="feature-grid">
          {SUPPORTING.map((f, i) => (
            <Reveal className="feature-card" key={f.title} delay={i * 0.05}>
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <span className="tag-line">{f.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
