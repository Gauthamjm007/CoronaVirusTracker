import React from "react";
import "./App.css";
import { Home as HomeIcon, Map as MapIcon, GitHub } from "react-feather";
import Home from "./components/Home";
import MapDetailed from "./components/maps/mapDetailed";
import { Link, BrowserRouter, Route } from "react-router-dom";
import TableView from "./components/details/TableView";
import Bar from "./components/graph/Bar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <HomeIcon className="HomeIcon" size="30" color="#000080" />
        </Link>
        {"  "}
        <Link to="/maps">
          <MapIcon className="MapIcon" size="30" color="#000080" />
        </Link>
        <a href="https://github.com/Gauthamjm007/CoronaVirusTracker">
          <GitHub className="GitHub" size="30" color="#000080" />
        </a>
        <Route
          path="/country/:countrycode"
          component={TableView}
          exact={true}
        />
        <Route path="/province/:country/:id" component={Bar} exact={true} />
        <Route path="/province/:country/" component={Bar} exact={true} />
        <Route path="/maps" component={MapDetailed} exact={true} />
        <Route path="/" component={Home} exact={true} />
      </BrowserRouter>
    </div>
  );
}

export default App;
