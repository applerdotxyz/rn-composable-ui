import { default as React, FunctionComponent } from "react";
import { StatusBar, View } from "react-native";
import { persistStore } from "redux-persist";
import { Navigator } from "./src/Navigator";
import { configureStore } from "./src/state-mgmt/store"; //Import the store
import { Provider as ReduxProvider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ListEntities } from "./src/pages/components/ListEntities";
import { createStackNavigator } from "@react-navigation/stack";
import UiX from "./src/UIconfigurator/UIx";

const store = configureStore();
const persistor = persistStore(store);

// routeConfig
// TODO: bring from anywhere you wish
const routes = {
  Index: "Index",
  Alternate: "Alternate",
  Test: "Test",
  First: "First",
  AddEditEntity : "AddEditEntity",
  ListEntities : "ListEntities",
  ShowEntity : "ShowEntity",
  MainApp : "MainApp",
  OneMoreApp : "OneMoreApp",
  OrderLineView : "OrderLineView"
  // Index: require(`./src/pages/Index`).default,
  // Alternate: require(`./src/pages/Alternate`).default,
  // Test: require(`./src/pages/Test`).default,
  // First: require(`./src/pages/First`).default,
};

const Stack = createStackNavigator();

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
      {/* <ReduxProvider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ListEntities" > 
        {({route, navigation}) => <UiX idx={`ListEntities`} />}
         </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </ReduxProvider> */}
    </View>
  </>
);

export default App;
