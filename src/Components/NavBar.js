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
        <a href="/About-me">About me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;

/*
import { useRef } from "react";
import { FaBars, FaTimes, FaNetworkWired } from "react-icons/fa";
import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import { BsFilePerson } from "react-icons/bs";

import React from "react";

function NavBar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Omar Alabdalla</h3>
      <nav ref={navRef}>
        <a href="/Home">
          <AiFillHome title="Home" className="icon1" size="25" />
        </a>
        <a href="/Projects">
          <FaNetworkWired title="Projects" className="icon2" size="25" />
        </a>
        <a href="/Work">
          <AiOutlineProject title="Work" className="icon3" size="25" />
        </a>
        <a href="/About-me">
          <BsFilePerson title="About Me" className="icon4" size="25" />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
*/
