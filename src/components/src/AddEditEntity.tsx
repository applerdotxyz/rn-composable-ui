/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserHistory } from "history";
import React from "react";
import { Dimensions, Platform, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { UIProvider } from "react-native-web-ui-components";
import { JsonForm, useSafeSetState } from "./json-form/JsonForm";

const theme = {
  input: {
    focused: StyleSheet.create({
      border: {
        borderColor: "#33bfff",
      },
    }),
  },
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AddEditEntity = (props) => {
  // form field values
  const _formData = {
    firstName: "Raj",
    lastName: "Shah",
    stype: "Male",
    date: "10-05-1980",
    username: "raj@1234",
    password: "Raj@123",
    "Confirm password": "Raj@123",
    languages: ["Java", "C"],
    recievemsgs: true,
  };

  const [_schema, setSchema] = useSafeSetState({
    type: "object",
    required: [
      "firstName",
      "lastName",
      "stype",
      "date",
      "username",
      "password",
      "Confirm password",
      "languages",
      "recievemsgs",
    ],
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      stype: {
        enum: ["Male", "Female", "Others"],
        type: "string",
      },
      date: {
        format: "date",
        type: "string",
        title: "Date",
      },
      username: { type: "string" },
      password: { type: "string" },
      "Confirm password": { type: "string" },
      languages: {
        type: "array",
        items: {
          type: "string",
        },
      },
      recievemsgs: { type: "boolean" },
      upload: {
        format: "data-url",
        type: "string",
      },
      age: {
        type: "integer",
        title: "Age",
      },
    },
  });

  const languages = ["Java", "Python", "C"];

  // // form schema
  const _uiSchema = {
    languages: {
      "ui:title": "Languages Known",
      "ui:options": {
        addable: false,
        orderable: false,
        removable: false,
        minimumNumberOfItems: languages.length,
      },
      items: {
        // The `ui:iterate` allows you to define the uiSchema for each item of the array.
        // The default is to have a list of TextInput.
        "ui:iterate": (i, { values }) => ({
          "ui:title": false,
          "ui:widget": "checkbox",
          "ui:widgetProps": {
            text: languages[i],
            value: languages[i],
            checked: (values.languages || []).includes(languages[i]),
          },
        }),
      },
    },
    recievemsgs: {
      "ui:title": "Are you okay if you recieve emails from our side?",
      "ui:widget": "radio",
      "ui:widgetProps": {
        style: { backgroundColor: "lightgrey" },
      },
      "ui:containerProps": {
        style: { paddingTop: 10 },
      },
    },
    stype: {
      "ui:title": "Gender",
      "ui:placeholder": "Please select your gender",
      "ui:widget": "select",
    },
    date: {
      "ui:widget": "date",
      "ui:title": "Select your Birthdate ",
    },
    upload: {
      "ui:widget": "file",
      "ui:title": "Upload your documents",
    },
    submitButton: false,
    age: {
      "ui:widget": "range",
    },
    //   "background-color":{
    //     'ui:widget':"ColorPicker"
    // },
  };

  const ThemeWrapper = ({ children }) => {
    return (
      <UIProvider
        theme={theme}
        history={Platform.OS === "web" ? createBrowserHistory() : {}}
      >
        {children}
      </UIProvider>
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        borderWidth: 0,
        minHeight: Dimensions.get("window").height - 85,
        minWidth : Dimensions.get("window").width/4,
      }}
    >
      {/* TODO : Remove before final demo */}
      {/* <Text>
        {JSON.stringify(props)}
      </Text> */}
      <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Current User is :: {props?.route?.params?.state?.user?.lastEmail}
      </Text>
      {/* <ConnectedForm controller="person" action="get" /> */}
      {/* <ScrollView>  */}
      {/* Use Grid */}
      <JsonForm
        schema={_schema}
        uiSchema={_uiSchema}
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
          // props.route.params.dispatch(updateState());
          props.navigation.navigate("First");
        }}
      // _onChange={(e) => {
      //   console.log("data changed");
      // }}
      />
      {/* </ScrollView> */}

      {/* <Link
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
      </Link> */}
    </ScrollView>
  );
};
// };
export default AddEditEntity;
