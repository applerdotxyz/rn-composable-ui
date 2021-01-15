import React from "react";
import { Text, View } from "react-native";

export const Comp5 = ({ label, dispatch, appState, children }) => {
  // console.log(appState);
  return (
    <View key={label}>
      <Text style={{ textAlign: "center" }}>{label}</Text>
      {children || (appState?.children && appState.children[label])}
    </View>
  );
};
