export default (state = {}, action) => {
  switch (action.type) {
    case "SET_GYM":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
