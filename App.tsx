import { default as React, FunctionComponent } from "react";
import { StatusBar, View } from "react-native";
import { persistStore } from "redux-persist";
import { Navigator } from "./src/Navigator";
import { configureStore } from "./src/state-mgmt/store"; //Import the store
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
const persistor = persistStore(store);

// routeConfig
// TODO: bring from anywhere you wish
const routes = {
  Index: "Index",
  Alternate: "Alternate",
  Test: "Test",
  First: "First",
};

//  main wrapper component
const App: FunctionComponent = () => (
  <>
    <StatusBar
      backgroundColor={"#FFFFFF"}
      barStyle="light-content"
      hidden={false}
    />

    <View style={{ flex: 1 }}>
      <ReduxProvider store={store}>
        <Navigator routes={routes} />
      </ReduxProvider>
    </View>
  </>
);

export default App;
