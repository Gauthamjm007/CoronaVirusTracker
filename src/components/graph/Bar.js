import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
class Bar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [
        {
          data: []
        }
      ]
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const country = this.props.match.params.country;
    setTimeout(() => {
      this.setState({
        options: {
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: Object.keys(
              this.props.confirmedCases.locations[0].history
            )
          }
        },
        series: [
          {
            name: "Confirmed Cases",
            data:
              this.props.match.params.id !== undefined
                ? Object.values(
                    this.props.confirmedCases.locations.find(
                      (ele) => ele.province === id
                    ).history
                  )
                : Object.values(
                    this.props.confirmedCases.locations.find(
                      (ele) => ele.country === country
                    ).history
                  )
          },
          {
            name: "Death Cases",
            data:
              this.props.match.params.id !== undefined
                ? Object.values(
                    this.props.deathCases.locations.find(
                      (ele) => ele.province === id
                    ).history
                  )
                : Object.values(
                    this.props.deathCases.locations.find(
                      (ele) => ele.country === country
                    ).history
                  )
          },
          {
            name: "Recovered Cases",
            data:
              this.props.match.params.id !== undefined
                ? Object.values(
                    this.props.recoveredCases.locations.find(
                      (ele) => ele.province === id
                    ).history
                  )
                : Object.values(
                    this.props.recoveredCases.locations.find(
                      (ele) => ele.country === country
                    ).history
                  )
          }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div className="bar" align="center">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    confirmedCases: state.confirmedCases,
    deathCases: state.deathCases,
    recoveredCases: state.recoveredCases
  };
};

export default connect(mapStateToProps)(Bar);
