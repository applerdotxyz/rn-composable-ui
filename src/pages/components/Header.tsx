import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

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
      <Link style={{ color: "green", fontSize: 20 }} to="/AddEditEntity">
        AddEditEntity
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/ListEntities">
        ListEntities
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/ShowEntity">
        ShowEntity
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/MainApp">
        Main App
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/OneMoreApp">
        OneMoreApp
      </Link>
    </View>
  );
}
