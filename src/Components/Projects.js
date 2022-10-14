import projects from "../Assets/projects.json";
import "../Assets/CSS/Projects.scss";
console.log(projects.projects.length);
export default function Projects() {
  const handleFade = () => {
    for (let i = 0; i < projects.projects.length; i++) {
      console.log(projects.projects);
      if (i % 2 !== 0) {
        return "fade-right";
      } else return "fade-left";
    }
  };
  return (
    <div className="projects" id="projects">
      <h1 className="projects_title">MES PROJETS</h1>
      <div className="projects_list">
        {projects.projects.map((elem) => (
          <article
            className="project"
            /*  data-aos={handleFade} */
            key={elem.h4}
          >
            <div className="project_title_container">
              <h2 className="project_title"> {elem.h4}</h2>
            </div>
            <div className="project_informations">
              <p className="project_description">{elem.p}</p>

              {/* {projects.projects[elem].techno.map((tech) => {
                <div className="project_technos">{tech.techno}</div>;
              })} */}
              {/*  <div className="project_technos">{elem.techno}</div> */}
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
  );
}
