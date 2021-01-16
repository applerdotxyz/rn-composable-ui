import merge from "deepmerge";
import React, { createElement, useState } from "react";
import { Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { screenOne as appConfig } from "../applications/app-one/screen-one";
// import { appConfig } from "../applications/app-one-config";
// import { appConfig } from "../applications/app-two-config";
import { rowStyle, styles } from "../applications/common";
import { About } from "./components/About";
import { ActionComp } from "./components/ActionComp";
import { Comp5 } from "./components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "./components/Home";
import JSONEditor from "./components/JSONEditor";
import { RandomPic } from "./components/RandomPic";

/*
1. DONE ::: Layout from JSON
2. Routes from JSON
3. DONE ::: Shared app State (workJSONEditoring in this)
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
  setAppState,
  setLayoutConfig
}) => {
  // console.log(`label is ${label}`);
  const colSection = createElement(
    label && appState[label]?.ui && componentsSet[appState[label]?.ui]
      ? componentsSet[appState[label]?.ui]
      : componentsSet[idx],
    { ...passProps, appState, setAppState, ...styles, label, setLayoutConfig },
    appState[label]?.children || children
  );
  return colSection;
};

// render a grid layout as per the configuration
const GridSection = ({ layoutConfig, setLayoutConfig }) => {
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
  const [appState, _setAppState] = useState({
    ui: {},
    children: {},
    props: {}
  });

  const setAppState = (newAppState) => {
    _setAppState(merge(appState, newAppState));
  };

  //  overall routing engine
  const UX = (layoutConfig) => {
    window.appState = appState;
    window.setAppState = setAppState;
    const gridSection = (rows, setLayoutConfig) => {
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
              setAppState,
              setLayoutConfig
            };

            // console.log(`colSize is ${colSize}`);
            return (
              <Col size={colSize} style={colStyle} key={`${rId}-${cId}`}>
                <UXColumn {...passProps} />
              </Col>
            );
          }
          if (cols[cId].layout) {
            // console.log(cols[cId]?.layout.colConfig?.colSize);

            return (
              <Col size={cols[cId].layout?.colConfig?.colSize || 1}>
                <Grid>{UX(cols[cId].layout)}</Grid>
              </Col>
            );
          }
        });
        // console.log(`rowSize is ${rowSize}`);
        return rowJsx;
      };

      let gridJsx = [];
      gridJsx = Object.keys(rows).map((rId) => {
        let style = rows[rId]?.rowConfig?.style || {};
        // console.log(rows[rId].rowConfig);

        // FIXME: fix rowSize. is rowConfig used ?
        // console.log(`rowSize is ${rows[rId]?.rowConfig?.rowSize}`);

        return (
          <Row
            size={rows[rId]?.rowConfig?.rowSize || 1}
            style={{ rowStyle, ...style }}
            key={rId}
          >
            {colsSection(rId, rows[rId])}
          </Row>
        );
      });
      return gridJsx; /// return all rows in layout
    };

    // console.log(`colSize is ${layoutConfig?.colConfig?.colSize}`);
    return (
      <Col size={layoutConfig?.colConfig?.colSize || 1}>
        {gridSection(layoutConfig, setLayoutConfig)}
      </Col>
    );
  };

  // console.log(layoutConfig);

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
        <JSONEditor
          json={this.state.config}
          onChangeJSON={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            this.setState({ config: json }, () => {
              // console.log(this.state.config);
            });
          }}
        />
        <GridSection
          layoutConfig={this.state.config}
          setLayoutConfig={(config) =>
            this.setState({ config: merge(this.state.config, config) })
          }
        />
      </>
    );
  }
}
