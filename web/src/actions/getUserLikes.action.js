import getLikes from "../http/getLikes.http";

export default userId => async dispatch => {
  const likes = await getLikes({ userId });
  dispatch({
    type: "SET_LIKES",
    payload: likes
  });
};
