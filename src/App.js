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
        <React.Fragment>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<Contact />} />
            <Route path="/" element={<Experience />} />
          </Routes>
        </React.Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
