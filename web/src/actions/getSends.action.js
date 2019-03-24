import getSends from "../http/getSends.http";

export default () => async (dispatch, getState) => {
  const { user } = getState();

  const sends = await getSends(user.id);

  dispatch({
    type: "SET_SENDS",
    payload: sends
  });
};
