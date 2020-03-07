const initState = [];

export default function countryReducer(state = initState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return action.payload;
    default:
      return state;
  }
}
