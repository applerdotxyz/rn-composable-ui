import React from "react";
import { Text } from "react-native";
import { About } from "../../src/components/About";
import { ActionComp } from "../../src/components/ActionComp";
import { Comp5 } from "../../src/components/Comp5";
// import { JsonForm } from "./components/JsonForm";
import { Home } from "../../src/components/Home";
import { RandomPic } from "../../src/components/RandomPic";
import {  row Style, styles } from "../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  // JsonForm
};

// components section
const schema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
};


export const routes = {};

// dotted notation config route
routes.routeOne = {
  "1container.11leftNavCol.layout.colConfig.colStyle.display": "block",
  "1container.12bodyCol.layout.colConfig.colSize": 11,
  "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx": "ActionComp",
  "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx": "RandomPic",
  "1container.12bodyCol.layout.123bodyFooterRow.bodyFooter.idx": "ActionComp",
};

// dotted notation config route
routes.routeTwo = {
  "1container.11leftNavCol.layout.colConfig.colStyle.display": "none",
  "1container.12bodyCol.layout.colConfig.colSize": 11,
  "1container.12bodyCol.layout.121bodyHeaderRow.bodyHeader.idx": "ActionComp",
  "1container.12bodyCol.layout.122bodyContentRow.bodyContent.idx": "RandomPic",
  "1container.12bodyCol.layout.123bodyFooterRow.bodyFooter.idx": "About",
};

// expanded (non-dottend notation) route config
routes.routeThree = {
  // row no
  "1container": {
    "11leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "block" },
        },
      },
      // layout: null,
    },
    // col no
    "12bodyCol": {
      layout: {
        colConfig: {
          colSize: 18,
        },
        "122bodyContentRow": {
          bodyContent: {
            idx: "Home",
          },
        },
      },
    },
  },
};

// *************************************************
//  Layout config
// *************************************************

// links row
const links = {
  "/": {
    style: styles.navItem,
    linkStyle: styles.tabName,
    linkText: "Home",
  },
  "/about": {
    style: styles.navItem,
    linkStyle: styles.tabName,
    linkText: "Feed",
  },
  "/contact": {
    style: styles.navItem,
    linkStyle: styles.tabName,
    linkText: "Messages",
  },
};


export const appConfig = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    // row no
    "1container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      // col no
      "11leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "11leftNavHeaderRow": {
            // row no
            rowConfig: {
              rowSize: 0.1,
              rowStyle: rowStyle,
            },
            leftNavHeader: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "leftNavHeader",
              colStyle: { borderWidth: 1, height: "10vh" },
            },
          },
          "11leftNavBodyRow": {
            rowConfig: {
              rowSize: 5,
              // rowStyle: rowStyle,
            },
            leftNavBody: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "leftNavBody",
              colStyle: { borderWidth: 1, height: "90vh" },
            },
          },
        },
      },
      "12bodyCol": {
        rowConfig: {
          rowSize: 1,
          rowStyle: rowStyle,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: { borderColor: "cyan", borderWidth: 4 },
          },
          "121bodyHeaderRow": {
            rowConfig: {
              rowSize: 1,
              // rowStyle: rowStyle,
              rowStyle: { borderColor: "red", borderWidth: 2, height: "10vh" },
            },
            bodyHeader: {
              // col no
              colSize: 1,
              idx: "About",
              label: "bodyHeader",
              colStyle: { borderColor: "blue", borderWidth: 0, height: "10vh" },
            },
          },
          "122bodyContentRow": {
            rowConfig: {
            rowSize: 12,
              // rowStyle: rowStyle,
              rowStyle: { borderColor: "red", borderWidth: 2, height: "80vh" },
            },
            bodyContent: {
              // col no
              idx: "Home",
              colSize: 1,
              label: "bodyContent",
              colStyle: { borderColor: "blue", borderWidth: 0, height: "80vh" },
            },
          },
          "123bodyFooterRow": {
            rowConfig: {
              rowSize: 1,
              // rowStyle: rowStyle,
              rowStyle: { borderColor: "red", borderWidth: 2, height: "10vh" },
            },
            bodyFooter: {
              // col no
              idx: "Home",
              colSize: 1,
              label: "bodyFooter",
              colStyle: { borderColor: "blue", borderWidth: 0, height: "10vh" },
            },
          },
        },
      },
    },
    "2container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      footer: {
        // col no
        colSize: 1,
        idx: "Home",
        label: "footer",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};

// *************************************************
//  "../applications/app-one/screen-one";
// *************************************************
// bind events to
//  logic that binds

export const events = {
  /// <label>
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeTwo"], true);
    },
  },
  //<label>-<element-id>
  "leftNavHeader-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      // setLayoutConfig(routes["routeOne"]);
      setAppState({
        bodyFooter: {
          ui: "ActionComp",
          props: { label: "bodyFooter" },
          children: <Text>Hello from RandomPic</Text>,
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "actioncomp-2" },
          children: null,
        },
      });
    },

    "bodyContentFooter-btn-one": {
      // <event> :: <handler>
      onPress: (setLayoutConfig, setAppState) => {
        setLayoutConfig(routes["routeTwo"]);
      },
    },
  },

  "bodyHeader-btn-two": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setLayoutConfig(routes["routeOne"], true);
    },
  },

  // <label>
  "leftNavBody-btn-two": {},
  "leftNavBody-btn-one": {},
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      // console.log({ [eventName]: events[elId][eventName] });
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  // console.log(elEvents);
  return elEvents;
};
