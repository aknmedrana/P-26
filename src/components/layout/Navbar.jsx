import { useEffect, useState } from "react";
import { getProfile } from "../../services/dataService";

function Navbar({ onOpenModal }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  const links = [
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "contact",
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          href="#"
        >
          <img
            src="/images/k-logo.png"
            alt="Logo"
            width="36"
            height="36"
            className="rounded-circle"
          />

          <span>{profile ? profile.name : "Loading..."}</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => (
              <li className="nav-item" key={link}>
                <button
                  type="button"
                  className="nav-link btn btn-link text-decoration-none"
                  onClick={() => onOpenModal(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
