import getSendsForRoute from "../http/getSendsForRoute.http";

export default routeId => async (dispatch, getState) => {

  const sends = await getSendsForRoute(routeId);

  dispatch({
    type: "SET_SENDS",
    payload: sends
  });
};
