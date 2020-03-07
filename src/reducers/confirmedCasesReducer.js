const initState = [];

export default function confirmedCasesReducer(state = initState, action) {
  switch (action.type) {
    case "GET_CONFIRM_CASES":
      return action.payload;
    default:
      return state;
  }
}
