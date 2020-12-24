import React, { useState } from "react";
import { Text, View } from "react-native";
import { Col, Row } from "react-native-easy-grid";
import { useDispatch } from "react-redux";
import config, { componentsSet } from "../uiConfig/index";

export const DIMENSIONS = {
  c11: {
    width: 20,
  },
  c12: {
    width: 80,
  },
  c21: {
    width: 20,
  },
  c22: {
    width: 80,
  },
};

const UiX = (props: any) => {
  // console.log("props in Uix : : ", props);
  const mapState = React.useCallback((state: any) => state, []);
  const appState = useState(mapState);
  const dispatch = useDispatch();
  const { idx } = props;
  // console.log("idx : :: : --> ", idx);
  const idKey: any = `${idx}Config`;
  // console.log("Key : : : ", idKey);
  if (idx && config && config[idKey]) {
    const configuration = config[idKey];
    console.log("Configuration : : : -->>>>>>> ", configuration);
    const gridSection: Array<any> = [];
    /**
     * ProcessEngine()
     * @param configuration
     * @param isRootCall
     */
    const ProcessEngine = (configuration = {}, isRootCall = true) => {
      // console.log("Result from search : : ", getValueFromObject(key, configuration));
      const colSection: any = null;
      const rowSection: Array<any> = [];
      const configKeys = Object.keys(configuration);
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
            // sizeArr.push(DIMENSIONS[key] && DIMENSIONS[key].width);
            console.log(
              `Column size >> ${DIMENSIONS[key] && DIMENSIONS[key].width} `
            );

            return (
              // changes in react-native frame
              <Col key={idxCol} size={DIMENSIONS[key] && DIMENSIONS[key].width}>
                {React.createElement(
                  componentsSet[rowData[colId].name],
                  { ...rowData[colId].props, appState, ...props, dispatch },
                  null
                )}
              </Col>
            );
          } else if (rowData[colId].layout !== undefined) {
            /// "SOME NESTED LAYOUT JSON OBJECT"
            return ProcessEngine(rowData[colId].layout, false);
          } else {
            console.log("INVALID CONFIG");
            console.log("COMPONENT NOT RENDERED");
            return null;
          }
        });
        return (
          <Row
            style={{
              borderWidth: 0,
              borderColor: "green",
            }}
            key={rowId}
          >
            {/* TODO: size is not working as expected . fix that */}
            <Col size={rowData.size}>{rowJsx}</Col>
          </Row>
        );
      });
      // colSection = ProcessEngine(configuration, true1);
      // console.log("colSection : : : ", colSection);
      let ctr = -1;
      if (isRootCall) {
        gridSection.push(<Col size={100}>{gridJsx}</Col>);
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
