import updateUser from "../http/updateUser.http";
import loadingHook from "./helpers/loadingHook";

export default gymId => async (dispatch, getState) => {
  const { user } = getState();

  await loadingHook(dispatch, () => {
    return updateUser(user.id, { gymId });
  });

  dispatch({
    type: "UPDATE_USER",
    payload: {
      gymId
    }
  });

  window.localStorage.setItem(
    "user",
    JSON.stringify({
      ...user,
      gymId
    })
  );
};
