import archiveRoute from "../http/archiveRoute.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  await loadingHook(dispatch, () => {
    return archiveRoute(routeId);
  });

  dispatch({
    type: "UPDATE_ROUTE",
    payload: {
      archived: true
    }
  });
};
