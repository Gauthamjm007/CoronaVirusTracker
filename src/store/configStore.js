import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import confirmedCasesReducer from "../reducers/confirmedCasesReducer";
import deathCasesReducer from "../reducers/deathCasesReducer";
import recoveredCasesReducer from "../reducers/recoveredCasesReducer";
import countryReducer from "../reducers/countryReducer";
import countryCodeReducer from "../reducers/countryCodeReducer";
import regionRedcuer from "../reducers/regionRedcuer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      confirmedCases: confirmedCasesReducer,
      deathCases: deathCasesReducer,
      recoveredCases: recoveredCasesReducer,
      country: countryReducer,
      countryCode: countryCodeReducer,
      region: regionRedcuer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
