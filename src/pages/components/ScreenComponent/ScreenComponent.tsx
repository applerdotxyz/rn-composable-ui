/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO : MADE for desmostration in 2nd level route
import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

import { NativeRouter as Router, Route } from "react-router-native";
import { routes, RouteWithSubRoutes } from "../../../routeConfig";

const Home = () => (
  <Text style={styles.header}>Default First Level Route 1 to be show</Text>
);

const ScreenComponent = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        minHeight: Dimensions.get("window").height,
      }}
    >
      <View style={styles.container}>
        <Grid>
          <Row>
            <Col size={3}>
              <Text>{JSON.stringify(routes)}</Text>
              <Route exact path="/" component={Home} />
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Col>
          </Row>
        </Grid>
      </View>
    </SafeAreaView>
  );
};

export default ScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //   titleText: {
  //     flex: 1,
  //     fontSize: 22,
  //     fontWeight: 'bold',
  //   },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subHeader: {
    fontSize: 15,
  },
});
