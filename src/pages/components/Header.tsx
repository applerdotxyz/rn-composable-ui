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
      <Link style={{ color: "green", fontSize: 20 }} to="/List">
        SearchList
      </Link>
    </View>
  );
}
