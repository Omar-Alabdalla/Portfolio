import React from "react";
import { useState } from "react";
import AnimatedLetters from "./AnimatedName";

import { MDBContainer } from "mdbreact";

import "./Home.scss";

/*

    " ",
    "S",
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    */

function Home() {
  const [letterClass] = useState("text-animate");
  const nameArray = [
    "O",
    "m",
    "a",
    "r",
    " ",
    "A",
    "l",
    "a",
    "b",
    "d",
    "a",
    "l",
    "l",
    "a",
  ];
  const jobArray = [
    "J",
    "u",
    "n",
    "i",
    "o",
    "r",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone-home-page">
          <div className="Name">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </div>
          <br />
          <div className="Job">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={29}
            />
          </div>
        </div>
      </div>
      <div>
        <MDBContainer className="Game">
          <iframe
            className="BeeGame"
            src="https://www.greenfoot.org/scenarios/30444?embed=true"
            title="Game"
            width="700px"
            height="725px"
          />
        </MDBContainer>
      </div>
    </>
  );
}

export default Home;

/*

      */
