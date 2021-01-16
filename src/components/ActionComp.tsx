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
            about: {
              ui: "About",
              props: { label: "about" },
              children: <Text>I am 2nd Child</Text>
            },
            "comp5.12": {
              ui: "RandomPic",
              props: { label: "comp5.12" },
              children: <Text>I am 1st Child</Text>
            },
            home: {
              ui: "RandomPic",
              props: { label: "comp5.12" },
              children: <Text>I am 0th Child</Text>
            }
          });
        }}
      ></Button>
      {children || (appState && appState[label] && appState[label]?.children)}
      {/* <Text>{appState && JSON.stringify(appState)}</Text> */}
    </View>
  );
};
