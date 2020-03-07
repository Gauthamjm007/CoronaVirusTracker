import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import confirmedCasesReducer from "../reducers/confirmedCasesReducer";
import deathCasesReducer from "../reducers/deathCasesReducer";
import recoveredCasesReducer from "../reducers/recoveredCasesReducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      confirmedCases: confirmedCasesReducer,
      deathCases: deathCasesReducer,
      recoveredCases: recoveredCasesReducer
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
