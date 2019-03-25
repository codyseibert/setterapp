import createSend from "../http/createSend.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  const { user } = getState();

  const send = await loadingHook(dispatch, () => {
    return createSend({
      routeId,
      userId: user.id
    });
  });

  dispatch({
    type: "ADD_SEND",
    payload: send
  });
};
