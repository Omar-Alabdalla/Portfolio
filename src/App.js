import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";

import NavBar from "./Components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <div>
        <title>Personal Portfolio</title>
        <React.Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
        </React.Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
