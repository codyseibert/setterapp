import { registerGym } from "../http/registerGym.http";

export const register = payload => (dispatch, getState) => {
  const { form } = getState();
  registerGym(form);
};
