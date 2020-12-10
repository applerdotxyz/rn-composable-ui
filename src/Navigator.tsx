import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { default as React } from "react";
import { useSelector, useDispatch } from "react-redux";
// import UiX from "./UIconfigurator/UIX";
import UiX from "./UIconfigurator/UIx";

// routing setup with react-navigation
const Stack = createStackNavigator();

// This puts screens in a native ViewController or Activity.
// enableScreens();

export const Navigator = (props) => {
  const state = useSelector((s) => s);
  const dispatch = useDispatch((s) => s);

  let routesSection: any = [];

  console.log("routes : : :  -> ", props.routes);

  console.log("Props in navigator : : : ---> ", props);
  

  // TODO : props.appId || added to getRouteConfig parameter
  routesSection = Object.keys(props.routes).map((key) => (
    <Stack.Screen
      key={key}
      name={key}
      initialParams={{
        state,
        dispatch,
      }}
    >
      {({ route, navigation }) => (
        <UiX idx={key} {...props} route={route} navigation={navigation} />
      )}
    </Stack.Screen>
  ));
  // return <Stack.Screen name={`${route.idx}`} component={() => <UiX idx={route.idx} {...props} />} />

  // const navigationSection = Object.keys(routes).map((key) => (
  //   <Stack.Screen
  //     key={key}
  //     name={key}
  //     initialParams={{
  //       state,
  //       dispatch,
  //     }}
  //     // eslint-disable-next-line @typescript-eslint/no-var-requires
  //     component={require(`./pages/${key}`)[key]}
  //   />
  // ));
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>{navigationSection}</Stack.Navigator> */}
      <Stack.Navigator>{routesSection}</Stack.Navigator>
    </NavigationContainer>
  );
};
