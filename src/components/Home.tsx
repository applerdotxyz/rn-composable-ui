import React from "react";
import { Button, Text, View } from "react-native";

export const Home = (props) => {
  const { appState, label, styles, children, setAppState } = props;
  return (
    <View>
      <Text style={{}}>Home *** {label}</Text>
      <Button
        testID={`${label}-btnFlash`}
        onPress={() => {
          setAppState({
            ...appState,
            ui: {
              ...appState.ui,
              comp5: "RandomPic",
              "comp5.1": "Comp5",
              "comp51.2": "About"
            },
            props: {
              ...appState.props,
              comp5: {
                label: "comp5",
                style: { height: 400, width: 200 }
              },
              "comp5.1": { label: "comp5.1" },
              "comp51.2": { label: "comp51.2" }
            },
            children: {
              ...appState.children,
              comp5: <Text>Hi triggerred from "home 11" child</Text>,
              "comp5.1": <Text>Hi triggerred from "home 222" child</Text>,
              "comp51.2": <Text>Hi triggerred from "home 33" child</Text>
            }
          });
        }}
        title={`${label}Flash`}
      ></Button>
      {children || (appState && appState.children && appState.children[label])}
    </View>
  );
};
