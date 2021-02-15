import React from "react";
import { Button, Text, View } from "react-native";

export const SideNavBar = (props: {
  appState: any;
  label: any;
  styles: any;
  children: any;
  setAppState: any;
  layoutConfig: any;
  setLayoutConfig: any;
  getEvents: any;
  events: any;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props;

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  return (
    <View>
      <Text style={{}}>SideNavBar *** {label}</Text>
      <View
        style={{
          margin: 20,
        }}
      >
        <Button testID={`${label}-btn-one`} title="TODO APP DEMO"></Button>
      </View>
      <View
        style={{
          margin: 20,
        }}
      >
        <Button
          testID={`${label}-btn-two`}
          title="Back"
          {...getEvents(`${label}-btn-two`, setLayoutConfig, setAppState)}
        ></Button>
      </View>

      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
