import getGymRoutes from "../http/getGymRoutes.http";

export default gymId => async dispatch => {
  const routes = await getGymRoutes(gymId);
  dispatch({
    type: "SET_ROUTES",
    payload: routes
  });
};
