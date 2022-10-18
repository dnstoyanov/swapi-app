import "./App.css";

import React from "react";
import People from "../People";
import Planet from "../Planet";
import Ship from "../Ships";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/people">Pople</Link>
          </li>
          <li>
            <Link to="/planets">Planets</Link>
          </li>
          <li>
            <Link to="/ships">Ships</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planet />} />
        <Route path="/ships" element={<Ship />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
