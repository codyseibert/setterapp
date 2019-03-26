import createComment from "../http/createComment.http";
import loadingHook from "./helpers/loadingHook";

export default ({ message, routeId }) => async (dispatch, getState) => {
  const { user } = getState();

  const comment = await loadingHook(dispatch, () => {
    return createComment({
      userId: user.id,
      name: user.name,
      message: message,
      routeId
    });
  });

  dispatch({
    type: "ADD_COMMENT",
    payload: comment
  });
};
