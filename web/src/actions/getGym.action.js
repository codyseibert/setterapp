import getGym from "../http/getGym.http";

export default gymId => async dispatch => {
  const gym = await getGym(gymId);
  dispatch({
    type: "SET_GYM",
    payload: gym
  });
};
