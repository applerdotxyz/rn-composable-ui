import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { default as React } from "react";
import { useSelector, useDispatch } from "react-redux";

// routing setup with react-navigation
const Stack = createStackNavigator();

// This puts screens in a native ViewController or Activity.
// enableScreens();

export const Navigator = ({ routes = {} }) => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch((s) => s);
  const navigationSection = Object.keys(routes).map((key) => (
    <Stack.Screen
      key={key}
      name={key}
      initialParams={{
        state,
        dispatch,
      }}
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      component={routes[key]}
    />
  ));
  return (
    <NavigationContainer>
      <Stack.Navigator>{navigationSection}</Stack.Navigator>
    </NavigationContainer>
  );
};
