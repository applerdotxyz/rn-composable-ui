/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { initialState } from "./app";
import rootReducer from "./reducers";

const persistConfig = {
  key: "roots",
  storage: AsyncStorage,
  blacklist: ["navigation", "env", "app", "session"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = (queueReleaseThrottle = 1000) => {
  if (process.env.REACT_NATIVE_NODE_ENV !== "stage") {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createLogger } = require("redux-logger");

    const composeEnchancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
      persistedReducer,
      initialState,
      composeEnchancers(applyMiddleware(thunk /*, createLogger()*/))
    );
  } else {
    return createStore(
      persistedReducer,
      initialState,
      compose(applyMiddleware(thunk))
    );
  }
};
