import axios from "../config/Axios";

export const startGetRecoveredCases = () => {
  return (dispatch) => {
    axios
      .get("/recovered")
      .then((response) => {
        const recoveredCases = response.data;
        dispatch(getRecoveredCases(recoveredCases));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getRecoveredCases = (cases) => {
  return { type: "GET_RECOVERED_CASES", payload: cases };
};
