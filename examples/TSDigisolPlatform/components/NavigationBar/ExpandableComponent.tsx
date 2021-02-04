/* eslint-disable @typescript-eslint/ban-types */
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  updateModuleSelection,
  updateTabSelection,
} from "../../../../src/state-management/actions";
import { routes } from "../../configs/routes/routesConfig";

export const ExpandableComponent = ({ props, item, onClickFunction }: any) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState(100);

  console.log("Props in Expandable Component : : : : ", props);

  const state = useSelector((s: any) => s);
  const dispatch = useDispatch((s: any) => s);

  const [data, setdata] = useState({});

  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
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
            actionName: state.activeActionSelection.actionData.actionName,
          }),
        }
      );
      const resJSON = await res.json();
      // console.log("active module : : : :", state.activeModuleSelection);

      console.log(
        "Buisness Functions with Module",
        resJSON.businessFunctions[0].modules[0].tabs[0].tabName
      );
      setdata(resJSON.businessFunctions[0].modules[0].tabs[0]);
      dispatch(
        updateModuleSelection(
          resJSON.businessFunctions[0].modules[0].moduleName,
          resJSON.businessFunctions[0].modules[0].moduleKey
        )
      );
      dispatch(
        updateTabSelection(
          resJSON.businessFunctions[0].modules[0].tabs[0].tabName,
          resJSON.businessFunctions[0].modules[0].tabs[0].tabKey
        )
      );
    };
    fetchData();
    // dispatch(updateTabSelection(data.tabName, data.tabKey));
    console.log("After tab  updated : : : : ", state.activeTabSelection);
  }, [
    item.isExpanded,
    state.activeModuleSelection.name,
    // state.activeTabSelection.name,
  ]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={ExpandableComStyles.header}
      >
        {/* <Link to='/home'> */}
        <Text style={ExpandableComStyles.headerText}>{item.functionName}</Text>
        {/* </Link> */}
      </TouchableOpacity>
      <View
        style={{
          height: layoutHeight,
          overflow: "hidden",
        }}
      >
        {/*Content under the header of the Expandable List Item*/}
        {item.modules.map((item, key: string | number | null | undefined) => (
          <TouchableOpacity
            key={key}
            style={ExpandableComStyles.content}
            onPress={() => {
              // alert("Id: " + item.moduleKey + " val: " + item.moduleName);
              dispatch(
                updateModuleSelection(item.moduleDisplayName, item.moduleKey)
              );
              // dispatch(updateTabSelection(data.tabName, data.tabKey));
              // props.setLayoutConfig(routes["routeThree"]);
            }}
          >
            {/* Link config should API */}
            {/* <Link to={item.link} underlayColor="#adc650"> */}
            <Text
              style={{
                fontSize: 16,
                color: "white",
                padding: 10,
                backgroundColor:
                  state.activeModuleSelection.name === item.moduleName
                    ? "#b2c560"
                    : "",
              }}
            >
              {/* {key}.  */}
              {item.moduleDisplayName}
            </Text>
            {/* </Link> */}

            {/* <View style={styles.separator} /> */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ExpandableComStyles = StyleSheet.create({
  header: {
    backgroundColor: "#5cabc5",
    padding: 20,
    flex: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    fontStyle: "italic",
  },
  separator: {
    height: 0.5,
    backgroundColor: "#808080",
    width: "95%",
    marginLeft: 16,
    marginRight: 16,
    elevation: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    padding: 10,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#82bed2",
  },
});

export default ExpandableComponent;
