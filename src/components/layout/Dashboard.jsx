import { useCallback, useEffect, useMemo, useState } from "react";

import ProfileCard from "../cards/ProfileCard";
import AboutCard from "../cards/AboutCard";
import SkillsCard from "../cards/SkillsCard";
import ProjectsCard from "../cards/ProjectsCard";
import ExperienceCard from "../cards/ExperienceCard";
import EducationCard from "../cards/EducationCard";
import ContactCard from "../cards/ContactCard";

import "../../styles/dashboard.css";

const SECTION_CONFIG = [
  {
    id: "profile",
    area: "profile",
    tag: "01",
    label: "profile",
    Component: ProfileCard,
  },
  {
    id: "about",
    area: "about",
    tag: "02",
    label: "about",
    Component: AboutCard,
  },
  {
    id: "education",
    area: "education",
    tag: "03",
    label: "education",
    Component: EducationCard,
  },
  {
    id: "skills",
    area: "skills",
    tag: "04",
    label: "skills",
    Component: SkillsCard,
  },
  {
    id: "projects",
    area: "projects",
    tag: "05",
    label: "projects",
    Component: ProjectsCard,
  },
  {
    id: "experience",
    area: "experience",
    tag: "06",
    label: "experience",
    Component: ExperienceCard,
  },
  {
    id: "contact",
    area: "contact",
    tag: "07",
    label: "contact",
    Component: ContactCard,
  },
];

function Dashboard({ activeSection, onCloseModal }) {
  const [activeId, setActiveId] = useState(null);

  const openCard = useCallback((id) => {
    setActiveId(id);
  }, []);

  const closeCard = useCallback(() => {
    setActiveId(null);
    onCloseModal();
  }, [onCloseModal]);

  const currentSection = useMemo(() => {
    const id = activeSection || activeId;
    return SECTION_CONFIG.find((s) => s.id === id);
  }, [activeSection, activeId]);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeCard();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeCard]);

  const renderGridItem = useCallback(
    ({ id, area, tag, label, Component }) => (
      <div
        key={id}
        className={`area ${area}-area`}
        onClick={() => openCard(id)}
        role="button"
        tabIndex={0}
      >
        <div className="teaser-card">
          <div className="teaser-eyebrow">
            <span className="tag-index">{tag}</span>
            <span className="tag-label">{`<${label}>`}</span>
          </div>

          <div className="teaser-body">
            <Component />
          </div>

          <div className="teaser-fade" />
        </div>
      </div>
    ),
    [openCard]
  );

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-grid">{SECTION_CONFIG.map(renderGridItem)}</div>
      {currentSection && (
        <div
          className="modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && closeCard()}
        >
          <div className="modal-panel">
            <button className="modal-close" onClick={closeCard}>
              ×
            </button>

            <div className="modal-eyebrow">
              <span className="tag-index">{currentSection.tag}</span>
              <span className="tag-label">{`<${currentSection.label}>`}</span>
            </div>

            <div className="modal-body">
              <currentSection.Component />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
