import getNotifications from "../http/getNotifications.http";

export default gymId => async dispatch => {
  const notifications = await getNotifications(gymId);
  dispatch({
    type: "SET_NOTIFICATIONS",
    payload: notifications
  });
};
