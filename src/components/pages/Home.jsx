import Typewriter from "typewriter-effect";
import SkillCard from "../shared/SkillCard";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-content-title">
            <span>Hi, I'm </span>
            <u>Lalithaditya</u>
          </div>
          <div className="hero-content-title">A Web Developer</div>
          <div className="discription">
            <Typewriter
              options={{
                strings: [
                  "I am also a Full Stack Developer who loves javascript",
                  "A Student at National Institute of Technology, Andhra Pradesh",
                  "A Competitive Programming Lover",
                  "I would like to keep things simple and clean",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 5,
              }}
            />
          </div>
        </div>
        <div className="hero-image">
          <img src={require("../../images/image.jpeg")} alt="Loadint" />
        </div>
      </section>
      <section>
        <h1 className="subtitle">Skills</h1>
        <div className="cards">
          <SkillCard
            title={"Web Development"}
            content={
              "I am a Full Stack Web Developer (MERN) and have quite some experience in it as well."
            }
          />
          <SkillCard
            title={"Problem Solving"}
            content={
              "I love solving and real world problems using Data structures and Algorithms"
            }
          />
        </div>
        <div className="tech-stack">
          <h2 className="heading">Tech I'm familar with</h2>
          <div className="skill-list">
            <div className="skill-list-item">Mongo DB</div>
            <div className="skill-list-item">Express Js</div>
            <div className="skill-list-item">Node Js</div>
            <div className="skill-list-item">React Js</div>
            <div className="skill-list-item">Javascript</div>
            <div className="skill-list-item">C++</div>
            <div className="skill-list-item">C</div>
            <div className="skill-list-item">Python</div>
            <div className="skill-list-item">Java</div>
            <div className="skill-list-item">HTML 5</div>
            <div className="skill-list-item">CSS 3</div>
            <div className="skill-list-item">Bootstrap</div>
            <div className="skill-list-item">Bulma</div>
            <div className="skill-list-item">Git</div>
          </div>
        </div>
      </section>
      <section className="ending">
        <h1 className="subtitle">
          I occasionally take on few intresting projects.
        </h1>
        <p style={{ fontSize: "1.6rem" }}>
          Have work or Job for me 😍, please feel free to ping me on{" "}
          <u>Linkedin</u>
        </p>
      </section>
    </>
  );
}
