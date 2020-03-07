import axios from "../config/Axios";
import removeDuplicate from "../selectors/removeDuplicate";
export const startGetCountryCode = () => {
  return (dispatch) => {
    axios
      .get("/recovered")
      .then((response) => {
        const countryCode = removeDuplicate(
          response.data.locations,
          "country_code"
        );
        dispatch(getCountryCode(countryCode));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getCountryCode = (cases) => {
  return { type: "GET_COUNTRIES_CODE", payload: cases };
};
