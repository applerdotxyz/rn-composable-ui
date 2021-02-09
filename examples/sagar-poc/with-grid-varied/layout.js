/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  About,
  ActionComp,
  Comp5,
  Home,
  RandomPic,
  JsonForm,
} from "../../../src/components/src";

import { styles } from "../../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
};

export const routes = {};

// *************************************************
//  Layout config
// *************************************************
export const appConfig = {
  /// 1st layout
  componentsSet,
  links: {
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
  },
  layout: {
    colConfig: {
      colSize: 1,
    },
    "1.container": {
      "1.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 3,
          },
          "1.1.leftNavHeaderRow": {
            leftNavHeader: {
              colSize: 1,
              idx: "Home",
              label: "leftNavHeader",
              colStyle: { borderWidth: 1, height: "10vh" },
            },
          },
          "1.1.leftNavBodyRow": {
            leftNavBody: {
              colSize: 1,
              idx: "Home",
              label: "leftNavBody",
              colStyle: { borderWidth: 1, height: "90vh" },
            },
          },
        },
      },
      "1.2.bodyCol": {
        layout: {
          colConfig: {
            colSize: 11,
          },
          "1.2.1.bodyHeaderRow": {
            bodyHeader: {
              idx: "RandomPic",
              label: "bodyHeader",
              colStyle: { borderWidth: 1, height: "40vh", flex: 0.6 },
            },
            bodyHeader1: {
              idx: "Home",
              label: "bodyHeader1",
              colStyle: { borderWidth: 2, height: "8vh", flex: 0.4 },
            },
          },
          "1.2.2.bodyContentRow": {
            bodyContent: {
              colSize: 5,
              idx: "Home",
              label: "bodyContent",
              colStyle: { borderWidth: 3, height: "60vh", borderColor: "blue" },
            },
            bodyContent1: {
              colSize: 2,
              idx: "About",
              label: "bodyContent1",
              colStyle: { borderWidth: 3, borderColor: "red" },
            },
            bodyContent2: {
              colSize: 4,
              idx: "About",
              label: "bodyContent2",
              colStyle: { borderWidth: 4, borderColor: "black" },
            },
          },
        },
      },
    },
    "2.container": {
      footer: {
        colSize: 1,
        idx: "ActionComp",
        label: "footer",
        colStyle: { borderWidth: 4 },
      },
    },
  },
};

export const events = {
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig, setAppState) => {
      setAppState({
        bodyHeader: {
          ui: "About",
          props: { label: "bodyHeader" },
        },
        bodyContent: {
          ui: "RandomPic",
          props: { label: "bodyContent" },
        },
      });
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
