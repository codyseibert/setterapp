import getUsers from "../http/getUsers.http";

export default gymId => async dispatch => {
  const users = await getUsers(gymId);
  dispatch({
    type: "SET_USERS",
    payload: users
  });
};
