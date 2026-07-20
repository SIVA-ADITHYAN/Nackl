"use client";

import TiltCard from "./TiltCard";
import { CameraIcon, CheckIcon, HypeIcon, StreaksIcon } from "./icons";

export default function AppMock() {
  return (
    <TiltCard className="app-mock" tiltMax={6} hoverLift={4} hoverScale={1.01} delay={0.2}>
      <div className="app-mock-bezel">
        <div className="app-mock-screen">
          <div className="app-mock-topline">
            <span className="app-mock-time">9:41</span>
            <span className="tag tag-accent">Active dare</span>
          </div>

          <div className="app-mock-card">
            <span className="app-mock-label">Dare &middot; Fitness</span>
            <h3>Hold plank &mdash; 60 sec</h3>
            <div className="app-mock-proof">
              <CameraIcon />
              <span>Proof attached</span>
            </div>
          </div>

          <div className="app-mock-validated">
            <div className="avatar-stack" aria-hidden="true">
              <span className="avatar avatar-a">S</span>
              <span className="avatar avatar-b">J</span>
              <span className="avatar avatar-c">K</span>
            </div>
            <span className="app-mock-status">
              <CheckIcon />
              Validated by 3 people
            </span>
          </div>

          <div className="app-mock-footer">
            <span>
              <HypeIcon />
              340 hyped this
            </span>
            <span>
              <StreaksIcon />
              12-day streak
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
