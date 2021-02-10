/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { Button, Text, View, ScrollView, TouchableOpacity } from "react-native";

export const TabComponent = (props: {
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

  //   TODO : Integrate with API or app state to update the data array
  const data = [
    {
      tabKey: 3001,
      tabName: "Tab",
      tabDisplayName: "Tab 1",
      defaultActive: true, // USER CAN SET WHICH TAB TO MAKE IT DEFAULT ACTIVE
    },
    {
      tabKey: 3001,
      tabName: "Tab",
      tabDisplayName: "Tab 2",
      defaultActive: false,
    },
    {
      tabKey: 117703,
      tabName: "Tab",
      tabDisplayName: "Tab 3",
      defaultActive: false,
    },
    {
      tabKey: 117702,
      tabName: "Tab",
      tabDisplayName: "Tab 4",
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 5",
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 6",
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 7",
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 8",
      moduleKey: 23751,
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 9",
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 10",
      defaultActive: false,
    },
    {
      tabKey: 117704,
      tabName: "Tab",
      tabDisplayName: "Tab 11",
      defaultActive: false,
    },
  ];

  return (
    <View
      style={{
        backgroundColor: `#5cabc5`,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      {/* <Text style={{}}>Home *** {label}</Text> */}
      {/* <Button
        testID={`${label}-btn-one`}
        title="ACT"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, key) => (
          <View
            style={{
              marginRight: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                //   TODO : SAVE THE TAB IN THE APP STATE AND THEN CHANGE THE DEFAULT ACTIVE STATE FROM TRUE TO FALSE
                console.log("Button with Tab item : ", item);
              }}
              // TODO : Title of button should come from API
              style={{
                backgroundColor: item.defaultActive ? "#b2c560" : "transparent", // TODO : WORK on it to update via state
                height: 40,
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
                paddingRight: 30,
              }}
            >
              <Text
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  marginLeft: 10,
                  marginRight: 10,
                  color: "white",
                  //   fontWeight: "bold",
                }}
              >
                {`${item.tabDisplayName}`}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
