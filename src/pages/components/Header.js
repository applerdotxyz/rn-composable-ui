// import { Link } from "expo-next-react-navigation";
import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Header() {
  return (
    <View>
      <Link style={{ color: "green", fontSize: 20 }} to="/Index">
        Initial App
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/First">
        Home
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/Alternate">
        Alternate
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/Test">
        Test
      </Link>
    </View>
  );
}
