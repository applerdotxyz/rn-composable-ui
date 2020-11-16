import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = () => {
  return (
    <View>
      <Link
        style={{
          backgroundColor: "blue",
          width: 50,
          height: 50,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
        }}
        to="/First"
      >
        Go
      </Link>
    </View>
  );
};
