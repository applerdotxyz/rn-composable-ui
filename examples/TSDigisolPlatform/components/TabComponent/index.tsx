/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, View } from "react-native";

export const TabComponent = (props: {
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
      <Text style={{}}>TabComponent *** {label}</Text>
      <Text>DEMO FOR TODO APP</Text>
      {/* <Button
        testID={`${label}-btn-one`}
        title="TODO APP DEMO"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
