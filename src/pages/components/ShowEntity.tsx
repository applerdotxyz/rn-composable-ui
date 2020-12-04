import { useNavigation } from "@react-navigation/native";
import { createBrowserHistory } from "history";
import React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import {  MainContainer, UIProvider } from 'react-native-web-ui-components';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const ShowEntity = () => {
  const { goBack } = useNavigation();


  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "#33bfff",
        },
      }),
    },
  };

  const ThemeWrapper = ({ children }) => {
    return (
      <UIProvider
        theme={theme}
        history={Platform.OS === "web" ? createBrowserHistory() : {}}
      >
        {children}
      </UIProvider>
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>ShowEntity</Text>
      <Button title="👈 Go back" onPress={() => goBack()} />
      {/* <Button onPress={() => goBack()}>
            <Text>Go Back</Text>
          </Button> */}
      {/* <MainContainer>
        <Button
          auto
          radius
          type="navy"
          flat={false}
          onPress={() => goBack()}
        >
          <Text>
            Go Back
          </Text>
        </Button>
      </MainContainer> */}
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
    marginTop: 30,
    fontSize: 16,
  },
});
