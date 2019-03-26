import getComments from "../http/getComments.http";

export default routeId => async dispatch => {
  const comments = await getComments(routeId);
  dispatch({
    type: "SET_COMMENTS",
    payload: comments
  });
};
