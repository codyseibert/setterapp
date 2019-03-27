import deleteRoute from "../http/deleteRoute.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  await loadingHook(dispatch, () => {
    return deleteRoute(routeId);
  });

  dispatch({
    type: "DELETE_ROUTE",
    payload: routeId
  });
};
