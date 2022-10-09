import ProjectCard from "../shared/ProjectCard";
import projects from "../../data/projects.js";
import uuid from "react-uuid";

export default function Projects() {
  return (
    <div className="cards">
      {projects.map((project) => (
        <ProjectCard
          key={uuid()}
          title={project.name}
          gitLink={project.gitLink}
          contribution={JSON.stringify(project.contribution)}
        />
      ))}
    </div>
  );
}
