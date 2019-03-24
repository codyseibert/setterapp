import getRoute from "../http/getRoute.http";

export default routeId => async dispatch => {
  const route = await getRoute(routeId);
  dispatch({
    type: "SET_ROUTE",
    payload: route
  });
};
