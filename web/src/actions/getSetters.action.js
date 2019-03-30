import getSetters from "../http/getSetters.http";

export default gymId => async dispatch => {
  const setters = await getSetters(gymId);
  dispatch({
    type: "SET_SETTERS",
    payload: setters
  });
};
