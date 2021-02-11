/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
import ExpandableComponent from "../../../src/components/src/NavigationBarComponent/ExpandableComponent";

export const NavigationBarDashboard = (props: {
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

  const [loading, setLoading] = useState(true);
  const [listDataSource, setListDataSource] = useState([]);
  const [multiSelect, setMultiSelect] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await fetch(
        `https://run.mocky.io/v3/1f38d881-eaae-4fcd-b6fe-05fdc83f5554`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "TsdAdmin",
            roleKey: 1,
          }),
        }
      );
      const resJSON = await res.json();
      setListDataSource(resJSON.businessFunctions);
      setLoading(false);
    };
    fetchData();
    // setAppState({ global: { total: 1 } });
  }, []);

  console.log("appState in NavBar : : : ", appState);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const updateLayout = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array: any[] = [...listDataSource];
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
    setListDataSource(array);
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
                {listDataSource.map((item, key) => (
                  <ExpandableComponent
                    key={item.functionName}
                    onClickFunction={() => {
                      // setAppState({ global: { total: 1 } });
                      updateLayout(key);
                    }}
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

export default NavigationBarDashboard;

const NavStyles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
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
