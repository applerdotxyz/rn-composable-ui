/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const UPDATE_STATE = "UPDATE_STATE";

export const UPADATE_ACTIVE_BUISNESS_FUNCTION_SELECTION =
  "UPADATE_ACTIVE_BUISNESS_FUNCTION_SELECTION";
export const UPADATE_ACTIVE_MODULE_SELECTION = "UPADATE_ACTIVE_SELECTION";
export const UPDATE_ACTIVE_ACTION_SELECTION = "UPDATE_ACTIVE_ACTION_SELECTION";
export const UPDATE_ACTIVE_TAB_SELECTION = "UPDATE_ACTIVE_TAB_SELECTION";
export const UPDATE_SCHEMA = "UPDATE_SCHEMA";

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

export const updateBuisnessFunctionSelection = (
  functionName: string,
  functionKey: string
) => {
  console.log("Module updated");
  return async (dispatch: Function) => {
    dispatch({
      type: UPADATE_ACTIVE_BUISNESS_FUNCTION_SELECTION,
      data: {
        function: {
          key: functionKey,
          name: functionName,
        },
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
        module: {
          key: moduleKey,
          name: moduleName,
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
        tab: {
          key: tabKey,
          name: tabName,
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
        action: {
          key: actionKey,
          name: actionName,
        },
      },
    });
  };
};

export const businessFunctionHandler = () => {
  console.log("Hello this is BuisnessFunction Handler");

  return (dispatch: Function) => {
    return fetch(`http://localhost:8080/transaction-web/v1/schema/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // TODO : REMOVE this hardcoding
        userId: "TsdAdmin",
        roleKey: "1",
      }),
    }).then(async (response) => {
      dispatch(updateSchema(await response.json()));
      console.log("RESPONSE FOR BUISNESS FUNCTION : : :  ", response.json);
    });
  };
};

export const updateSchema = (schema: { businessFunctions: [] }) => {
  console.log("Schema Update");
  return async (dispatch: Function) => {
    dispatch({
      type: UPDATE_SCHEMA,
      data: {
        action: {
          schema: schema.businessFunctions,
        },
      },
    });
  };
};
