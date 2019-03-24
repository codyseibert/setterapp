import createZone from "../http/createZone.http";
import history from "../history";

export default zone => async dispatch => {
  dispatch({
    type: "SET_LOADING",
    payload: true
  });

  const newZone = await createZone(zone);

  dispatch({
    type: "ZONE_CREATED",
    payload: newZone
  });

  dispatch({
    type: "SET_LOADING",
    payload: false
  });

  dispatch({
    type: "SET_ALERT",
    payload: {
      message: "Your zone was created",
      type: "success"
    }
  });

  history.push(`/gyms/${zone.gymId}/zones`);
};
