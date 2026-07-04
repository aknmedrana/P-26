import { useEffect, useState } from "react";
import Card from "../common/Card";
import { getProfile } from "@/services/dataService";

function AboutCard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  if (!profile) {
    return <Card className="p-3">Loading...</Card>;
  }

  return (
    <Card className="p-3 h-100">
      {/* HEADER */}
      <div className="mb-2">
        <h6 className="fw-bold text-danger mb-1">About Me</h6>
        <div className="border-bottom mb-2" />
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted small mb-3 lh-sm">{profile.about}</p>

      {/* STATS */}
      <div className="d-flex justify-content-between text-center gap-2 mt-2">
        <div className="flex-fill py-1">
          <div className="fw-bold text-danger fs-7 lh-1 mb-1">1+</div>
          <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>
            Years
          </small>
        </div>

        <div className="flex-fill py-1 border-start border-end px-2">
          <div className="fw-bold text-danger fs-7 lh-1 mb-1">10+</div>
          <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>
            Projects
          </small>
        </div>

        <div className="flex-fill py-1">
          <div className="fw-bold text-danger fs-7 lh-1 mb-1">∞</div>
          <small className="text-muted d-block" style={{ fontSize: "0.7rem" }}>
            Curiosity
          </small>
        </div>
      </div>
    </Card>
  );
}

export default AboutCard;
