/* eslint-disable @typescript-eslint/no-explicit-any */
export interface window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
}

export const initialState = {
  ui: {
    is_loading: false,
  },
  user: {
    user: {
      isLoggedIn: false,
      user_id: "",
      userRoles: ["guest"],
      login_response: null,
    },
    loginScreenMessage: "",
    lastEmail: "admin.user@gmail.com",
  },
  env: { BASE_URL: "" },
  orderViewUpdate: {
    keyName: "YourName",
  },
  activeBuisnessFunctionSelection: {
    key: "1000",
    name: "Foundation",
  },
  activeModuleSelection: {
    key: "2001",
    name: "Catalog",
  },
  activeTabSelection: {
    key: "118201",
    name: "Organisation",
  },
  activeActionSelection: {
    actionData: {
      actionKey: 124684,
      actionName: "Search",
      endPoint: "v1/organization/list",
      httpMethod: "POST",
      showButton: true,
      tabKey: 118201,
    },
  },
  schemaUpdate: {
    schema: [],
  },
};
