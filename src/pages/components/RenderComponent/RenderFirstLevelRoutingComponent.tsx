/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Row } from "react-native-easy-grid";
import { useHistory } from "react-router-native";
import { RouteWithSubRoutes } from "../../../routeConfig";

const RenderFirstLevelRoutingComponent = ({ routes }) => {
  const history = useHistory();

  return (
    <View>
      <View style={styles.nav}>
        <Row>
          <View
            style={{
              flex: 1,
              borderWidth: 2,
            }}
          >
            <Text
              style={{
                margin: 10,
              }}
            >
              First Level of Route 2 :-
            </Text>
            <View
              style={{
                marginLeft: 200,
                marginRight: 200,
                marginBottom: 50,
              }}
            >
              <Button
                title="Click here to View the Second Level Route Below"
                onPress={() => {
                  console.log("First Row Button Clicked");
                  history.push("/demo_route2/list");
                }}
              />
            </View>
          </View>
        </Row>
      </View>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RenderFirstLevelRoutingComponent;
