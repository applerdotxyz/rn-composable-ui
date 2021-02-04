/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useEffect } from "react";
import {
  View,
  Platform,
  UIManager,
  LayoutAnimation,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Grid, Row, Col } from "react-native-easy-grid";
import ExpandableComponent from "./ExpandableComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  updateActionSelection,
  updateBuisnessFunctionSelection,
  updateModuleSelection,
  updateSchema,
  updateTabSelection,
} from "../../../../src/state-management/actions";

export const NavigationBar = (props: {
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
  const [loading, setLoading] = useState(false);
  // const [listDataSource, setListDataSource] = useState([]);
  const [multiSelect] = useState(true);
  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);
  console.log("Props from Nav bar : : : : ", props);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  // useEffect(() => {
  //   setLoading(true);
  //   const fetchData = async () => {

  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [state.schemaUpdate.schema]);

  const updateLayout = (item: any, index: number) => {
    // TODO : Save the selected function << Check for any optimised way
    dispatch(
      updateBuisnessFunctionSelection(item.functionName, item.functionKey)
    );
    if (item.functionName === "Foundation") {
      dispatch(
        updateActionSelection({
          actionData: {
            actionKey: 124684,
            actionName: "Search",
            endPoint: "v1/organization/list",
            httpMethod: "POST",
            showButton: true,
            tabKey: 118201,
          },
        })
      );
      dispatch(updateModuleSelection("Catalog", "2001"));
      dispatch(updateTabSelection("Organisation", "118201"));
    } else {
      dispatch(
        updateActionSelection({
          actionData: {
            actionKey: 71806,
            actionName: "Search",
            endPoint: "v1/servicescapacitymanage/list",
            httpMethod: "POST",
            showButton: true,
            tabKey: 84705,
          },
        })
      );
      dispatch(updateModuleSelection("Capacity", "47351"));
      dispatch(updateTabSelection("ServicesCapacityManage", "84705"));
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = state.schemaUpdate.schema;
    if (multiSelect) {
      // If multiple select is enabled
      array[index]["isExpanded"] = !array[index]["isExpanded"];
    } else {
      // If single select is enabled
      array.map((value, placeindex) =>
        placeindex === index
          ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
          : (array[placeindex]["isExpanded"] = false)
      );
    }
    // setListDataSource(array);
  };

  if (loading)
    return (
      <View style={NavStyles.container}>
        <ActivityIndicator />
      </View>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        minHeight: Dimensions.get("window").height / 2,
      }}
    >
      <View style={NavStyles.container}>
        <Grid>
          <Row>
            <Col size={1} style={{ backgroundColor: "#5cabc5" }}>
              <ScrollView>
                {state.schemaUpdate.schema.map((item: any, key: any) => (
                  <ExpandableComponent
                    key={item.functionName}
                    onClickFunction={() => {
                      updateLayout(item, key);
                    }}
                    props={props}
                    item={item}
                  />
                ))}
              </ScrollView>
            </Col>
          </Row>
        </Grid>
      </View>
    </SafeAreaView>
  );
};

export default NavigationBar;

const NavStyles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  //   titleText: {
  //     flex: 1,
  //     fontSize: 22,
  //     fontWeight: 'bold',
  //   },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  subHeader: {
    fontSize: 15,
  },
});
