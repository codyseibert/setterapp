export default (state = [], action) => {
  switch (action.type) {
    case "ADD_SEND":
      return state.concat(action.payload);
    case "SET_SENDS":
      return action.payload;
    default:
      return state;
  }
};
