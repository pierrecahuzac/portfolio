import { AiOutlineArrowUp } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import "../Assets/CSS/Top.scss";
export default function Top() {
  return (
    <div className="top_container">
      <HashLink to="#accueil">
        <AiOutlineArrowUp className="top_svg" />
      </HashLink>
    </div>
  );
}
