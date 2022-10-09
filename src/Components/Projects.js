import projects from "../Assets/projects.json";
import "../Assets/CSS/Projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="projects_title">MES PROJETS</h1>
      <div className="projects_list">
        <div className="project_text">
          {projects.projects.map((elem) => (
            <article className="project" data-aos="fade-up" key={elem.h4}>
              <div className="project_title_container">
                <h2 className="project_title"> {elem.h4}</h2>
              </div>
              <div className="project_informations">
                <p className="project_description">{elem.p}</p>

                {/*  {projects.projects.techno.map((tech) => (
                  <div className="project_technos">{tech.techno}</div>
                ))}  */}
                <div className="project_technos">{elem.techno}</div>
              </div>
              <a href={elem.link} className="project_img-container">
                <img
                  className="project_img"
                  src={"/Img" + elem.img}
                  alt={"Aperçu du site : " + elem.h4}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
