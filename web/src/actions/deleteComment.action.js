import deleteComment from "../http/deleteComment.http";
import loadingHook from "./helpers/loadingHook";

export default commentId => async (dispatch, getState) => {
  await loadingHook(dispatch, () => {
    return deleteComment(commentId);
  });

  dispatch({
    type: "REMOVE_COMMENT",
    payload: commentId
  });
};
