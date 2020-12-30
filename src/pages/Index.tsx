import { Link } from "@react-navigation/native";
import React from "react";
import PropTypes from "prop-types"; // ES6
import { Dimensions, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = (props) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        borderWidth: 0,
        minHeight: Dimensions.get("window").height - 85,
        alignContent: "center",
      }}
    >
      {/* TODO : 
          Where to keep this redux representation should be displayed ?
       */}
      <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Current User is :: {JSON.stringify(props.route.params.state.user)}
      </Text>
      <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Order View Update is ::{" "}
        {JSON.stringify(props.route.params.state.orderViewUpdate)}
      </Text>
      {/* 
      THE WHOLE CODE FOR JSON FORM HAS BEEN MOVED TO 
      `src\pages\components\AddEditEntity.tsx`
       */}
      <View
        style={{
          borderWidth: 0,
          // maxWidth: Dimensions.get('screen').width / 4,
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            marginRight: 10,
            // fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Click on the Go Link to navigate to Demo Here.
        </Text>
        <Link
          style={{
            backgroundColor: "#283593",
            width: 80,
            height: 40,
            color: "white",
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 100,
            marginRight: 100,
            marginTop: 20,
            marginBottom: 20,
            // borderRadius: 50,
          }}
          to="/First"
        >
          Go
        </Link>
      </View>
    </ScrollView>
  );
};
// };

Index.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default Index;
