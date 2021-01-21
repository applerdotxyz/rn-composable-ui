import React from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Grid>
        <Row>
          <Col size={1}>
            <Image
              style={styles.logoStyle}
              source={require("../../../assets/image/TSD14.webp")}
            />
          </Col>
          <Col size={2} style={{ alignContent: "center" }}>
            <View
              style={{
                margin: 10,
              }}
            >
              <Text style={styles.text}>Order Workflow Dashboard Display</Text>
            </View>
          </Col>
          <Col size={1}>
            <Text>Other Links</Text>
          </Col>
        </Row>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: Dimensions.get("window").width,
    // TODO : I have coded for Web View but for mobile It should change accordingly needed to implement
    minHeight: Dimensions.get("window").height / 9,
    backgroundColor: "#ebb155",
    elevation: 20,
    // borderWidth: 1
  },
  logoStyle: {
    // TODO : Image Logo is having more margin Need to shift towards Left side
    resizeMode: "contain",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
  },
  link: {
    color: "blue",
  },
});
// export default Alternate;
