import getZone from "../http/getZone.http";

export default zoneId => async dispatch => {
  const zone = await getZone(zoneId);
  dispatch({
    type: "SET_ZONE",
    payload: zone
  });
};
