import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import { useRouting } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Alternate = () => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      <Button
        style={styles.link}
        accessibilityRole="link"
        onPress={() => {
          goBack();
        }}
        title="Go Back"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: "blue",
  },
});
export default Alternate;
