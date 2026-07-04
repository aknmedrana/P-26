import { useEffect, useState } from "react";
import Card from "../common/Card";
import { getExperience } from "@/services/dataService";

const ExperienceCard = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getExperience().then(setExperience);
  }, []);

  return (
    <Card className="p-3 h-100">
      {/* HEADER */}
      <div className="mb-2">
        <h6 className="fw-bold text-danger mb-1">Experience</h6>
        <div className="border-bottom mb-2" />
      </div>

      {/* LIST */}
      <div className="d-flex flex-column gap-3">
        {experience.map((job, index) => (
          <div
            key={index}
            className={
              index !== experience.length - 1 ? "pb-2 border-bottom" : ""
            }
          >
            {/* TOP ROW */}
            <div className="d-flex justify-content-between align-items-start gap-2">
              {/* LEFT */}
              <div className="flex-grow-1">
                <h6 className="mb-1 fw-semibold lh-1">{job.position}</h6>

                <small className="text-danger d-block lh-1">
                  {job.company}
                </small>
              </div>

              {/* RIGHT */}
              <small className="text-muted text-end lh-1">
                {job.start} – {job.end}
              </small>
            </div>

            {/* DESCRIPTION */}
            <p className="small text-muted mt-2 mb-0 lh-sm">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
