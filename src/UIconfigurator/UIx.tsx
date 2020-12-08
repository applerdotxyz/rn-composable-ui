import React, { useState } from "react";
import { Text, View } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import { useDispatch } from "react-redux";
import config, { componentsSet } from "../uiConfig/index";

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
  console.log("props in Uix : : ", props);

  const mapState = React.useCallback((state: any) => state, []);
  const appState = useState(mapState);
  const dispatch = useDispatch();

  const { idx } = props;
  console.log("idx : :: : --> ", idx);

  const key: any = `${idx}Config`;
  console.log("Key : : : ", key);

  if (idx && config && config[key]) {
    const configuration = config[key];
    console.log("Configuration : : : --> ", configuration);

    let colSection: any = null;
    const rowSection: Array<any> = [];
    const configKeys = Object.keys(configuration);
    console.log("ConfigKey : : : ---> ", configKeys);

    configKeys.forEach((key: string, idx: number) => {
      const rowData = configuration[key];
      console.log("rowData : : : ", rowData);

      const colIds = Object.keys(rowData);
      console.log("colIds : : : ", colIds);

      colSection = colIds.map((colId: string, idxCol: number) => {
        console.log("Row Data name :: : ==> ", rowData[colId].name);

        console.log("ComponentsSet ===> ", componentsSet[rowData[colId].name]);
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
      });
      rowSection.push(<Row key={idx}>{colSection}</Row>);
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
