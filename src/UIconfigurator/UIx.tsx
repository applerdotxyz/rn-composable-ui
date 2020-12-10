import { stringify } from "querystring";
import React, { useState } from "react";
import { componentsSet, OneMoreAppConfig } from "../uiConfig/index";
import config from "../uiConfig/index";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";

const Column = (props: any) => (
  <Col
    size={props.size}
    style={
      {
        /*backgroundColor: "gray"*/
      }
    }
  >
    {props.render}
  </Col>
);

const UiX = (props: any) => {
  // console.log("props in Uix : : ", props);

  const mapState = React.useCallback((state: any) => state, []);
  const appState = useState(mapState);
  const dispatch = useDispatch();

  const { idx } = props;
  // console.log("idx : :: : --> ", idx);

  const key: any = `${idx}Config`;
  // console.log("Key : : : ", key);

  if (idx && config && config[key]) {
    const configuration = config[key];
    // console.log("Configuration : : : --> ", configuration);

    // console.log("Result from search : : ", getValueFromObject(key, configuration));

    let colSection: any = null;
    const rowSection: Array<any> = [];
    const configKeys = Object.keys(configuration);
    // console.log("ConfigKey : : : ---> ", configKeys);

    configKeys.forEach((key: string, rowId: number) => {
      const rowData = configuration[key];

      // console.log("rowData : : : ", rowData);

      const colIds = Object.keys(rowData);
      // console.log("colIds : : : ", colIds);

      const ProcessEngine = (colId: string, idxCol: number) => {
        console.log("colId :  : : : ====> > > >", colId);
        console.log("idxCol : : :  ====> > > > ", idxCol);

        console.log("Row Data name :: : ==> ", rowData);

        if (rowData[colId].name !== undefined) {
          console.log("EVERYTHING WORKED WELL !!!!");

          return (
            // changes in react-native frame
            <Column
              key={idxCol}
              size={rowData[colId].span || 4 / colIds.length}
              render={React.createElement(
                componentsSet[rowData[colId].name],
                { ...rowData[colId].props, appState, ...props, dispatch },
                null
              )}
            />
          );
        } else if (rowData[colId].layout !== undefined) {
          console.log("SOME NESTED JSON OBJECT");

          console.log("rowData[colId].layout : : : : ", rowData[colId].layout);

          console.log("Object.keys(rowData[colId].layout) : : :: --? ", Object.keys(rowData[colId].layout));

          const innerJsxSection = Object.keys(rowData[colId].layout).map((innerRowId) => {
            console.log("innerRowId : : ", innerRowId);
            console.log("idxCol  : : : : ---> > > > > ", idxCol);
            console.log("rowData[colId].layout[innerRowId] KEYS OBJECTS : -----> ", Object.keys(rowData[colId].layout[innerRowId]));

            // This part is coded me When I was getting issue with your code @saurabh
            return Object.keys(rowData[colId].layout[innerRowId]).map((ele) => {
              console.log("ele ===> Layout Trace : : : ", ele);  // Now I am getting agin infinite loop
              return ProcessEngine(ele, idxCol);  // I was trying to manipulate idxCol YOu can see the pattern of error in console evertime idx is passed as `1`
            })

          })
          return innerJsxSection;
        } else {
          console.log("COMPONENT NOT RENDERED");

          return
        }

      }

      colSection = colIds.map(ProcessEngine);
      console.log("colSection : : : ", colSection);

      rowSection.push(<Row key={rowId}>{colSection}</Row>);
      console.log("rowSection after push : : : ", rowSection);
    });

    const Layout = () => (
      // <section>
      <View>{rowSection}</View>
      // </section>
    );
    return <Layout />;
  }
  return (
    <View>
      <Text>Loading ... </Text>
    </View>
  );
};

export default UiX;
