export default (state = [], action) => {
  switch (action.type) {
    case "SET_NOTIFICATIONS":
      return action.payload;
    case "DELETE_NOTIFICATION":
      return state.filter(notification => notification.id !== action.payload);
    default:
      return state;
  }
};
