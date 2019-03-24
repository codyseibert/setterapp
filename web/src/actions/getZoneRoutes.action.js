import getZoneRoutes from "../http/getZoneRoutes.http";

export default zoneId => async dispatch => {
  const routes = await getZoneRoutes(zoneId);
  dispatch({
    type: "SET_ROUTES",
    payload: routes
  });
};
