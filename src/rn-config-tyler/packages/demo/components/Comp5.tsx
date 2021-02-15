import React from "react";
import { Text, View } from "react-native";

export const Comp5 = ({ label, dispatch, appState, children }: any) => {
  // console.log(appState);
  return (
    <View key={label}>
      <Text style={{ textAlign: "center" }}>Comp5 :: {label}</Text>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
