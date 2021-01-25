/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, Text, TextInput, View } from "react-native";

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
  } = props;

  const [value, onChangeText] = React.useState("Add Task");
  const [task, SetAddTask] = React.useState([]);

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  console.log("appState : : : : ", appState);
  console.log("setAppState : : : ", setAppState);

  const setTodoTask = (_text: string) => {
    onChangeText(_text);
    const newState = {
      ui: {},
      children: {},
      props: {},
      todoTask: [value],
    };
    setAppState(newState);
  };

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
          // FIXME :  I am using this setTodoTask here textbox
          // is not working correctly
          // SAND
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
          title="Add Task"
          {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
        ></Button>
      </View>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
