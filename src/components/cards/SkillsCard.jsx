import { useEffect, useState } from "react";
import Card from "../common/Card";
import { getSkills } from "@/services/dataService";

const SkillsCard = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  return (
    <div className="skills-area">
      <Card className="p-1">
        <h6 className="text-danger fw-bold mb-1">Skills</h6>

        <div className="d-flex flex-wrap gap-1">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="badge border text-dark bg-light px-2 py-1"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SkillsCard;
