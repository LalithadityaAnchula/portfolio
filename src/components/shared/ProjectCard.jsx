import { FaGithubSquare } from "react-icons/fa";
import { CgWebsite, CgRadioCheck } from "react-icons/cg";
import uuid from "react-uuid";

export default function ProjectCard({
  title,
  contribution,
  deployment,
  gitLink,
}) {
  const contributionList = JSON.parse(contribution);

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <br />
      <div className="card-content">
        {contributionList.map((contribution) => (
          <div key={uuid()} className="card-content-item">
            <span>
              <CgRadioCheck size="20" />
            </span>
            <span>{contribution}</span>
          </div>
        ))}
      </div>
      <div className="card-footer">
        <a href={gitLink} className="nav-link-animation">
          <FaGithubSquare size="30" />
        </a>
        {deployment && (
          <a href={deployment} className="nav-link-animation">
            <CgWebsite size="30" />
          </a>
        )}
      </div>
    </div>
  );
}
