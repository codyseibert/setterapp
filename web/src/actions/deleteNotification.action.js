import deleteNotification from "../http/deleteNotification.http";
import loadingHook from "./helpers/loadingHook";

export default notificationId => async (dispatch, getState) => {
  await loadingHook(dispatch, () => {
    return deleteNotification(notificationId);
  });

  dispatch({
    type: "DELETE_NOTIFICATION",
    payload: notificationId
  });
};
