import React from 'react';
import "../../css/Navbar.css";
import { MdComputer } from "react-icons/md";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="nav-links nav-links-pages">
          <NavLink to="/work">
            <span className="nav-link nav-link-animation"> Work</span>
          </NavLink>
          <NavLink to="/projects">
            <span className="nav-link nav-link-animation"> Projects</span>
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" className="my-logo">
            <span className="nav-link nav-link-animation">
              <MdComputer size="36" />
            </span>
          </NavLink>
        </div>
        <div className="nav-links nav-links-social">
          <a href="https://www.linkedin.com/in/lalithaditya-anchula-956783195/">
            <span className="nav-link nav-link-animation">
              <FaLinkedin size="20" />
            </span>
          </a>
          <a href="https://github.com/LalithadityaAnchula">
            <span className="nav-link nav-link-animation">
              <FaGithubSquare size="20" />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
