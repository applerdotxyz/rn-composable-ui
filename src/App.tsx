
// TODO: See if the below LIB can be removed
import merge from "deepmerge";
import React, { createElement, useState } from "react";
import { Text } from "react-native";
// TODO: See if the below LIB can be removed
import { Col, Grid, Row } from "react-native-easy-grid";
// import {
//     routes,
//   getEvents,
//   appConfig,
// } from "../examples/app-one/layout";

// import {
//   events,
//   getEvents,
//   screenOne as appConfig,
// } from "../examples/sagar-poc/grid-poc";
// import {
//   events,
//   getEvents,
//   screenOne as appConfig,
// } from "../examples/sagar-poc/examp1";
import { styles } from "../examples/common";

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

// render a grid layout as per the configuration
export const GridSection = ({ layoutConfig, setLayoutConfig, routes, getEvents }) => {
  // const history = useHistory();

  // pick from pre-loaded components and render properly, renders each component at column level
  const UXColumn = ({
    label,
    key,
    idx,
    style,
    colSize,
    colStyle,
    children,
    passProps,
    appState,
    setAppState,
    setLayoutConfig,
  }) => {
    // console.log(`label is ${label}`);
    const colSection = createElement(
      label &&
        appState[label]?.ui &&
        layoutConfig.componentsSet[appState[label]?.ui]
        ? layoutConfig.componentsSet[appState[label]?.ui]
        : layoutConfig.componentsSet[idx],
      {
        ...passProps,
        appState,
        routes,
        key,
        setAppState,
        ...styles,
        label,
        setLayoutConfig,
        getEvents,
      },
      appState[label]?.children || children
    );
    return colSection;
  };
  const linksSection = Object.keys(layoutConfig.links).map((path, id) => {
    const { style, linkText, linkStyle } = layoutConfig.links[path];
    return (
      <Col
        to={path}
        underlayColor="#f0f4f7"
        style={style}
        key={`${id}-${path}`}
      >
        <Text style={linkStyle}>{linkText}</Text>
      </Col>
    );
  });

  const headerSection = <Col style={styles.nav}>{linksSection}</Col>;
  const [appState, _setAppState] = useState({
    ui: {},
    children: {},
    props: {},
  });

  const setAppState = (newAppState) => {
    _setAppState(merge(appState, newAppState));
  };

  //  overall routing engine
  const UX = (layoutConfig) => {
    // window.appState = appState;
    // window.setAppState = setAppState;
    const gridSection = (rows, setLayoutConfig) => {
      // builds the columns
      const colsSection = (rId, cols) => {
        let rowJsx = [];
        rowJsx = Object.keys(cols).map((cId, colNo) => {
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
              setLayoutConfig,
              getEvents,
            };

            // console.log(`colSize is ${colSize}`);
            return (
              <Col
                // size={colSize}
                style={{ ...colStyle, flexGrow: 1, flex: 1 }}
                key={`${rId}-${colNo}`}
              >
                <UXColumn {...passProps} />
              </Col>
            );
          }
          if (cols[cId].layout) {
            // console.log(cols[cId]?.layout.colConfig?.colSize);

            return (
              <Col
                size={cols[cId].layout?.colConfig?.colSize || 1}
                style={{
                  ...cols[cId].layout?.colConfig?.style,
                  borderWidth: 0,
                  borderColor: "blue",
                  // flexGrow: 1,
                }}
              >
                <Grid style={{}}>{UX(cols[cId].layout)}</Grid>
              </Col>
            );
          }
        });
        // console.log(`rowSize is ${rowSize}`);
        return rowJsx;
      };

      let gridJsx = [];
      gridJsx = Object.keys(rows).map((rId) => {
        const style = rows[rId]?.rowConfig?.rowStyle || {};
        // console.log(rows[rId].rowConfig);

        // FIXME: fix rowSize. is rowConfig used ?
        // console.log(`rowSize is ${rows[rId]?.rowConfig?.rowSize}`);
        if (rId === "colConfig") {
          return null;
        } else {
          return (
            <Row
              key={`${rId}`}
              // size={rows[rId]?.rowConfig?.rowSize || 1}
              style={{
                ...style,
                borderWidth: 6,
                borderColor: "gray",
                ...rows[rId]?.rowConfig?.rowStyle,
                // flexGrow: 1,
                flex: 1,
              }}
            >
              {colsSection(rId, rows[rId])}
            </Row>
          );
        }
      });
      return (
        <Col
          style={{ borderWidth: 0, borderColor: "red", flexGrow: 1, flex: 1 }}
        >
          {gridJsx}
        </Col>
      ); /// return all rows in layout
    };

    console.log(`colSize is ${layoutConfig?.colConfig?.colSize}`);
    return (
      <Col
        size={layoutConfig?.colConfig?.colSize || 1}
        style={{
          // flexGrow: 1,
          ...layoutConfig?.colConfig?.colStyle,
          // flex: 1,
        }}
      >
        {gridSection(layoutConfig, setLayoutConfig)}
      </Col>
    );
  };

  // console.log(layoutConfig);

  return (
    <Grid style={{ flex: 1, borderWidth: 0, borderColor: "yellow" }}>
      <Row size={0.05}>{headerSection}</Row>
      <Row style={{ flex: 1 }}>{UX(layoutConfig?.layout) || {}}</Row>
    </Grid>
  );
};
