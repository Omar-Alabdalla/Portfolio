import Home from "./Pages/Home";
import About from "./Pages/About";

import NavBar from "./Components/NavBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <React.Fragment>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/index" component={Home} />
            <Route path="/about" component={About} />
          </Routes>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
