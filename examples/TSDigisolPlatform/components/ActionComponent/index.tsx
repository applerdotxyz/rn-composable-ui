import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
// import { useSelector, useDispatch } from "react-redux";
import {
  updateActionSelection,
  updateBuisnessFunctionSelection,
  updateModuleSelection,
  updateTabSelection,
} from "../../../../src/state-management/actions";
import { routes } from "../../configs/routes/routesConfig";

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

  // console.log(`label is ${label}`);
  // console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));
  // const state = useSelector((s: any) => s);
  // const dispatch = useDispatch((s: any) => s);
  const [data, setdata] = useState({});
  const [action, setaction] = useState(`Search`);

  // console.log("Action Set : : : : : ", action);

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
            moduleName: "Service Orders",
            tabName: "BookOrders",
            actionName: action,
          }),
        }
      );
      const resJSON = await res.json();
      // // console.log("active module : : : :", state.activeModuleSelection);

      console.log(
        "Buisness Functions with ACTION :  : : : : :: ------------------",
        resJSON.businessFunctions[0].modules[0].tabs[0].actions[0]
      );
      setdata(resJSON.businessFunctions[0].modules[0].tabs[0].actions[0]);
      // dispatch(
      //   updateActionSelection(
      //     resJSON.businessFunctions[0].modules[0].tabs[0].actions[0]
      //   )
      // );
    };
    fetchData();
  }, [
    // state.activeModuleSelection.name,
    // state.activeActionSelection.actionData.actionName,
    // state.activeTabSelection.name,
    // state.activeBuisnessFunctionSelection.key,
    action,
  ]);
  return (
    <View>
      <Grid>
        <Row>
          <Col
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 180,
              marginRight: 180,
              // borderWidth: 2,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setaction("Create");
                // setLayoutConfig(routes["defaultAppConfig"]);
              }}
              style={{
                backgroundColor: "#5cabc5",
                // "Create" === state.activeActionSelection.actionData.actionName
                //   ? "#b2c560"
                //   : "#5cabc5",
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
                Create
              </Text>
            </TouchableOpacity>
          </Col>
          <Col
            style={{
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 180,
              marginRight: 180,
              // borderWidth: 2,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log(
                  "SEARCH ACTION : : : : ",
                  // state.activeActionSelection.actionData.actionName
                );
                setaction("Search");
                setLayoutConfig(routes["defaultAppConfig"]);
              }}
              style={{
                backgroundColor: "#5cabc5",
                // "Search" === state.activeActionSelection.actionData.actionName
                //   ? "#b2c560"
                //   : "#5cabc5",
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
                Search
              </Text>
            </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
      {children || (appState && appState[label] && appState[label]?.children)}
    </View>
  );
};
