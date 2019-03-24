import getUser from "../http/getUser.http";

export default userId => async dispatch => {
  const user = await getUser(userId);
  dispatch({
    type: "SET_PROFILE",
    payload: user
  });
};
