import React  from 'react';
import ProjectCard from "../shared/ProjectCard";
export default function Projects() {
  return (
    <div className="cards">
      <ProjectCard
        title={"Vaccination Camp App (Cowin Clone)"}
        gitLink={"https://github.com/LalithadityaAnchula/vaccination-camp-app"}
        content={
          "A web application that allows users to book vaccination slots, download certifications, search available camps, and includes admin functionalities for admin"
        }
      />
      <ProjectCard
        title={"REST API for vaccination camp"}
        gitLink={"https://github.com/LalithadityaAnchula/vaccination-camp-api"}
        content={
          "Sends response to the requests from fetch API of vaccination camp app & also includes authentication, authorization, session management, and admin functionalities"
        }
      />
      <ProjectCard
        title={"Knowledge Sharing Website"}
        gitLink={"https://github.com/LalithadityaAnchula/segsev"}
        content={
          "Stack over flow clone , Here users can ask questions and answer, Users can also maintain threads and maintain their profile"
        }
      />
      <ProjectCard
        title={"Task Scheduler Algorithms Simulator"}
        gitLink={"https://github.com/LalithadityaAnchula/os-scheduler"}
        deployment={"https://lalithadityaanchula.github.io/os-scheduler/"}
        content={
          "Takes type of scheduling Algorithm, Processes and their arrival times as inputs and generate entire tabular solution for given inputs"
        }
      />
      <ProjectCard
        title={"Cows & Bulls Game"}
        gitLink={"https://github.com/LalithadityaAnchula/Cows-Bulls"}
        deployment={" https://lalithadityaanchula.github.io/Cows-Bulls/"}
        content={
          "Allows users to play the traditional cows and bulls game (up to 4 digits) any number of times, gives feedback with animations"
        }
      />
    </div>
  );
}
