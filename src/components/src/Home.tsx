import React from "react";
import { Button, Text, View } from "react-native";

export const Home = (props: {
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

  // console.log(`label is ${label}`);
  // console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  return (
    <View>
      <Text style={{}}>Home *** {label}</Text>
      {/* <Button
        testID={`${label}-btn-one`} // header-label-btn-one
        title="ACT"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
