import projects from "../Assets/projects.json";
import "../Assets/CSS/Projects.scss";
console.log(projects.projects.length);
export default function Projects() {
  /*   const handleFade = () => {
    for (let i = 0; i < projects.projects.length; i++) {
      console.log(projects.projects);
      let modulo = i % 2;
      console.log(modulo);
      if (modulo !== 0) {
        console.log(modulo);
        return "fade-right";
      } else return "fade-left";
    }
  }; */
  return (
    <section className="projects" id="projects">
      <h1 className="projects_title">MES PROJETS</h1>
      <div className="projects_list">
        {projects.projects.map((elem, i) => (
          <article
            className="project"
            data-aos="fade-right"
            key={elem.h4}
            id={i}
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
    </section>
  );
}
