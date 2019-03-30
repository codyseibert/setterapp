import createSetter from "../http/createSetter.http";
import loadingHook from "./helpers/loadingHook";
import history from "../history";

export default setterToCreate => async (dispatch, getState) => {
  const setter = await loadingHook(dispatch, () => {
    return createSetter(setterToCreate);
  });

  dispatch({
    type: "ADD_SETTER",
    payload: setter
  });

  dispatch({
    type: "SET_ALERT",
    payload: {
      message: `${setter.name} was successfully created.`,
      type: "success"
    }
  });

  history.goBack();
};
