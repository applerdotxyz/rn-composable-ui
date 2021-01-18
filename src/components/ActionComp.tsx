import React from "react";
import { Button, Text, View } from "react-native";

export const ActionComp = ({
  label,
  appState,
  children,
  setAppState,
  setLayoutConfig,
  events,
  getEvents
}) => {
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
        {...getEvents(events, `${label}-btn-two`, setLayoutConfig, setAppState)}
      ></Button>
      <Button
        testID={`${label}-btn-one`}
        title={"Trigger"}
        {...getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button>
      <Text style={{ textAlign: "center" }}>{label}</Text>

      {children || (appState && appState[label] && appState[label]?.children)}
      {/* <Text>{appState && JSON.stringify(appState)}</Text> */}
    </View>
  );
};
