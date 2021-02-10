/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  About,
  ActionComp,
  Comp5,
  Home,
  RandomPic,
  JsonForm,
} from "../../src/components/src";
import { rowStyle, styles } from "../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  JsonForm,
};

// ****************** Routes for Dashboard naming *************************
export const routes = {};

// ****************** End of Routes ***************************************

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
};

// Main appConfig for Default load
export const appConfig = {
  /// 1st layout
  componentsSet,
  links,
  layout: {
    "1.container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: { height: "100%" },
      },
      //   When we wnt to render any component JSON expected
      //   with property should be same
      Header: {
        colSize: 12,
        idx: "Home",
        label: "header-label",
        colStyle: { borderWidth: 0 },
      },
    },
    "2.container": {
      rowConfig: {
        rowSize: 11,
        rowStyle: { height: "100%" },
      },
      "2.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 2,
          },
          "2.1.leftNavBodyRow": {
            rowConfig: {
              rowSize: 12,
              rowStyle: { height: "100%" },
            },
            leftNavBody: {
              // col no
              colSize: 2,
              idx: "Home",
              label: "navigationBar",
              colStyle: { borderWidth: 0 },
            },
          },
        },
      },
      "2.2.bodyCol": {
        layout: {
          colConfig: {
            colSize: 10,
          },
          "2.2.1.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "100%" },
            },
            actionView: {
              colSize: 2,
              idx: "Home",
              label: "actionComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.2.BodyRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: { height: "100%" },
            },
            tabView: {
              colSize: 2,
              idx: "Home",
              label: "tabComponent",
              colStyle: { borderWidth: 1 },
            },
          },
          "2.2.3.BodyRow": {
            rowConfig: {
              rowSize: 8,
              rowStyle: { height: "100%" },
            },
            jsonFormComponent: {
              colSize: 1,
              idx: "Home",
              label: "jsonFormComponent",
              colStyle: { borderWidth: 1 },
            },
            emptyComponent: {
              colSize: 2,
              idx: "Home",
              label: "DefaultScreenComponent",
              colStyle: { borderWidth: 1 },
            },
          },
        },
      },
    },
  },
};

// NavBar: {
//     colSize: 2,
//     idx: "Home",
//     label: "navBar-label",
//     colStyle: { borderWidth: 4 },
//   },
//   BodyDisplay: {
//     colSize: 10,
//     idx: "Home",
//     label: "BodyDisplay-label",
//     colStyle: { borderWidth: 4 },
//   },
// End of Main appConfig for Default Load

// *************************************************
//  End of Layout config
// *************************************************

// *************************************************
// Events to be defined here
// *************************************************

export const events = {
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeOne"]);
    },
  },

  "bodyHeader-changed at 1st-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeTwo"]);
    },
  },
  "bodyContent-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeThree"]);
    },
  },
};

// *************************************************
//  Helper Util
// *************************************************
// bind events based on the layout config
export const getEvents = (elId, setLayoutConfig, setAppState) => {
  const elEvents = {};
  events[elId] &&
    Object.keys(events[elId]).map((eventName) => {
      elEvents[eventName] = () =>
        events[elId] && events[elId][eventName] && events[elId][eventName]
          ? events[elId][eventName](setLayoutConfig, setAppState)
          : {};
    });
  return elEvents;
};
