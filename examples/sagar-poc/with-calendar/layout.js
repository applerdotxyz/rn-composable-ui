/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { About } from "../../../src/components/src/About";
import { ActionComp } from "../../../src/components/src/ActionComp";
import { Comp5 } from "../../../src/components/src/Comp5";
import { Home } from "../../../src/components/src/Home";
import { RandomPic } from "../../../src/components/src/RandomPic";
import { Cal } from "../../../src/components/src/Cal";
import AgendaScroll from "../../../src/components/src/AgendaScroll";

import { JsonForm } from "../../../src/components/src/json-form/JsonForm";
import { styles, rowStyle } from "../../common";

// All component which will be rendered
export const componentsSet = {
  Comp5,
  ActionComp,
  Home,
  About,
  RandomPic,
  JsonForm,
  Cal,
  AgendaScroll,
};

// components section

export const routes = {};

routes.routeOne = {
  "1.container": {
    // col no
    "1.1.leftNavCol": {
      layout: {
        colConfig: {
          colStyle: { display: "none" },
        },
      },
    },
    "1.2.bodyCol": {
      layout: {
        colConfig: {
          colSize: 11,
        },
        "1.2.1.bodyHeaderRow": {
          rowConfig: {
            rowSize: 1,
            rowStyle: rowStyle,
          },
          bodyHeader: {
            colSize: 1,
            //   idx: "About",
            idx: "Cal",
            label: "bodyHeader",
            colStyle: {
              borderColor: "cyan",
              alignSelf: "center",
              borderWidth: 4,
              height: 700,
              backgroundColor: "skyblue",
            },
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
  links, // FIXME: links mess up the styling in dynamic page transitions. pls look at the fix
  layout: {
    // row no
    "1.container": {
      rowConfig: {
        rowSize: 1,
        rowStyle: rowStyle,
      },
      // col no
      "1.1.leftNavCol": {
        layout: {
          colConfig: {
            colSize: 3,
            colStyle: { backgroundColor: "grey" },
          },
          "1.1.leftNavHeaderRow": {
            // row no
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            leftNavHeader: {
              // col no
              colSize: 1,
              idx: "Home",
              label: "leftNavHeader",
              colStyle: {
                borderColor: "cyan",
                borderWidth: 4,
                height: 700,
                backgroundColor: "lightgreen",
              },
            },
          },
        },
      },
      "1.2.bodyCol": {
        rowConfig: {
          rowSize: 1,
          rowStyle: rowStyle,
        },
        layout: {
          colConfig: {
            colSize: 11,
            colStyle: {
              backgroundColor: "grey",
            },
          },
          "1.2.1.bodyHeaderRow": {
            rowConfig: {
              rowSize: 1,
              rowStyle: rowStyle,
            },
            bodyHeader: {
              // col no
              colSize: 1,
              //   idx: "About",
              idx: "AgendaScroll",
              label: "bodyHeader",
              colStyle: {
                borderColor: "cyan",
                alignSelf: "center",
                borderWidth: 4,
                height: 500,
                backgroundColor: "skyblue",
              },
            },
          },
        },
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
  //<label>-<element-id> : <handler>
  "leftNavHeader-btn-one": {
    // <event> :: <handler>
    onPress: (setLayoutConfig) => {
      setLayoutConfig(routes["routeOne"]);
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
