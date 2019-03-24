import getGyms from "../http/getGyms.http";

export default () => async dispatch => {
  const gyms = await getGyms();
  dispatch({
    type: "SET_GYMS",
    payload: gyms
  });
};
