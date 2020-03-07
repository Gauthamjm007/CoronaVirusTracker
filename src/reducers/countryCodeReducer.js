const initState = [];

export default function countryCodeReducer(state = initState, action) {
  switch (action.type) {
    case "GET_COUNTRIES_CODE":
      return action.payload;
    default:
      return state;
  }
}
