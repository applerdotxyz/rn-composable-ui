import { Link } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { JsonForm } from "./components/json-form/JsonForm";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = (props) => {
  // form field values
  const _formData = {
    username: "Saurabh",
    password: "Password@1",
  };

  // form schema
  const schema = {
    type: "object",
    properties: {
      username: { type: "string" },
      password: { type: "string" },
    },
  };

  return (
    <View>
      <JsonForm
        schema={schema}
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
