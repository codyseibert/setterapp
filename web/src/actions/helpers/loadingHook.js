export default async (dispatch, cb) => {
  dispatch({
    type: "SET_LOADING",
    payload: true
  });

  const result = await cb();

  dispatch({
    type: "SET_LOADING",
    payload: false
  });

  return result;
};
