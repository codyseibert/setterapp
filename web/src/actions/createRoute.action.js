import createRoute from "../http/createRoute.http";
import history from "../history";

export default route => async dispatch => {
  dispatch({
    type: "SET_LOADING",
    payload: true
  });

  const newRoute = await createRoute(route);

  dispatch({
    type: "ROUTE_CREATED",
    payload: newRoute
  });

  dispatch({
    type: "SET_LOADING",
    payload: false
  });

  dispatch({
    type: "SET_ALERT",
    payload: {
      message: "Your route was created",
      type: "success"
    }
  });

  // history.push(`/gyms/${route.gymId}/routes`);
  history.goBack();
};
