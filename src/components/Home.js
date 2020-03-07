import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const H3 = styled.h3`
  font-family: "Agency FB Bold", arial;
  font-size: 1.2em;
  text-align: center;
  color: blue;
`;
function Home(props) {
  return (
    <div>
      <H3>
        Confirmed Cases:
        {props.confirmedCases !== undefined && props.confirmedCases.latest}
        <br />
        Death Cases: {props.deathCases !== undefined && props.deathCases.latest}
        <br />
        Recovered Cases:
        {props.recoveredCases !== undefined && props.recoveredCases.latest}
      </H3>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    confirmedCases: state.confirmedCases,
    deathCases: state.deathCases,
    recoveredCases: state.recoveredCases
  };
};

export default connect(mapStatetoProps)(Home);
