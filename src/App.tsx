import merge from "deepmerge";
import React, { createElement, useState } from "react";
import { Text } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
// import { appConfig, events, getEvents } from "../applications/app-two-config";
// import {
//   events,
//   getEvents,
//   screenOne as appConfig,
// } from "../applications/app-one/screen-one";
import {
  events,
  getEvents,
  screenOne as appConfig,
} from "../applications/sagar-poc/grid-poc";
import { rowStyle, styles } from "../applications/common";
import { About } from "./components/About";
import { ActionComp } from "./components/ActionComp";
import { Comp5 } from "./components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "./components/Home";
import { RandomPic } from "./components/RandomPic";
import { JSONEditor } from "./internal/components/JSONEditor";

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
  RandomPic,
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
  setLayoutConfig,
}) => {
  console.log(`label is ${label}`);
  const colSection = createElement(
    label && appState[label]?.ui && componentsSet[appState[label]?.ui]
      ? componentsSet[appState[label]?.ui]
      : componentsSet[idx],
    {
      ...passProps,
      appState,
      setAppState,
      ...styles,
      label,
      setLayoutConfig,
      getEvents,
      events: events && events[label] ? events[label] : {},
    },
    appState[label]?.children || children
  );
  return colSection;
};

// render a grid layout as per the configuration
const GridSection = ({ layoutConfig, setLayoutConfig }) => {
  // const history = useHistory();
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
              setLayoutConfig,
            };

            // console.log(`colSize is ${colSize}`);
            return (
              <Col
                size={colSize}
                style={{ ...colStyle, flexGrow: 1, flex: 1 }}
                key={`${rId}-${cId}`}
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
                  flexGrow: 1,
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
        const style = rows[rId]?.rowConfig?.style || {};
        // console.log(rows[rId].rowConfig);

        // FIXME: fix rowSize. is rowConfig used ?
        // console.log(`rowSize is ${rows[rId]?.rowConfig?.rowSize}`);

        return (
          <Row
            size={rows[rId]?.rowConfig?.rowSize || 1}
            style={{
              rowStyle,
              ...style,
              borderWidth: 6,
              borderColor: "gray",
              flexGrow: 1,
              flex: 1,
            }}
            key={rId}
          >
            {colsSection(rId, rows[rId])}
          </Row>
        );
      });
      return (
        <Col
          style={{ borderWidth: 5, borderColor: "red", flexGrow: 1, flex: 1 }}
        >
          {gridJsx}
        </Col>
      ); /// return all rows in layout
    };

    // console.log(`colSize is ${layoutConfig?.colConfig?.colSize}`);
    return (
      <Col
        size={layoutConfig?.colConfig?.colSize || 1}
        style={{ borderWidth: 8, borderColor: "cyan", flexGrow: 1, flex: 1 }}
      >
        {gridSection(layoutConfig, setLayoutConfig)}
      </Col>
    );
  };

  // console.log(layoutConfig);

  return (
    <Grid style={{ flex: 1, borderWidth: 0, borderColor: "yellow" }}>
      <Row size={0.05}>{headerSection}</Row>
      <Row style={{ flex: 1 }}>
        {UX(layoutConfig.layout, layoutConfig.layout[0].rowConfig)}
      </Row>
    </Grid>
  );
};

//  overall container app
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      config: appConfig,
    };
    // console.log(this.state.config);
  }

  render() {
    return (
      <>
        <JSONEditor
          json={this.state?.config}
          onChangeJSON={(json) => {
            // TODO: add schema conformation for JSONEditor values of component names
            this.setState({ config: json }, () => {
              //
            });
          }}
        />
        <GridSection
          layoutConfig={this?.state?.config}
          setLayoutConfig={(config) =>
            this.setState(
              {
                config: merge(this?.state?.config, { layout: config }),
              },
              () => {
                console.log(this?.state?.config);
              }
            )
          }
        />
      </>
    );
  }
}
