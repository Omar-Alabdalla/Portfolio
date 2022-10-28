import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Experience from "./Pages/Experience";

import NavBar from "./Components/NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <div>
            <title>Personal Portfolio</title>
            <React.Fragment>
              <NavBar />
              <Routes>
                <Route path="/Personal-Portfolio/" element={<Home />} />
                <Route path="/Personal-Portfolio/About" element={<About />} />
                <Route
                  path="/Personal-Portfolio/Contact"
                  element={<Contact />}
                />
                <Route
                  path="/Personal-Portfolio/Experience"
                  element={<Experience />}
                />
              </Routes>
            </React.Fragment>
          </div>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
