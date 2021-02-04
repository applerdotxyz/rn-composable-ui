import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { useSelector, useDispatch } from "react-redux";
import { updateActionSelection } from "../../../../src/state-management/actions";
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

  console.log(`label is ${label}`);
  console.log(getEvents(`${label}-btn-one`, setLayoutConfig, setAppState));

  const [action1BtnColor, setActionBtn1Color] = useState("#5cabc5");
  const [action2BtnColor, setActionBtn2Color] = useState("#b2c560");

  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);

  const [loader, setloader] = useState(false);
  const [data, setdata] = useState({});
  const [action, setaction] = useState(`Search`);

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
            tabName: state.activeTabSelection.name,
            actionName: action,
          }),
        }
      );
      const resJSON = await res.json();

      console.log("Buisness Functions with action", resJSON);
      // setdata(resJSON.businessFunctions[0].modules[0].tabs[0].actions[0]);
    };
    fetchData();
  }, [
    // FIXME : Need to click the Action Button twice to change the state
    state.activeModuleSelection.name,
    state.activeTabSelection.name,
    state.activeActionSelection.Key,
    action,
  ]);

  if (loader) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  // TODO : Implementation Left
  /**
   * Update State for Action
   * Change the ActionBtn1 color --> #b2c560
   * Change the ActionBtn2 color --> #5cabc5
   * Change Layout
   */

  // console.log("Data : : : : in action Component : : : ", data);

  const createActionHandler = () => {
    setActionBtn1Color("#b2c560");
    setActionBtn2Color("#5cabc5");
    setaction(`Create`);
    dispatch(updateActionSelection(data.actionName, data.actionKey));
    console.log("Updated Action state");
    // setLayoutConfig(routes["search"]);
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
    setaction(`Search`);
    dispatch(updateActionSelection(data.actionName, data.actionKey));
    console.log("Updated Action state");
    // setLayoutConfig(routes["search"]);
  };

  return (
    <View>
      <Grid
        style={
          {
            // borderWidth: 2,
          }
        }
      >
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
                  backgroundColor: action1BtnColor,
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
                  backgroundColor: action2BtnColor,
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
