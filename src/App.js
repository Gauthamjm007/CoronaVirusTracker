import React from "react";
import "./App.css";
import VirusIcon from "./components/icons/virus-icon";
import Home from "./components/Home";
import Map from "./Map";
function App() {
  return (
    <div className="App">
      <VirusIcon />
      <h1>Corona Virus Tracker</h1>
      <Home />
      <Map />
    </div>
  );
}

export default App;
