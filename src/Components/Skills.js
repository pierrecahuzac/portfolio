import "../Assets/CSS/Skills.css";
import SkillsData from "../Assets/skills.json";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1> MES COMPETENCES</h1>
      <div className="skills_container">
        {SkillsData.map((skill) => (
          <div className="skills_img_container">
            <img src={"/Img/svg" + skill.img} alt="" className="skills_img" />
          </div>
        ))}
      </div>
    </div>
  );
}
