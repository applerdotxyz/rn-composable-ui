import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import useSafeSetState from "../utils/useSafeState";
import { ConnectedForm } from "./components/json-form/ConnectedForm";
import { JsonForm } from "./components/json-form/JsonForm";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = (props) => {
  // form field values
  const _formData = {
    username: "Saurabh",
    password: "Password@1",
  };

  // // form schema
  const [_schema, setSchema] = useSafeSetState({
    type: "object",
    properties: {
      username: { type: "string" },
      password: { type: "string" },
    },
  });

  return (
    <View>
      {/* <ConnectedForm controller="person" action="get" /> */}
      <JsonForm
        schema={_schema}
        _formData={_formData}
        // _onBeforeSubmit={(e) => {
        //   console.log("*** _onBeforeSubmit ***");
        //   console.log(e);
        // }}
        // _onSubmit={(e) => {
        //   console.log("*** _onSubmit ***");
        //   console.log(e);
        // }}
        // _onError={(e) => {
        //   console.log("*** _onError ***");
        //   console.log(e);
        // }}
        _onSuccess={(e) => {
          props.navigation.navigate("First");
        }}
        // _onChange={(e) => {
        //   console.log("data changed");
        // }}
      />
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
// };
