import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { JsonForm } from "./components/json-form/JsonForm";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Index = (props) => {
  const [formData, setFormData] = useState({
    username: "Saurabh",
    password: "Password@1",
  });

  const onBeforeSubmit = () => {
    // allowed.current = true;
  };

  const onSuccess = (event) => {
    console.log("onSuccess outer called");
    const { response } = event.params;
    console.log(response);
    // setLoading(false);
    // setMessage(response.data[controller][action].message);
  };

  const onError = (event) => {
    console.log(event);
    const { exceptions } = event.params;
    const exceptionsMessages = exceptions.map((messages) =>
      messages.join(", ")
    );
    // setLoading(false);
    // if (exceptionsMessages.length) {
    //   setException(exceptionsMessages.join("\n"));
    // }
  };

  // const onErrorOk = () => setException(null);

  // form data mutator
  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.params.name]: event.params.value,
    });
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
        formData={formData}
        onSuccess={(e) => {
          onSuccess(e);
          props.navigation.navigate("First");
        }}
        onError={onError}
        onBeforeSubmit={onBeforeSubmit}
        onChange={(e) => {
          console.log("data changed");
          onChange(e);
        }}
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
