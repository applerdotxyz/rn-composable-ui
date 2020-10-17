// @generated: @expo/next-adapter@2.1.0
import React from "react";
import { Link } from "expo-next-react-navigation";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function index() {
  return (
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
      routeName="first"
    >
      Go
    </Link>
  );
}
