import React from "react";
import { connect } from "react-redux";
function Home(props) {
  return (
    <div>
      <h3>
        Confirmed Cases:
        {props.confirmedCases !== undefined && props.confirmedCases.latest}
        <br />
        Death Cases: {props.deathCases !== undefined && props.deathCases.latest}
        <br />
        Recovered Cases:
        {props.recoveredCases !== undefined && props.recoveredCases.latest}
      </h3>
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
