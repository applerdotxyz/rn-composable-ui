import React from "react";
import { Button, FlatList, Text, View } from "react-native";

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
  } = props;

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));
  console.log("appState from TODOApp2 : : : : ", appState);

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
      {/* <Button
        testID={`${label}-btn-one`}
        title="ACT"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
