const initState = [];

export default function deathCasesReducer(state = initState, action) {
  switch (action.type) {
    case "GET_DEATH_CASES":
      return action.payload;
    default:
      return state;
  }
}
