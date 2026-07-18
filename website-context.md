# Nackl — Website Context

Reference brief for building the **marketing/landing page website** for the Nackl mobile app.
Written from the actual mobile app codebase (this repo) so a website project can be built without
re-reverse-engineering the app. If anything here conflicts with a live design/copy decision made
later, this file should be treated as a starting point, not gospel — update it as decisions are made.

> **Naming disambiguation**: there is a separate, newer sibling project on this machine called
> **Nackl-Lite** (`/Users/seshathilakg/Desktop/Nackl-Lite`) with different terminology (Challenge,
> Trust/Roast, Chaser, Flex) and its own positioning line ("a verifiable proof-of-work credential —
> a résumé you can't fake"). **This website is for the app in *this* repo** — the one with Dares,
> Tribes, HypeShouts, and SlayCards. Do not mix in Nackl-Lite's terminology or vision docs.

## One-liner

Nackl is a social accountability and challenge app: users take on "Dares" (challenges), post photo/video
**proof**, and get that proof **validated** by other users — turning self-improvement into something
socially verified rather than just self-reported.

## Core concept / value prop

The app's differentiator is **verification**: completing a challenge isn't enough — other users act as
Validators who confirm the proof is real. This is reinforced by an unusually deep in-app privacy
posture (a "Transparency Dashboard" and tracking-data page in Settings), suggesting the brand angle is
something like *"real accountability, not just another self-improvement app you can fake your way through."*

Tone is casual, Gen-Z-leaning, gamified — not corporate/clinical. Sample onboarding copy: *"Go ahead and
set up your account"* / *"Sign in-up to enjoy the best managing experience."*

## Target audience

Gen-Z / young-adult, habit-building and self-improvement minded, comfortable with social/community apps.
Evidence from in-app content:
- Dare examples: "Hold plank 60 sec", "Run 1km", "Snap Nature Challenge" — mix of fitness, mindfulness,
  lifestyle micro-challenges.
- Persona/category labels used in-app: "Fitness Coach", "Fitness Freak", "Daily Challenger", "Champions",
  "Creator", "Dare Creator".
- Community/Tribe examples: "Freedom Fitness", "Future Techies", "Elite Uni", "Borchelle University" —
  campus/community-style groups, not just 1:1 fitness tracking.

## Core features (for a features/how-it-works section)

- **Dares** — challenges users create, browse by category, schedule, complete, bookmark, or send
  directly to a friend ("Dare a friend") or into a Tribe. States: active, scheduled, completed, cancelled.
- **Proof & Validators** — photo/video/text evidence of a completed dare; other users act as Validators
  who confirm it's legit. This is the core trust mechanic of the app.
- **HypeShouts / HypeKnock** — cheer/reaction and direct-challenge-poke mechanics between users.
- **SlayCards** — shareable "trophy card" generated per completed dare — the app's built-in share/growth
  loop artifact (think: a shareable achievement card for social feeds/stories).
- **Tribes** — group hubs with approval/invite-based membership, group polls, shared dares, a group
  proof feed, and full group chat (reactions, pin, reply, forward, mute/lock/kick). More like a
  community hub than a simple "group" feature.
- **Radar** — location-based discovery of nearby dares, plus a full DM/messaging system (not just discovery).
- **Flicks / Nacks** — lightweight, story-like camera posts distinct from formal Dares, with sub-modes:
  OneShot, Gratitude, MicroWin, SmilesGiven ("small good deed" snapshots).
- **Traits** — card-based personality/skill tags tied to a user's dare history, shown on profile.
- **Profile** — rich profile system: Curio cards, Goal Deck, Mini-Me gallery, "My Homie" buddy/duo
  accountability-partner system, followers, life points, streaks (login streak, proof streak).
- **AI Dare Generator** — AI-assisted dare generation/refinement/validation (backend service, not
  necessarily a headline marketing feature, but notable as a technical differentiator).
- **Privacy/Transparency tooling** — in-app Transparency Dashboard and tracking-data visibility, unusually
  deep for a social app; worth highlighting if positioning around trust/privacy.

## Visual identity

- **Primary brand color**: `#139E75` (deep teal-green)
- Related greens: `#1AAD7A` (mint/Primary950), `#ECFDF7` (secondary, very light mint), `#F2FFF4` (LoginBG, pale green wash)
- **Accent colors**: `#D72F2F` / `#fc0303` (red), `#DB9600` (gold), `#67491E` (brownPoints), `#94A3B8` (textgray), `#535353` (SelectGray), `#bebebe81` (gray), `#dadada` (opacitygray)
- Full palette source of truth: `tailwind.config.js` (repo root) — pull from here directly rather than
  copying values into a second config, since it's the canonical source and may change.
- App is **light-mode-first** (`userInterfaceStyle: "light"` in `app.json`), white splash/background.
- Built with NativeWind (Tailwind for React Native) — if the website is also React/Next-based, reusing
  the same Tailwind tokens would keep brand consistency trivial.

### Existing logo/brand assets (in `assets/`, reusable for the website)

- `icon.png`, `adaptive-icon.png`, `splash-icon.png`, `favicon.png` — app icon variants
- `logo.png`, `NacklLogoRGB.png` — full wordmark
- `NacklCLogo.png`, `nacklTLogo.png` — "C" mark and "T" mark (icon-only lockups)
- Feature/UI art that could inform illustration style: `DarePoints.png`, `hypeknock.png`,
  `keyholeIcon.png`, `lifePoint.png`, `radar.png`, `slay1.png` / `slay2.png` / `slay3.png`,
  `slaysymbol.png`, `zinga.png` / `zingacrd.jpeg`, `BG.png`, `chatbg.png`, `mockDare.jpg`
  (`mockDare.jpg` in particular could work as an app-screenshot-style hero image placeholder).

## Backend/API (for context only — a marketing site likely doesn't call this directly, except maybe a waitlist form)

- Production base: `https://nackl.com/api/`
- WebSocket (notifications): `wss://nackl.com/ws/notifications/`
- Separate AI service: `https://nackl.com/ai/dare_generator_service/api/v1/dare/{generate,refine,validate}`
- Resource categories: auth (`users/...`, social login), feed (`core/home/feed/`, `core/feed/...`),
  profile (`profiles/...`), tribes (`tribes/groups/...`), stories/nacks (`stories/...`), dares/challenges
  (`challenges/...`), settings/support (`core/support/`, `core/transparency/`).
- Full endpoint list: `Utilities/URLs.tsx` in this repo (~130 endpoints).

## Distribution status (as of this writing)

- iOS: build pipeline set up via EAS — ad-hoc build working for Firebase App Distribution (internal
  testers); TestFlight/App Store submission in progress (Xcode 26 compatibility fix applied via
  `plugins/withFmtConstevalFix.js`).
- No App Store / Play Store public links yet — a marketing site built now should plan for a
  "join the waitlist" / "coming soon" state rather than direct store badges, unless that's changed
  by the time the site is built.

## What NOT to do

- Don't use Nackl-Lite terminology (Challenge, Trust/Roast, Chaser, Flex) — this app uses Dare, Validator,
  HypeShout/Hype, Follower, Profile.
- Don't invent pricing/monetization details — nothing in this codebase indicates a pricing model; treat
  the app as free unless told otherwise.
- Don't assume this is a fitness-only or dating app — it's broader (self-improvement + social + community),
  fitness is just one common dare category among several.
