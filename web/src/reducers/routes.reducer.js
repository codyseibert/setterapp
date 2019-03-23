export default (state = [], action) => {
  switch (action.type) {
    case "SET_ROUTES":
      return action.payload;
    case "ROUTE_CREATED":
      return state.concat(action.payload);
    default:
      return state;
  }
};
