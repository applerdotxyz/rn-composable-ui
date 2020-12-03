import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export const First = ({
  route = {
    route: {
      params: {
        state: {},
      },
    },
  },
}) => {
  console.log("state for lastEmail >>> ", route.params.state.user.lastEmail);

  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Changed User is :: {route.params.state.user.lastEmail}
      </Text>

      <Header />

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          <Text style={styles.text}>Welcome to Expo + Web 👋</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});
export default First;
