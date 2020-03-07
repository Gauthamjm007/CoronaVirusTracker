import axios from "../config/Axios";

export const startGetConfirmedCases = () => {
  return (dispatch) => {
    axios
      .get("/confirmed")
      .then((response) => {
        const confirmedCases = response.data;
        dispatch(getConfirmedCases(confirmedCases));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getConfirmedCases = (cases) => {
  return { type: "GET_CONFIRM_CASES", payload: cases };
};
