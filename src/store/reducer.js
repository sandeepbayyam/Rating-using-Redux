
const intialState = {
  currentRating: 0,
  TotalRating: 0,
  NumofRatings: 0,
};
const reducer = (state=intialState, action) => {
  if (action.type === 'Rate') {
    return {
      ...state,
      currentRating:action.val,
      TotalRating: state.TotalRating + action.val,
      NumofRatings: state.NumofRatings + 1,
    };
}
  return state;
};
export default reducer;
