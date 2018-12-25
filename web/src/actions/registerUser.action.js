import registerUser from "../http/registerUser.http";

export default payload => (dispatch, getState) => {
  const { form } = getState();
  registerUser(form);
};
