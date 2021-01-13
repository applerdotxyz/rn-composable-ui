import React from "react";
import { Button, Text, View } from "react-native";
import "./RandomPic";
export const About = ({ appState, label, styles, children, setAppState }) => {
  return (
    <View>
      <Text>About *** {label}</Text>
      <Button
        onPress={() => {
          setAppState({
            ...appState,
            ui: {
              ...appState.ui,
              comp5: "About",
              "comp51.2": "RandomPic"
            },
            children,
            props: {
              ...appState.props,
              comp5: { label: "comp51->1" },
              "comp51.2": { label: "comp51-2" }
            }
          });
        }}
        title={`${"About"}Flash`}
      ></Button>
      {children || (appState && appState.children && appState.children[label])}
    </View>
  );
};
