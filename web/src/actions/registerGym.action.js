import registerGym from "../http/registerGym.http";

export default payload => (dispatch, getState) => {
  const { form } = getState();
  registerGym(form);
};
