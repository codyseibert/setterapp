import updateSetter from "../http/updateSetter.http";
import loadingHook from "./helpers/loadingHook";

export default setterId => async (dispatch, getState) => {
  await loadingHook(dispatch, () => {
    return updateSetter(setterId, { active: true });
  });

  dispatch({
    type: "UPDATE_SETTER",
    payload: {
      active: true
    }
  });
};
