import React from "react";
import { Text, View } from "react-native";
import { Col, Grid } from "react-native-easy-grid";

export const Comp5 = ({ label, dispatch, appState, children }) => {
  // console.log(appState);
  return (
    <View key={label}>
      <Text style={{ textAlign: "center" }}>{label}</Text>
      {/* <Text>{appState?.payload && JSON.stringify(appState.payload)}</Text> */}
      <Grid>
        <Col>
          {children || (appState?.children && appState.children[label])}
        </Col>
      </Grid>
    </View>
  );
};
