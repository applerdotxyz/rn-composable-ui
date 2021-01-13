/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { View, Text } from "react-native";
import { Row } from "react-native-easy-grid";

const RenderSecondLevelRoutingComponent = (props) => {
  return (
    <View>
      <Row>
        <View
          style={{
            margin: 10,
            borderWidth: 2,
          }}
        >
          <Text>Got 2nd Level Route 2</Text>
        </View>
      </Row>
    </View>
  );
};
export default RenderSecondLevelRoutingComponent;
