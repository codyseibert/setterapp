import deleteLike from "../http/deleteLike.http";
import loadingHook from "./helpers/loadingHook";

export default routeId => async (dispatch, getState) => {
  const { likes } = getState();

  const like = likes.find(like => like.routeId === routeId);

  await loadingHook(dispatch, () => {
    return deleteLike(like.id);
  });

  dispatch({
    type: "REMOVE_LIKE",
    payload: like.id
  });
};
