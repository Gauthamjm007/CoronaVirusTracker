import axios from "../config/Axios";
import removeDuplicate from "../selectors/removeDuplicate";

export const startGetCountry = () => {
  return (dispatch) => {
    axios
      .get("/recovered")
      .then((response) => {
        const country = removeDuplicate(response.data.locations, "country");
        dispatch(getCountry(country));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getCountry = (cases) => {
  return { type: "GET_COUNTRIES", payload: cases };
};
