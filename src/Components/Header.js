import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

import "../Assets/CSS/Header.scss";

export default function Header({ isOpen, setIsOpen }) {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div className="header">
      <div className="header_nav">
        <HashLink to="/" className="header_logo">
          PORTFOLIO
        </HashLink>
        <div className="header_links">
          <HashLink
            to="/#projects"
            className="header_link"
            /*  style={({ isActive }) => (isActive ? activeStyle : undefined)} */
          >
            MES PROJETS
          </HashLink>
          <HashLink
            to="/#skills"
            className="header_link"
            /*  style={({ isActive }) => (isActive ? activeStyle : undefined)} */
          >
            MES COMPETENCES
          </HashLink>
          <HashLink
            to="/#contacts"
            className="header_link"
            /*  style={({ isActive }) => (isActive ? activeStyle : undefined)} */
          >
            CONTACTS
          </HashLink>
        </div>
      </div>
      <button className="header_menu_btn" onClick={handleMenu}>
        {isOpen ? <RiCloseFill /> : <GiHamburgerMenu />}
      </button>
      {isOpen && (
        <div className="header_nav-open">
          <HashLink
            to="#projects"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES PROJETS
          </HashLink>
          <HashLink
            to="#skills"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES COMPETENCES
          </HashLink>
          <HashLink
            to="#contacts"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACTS
          </HashLink>
        </div>
      )}
    </div>
  );
}
