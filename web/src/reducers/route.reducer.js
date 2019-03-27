export default (state = {}, action) => {
  switch (action.type) {
    case "SET_ROUTE":
      return action.payload;
    case "UPDATE_ROUTE":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
