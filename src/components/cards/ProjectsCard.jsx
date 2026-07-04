import { useEffect, useState } from "react";
import Card from "../common/Card";
import { getProjects } from "../../services/dataService";

const ProjectsCard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="projects-area">
      <Card className="p-3">
        <h6 className="text-danger fw-bold mb-3">Projects</h6>

        {projects.map((project) => (
          <div key={project.id} className="mb-3 pb-3 border-bottom">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="mb-0 fw-semibold">{project.title}</h6>

                <small className="text-muted">{project.description}</small>
              </div>

              {project.featured && (
                <span className="badge text-bg-danger">Featured</span>
              )}
            </div>

            {/* Tech stack */}
            <div className="mt-2 d-flex flex-wrap gap-1">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge text-bg-light border small">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.github || project.demo) && (
              <div className="mt-2 d-flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="small text-danger"
                  >
                    GitHub  |
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="small text-danger"
                  >
                    Live
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </Card>
    </div>
  );
};

export default ProjectsCard;
