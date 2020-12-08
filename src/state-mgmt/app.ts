import { AnyRecord } from "dns";

export interface window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: AnyRecord;
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
};
