export default (state = [], action) => {
  switch (action.type) {
    case "ADD_SEND":
      return state.concat(action.payload);
    case "SET_SENDS":
      return action.payload;
    case "REMOVE_SEND":
      return state.filter(send => send.userId !== action.payload);
    default:
      return state;
  }
};
