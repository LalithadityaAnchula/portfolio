import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function ProjectCard({ title, content, deployment, gitLink }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <br />
      <div className="card-content">{content}</div>

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
