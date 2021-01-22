/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, View } from "react-native";

export const ActionComp = ({
  label,
  appState,
  children,
  setAppState,
  setLayoutConfig,
  events,
  getEvents,
}: any) => {
  return (
    <View
      style={
        {
          /* borderWidth: 4, height: "20%" */
        }
      }
    >
      <Button
        title={"Back"}
        testID={`${label}-btn-two`}
        {...getEvents(`${label}-btn-two`, setLayoutConfig, setAppState)}
      ></Button>
      <Button
        testID={`${label}-btn-one`}
        title={"Trigger"}
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button>
      <Text style={{ textAlign: "center" }}>{label}</Text>

      {children || (appState && appState[label] && appState[label]?.children)}
      {/* <Text>{appState && JSON.stringify(appState)}</Text> */}
    </View>
  );
};
