import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ShowEntity = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ShowEntity</Text>
      <Button title="👈 Go back" onPress={() => goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
