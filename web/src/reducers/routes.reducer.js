export default (state = [], action) => {
  switch (action.type) {
    case "SET_ROUTES":
      return action.payload;
    case "ROUTE_CREATED":
      return state.concat(action.payload);
    case "DELETE_ROUTE":
      return state.filter(r => r.id !== action.payload);
    default:
      return state;
  }
};
