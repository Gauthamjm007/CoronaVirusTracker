const initState = [];

export default function regionReducer(state = initState, action) {
  switch (action.type) {
    case "GET_REGIONS":
      return action.payload;
    default:
      return state;
  }
}
