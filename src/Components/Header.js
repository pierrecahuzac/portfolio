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

  let activeClassName = "active";

  return (
    <div className="header" id="accueil">
      <nav className="header_nav">
        <HashLink to="/" id="#accueil" className="header_logo">
          PORTFOLIO
        </HashLink>
        <div className="header_links">
          <HashLink
            to="/#skills"
            className="header_link"
            /*  style={({ isActive }) => (isActive ? activeStyle : undefined)} */
          >
            MES COMPETENCES
          </HashLink>
          <HashLink
            to="/#projects"
            className="header_link"
            /*  style={({ isActive }) => (isActive ? activeStyle : undefined)} */
          >
            MES PROJETS
          </HashLink>
        </div>
      </nav>
      <button className="header_menu_btn" onClick={handleMenu}>
        <GiHamburgerMenu />
      </button>
      {isOpen ? (
        <nav className="header_nav-open">
          {" "}
          <HashLink
            to="#skills"
            className="header_link"
            /* style={({ isActive }) => (isActive ? activeClassName : undefined)} */
          >
            MES COMPETENCES
          </HashLink>
          <HashLink
            to="#projects"
            className="header_link"
            /* style={({ isActive }) => (isActive ? activeClassName : undefined)} */
          >
            MES PROJETS
          </HashLink>
          <div className="header_menu_btn_container">
            <button className="header_menu_btn" onClick={handleMenu}>
              {isOpen ? <RiCloseFill /> : <GiHamburgerMenu />}
            </button>
          </div>
        </nav>
      ) : (
        <nav className="header_nav-close">
          <HashLink
            to="#projects"
            className="header_link"
            /* style={({ isActive }) => (isActive ? activeClassName : undefined)} */
          >
            MES PROJETS
          </HashLink>
          <HashLink
            to="#skills"
            className="header_link"
            /* style={({ isActive }) => (isActive ? activeClassName : undefined)} */
          >
            MES COMPETENCES
          </HashLink>
          <HashLink
            to="#contacts"
            className="header_link"
            /* style={({ isActive }) => (isActive ? activeClassName : undefined)} */
          >
            CONTACTS
          </HashLink>
          <button className="header_menu_btn" onClick={handleMenu}>
            <RiCloseFill />
          </button>
        </nav>
      )}
    </div>
  );
}
