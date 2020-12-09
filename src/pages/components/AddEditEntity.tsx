import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { updateState } from "../../state-mgmt/actions";
import useSafeSetState from "../../utils/useSafeState";
import { JsonForm } from "./json-form/JsonForm";
import PropTypes from "prop-types";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const AddEditEntity = (props) => {
  const _formData = {
    firstName: "Raj",
    lastName: "Shah",
    stype: "Male",
    date: "10-05-1980",
    username: "raj@1234",
    password: "Raj@123",
    "Confirm password": "Raj@123",
    // languages: ["Java", "C"],
    // recievemsgs: true,
  };

  const [_schema] = useSafeSetState({
    type: "object",
    required: [
      "firstName",
      "lastName",
      "stype",
      "date",
      "username",
      "password",
      "Confirm password",
      // "languages",
      // "recievemsgs",
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
      // languages: {
      //   type: "array",
      //   items: {
      //     type: "string",
      //   },
      // },
      // recievemsgs: { type: "boolean" },
      // upload: {
      //   format: "data-url",
      //   type: "string",
      // },
      age: {
        type: "integer",
        title: "Age",
      },
    },
  });

  const _uiSchema = {
    // languages: {
    //   "ui:title": "Languages Known",
    //   "ui:options": {
    //     addable: false,
    //     orderable: false,
    //     removable: false,
    //     minimumNumberOfItems: languages.length,
    //   },
    //   items: {
    //     // The `ui:iterate` allows you to define the uiSchema for each item of the array.
    //     // The default is to have a list of TextInput.
    //     "ui:iterate": (i, { values }) => ({
    //       "ui:title": false,
    //       "ui:widget": "checkbox",
    //       "ui:widgetProps": {
    //         text: languages[i],
    //         value: languages[i],
    //         checked: (values.languages || []).includes(languages[i]),
    //       },
    //     }),
    //   },
    // },
    // recievemsgs: {
    //   "ui:title": "Are you okay if you recieve emails from our side?",
    //   "ui:widget": "radio",
    //   "ui:widgetProps": {
    //     style: { backgroundColor: "lightgrey" },
    //   },
    //   "ui:containerProps": {
    //     style: { paddingTop: 10 },
    //   },
    // },
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

  const theme = {
    input: {
      focused: StyleSheet.create({
        border: {
          borderColor: "#33bfff",
        },
      }),
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>AddEditEntity</Text>
      {/* TODO : Remove this Current User stuff from AddEditEntity */}
      {/* <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Current User is :: {props.route.params.state.user.lastEmail}
      </Text> */}
      <ScrollView>
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
          _onSuccess={() => {
            props.route.params.dispatch(updateState());
            props.navigation.navigate("First");
          }}
          // _onChange={(e) => {
          //   console.log("data changed");
          // }}
        />
      </ScrollView>
      {/* <Button title="👈 Go back" onPress={() => goBack()} /> */}
    </View>
  );
};

AddEditEntity.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    borderWidth: 1,
    height: 600,
  },
  text: {
    fontSize: 16,
  },
});
