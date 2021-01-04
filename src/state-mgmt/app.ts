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
};
