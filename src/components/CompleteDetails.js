import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

const H3 = styled.h3`
  font-family: "Agency FB", arial;
  font-size: 1.2em;
  text-align: center;
  color: blue;
`;

function storeLocalData(props) {
  if (props.confirmedCases !== undefined && !localStorage.getItem("Cases")) {
    //console.log(localStorage.getItem("Cases"));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    localStorage.setItem(
      "Cases",
      JSON.stringify({
        date: dd,
        confirmedCases: props.confirmedCases.latest,
        deathCases: props.deathCases.latest,
        recoveredCases: props.recoveredCases.latest
      })
    );
  } else {
    return JSON.parse(localStorage.getItem("Cases"));
  }
}
function CompleteDetails(props) {
  const handleClick = (country) => {
    //  console.log(country, "value");
  };

  return (
    <div align="center">
      <H3>
        {props.confirmedCases !== undefined &&
        props.confirmedCases.latest !== undefined &&
        props.deathCases.latest !== undefined &&
        props.recoveredCases.latest !== undefined &&
        props.deathCases !== undefined &&
        props.countryCode !== undefined &&
        props.region !== undefined &&
        props.recoveredCases !== undefined &&
        props.country !== undefined ? (
          <>
            Confirmed Cases:
            {props.confirmedCases.latest.toLocaleString()}
            <br />
            Death Cases:
            {props.deathCases.latest.toLocaleString()}
            <br />
            Recovered Cases:
            {props.recoveredCases.latest.toLocaleString()}
            <br />
            Countries:
            {props.country.length}
            <br />
            Recovery Rate:
            {(
              (props.recoveredCases.latest / props.confirmedCases.latest) *
              100
            ).toFixed(2)}
            %
            <br />
            Death Rate:
            {(
              (props.deathCases.latest / props.confirmedCases.latest) *
              100
            ).toFixed(2)}
            %
            <br />
            <br />
            Spread Across:
            <br />
            <p>[click on a flag to view more]</p>
            <div align="center">
              {props.countryCode.map((code, i) => (
                <React.Fragment key={code + i}>
                  <Link to={`/country/${code}`}>
                    <ReactCountryFlag
                      className="ReactCountryFlag"
                      onClick={() => handleClick(code)}
                      countryCode={code}
                      svg
                      style={{
                        width: "2em",
                        height: "2em"
                      }}
                      title={code}
                    />
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </>
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </H3>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    confirmedCases: state.confirmedCases,
    deathCases: state.deathCases,
    recoveredCases: state.recoveredCases,
    country: state.country,
    region: state.region,
    countryCode: state.countryCode
  };
};

connect(mapStatetoProps)(storeLocalData);

export default connect(mapStatetoProps)(CompleteDetails);
