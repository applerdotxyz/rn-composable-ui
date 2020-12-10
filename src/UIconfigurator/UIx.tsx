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
    console.log("Configuration : : : -->>>>>>> ", configuration);
    const gridSection: Array<any> = [];
    /**
     * ProcessEngine()
     * @param configuration 
     * @param isRootCall 
     */
    const ProcessEngine = (configuration = {}, isRootCall = true) => {
        // console.log("Result from search : : ", getValueFromObject(key, configuration));
        let colSection: any = null;
        const rowSection: Array<any> = [];
        const configKeys = Object.keys(configuration);
        // console.log("ConfigKey : : : ---> ", configKeys);
        // ITERATE ON ROWS IN LAYOUT CONFIG
        const gridJsx = configKeys.map((key: string, rowId: number) => {
            const rowData = configuration[key];
            console.log("rowData : : : ", rowData);
            // ITERATE ON COLUMNS IN A ROW
            const colIds = Object.keys(rowData);
            const rowJsx = colIds.map((colId: string, idxCol: number) => {
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
                    console.log("SOME NESTED LAYOUT JSON OBJECT");
                    console.log("rowData[colId].layout : : : : ", rowData[colId].layout);
                    console.log("Object.keys(rowData[colId].layout) : : :: --? ", Object.keys(rowData[colId].layout));
                    return ProcessEngine(rowData[colId].layout, false);
                } else {
                    console.log("INVALID CONFIG");
                    console.log("COMPONENT NOT RENDERED");
                    return null;
                }
            });
            return (<Row key={rowId}>{rowJsx}</Row>);
        });
        // colSection = ProcessEngine(configuration, true1);
        // console.log("colSection : : : ", colSection);
        if (isRootCall){
          gridSection.push(<Grid>{gridJsx}</Grid>)
          return gridSection
        } else {
          return gridJsx;
        }
    };
    // second arg below is value for isRootCall, when true
    let outputSection = ProcessEngine(configuration, true);
    console.log("OUTPUT SECTION : : : :: ---> ", outputSection);
    
    return (<View>
    { 
      outputSection 
      ? 
      outputSection : (
        <Text>Loading ... </Text>
      )
    }
    </View>)
  }
};
export default UiX;