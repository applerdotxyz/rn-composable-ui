import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

export const ActionComponent = (props: {
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

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  const [action1BtnColor, setActionBtn1Color] = useState("#5cabc5");
  const [action2BtnColor, setActionBtn2Color] = useState("#b2c560");

  // TODO : Implementation Left
  /**
   * Update State for Action
   * Change the ActionBtn1 color --> #b2c560
   * Change the ActionBtn2 color --> #5cabc5
   * Change Layout
   */
  const createActionHandler = () => {
    setActionBtn1Color("#b2c560");
    setActionBtn2Color("#5cabc5");
  };

  // TODO : Implementation Left
  /**
   * Update State for Action
   * Change the ActionBtn2 color --> #b2c560
   * Change the ActionBtn1 color --> #5cabc5
   * Change Layout
   */
  const searchActionHandler = () => {
    setActionBtn2Color("#b2c560");
    setActionBtn1Color("#5cabc5");
  };

  return (
    <View>
      {/* <Text style={{}}>ActionComponent *** {label}</Text>
      <Text>DEMO FOR TODO APP</Text> */}
      {/* <Button
        testID={`${label}-btn-one`}
        title="TODO APP DEMO"
        {...getEvents(`${label}-btn-one`, setLayoutConfig, setAppState)}
      ></Button> */}
      <Grid>
        <Row>
          <Col>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 180,
                marginRight: 180,
              }}
            >
              <TouchableOpacity
                onPress={createActionHandler}
                // TODO : Title of button should come from API
                style={{
                  backgroundColor: `${action1BtnColor}`,
                  height: 35,
                  paddingTop: 7,
                  paddingBottom: 5,
                  paddingLeft: 50,
                  paddingRight: 30,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 5,
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    marginLeft: 10,
                    marginRight: 10,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  CREATE
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
          <Col>
            <View
              style={{
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 180,
                marginRight: 180,
              }}
            >
              <TouchableOpacity
                onPress={searchActionHandler}
                // TODO : Title of button should come from API
                style={{
                  backgroundColor: `${action2BtnColor}`,
                  height: 35,
                  paddingTop: 7,
                  paddingBottom: 5,
                  paddingLeft: 50,
                  paddingRight: 30,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 5,
                }}
              >
                <Text
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    marginLeft: 10,
                    marginRight: 10,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  SEARCH
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
