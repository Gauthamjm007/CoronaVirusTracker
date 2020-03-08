import React from "react";
import "./App.css";
import VirusIcon from "./components/icons/virus-icon";
import Home from "./components/Home";
import PigeonMaps from "./components/maps/map";

function App() {
  return (
    <div className="App">
      <VirusIcon />
      <h1>Corona Virus Tracker</h1>

      <PigeonMaps />
    </div>
  );
}

export default App;
