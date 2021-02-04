import { combineReducers } from "redux";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPADATE_ACTIVE_MODULE_SELECTION,
  UPDATE_ORDER_VIEW_DATA,
  UPDATE_STATE,
  UPDATE_ACTIVE_TAB_SELECTION,
  UPDATE_ACTIVE_ACTION_SELECTION,
  UPDATE_SCHEMA,
  UPADATE_ACTIVE_BUISNESS_FUNCTION_SELECTION,
} from "./actions"; //Import the actions types constant we defined in our actions
import { initialState } from "./app";

let environment = {};
if (process.env.REACT_NATIVE_NODE_ENV !== "stage") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  environment = require("./config/env.dev").default;
} else {
  environment = process.env;
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

/*
 * ORDER VIEW UPDATE REDUCER <--
 */
const orderViewUpdate = (
  state = { ...initialState.orderViewUpdate },
  action
) => {
  switch (action.type) {
    case UPDATE_ORDER_VIEW_DATA:
      return {
        ...state,
        user: initialState.user,
        keyName: action.data.keyName,
      };
    default:
      return state;
  }
};

const activeBuisnessFunctionSelection = (
  state = { ...initialState.activeBuisnessFunctionSelection },
  action
) => {
  switch (action.type) {
    case UPADATE_ACTIVE_BUISNESS_FUNCTION_SELECTION:
      console.log("action for buisness function : : : : ", action);
      return {
        // ...state,
        key: action.data.function.key,
        name: action.data.function.name,
      };
    default:
      return state;
  }
};

const activeModuleSelection = (
  state = { ...initialState.activeModuleSelection },
  action
) => {
  switch (action.type) {
    case UPADATE_ACTIVE_MODULE_SELECTION:
      console.log("action for module : : : : ", action);
      return {
        // ...state,
        key: action.data.module.key,
        name: action.data.module.name,
      };
    default:
      return state;
  }
};

const activeTabSelection = (
  state = { ...initialState.activeTabSelection },
  action
) => {
  switch (action.type) {
    case UPDATE_ACTIVE_TAB_SELECTION:
      console.log("action for tab : : : : ", action);
      return {
        // ...state,
        key: action.data.tab.key,
        name: action.data.tab.name,
      };
    default:
      return state;
  }
};

const activeActionSelection = (
  state = { ...initialState.activeActionSelection },
  action
) => {
  switch (action.type) {
    case UPDATE_ACTIVE_ACTION_SELECTION:
      console.log("action for action : : : : ", action);
      return {
        // ...state,
        key: action.data.action.key,
        name: action.data.action.name,
      };
    default:
      return state;
  }
};

const schemaUpdate = (
  state = { ...initialState.schemaUpdate.schema },
  action
) => {
  switch (action.type) {
    case UPDATE_SCHEMA:
      console.log("action for action : : : : ", action);
      return {
        ...state,
        schema: action.data.action.schema,
      };
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  user,
  env,
  orderViewUpdate,
  activeBuisnessFunctionSelection,
  activeModuleSelection,
  activeTabSelection,
  activeActionSelection,
  schemaUpdate,
});

export default rootReducer;
