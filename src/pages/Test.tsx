import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
// TODO : HAVE BEEN ASKED BY SAURABH TO REMOVE I AM JUST COMMENTING THIS Component from the UI.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Test = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test</Text>
      <Button title="👈 Go back" onPress={() => goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth : 1
  },
  text: {
    fontSize: 16,
  },
});
export default Test;
