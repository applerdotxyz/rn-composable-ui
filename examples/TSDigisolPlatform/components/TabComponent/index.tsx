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
      tabName: "CreateOrders",
      tabDisplayName: "Create Orders",
      defaultActive: true, // USER CAN SET WHICH TAB TO MAKE IT DEFAULT ACTIVE
      moduleKey: 2001,
      action: [
        {
          actionKey: 22081,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 34601,
        },
        {
          actionKey: 22082,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 34601,
        },
        {
          actionKey: 22083,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 34601,
        },
        {
          actionKey: 22084,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 34601,
        },
        {
          actionKey: 21681,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 34601,
        },
      ],
    },
    {
      tabKey: 3001,
      tabName: "BookOrders",
      tabDisplayName: "Book Orders",
      moduleKey: 2001,
      defaultActive: false,
      action: [
        {
          actionKey: 100581,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117701,
        },
        {
          actionKey: 100583,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117701,
        },
        {
          actionKey: 100582,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117701,
        },
        {
          actionKey: 100585,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117701,
        },
        {
          actionKey: 100584,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117701,
        },
      ],
    },
    {
      tabKey: 117703,
      tabName: "AllocateOrders",
      tabDisplayName: "Allocate ORDERS",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100591,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117703,
        },
        {
          actionKey: 100593,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117703,
        },
        {
          actionKey: 100592,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117703,
        },
        {
          actionKey: 100595,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117703,
        },
        {
          actionKey: 100594,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117703,
        },
      ],
    },
    {
      tabKey: 117702,
      tabName: "ReserveOrders",
      tabDisplayName: "Reserve Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100587,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117702,
        },
        {
          actionKey: 100586,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117702,
        },
        {
          actionKey: 100589,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117702,
        },
        {
          actionKey: 100588,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117702,
        },
        {
          actionKey: 100590,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117702,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
    },
    {
      tabKey: 117704,
      tabName: "CompleteOrders",
      tabDisplayName: "Complete Orders",
      moduleKey: 23751,
      defaultActive: false,
      actions: [
        {
          actionKey: 100597,
          actionName: "List",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100596,
          actionName: "Search",
          endPoint: "v1/serviceorder/list",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100599,
          actionName: "View",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "GET",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100598,
          actionName: "Edit",
          endPoint: "v1/serviceorder/{orderKey}",
          httpMethod: "PUT",
          showButton: true,
          tabKey: 117704,
        },
        {
          actionKey: 100600,
          actionName: "Create",
          endPoint: "v1/serviceorder/",
          httpMethod: "POST",
          showButton: true,
          tabKey: 117704,
        },
      ],
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
