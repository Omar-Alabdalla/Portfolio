import { useRef } from "react";

import React from "react";

import "./NavBar.scss";

function NavBar() {
  const navRef = useRef();

  return (
    <header>
      <nav ref={navRef}>
        <div className="NavBar-Links">
          <b1>Omar Alabdalla</b1>
          <a href="/Personal-Portfolio/#/">Home</a>
          <a href="/Personal-Portfolio/#/Projects">Projects</a>
          <a href="/Personal-Portfolio/#/Experience">Experience</a>
          <a href="/Personal-Portfolio/#/Contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;

/*
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import React from "react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="/Home">Home</a>
        <a href="/Projects">Projects</a>
        <a href="/Experience">Experience</a>
        <a href="/Contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <b1>Omar Alabdalla</b1>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
*/
