import "../Assets/CSS/Skills.scss";
import SkillsData from "../Assets/projects.json";
console.log(SkillsData.projects[3].techno);
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_title_container">
        <h1 className="skills_title"> MES COMPETENCES</h1>
      </div>

      <div className="skills_container">
        {SkillsData.skills.map((skill, i) => (
          /*  <div className="skills_img_container"> */
          <img
            src={"/Img/svg" + skill.img}
            alt=""
            className="skills_img"
            key={i}
          />
          /* </div> */
        ))}
      </div>
    </section>
  );
}
