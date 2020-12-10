import { Link } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Header() {
  return (
    <View>
      <Text style={{
        fontWeight : 'bold',
        fontSize : 20
      }}>
        COMPONENTS-SETS CREATED
      </Text>
      <View style={{
        borderWidth: 0.5
      }} />
      <Link style={{ color: "green", fontSize: 20 }} to="/Index">
        Index
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/First">
        Home
      </Link>
      {/* <Link style={{ color: "green", fontSize: 20 }} to="/Alternate">
        Alternate
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/Test">
        Test
      </Link> */}
      <Link style={{ color: "green", fontSize: 20 }} to="/AddEditEntity">
        AddEditEntity
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/ListEntities">
        ListEntities
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/ShowEntity">
        ShowEntity
      </Link>
      <Text style={{
        fontWeight : 'bold',
        fontSize : 20
      }}>
        SCREEN LAYOUT CONFIGURED
      </Text>
      <View style={{
        borderWidth: 0.5
      }} />
      <Link style={{ color: "green", fontSize: 20 }} to="/MainApp">
        Main App
      </Link>
      <Link style={{ color: "green", fontSize: 20 }} to="/OneMoreApp">
        OneMoreApp
      </Link>
    </View>
  );
}
