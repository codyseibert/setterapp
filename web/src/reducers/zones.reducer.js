export default (state = [], action) => {
  switch (action.type) {
    case "SET_ZONES":
      return action.payload;
    case "ZONE_CREATED":
      return state.concat(action.payload);
    default:
      return state;
  }
};
