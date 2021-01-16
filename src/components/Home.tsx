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
    setLayoutConfig
  } = props;
  return (
    <View>
      <Text style={{}}>Home *** {label}</Text>
      <Button
        testID={`${label}-btnFlash`}
        onPress={() => {
          //  change the next route with completely different layout
          setLayoutConfig(layoutConfig);
          setAppState(nextState.one);
        }}
        title={"ACT"}
      ></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
