/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { componentsSet } from "../uiConfig/index";
import config from "../uiConfig/index";
import { Col, Row, Grid } from "react-native-easy-grid";
import { useDispatch } from "react-redux";
import { View, Text } from "react-native";
const Column = (props: any) => (
  <Col
    size={props.size}
    style={{
      // borderWidth: 2,
      flex: 1,
      borderColor: "red",
    }}
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
  // console.log("idx : :: : --> ", idx);
  const key: any = `${idx}Config`;
  // console.log("Key : : : ", key);
  if (idx && config && config[key]) {
    const configuration = config[key];
    // console.log("Configuration : : : -->>>>>>> ", configuration);
    const gridSection: Array<any> = [];
    /**
     * ProcessEngine()
     * @param configuration
     * @param isRootCall
     */
    const ProcessEngine = (configuration = {}, isRootCall = true) => {
      // console.log("Result from search : : ", getValueFromObject(key, configuration));
      const configKeys = Object.keys(configuration);
      // console.log("ConfigKey : : : ---> ", configKeys);
      // ITERATE ON ROWS IN LAYOUT CONFIG
      const gridJsx = configKeys.map((key: string) => {
        const rowData = configuration[key];
        console.log("rowData : : : ", rowData);

        // console.log("Key : : : : ", key);
        // console.log("rowId : : : : ", rowId);

        // ITERATE ON COLUMNS IN A ROW
        const colIds = Object.keys(rowData);
        const config = rowData[0];
        console.log("config : ", config);

        const rowJsx = colIds.map((colId: string, idxCol: number) => {
          // console.log("colId :  : : : ====> > > >", colId);
          // console.log("idxCol : : :  ====> > > > ", idxCol);
          console.log("Row Data name :: : ==> ", rowData);
          if (rowData[colId].name !== undefined) {
            console.log("EVERYTHING WORKED WELL !!!!");
            return (
              // changes in react-native frame
              <Column
                key={idxCol}
                size={rowData[colId].size}
                render={React.createElement(
                  componentsSet[rowData[colId].name],
                  { ...rowData[colId].props, appState, ...props, dispatch },
                  null
                )}
              />
            );
          } else if (rowData[colId].layout !== undefined) {
            console.log("SOME NESTED LAYOUT JSON OBJECT");
            // console.log(
            //     "rowData[colId].layout : : : : ",
            //     rowData[colId].layout
            // );
            // console.log(
            //     "Object.keys(rowData[colId].layout) : : :: --? ",
            //     Object.keys(rowData[colId].layout)
            // );
            return ProcessEngine(rowData[colId].layout, false);
          } else {
            // console.log("INVALID CONFIG");
            // console.log("COMPONENT NOT RENDERED");
            return null;
          }
        });

        console.log(
          "ROW DATA : : : : : -------> ",
          JSON.stringify(rowData) + "Key : : : : ---> " + key
        );

        return (
          // <RenderRow rowSize={rowData[0].size} render={rowJsx} comp={rowData} key={key} />
          <Row size={rowData[0].size}>
            <Col>{rowJsx}</Col>
          </Row>
        );

        // if (rowData[0].properties !== undefined) {
        //     return rowData[0].properties.newGrid && rowData[0].properties.newRow ? (
        //         // <RenderRow rowSize={rowData[0].size} render={rowJsx}>
        //         <Row size={rowData[0].size} style={{
        //             borderColor : 'green',
        //             borderWidth : 5
        //         }}>
        //             <Col size={4} style={{
        //             borderColor : 'red',
        //             borderWidth : 2
        //         }}>
        //                 <Grid>{rowJsx}</Grid>
        //             </Col>
        //         </Row>

        //         // </RenderRow>
        //     ) : rowData[0].properties.newGrid ? (
        //         <Grid>{rowJsx}</Grid>
        //     ) : rowData[0].properties.newRow ? (
        //         // <RenderRow rowSize={rowData[0].size} render={rowJsx} >
        //         //   {rowJsx}
        //         // </RenderRow>

        //         <Row size={1}>
        //             <Col size={4} style={{
        //             borderColor : 'red',
        //             borderWidth : 10
        //         }}>
        //                 {rowJsx}
        //             </Col>
        //         </Row>
        //     ) : (
        //                     rowJsx
        //                 );
        // } else {
        //     return (
        //         // Try add conditional rendering
        //         <RenderRow rowSize={rowData[0].size} render={rowJsx} comp={rowData} key={key} />
        //         //   <Row
        //         //     style={{
        //         //       // borderWidth: 0,
        //         //       borderColor: "green",
        //         //     }}
        //         //     key={rowId}
        //         //   >
        //         //     {/* TODO: size is not working as expected . fix that */}
        //         //     <Col size={rowData.size} style={{
        //         //       // borderWidth: 2,
        //         //       flex: 1,
        //         //       borderColor: "red",
        //         //     }}>{rowJsx}</Col>
        //         //   </Row>
        //     );
        // }
      });
      // colSection = ProcessEngine(configuration, true1);
      // console.log("colSection : : : ", colSection);
      if (isRootCall) {
        gridSection.push(
          <Grid
            style={{
              // borderWidth: 2,
              borderColor: "yellow",
            }}
          >
            <Row>
              <Col>{gridJsx}</Col>
            </Row>
          </Grid>
        );
        return gridSection;
      } else {
        return <Row>{gridJsx}</Row>;
      }
    };
    // second arg below is value for isRootCall, when true
    const outputSection = ProcessEngine(configuration, true);
    console.log("OUTPUT SECTION : : : :: ---> ", outputSection);

    return (
      <View>{outputSection ? outputSection : <Text>Loading ... </Text>}</View>
    );
  }
};
export default UiX;
