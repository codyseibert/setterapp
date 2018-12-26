import registerGym from "../http/registerGym.http";
import registerUser from "../http/registerUser.http";
import addUserAsGymAdmin from "../http/addUserAsGymAdmin.http";
import history from "../history";

export default payload => async (dispatch, getState) => {
  const { form } = getState();
  const gym = await registerGym(form);
  const gymId = gym.id;
  const user = await registerUser(form);
  await addUserAsGymAdmin({
    userId: user.id,
    adminCode: gym.adminCode,
    gymId: gym.id
  });
  dispatch({
    type: "SET_USER",
    payload: user
  });
  history.push(`/gyms/${gym.id}`);
};
