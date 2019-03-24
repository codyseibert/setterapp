import getZones from "../http/getZones.http";

export default gymId => async dispatch => {
  const zones = await getZones(gymId);
  dispatch({
    type: "SET_ZONES",
    payload: zones
  });
};
