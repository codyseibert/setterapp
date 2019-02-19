import history from "../history";

export default () => async dispatch => {
  dispatch({
    type: "SET_USER",
    payload: null
  });
  dispatch({
    type: "SET_TOKEN",
    payload: null
  });
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("token");
  history.push(`/`);
};
