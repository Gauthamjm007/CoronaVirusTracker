import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { startGetConfirmedCases } from "./actions/confirmedCases";
import { startGetDeathCases } from "./actions/deathCases";
import { startGetRecoveredCases } from "./actions/recoveredCases";
import { startGetRegion } from "./actions/region";
import { startGetCountryCode } from "./actions/countryCode";
import { startGetCountry } from "./actions/country";
import configStore from "./store/configStore";

const store = configStore();

store.dispatch(startGetConfirmedCases());
store.dispatch(startGetDeathCases());
store.dispatch(startGetRecoveredCases());
store.dispatch(startGetRegion());
store.dispatch(startGetCountryCode());
store.dispatch(startGetCountry());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
