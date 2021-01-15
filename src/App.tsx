import React, { createElement, useState } from "react";
import { Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
// import { appConfig } from "../applications/app-one-config";
import { appConfig } from "../applications/app-two-config";
import { rowStyle, styles } from "../applications/common";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "./components/Home";
import { RandomPic } from "./components/RandomPic";
import { About } from "./components/About";
import { ActionComp } from "./components/ActionComp";
import { Comp5 } from "./components/Comp5";
import JSONditor from "./components/JSONditor";

/*
1. DONE ::: Layout from JSON
2. Routes from JSON
3. DONE ::: Shared app State (working in this)
4. Events management from JSON
5. Mobile First, Web compatible
6. DONE ::: JSON Forms
7. JSON based Lists
8. API Connectors (Datafire)
9. Scrollable Views (Outer and Inner)
10. Examples config JSONs for realistic apps




*/
// ******************************************************************** //

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic
  // JsonForm
};

// pick from pre-loaded components and render properly, renders each component at column level
export const UXColumn = ({
  label,
  idx,
  style,
  colSize,
  colStyle,
  children,
  passProps,
  appState,
  setAppState
}) => {
  // console.log(`label is ${label}`);
  const colSection = createElement(
    label &&
      appState.ui &&
      appState.ui[label] &&
      componentsSet[appState.ui[label]]
      ? componentsSet[appState.ui[label]] //check if there's a specified component for the cell
      : componentsSet[idx], // else render default component
    { ...passProps, appState, setAppState, ...styles, label },
    (appState?.children && appState?.children[label]) || children
  );
  return (
    <Col size={colSize} style={{ ...style, ...colStyle }}>
      {colSection}
    </Col>
  );
};

// render a grid layout as per the configuration
const GridSection = ({ layoutConfig }) => {
  // const history = useHistory();
  const linksSection = Object.keys(layoutConfig.links).map((path) => {
    const { style, linkText, linkStyle } = layoutConfig.links[path];
    return (
      <Col to={path} underlayColor="#f0f4f7" style={style}>
        <Text style={linkStyle}>{linkText}</Text>
      </Col>
    );
  });

  const headerSection = <Col style={styles.nav}>{linksSection}</Col>;
  const [appState, setAppState] = useState({
    ui: {},
    children: {},
    props: {}
  });

  //  overall routing engine
  const UX = (layoutConfig) => {
    // console.log(appState.ui);
    window.appState = appState;
    window.setAppState = setAppState;
    const gridSection = (rows) => {
      // builds the columns
      const colsSection = (rId, cols) => {
        let rowJsx = [];
        rowJsx = Object.keys(cols).map((cId) => {
          if (cId === "rowConfig") {
            return null;
          } else if (cols[cId].idx) {
            const { idx, label, colSize, props, children, colStyle } = cols[
              cId
            ];

            const passProps = {
              ...props,
              ...cols[cId],
              idx,
              label,
              children,
              colSize,
              colStyle,
              appState,
              setAppState
            };

            // console.log(`colSize is ${colSize}`);
            return (
              <Col size={colSize} style={colStyle} key={`${rId}-${cId}`}>
                <UXColumn {...passProps} />
              </Col>
            );
          }
          if (cols[cId].layout) {
            return UX(cols[cId].layout);
          }
        });
        // console.log(`rowSize is ${rowSize}`);
        return rowJsx;
      };

      let gridJsx = [];
      gridJsx = Object.keys(rows).map((rId) => {
        let { style } = rows[rId].rowConfig;
        // console.log(rows[rId].rowConfig);
        console.log(`rowSize is ${rows[rId].rowConfig.rowSize}`);

        return (
          <Row
            size={rows[rId].rowConfig.rowSize}
            style={{ rowStyle, ...style }}
            key={rId}
          >
            {colsSection(rId, rows[rId])}
          </Row>
        );
      });
      return <Grid>{gridJsx}</Grid>; /// return all rows in layout
    };

    return gridSection(layoutConfig);
  };

  return (
    <Grid>
      <Row>{headerSection}</Row>
      <Row>{UX(layoutConfig.layout)}</Row>
    </Grid>
  );
};

//  overall container app
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      config: appConfig
    };
  }

  render() {
    return (
      <>
        <JSONditor
          json={this.state.config}
          onChange={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            this.setState({ config: json }, () => {
              console.log(this.state.config);
            });
          }}
        />
        <GridSection layoutConfig={this.state.config} />
      </>
    );
    // return ;
  }
}
