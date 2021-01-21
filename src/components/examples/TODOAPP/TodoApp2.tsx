/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Button, FlatList, Text, View } from "react-native";
// import { appConfig as layoutConfig } from "../../../../applications/app-one-config";
// import { nextState } from "../../../../applications/app-one/screen-one";

export const TodoApp2 = (props: {
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

  console.log(`getEvents`);
  console.log(
    getEvents(events, `${label}-btn-one`, setLayoutConfig, setAppState)
  );

  console.log("AppState from TODO APP 2 : : : : ", appState);

  return (
    <View>
      <Text style={{}}>TodoApp2 *** {label}</Text>
      <View>
        <FlatList
          data={[
            { key: "Kitchen Work" },
            { key: "Gardening" },
            { key: "Study Maths" },
            { key: "Dance Class" },
            { key: "Painting Class" },
          ]}
          renderItem={({ item }: any) => (
            <Text
              style={{
                marginLeft: 20,
                padding: 5,
                fontSize: 15,
                height: 32,
              }}
            >
              {item.key}
            </Text>
          )}
        />
      </View>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
