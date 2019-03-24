export default (state = [], action) => {
  switch (action.type) {
    case "SET_NOTIFICATIONS":
      return action.payload;
    default:
      return state;
  }
};
