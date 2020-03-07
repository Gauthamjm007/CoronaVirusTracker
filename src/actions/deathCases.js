import axios from "../config/Axios";

export const startGetDeathCases = () => {
  return (dispatch) => {
    axios
      .get("/deaths")
      .then((response) => {
        const deathCases = response.data;
        dispatch(getDeathCases(deathCases));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getDeathCases = (cases) => {
  return { type: "GET_DEATH_CASES", payload: cases };
};
