import React from "react";
import "./App.css";

import Home from "./components/Home";
import PigeonMaps from "./components/maps/map";
import { Link, BrowserRouter, Route } from "react-router-dom";
import TableView from "./components/details/TableView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/maps">Map</Link>
        <Route
          path="/country/:countrycode"
          component={TableView}
          exact={true}
        />
        <Route path="/maps" component={PigeonMaps} exact={true} />
        <Route path="/" component={Home} exact={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
