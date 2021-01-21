/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, TextInput, View } from "react-native";
// import { appConfig as layoutConfig } from "../../../../applications/app-one-config";
// import { nextState } from "../../../../applications/app-one/screen-one";

export const TodoApp1 = (props: {
  appState: any;
  label: any;
  styles: any;
  children: any;
  setAppState: any;
  layoutConfig: any;
  setLayoutConfig: any;
  getEvents: any;
  events: any;
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
    events,
  } = props;

  const [value, onChangeText] = React.useState("Add Task");
  const [task, SetAddTask] = React.useState([]);

  console.log(`getEvents`);
  console.log(
    getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState)
  );

  console.log("Props from TODO APP 1 : : : : ", props);
  console.log("AppState from TODO APP 1 : : : : ", appState);

  return (
    <View>
      <Text style={{}}>TodoApp1 *** {label}</Text>
      <View
        style={{
          marginLeft: 100,
          marginRight: 100,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
      <View
        style={{
          marginLeft: 200,
          marginRight: 200,
        }}
      >
        <Button
          testID={`${label}-btn-one`}
          title="ADD TASK"
          {...getEvents(
            events,
            `${label}-btn-one`,
            setLayoutConfig,
            setAppState
          )}
        ></Button>
      </View>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
