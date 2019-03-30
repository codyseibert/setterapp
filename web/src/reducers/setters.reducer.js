export default (setters = [], action) => {
  switch (action.type) {
    case "ADD_SETTER":
      return setters.concat(action.payload);
    case "SET_SETTERS":
      return action.payload;
    default:
      return setters;
  }
};
