import WorkCard from "../shared/WorkCard";
export default function Work() {
  return (
    <div className="work-cards">
      <WorkCard
        title={"ZOHO Corporation"}
        content={"2 months | 2022 | Summer Intern | Full Time"}
        imageName={"zoho.png"}
        discription={
          "Developed React web applications and a backend REST API's for them. Worked on the frontend of the application using React.js and Redux. Worked on the backend of the application using Node.js and Express.js. Worked on the database of the application using MongoDB."
        }
      />
      <WorkCard
        title={"CSEA NIT Andhra Pradesh"}
        content={"2 months | 2022 | Full Stack Developer | Part Time"}
        imageName={"nit.jpeg"}
        discription={
          "Worked on developping a Django app that digitalizes and automates all activities of NIT Andhra TNP section"
        }
      />
      <WorkCard
        title={"TNP NIT Andhra Pradesh"}
        content={"8 months | 2021 - 2022 | Full Stack Developer | Part Time"}
        imageName={"nit.jpeg"}
        discription={
          "Developed a react web application that aids students in finding resources, updates, and announcements of CSEA"
        }
      />
    </div>
  );
}
