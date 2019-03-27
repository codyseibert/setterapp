import getActiveRoutes from "../http/getActiveRoutes.http";

export default gymId => async dispatch => {
  const routes = await getActiveRoutes(gymId);
  dispatch({
    type: "SET_ROUTES",
    payload: routes
  });
};
