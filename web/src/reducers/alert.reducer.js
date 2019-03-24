export default (state = null, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    default:
      return state;
  }
};
