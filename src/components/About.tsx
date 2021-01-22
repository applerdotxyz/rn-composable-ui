/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
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
  events,
}) => {
  // console.log(getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState));

  return (
    <View>
      <Text>About *** {label}</Text>
      <Button
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
        testID={`${label}-btn-one`}
        title={`${"About"}Flash`}
      ></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
