import { useEffect, useState } from "react";
import Card from "../common/Card";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { getSocials } from "../../services/dataService";

const ContactCard = () => {
  const [socials, setSocials] = useState(null);

  useEffect(() => {
    getSocials().then(setSocials);
  }, []);

  if (!socials) {
    return <Card className="p-3">Loading...</Card>;
  }

  return (
    <Card className="p-3 h-100">
      {/* HEADER */}
      <div className="mb-2">
        <h6 className="fw-bold text-danger mb-1">Contact</h6>
        <div className="border-bottom mb-2" />
      </div>

      {/* CONTACT INFO */}
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted d-block">Email</small>

          <a
            href={`mailto:${socials.email}`}
            className="text-dark text-decoration-none fw-semibold small"
          >
            {socials.email}
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="d-flex gap-3">
          <a href={`mailto:${socials.email}`} className="text-danger">
            <FaEnvelope size={18} />
          </a>

          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ContactCard;
