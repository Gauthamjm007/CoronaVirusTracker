import React from "react";
import { connect } from "react-redux";
import TableData from "./TableData";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import filterData from "../../selectors/filterData";

function TableView(props) {
  const countrycode = props.match.params.countrycode;
  const [value, setValue] = React.useState(0);

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
            <h1>Country Details</h1>
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

            {value === 0 && (
              <TableData
                cases={filterData(
                  props.confirmedCases,
                  "country_code",
                  countrycode
                )}
                store={props}
              />
            )}
            {value === 1 && (
              <TableData
                cases={filterData(
                  props.deathCases,
                  "country_code",
                  countrycode
                )}
                store={props}
              />
            )}
            {value === 2 && (
              <TableData
                cases={filterData(
                  props.recoveredCases,
                  "country_code",
                  countrycode
                )}
                store={props}
              />
            )}
          </>
        )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    confirmedCases: state.confirmedCases.locations,
    deathCases: state.deathCases.locations,
    recoveredCases: state.recoveredCases.locations
  };
};

export default connect(mapStateToProps)(TableView);
