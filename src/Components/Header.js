import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";

import "../Assets/CSS/Header.css";

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
        <NavLink to="/" className="header_logo">
          PORTFOLIO
        </NavLink>
        <div className="header_links">
          <NavLink
            to="#projects"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES PROJETS
          </NavLink>
          <NavLink
            to="#skills"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES COMPETENCES
          </NavLink>
          <NavLink
            to="#contacts"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACTS
          </NavLink>
        </div>
      </div>
      <button className="header_menu_btn" onClick={handleMenu}>
        {isOpen ? <RiCloseFill /> : <GiHamburgerMenu />}
      </button>
      {isOpen && (
        <div className="header_nav-open">
          <NavLink
            to="#projects"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES PROJETS
          </NavLink>
          <NavLink
            to="#skills"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MES COMPETENCES
          </NavLink>
          <NavLink
            to="#contacts"
            className="header_link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACTS
          </NavLink>
        </div>
      )}
    </div>
  );
}
