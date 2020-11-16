export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// login
export const doLogin = (details = { isWeb: false }) => {
  delete details.isWeb;
  return async (dispatch: Function) => {
    dispatch({
      type: LOGIN_SUCCESS,
      data: { response: { error: false } },
    });
  };
};
