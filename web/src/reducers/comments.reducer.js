export default (state = [], action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    case "ADD_COMMENT":
      return state.concat(action.payload);
    case "REMOVE_COMMENT":
      return state.filter(c => c.id !== action.payload);
    default:
      return state;
  }
};
