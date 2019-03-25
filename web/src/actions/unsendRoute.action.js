import deleteSend from "../http/deleteSend.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  const { sends } = getState();

  const send = sends.find(send => send.routeId === routeId);

  await loadingHook(dispatch, () => {
    return deleteSend(send.id);
  });

  dispatch({
    type: "REMOVE_SEND",
    payload: send.id
  });
};
