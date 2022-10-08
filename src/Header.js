/* import { Link, NavLink } from "react-dom"; */
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import "./Assets/CSS/Header.css";

const Header = ({ isOpen, setIsOpen }) => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="header">
      <div className="header_nav">
        <a href="/" className="header_logo">
          PORTFOLIO
        </a>
        <div className="header_links">
          <div className="header_link">Mes projets</div>
          <div className="header_link">Mes compétences</div>
          <div className="header_link">test1</div>
          <div className="header_link">Lorem Ipsum</div>
        </div>
      </div>
      <button className="header_menu_btn" onClick={handleMenu}>
        {isOpen ? <RiCloseFill /> : <GiHamburgerMenu />}
      </button>
      {isOpen && (
        <div className="header_nav-open">
          <div className="header_link">Mes projets</div>
          <div className="header_link">Mes compétences</div>
          <div className="header_link">test1</div>
          <div className="header_link">Lorem Ipsum</div>
        </div>
      )}
    </div>
  );
};

export default Header;
