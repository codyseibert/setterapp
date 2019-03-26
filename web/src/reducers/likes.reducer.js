export default (state = [], action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return state.concat(action.payload);
    case "SET_LIKES":
      return action.payload;
    case "REMOVE_LIKE":
      return state.filter(like => like.id !== action.payload);
    default:
      return state;
  }
};
