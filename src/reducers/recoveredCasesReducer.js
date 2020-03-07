const initState = [];

export default function recoveredCasesReducer(state = initState, action) {
  switch (action.type) {
    case "GET_RECOVERED_CASES":
      return action.payload;
    default:
      return state;
  }
}
