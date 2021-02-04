/* eslint-disable react/jsx-key */
import { cleanup } from "detox";
import React, { useEffect, useState } from "react";
import { Button, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateTabSelection } from "../../../../src/state-management/actions";

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
  // const data: any[] = [];
  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);
  console.log("State in tab Component : : : : :", state);

  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://localhost:8080/transaction-web/v1/schema/modulelayout`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "TsdAdmin",
            roleKey: 1,
            moduleName: state.activeModuleSelection.name,
            // tabName: "CreateOrders",
            actionName: state.activeActionSelection.name,
          }),
        }
      );
      const resJSON = await res.json();
      // console.log("active module : : : :", state.activeModuleSelection);

      console.log(
        "Buisness Functions with Tabs",
        resJSON.businessFunctions[0].modules[0].tabs
      );
      setdata(resJSON.businessFunctions[0].modules[0].tabs);
    };
    fetchData();
  }, [
    state.activeModuleSelection.name,
    state.activeActionSelection.name,
    state.activeTabSelection.name,
  ]);

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
        {data.map((item: any, key) => (
          <View
            style={{
              marginRight: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                //   TODO : SAVE THE TAB IN THE APP STATE AND THEN CHANGE THE DEFAULT ACTIVE STATE FROM TRUE TO FALSE
                console.log(
                  "Button with Tab item : ",
                  item.tabName + " " + state.activeTabSelection.name
                );
                dispatch(updateTabSelection(item.tabName, item.tabKey));
              }}
              // TODO : Title of button should come from API
              style={{
                backgroundColor:
                  item.tabName === state.activeTabSelection.name
                    ? "#b2c560"
                    : "transparent", // TODO : WORK on it to update via state
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
