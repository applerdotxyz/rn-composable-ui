import { combineReducers } from "redux";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_STATE,
} from "./actions"; //Import the actions types constant we defined in our actions
import { initialState } from "./app";
let environment;
if (process.env.REACT_NATIVE_NODE_ENV !== "stage") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  environment = require("../config/env.dev").default;
}

const user = (state = { ...initialState.user }, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          isLoggedIn: false,
          user_id: state.lastEmail,
          userRoles: ["guest"],
        },
        login_response: null,
        loginScreenMessage: "Successfully Logged In",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          isLoggedIn: true,
          user_id: decodeURIComponent(action.data && action.data.user_id),
          userRoles: ["guest"],
        },
        login_response: null,
        lastEmail: action.data["user_id"],
        loginScreenMessage: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: initialState.user,
        login_response: action.data.response && action.data.response.error,
        lastEmail: action.data["user_id"],
        loginScreenMessage: "",
      };
    case UPDATE_STATE:
      return {
        ...state,
        user: initialState.user,
        lastEmail: action.data.lastEmail,
      };
    default:
      return state;
  }
};

// environment vars elated data
const env = () => {
  return environment;
};
// Combine all the reducers
const rootReducer = combineReducers({
  user,
  env,
});

export default rootReducer;
