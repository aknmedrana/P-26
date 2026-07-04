import { useEffect, useState } from "react";
import Card from "../common/Card";
import {
  getProfile,
  getSocials,
  downloadResume,
} from "@/services/dataService";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ProfileCard() {
  const [profile, setProfile] = useState(null);
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
    getSocials().then(setSocials);
  }, []);

  if (!profile || !socials) {
    return <Card className="profile-card">Loading...</Card>;
  }

  return (
    <Card className="profile-card p-2">
      <div className="profile text-center">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="profile-image"
        />

        <h2 className="h4 fw-bold mb-1">{profile.name}</h2>

        <p className="text-danger fw-semibold mb-2">{profile.title}</p>

        <p className="text-secondary small mb-3">
          <FaMapMarkerAlt className="me-1" />
          {profile.location}
        </p>

        <span className="status-badge d-inline-block small">
          {profile.status}
        </span>

        <div className="social-icons d-flex justify-content-center gap-1 ">
          <a href={socials.github} target="_blank" rel="noreferrer">
            <FaGithub size={16} />
          </a>

          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={16} />
          </a>

          {/* <a href={socials.facebook} target="_blank" rel="noreferrer">
            <FaFacebook size={16} />
          </a> */}

          <a href={`mailto:${socials.email}`}>
            <FaEnvelope size={16} />
          </a>
        </div>

        <button onClick={downloadResume} className="btn btn-danger btn-sm">
          Download Resume
        </button>
      </div>
    </Card>
  );
}

export default ProfileCard;
