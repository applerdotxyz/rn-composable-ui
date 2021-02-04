/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { JsonForm } from "../../../../src/components/json-form/JsonForm";
import { useSelector, useDispatch } from "react-redux";
import useSafeSetState from "../../helper/useSafeState";
import {
  updateActionSelection,
  updateModuleSelection,
  updateState,
  updateTabSelection,
} from "../../../../src/state-management/actions";
import { DEV_END_POINT } from "../../../../src/state-management/config/constant";

export const JsonFormComponent = (props: {
  appState;
  label;
  styles;
  children;
  setAppState;
  layoutConfig;
  setLayoutConfig;
  getEvents;
  events;
}) => {
  const {
    appState,
    label,
    styles,
    children,
    setAppState,
    layoutConfig,
    setLayoutConfig,
    getEvents,
  } = props;

  // console.log(`label is ${label}`);
  // console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);

  console.log("DISPATCH : : : : ", dispatch);

  const _formData = {
    firstName: "Raj",
    lastName: "Shah",
    stype: "Male",
    date: "11-01-2021",
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

  const initialFormSchema = {
    type: "object",
    required: ["keyName"],
    properties: {
      keyName: { type: "string" },
    },
  };

  const [formLayout, setformLayout] = useState(initialFormSchema);

  useEffect(() => {
    const fetchFormLayoutData = async () => {
      const res = await fetch(
        `http://localhost:8080/transaction-web//v1/schema/singleformLayout`,
        {
          method: `POST`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            moduleKey: state.activeModuleSelection.key,
            roleKey: 1,
            tabKey: state.activeTabSelection.key,
            userId: "TsdAdmin",
            actionName: state.activeActionSelection.actionData.actionName,
          }),
        }
      );
      const resJSON = await res.json();
      console.log("RES JSON : : : : ", resJSON);
      const json_name = `${state.activeActionSelection.actionData.actionName}${state.activeTabSelection.name}Schema`;
      console.log("resJSON.json_name : : : : : ", resJSON[json_name]);
      console.log("resJSON.json_name : : : :: : :", json_name);

      setformLayout(resJSON[json_name]);
      console.log("Action in form  : : : : ", state);
    };
    fetchFormLayoutData();
  }, [
    state.activeActionSelection.actionData.actionName,
    state.activeModuleSelection,
    state.activeTabSelection,
  ]);

  console.log("FormLayoout : : : : : ", formLayout);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        borderWidth: 0,
        // minHeight: Dimensions.get("window").height - 85,
        minWidth: Dimensions.get("window").width / 4,
        margin: 2,
      }}
    >
      {/* TODO : Remove before final demo */}
      {/* <Text>{JSON.stringify(props)}</Text> */}
      {/* <Text accessibilityRole="header" style={{ alignSelf: "center" }}>
        Current User is :: {JSON.stringify(state)}
      </Text> */}
      {/* <ConnectedForm controller="person" action="get" /> */}
      {/* <ScrollView>  */}
      {/* Use Grid */}
      <JsonForm
        schema={formLayout}
        // schema={_schema}
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
          console.log("e : : : : ", e);

          // dispatch(updateState());
          // dispatch(updateModuleSelection("Hello", "1233"));
          // dispatch(updateTabSelection("Bolo", "12334"));
          // dispatch(updateActionSelection("Gooo", "893839"));
          // console.log("Hello onSuccess");
          // console.log("state inside JSON FORM : : : : ", state);

          // props.navigation.navigate("First");
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
      {children || (appState && appState[label] && appState[label]?.children)}
    </ScrollView>
  );
};
