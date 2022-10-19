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
      <h3>Logo</h3>
      <nav ref={navRef}>
        <a href="/Home">
          <AiFillHome size="25" />
        </a>
        <a href="/Projects">
          <FaNetworkWired size="25" />
        </a>
        <a href="/Work">
          <AiOutlineProject size="25" />
        </a>
        <a href="/About-me">
          <BsFilePerson size="25" />
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

/*
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import React from "react";

class NavBar extends React.Component {
  function NavBar() {
    
  }
  render() {
    const navRef = useRef();

    const showNavBar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

    return (
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href="/Home">Home</a>
          <a href="/Home">My Work</a>
          <a href="/Home">Projects</a>
          <a href="/Home">About Me</a>
          <button onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    );
  }
}

export default NavBar;
*/
