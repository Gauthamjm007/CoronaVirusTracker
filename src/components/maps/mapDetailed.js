import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PigeonMaps from "./map";

function MapDetailed(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <div align="center">
      <br />
      <br />
      {props.confirmedCases !== undefined &&
        props.deathCases !== undefined &&
        props.recoveredCases !== undefined && (
          <>
            <h1>Map</h1>
            <p>pinch on map to zoom in & zoom out</p>
            <Paper square>
              <Tabs
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                value={value}
                centered
              >
                <Tab label="Confirmed Cases" />
                <Tab label="Death Cases" />
                <Tab label="Recovered Cases" />
              </Tabs>
            </Paper>

            {value === 0 && <PigeonMaps cases={props.confirmedCases} />}
            {value === 1 && <PigeonMaps cases={props.deathCases} />}
            {value === 2 && <PigeonMaps cases={props.recoveredCases} />}
          </>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    confirmedCases: state.confirmedCases,
    deathCases: state.deathCases,
    recoveredCases: state.recoveredCases
  };
};

export default connect(mapStateToProps)(MapDetailed);
