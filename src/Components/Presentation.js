import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./../Assets/CSS/Presentation.scss";
import presentation from "../Assets/projects.json";

export default function Presentation() {
  return (
    <section className="presentation" id="me">
      {presentation.presentation.map((elem, i) => (
        <div className="presentation_container" key={i}>
          <h1 className="presentation_title">{elem.h1}</h1>
          <h2 className="presentation_subtitle">{elem.h2}</h2>
          <p className="presentation_informations">{elem.subtitle}</p>
        </div>
      ))}
      <div className="presentation_logos">
        <a
          href="https://www.linkedin.com/in/pcahuzac/"
          className="presentation_logo"
        >
          <FaLinkedin className="presentation_svg" />
        </a>
        <a
          href="https://www.github.com/pierrecahuzac/"
          className="presentation_logo"
        >
          <FaGithub className="presentation_svg" />
        </a>
        <a href="mailto:cahuzac.p@gmail.com" className="presentation_logo">
          <FiMail className="presentation_svg" />
        </a>
      </div>
    </section>
  );
}
