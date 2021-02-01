/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const UPDATE_STATE = "UPDATE_STATE";

export const UPDATE_ORDER_VIEW_DATA = "UPDATE_ORDER_VIEW_DATA";

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

// updateState test
export const updateState = () => {
  console.log("update state triggered");
  return async (dispatch: Function) => {
    dispatch({
      type: UPDATE_STATE,
      data: { lastEmail: "Hello.email@pm.me" },
    });
  };
};

export const updateOrderViewData = (keyName: any) => {
  return async (dispatch: Function) => {
    dispatch({
      type: UPDATE_ORDER_VIEW_DATA,
      data: {
        keyName: keyName,
      },
    });
  };
};
