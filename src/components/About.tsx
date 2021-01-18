import React from "react";
import { Button, Text, View } from "react-native";

export const About = ({
  appState,
  label,
  styles,
  children,
  setAppState,
  layoutConfig,
  setLayoutConfig,
  getEvents,
  events
}) => {
  // console.log(getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState));
  
  return (
    <View>
      <Text>About *** {label}</Text>
      <Button
        {...getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState)}
        testID={`${label}-btn-one`}
        title={`${"About"}Flash`}></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
