/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const UPDATE_STATE = "UPDATE_STATE";

export const UPADATE_ACTIVE_MODULE_SELECTION = "UPADATE_ACTIVE_SELECTION";
export const UPDATE_ACTIVE_ACTION_SELECTION = "UPDATE_ACTIVE_ACTION_SELECTION";
export const UPDATE_ACTIVE_TAB_SELECTION = "UPDATE_ACTIVE_TAB_SELECTION";

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
      data: { lastEmail: "Hello44.email@pm.me" },
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

export const updateModuleSelection = (
  moduleName: string,
  moduleKey: string
) => {
  console.log("Module updated");
  return async (dispatch: Function) => {
    dispatch({
      type: UPADATE_ACTIVE_MODULE_SELECTION,
      data: {
        active: {
          module: {
            key: moduleKey,
            name: moduleName,
          },
        },
      },
    });
  };
};

export const updateTabSelection = (tabName: string, tabKey: string) => {
  console.log("Tab updated");
  return async (dispatch: Function) => {
    dispatch({
      type: UPDATE_ACTIVE_TAB_SELECTION,
      data: {
        active: {
          tab: {
            key: tabKey,
            name: tabName,
          },
        },
      },
    });
  };
};

export const updateActionSelection = (
  actionName: string,
  actionKey: string
) => {
  console.log("Action updated");
  return async (dispatch: Function) => {
    dispatch({
      type: UPDATE_ACTIVE_ACTION_SELECTION,
      data: {
        active: {
          action: {
            key: actionKey,
            name: actionName,
          },
        },
      },
    });
  };
};
