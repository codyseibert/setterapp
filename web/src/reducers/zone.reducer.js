export default (zone = null, action) => {
  switch (action.type) {
    case "SET_ZONE":
      return action.payload;
    default:
      return zone;
  }
};
