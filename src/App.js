/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import "./App.css";
import HomePage from "./screens/HomePage";
import Characters from "./screens/Characters";
import Episodes from "./screens/Episodes";
import Locations from "./screens/Locatons";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="home-bg-image">
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
