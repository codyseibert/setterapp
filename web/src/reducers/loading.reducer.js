export default (loading = false, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return loading;
  }
};
