import createRoute from "../http/createRoute.http";
import history from "../history";

export default route => async dispatch => {
  const newRoute = await createRoute(route);

  dispatch({
    type: "ROUTE_CREATED",
    payload: newRoute
  });

  history.push(`/gyms/${route.gymId}/routes`);
};
