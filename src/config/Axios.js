import axios from "axios";

const Axios = axios.create({
  baseURL: "https://coronavirus-tracker-api.herokuapp.com"
});

export default Axios;
