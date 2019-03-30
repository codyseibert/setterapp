import getSetter from "../http/getSetter.http";

export default setterId => async dispatch => {
  const setter = await getSetter(setterId);
  dispatch({
    type: "SET_SETTER",
    payload: setter
  });
};
