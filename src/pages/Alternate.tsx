import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { useRouting } from "expo-next-react-navigation";
// TODO : HAVE BEEN ASKED BY SAURABH TO REMOVE I AM JUST COMMENTING THIS Component from the UI.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Alternate = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      <Button
        color="blue"
        accessibilityLabel="link"
        onPress={() => {
          goBack();
        }}
        title="Go Back"
      />

      <Button
        onPress={() => {
          goBack();
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    borderWidth: 1,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    color: "red",
    // marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});
// export default Alternate;
