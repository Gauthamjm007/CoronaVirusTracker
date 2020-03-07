import React from "react";
import "./App.css";
import VirusIcon from "./components/icons/virus-icon";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <VirusIcon />
      <h1>Corona Virus Tracker</h1>
      <Home />
    </div>
  );
}

export default App;
