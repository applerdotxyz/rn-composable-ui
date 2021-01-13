import React from "react";
import { Button, Text, View } from "react-native";

export const ActionComp = ({ label, appState, children, setAppState }) => {
  return (
    <View
      style={
        {
          /* borderWidth: 4, height: "20%" */
        }
      }
    >
      <Text style={{ textAlign: "center" }}>{label}</Text>
      <Button
        title={"Trigger"}
        onPress={() => {
          setAppState({
            ...appState,
            ui: {
              ...appState.ui,
              about: "Home",
              "comp5.1": "RandomPic"
            },
            props: appState.props,
            children: {
              ...appState.children,
              about: <Text>I am 2nd Child</Text>,
              "comp5.1": <Text>I am 1st Child</Text>
            }
          });
        }}
      ></Button>
      {children || (appState && appState.children && appState.children[label])}
      {/* <Text>{appState && JSON.stringify(appState)}</Text> */}
    </View>
  );
};
