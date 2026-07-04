import { useEffect, useState } from "react";
import Card from "../common/Card";
import { getEducation } from "../../services/dataService";

function EducationCard() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getEducation().then(setEducation);
  }, []);
  return (
    <Card className="p-3 h-100">
      {/* HEADER */}
      <div className="mb-2">
        <h6 className="fw-bold text-danger mb-1">Education</h6>
        <div className="border-bottom mb-2" />
      </div>

      {/* LIST */}
      <div className="d-flex flex-column gap-3">
        {education.map((item, index) => (
          <div
            key={index}
            className={
              index !== education.length - 1 ? "pb-2 border-bottom" : ""
            }
          >
            <div className="d-flex justify-content-between align-items-start gap-2">
              {/* LEFT */}
              <div className="d-flex gap-2 flex-grow-1 align-items-start">
                {/* LOGO */}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.school}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                )}

                {/* TEXT */}
                <div>
                  <h6 className="mb-1 fw-semibold lh-1">{item.school}</h6>
                  <small className="text-danger d-block lh-1">
                    {item.course}
                  </small>
                  <small
                    className="text-muted text-end lh-1 "
                    style={{ fontSize: "0.7rem", fontWeight: 500 }}
                  >
                    {item.start} – {item.end}
                  </small>
                </div>
              </div>

              {/* RIGHT
              <small
                className="text-muted text-end lh-1 "
                style={{ fontSize: "0.7rem", fontWeight: 500 }}
              >
                {item.start} – {item.end}
              </small> */}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default EducationCard;
