import axios from "../config/Axios";

export const startGetRegion = () => {
  return (dispatch) => {
    axios
      .get("/recovered")
      .then((response) => {
        const region = response.data.locations.map((ele) => ele.province);
        dispatch(getRegion(region));
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };
};

export const getRegion = (cases) => {
  return { type: "GET_REGIONS", payload: cases };
};
