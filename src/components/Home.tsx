import React from "react";
import { Button, Text, View } from "react-native";
import { appConfig as layoutConfig } from "../../applications/app-one-config";
import { nextState } from "../../applications/app-one/screen-one";

export const Home = (props) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
    events
  } = props;

//   console.log(`getEvents`);
//   console.log(getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState));
  
  return (
    <View>
      <Text style={{}}>Home *** {label}</Text>
      <Button
        testID={`${label}-btn-one`}
        title="ACT"
        {...getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
