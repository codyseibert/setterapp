import createLike from "../http/createLike.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  const { user } = getState();

  const like = await loadingHook(dispatch, () => {
    return createLike({
      routeId,
      userId: user.id
    });
  });

  dispatch({
    type: "ADD_LIKE",
    payload: like
  });
};
