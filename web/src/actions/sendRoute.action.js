import sendRoute from "../http/sendRoute.http";

export default routeId => async (dispatch, getState) => {
  const { user } = getState();
  const send = await sendRoute({
    routeId,
    userId: user.id
  });

  dispatch({
    type: "ADD_SEND",
    payload: send
  });
};
